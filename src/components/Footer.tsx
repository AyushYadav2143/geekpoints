
import React from 'react';
import { useGlobal } from '@/contexts/GlobalContext';

const Footer: React.FC = () => {
  const { lastUpdated } = useGlobal();
  
  return (
    <footer className="w-full py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GeekPoints. All rights reserved.
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">
            {lastUpdated ? (
              <>Last updated: {lastUpdated.toLocaleTimeString()}</>
            ) : (
              <>Updating data...</>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
