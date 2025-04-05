
import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'sonner';
import Papa from 'papaparse';

// Define types for our member data
export interface Member {
  id: string;
  name: string;
  points: number;
  rank: number;
  history: PointHistory[];
}

export interface PointHistory {
  timestamp: string;
  points: number;
}

interface GlobalContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  members: Member[];
  loading: boolean;
  error: string | null;
  searchMember: (id: string) => Member | undefined;
  lastUpdated: Date | null;
}

const GlobalContext = createContext<GlobalContextType>({
  isDarkMode: true,
  toggleDarkMode: () => {},
  members: [],
  loading: false,
  error: null,
  searchMember: () => undefined,
  lastUpdated: null,
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1QzCf50fDwDNWXJ7syFnVbe6RWChQsFBL/export?format=csv&gid=841653451';
const REFRESH_INTERVAL = 30000; // 30 seconds

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Data state
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(newMode));
  };

  // Search for a member by ID
  const searchMember = (id: string): Member | undefined => {
    return members.find(member => member.id === id);
  };

  // Process the CSV data
  const processData = (data: any[]) => {
    if (!data || !data.length) return [];

    // Assuming the CSV has columns: id, name, points, history (timestamp:points,timestamp:points)
    const processed = data.map((row) => {
      const history: PointHistory[] = row.history 
        ? row.history.split(',').map((item: string) => {
            const [timestamp, points] = item.split(':');
            return {
              timestamp,
              points: Number(points)
            };
          })
        : [];

      return {
        id: row.id || "",
        name: row.name || "Unknown",
        points: Number(row.points) || 0,
        history
      };
    });

    // Sort by points (highest first) and assign ranks
    return processed
      .sort((a, b) => b.points - a.points)
      .map((member, index) => ({ ...member, rank: index + 1 }));
  };

  // Fetch data from the Google Sheet
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(SHEET_URL);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      
      const csvText = await response.text();
      
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          const processedData = processData(results.data as any[]);
          setMembers(processedData);
          setLastUpdated(new Date());
          setLoading(false);
        },
        error: (error) => {
          console.error("CSV parsing error:", error);
          setError("Error parsing data");
          setLoading(false);
          toast.error("Failed to parse data");
        }
      });
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
      toast.error("Failed to fetch data");
    }
  };

  // Initialize data and theme
  useEffect(() => {
    // Set theme from localStorage or default to dark
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDarkMode = savedDarkMode !== null 
      ? savedDarkMode === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(prefersDarkMode);
    
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Initial data fetch
    fetchData();
    
    // Set up automatic refresh
    const intervalId = setInterval(() => {
      fetchData();
    }, REFRESH_INTERVAL);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <GlobalContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      members,
      loading,
      error,
      searchMember,
      lastUpdated
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
