
import React from 'react';
import Leaderboard from '@/components/Leaderboard';
import { useGlobal } from '@/contexts/GlobalContext';

const LeaderboardPage: React.FC = () => {
  const { members } = useGlobal();
  
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Check out how all members rank based on their total points.
        </p>
      </div>
      
      <div className="mb-6 flex flex-wrap justify-center gap-6">
        <div className="px-6 py-4 bg-card shadow-md rounded-lg flex flex-col items-center">
          <div className="text-lg text-muted-foreground">Total Members</div>
          <div className="text-4xl font-bold text-purple-600">{members.length}</div>
        </div>
        
        {members.length > 0 && (
          <div className="px-6 py-4 bg-card shadow-md rounded-lg flex flex-col items-center">
            <div className="text-lg text-muted-foreground">Top Score</div>
            <div className="text-4xl font-bold text-purple-600">
              {members[0]?.points || 0}
            </div>
          </div>
        )}
        
        {members.length > 0 && (
          <div className="px-6 py-4 bg-card shadow-md rounded-lg flex flex-col items-center">
            <div className="text-lg text-muted-foreground">Average Points</div>
            <div className="text-4xl font-bold text-purple-600">
              {Math.round(members.reduce((sum, member) => sum + member.points, 0) / members.length) || 0}
            </div>
          </div>
        )}
      </div>
      
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;
