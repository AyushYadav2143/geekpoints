
import React from 'react';
import { useGlobal } from '@/contexts/GlobalContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps,
  Legend
} from 'recharts';
import { format, parseISO } from 'date-fns';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

interface PointsChartProps {
  memberId: string | null;
}

interface FormattedDataPoint {
  timestamp: string;
  points: number;
  formattedDate: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as FormattedDataPoint;
    return (
      <div className="bg-background border border-border p-2 rounded-md shadow-md">
        <p className="font-medium">{data.formattedDate}</p>
        <p className="text-purple-600 font-bold">{`Points: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const PointsChart: React.FC<PointsChartProps> = ({ memberId }) => {
  const { searchMember, isDarkMode } = useGlobal();
  
  const member = memberId ? searchMember(memberId) : undefined;
  
  // Format the history data for the chart
  const chartData = React.useMemo(() => {
    if (!member || !member.history || member.history.length === 0) {
      console.log("No member data or history found for chart");
      return [];
    }
    
    console.log("Processing chart data for member:", member.id, "with history entries:", member.history.length);
    
    return member.history.map(entry => {
      let parsedDate;
      try {
        parsedDate = parseISO(entry.timestamp);
        console.log("Parsed date:", parsedDate, "from timestamp:", entry.timestamp);
      } catch (e) {
        console.error("Error parsing date:", entry.timestamp, e);
        // If parsing fails, just use the original string
        return { 
          timestamp: entry.timestamp, 
          points: entry.points,
          formattedDate: entry.timestamp
        };
      }
      
      return { 
        timestamp: entry.timestamp, 
        points: entry.points,
        formattedDate: format(parsedDate, 'MMM dd, yyyy')
      };
    }).sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
  }, [member]);

  // Colors for the chart based on theme
  const chartColors = {
    grid: isDarkMode ? '#333' : '#ddd',
    text: isDarkMode ? '#ccc' : '#666',
    line: '#7c3aed',
    dot: '#7c3aed',
  };

  if (!member || chartData.length === 0) {
    return (
      <Card className="w-full min-h-[300px]">
        <CardHeader>
          <CardTitle>Points Progress</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-[300px]">
          <p className="text-muted-foreground">No data available</p>
          <p className="text-sm text-muted-foreground mt-2">Enter a member ID to view their points history</p>
        </CardContent>
      </Card>
    );
  }

  console.log("Rendering chart with data:", chartData);

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="pb-0">
        <CardTitle>Points Progress for {member.name}</CardTitle>
        <p className="text-muted-foreground text-sm">Track your points over time</p>
      </CardHeader>
      <CardContent className="h-[300px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 30
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            <XAxis 
              dataKey="formattedDate" 
              tick={{ fill: chartColors.text, fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={60}
              tickMargin={15}
            />
            <YAxis 
              tick={{ fill: chartColors.text }} 
              domain={[0, 'dataMax + 10']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              name="Points"
              type="monotone"
              dataKey="points"
              stroke={chartColors.line}
              strokeWidth={2}
              dot={{ fill: chartColors.dot, r: 4 }}
              activeDot={{ r: 6, fill: "#9333ea" }}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PointsChart;
