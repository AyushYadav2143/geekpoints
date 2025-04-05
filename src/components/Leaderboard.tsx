
import React, { useState } from 'react';
import { useGlobal } from '@/contexts/GlobalContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Search, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Leaderboard: React.FC = () => {
  const { members, loading } = useGlobal();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter members based on search term
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Get trophy colors for top 3 ranks
  const getTrophyColor = (rank: number): string => {
    switch (rank) {
      case 1: return 'text-yellow-500';
      case 2: return 'text-gray-400';
      case 3: return 'text-amber-700';
      default: return 'text-foreground';
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <CardTitle>Leaderboard</CardTitle>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-8"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-pulse text-center">
              <p className="text-muted-foreground">Loading leaderboard data...</p>
            </div>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No members found</p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead>Member</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id} className="hover-grow">
                    <TableCell className="text-center font-medium">
                      {member.rank <= 3 ? (
                        <Trophy className={`h-5 w-5 mx-auto ${getTrophyColor(member.rank)}`} />
                      ) : (
                        <span>{member.rank}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>
                        <span className="font-medium">{member.name}</span>
                        <br />
                        <span className="text-xs text-muted-foreground">{member.id}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant={member.rank <= 3 ? "default" : "outline"} className={member.rank <= 3 ? "bg-purple-600" : ""}>
                        {member.points} pts
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
