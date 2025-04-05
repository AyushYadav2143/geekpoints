
import React from 'react';
import { useGlobal, Member } from '@/contexts/GlobalContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

interface MemberCardProps {
  memberId: string | null;
}

const MemberCard: React.FC<MemberCardProps> = ({ memberId }) => {
  const { searchMember } = useGlobal();
  
  const member = memberId ? searchMember(memberId) : undefined;
  
  if (!member) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Member Info</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <User className="h-24 w-24 mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">
            Enter your registration number to view your information
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full animate-scale-in">
      <CardHeader className="pb-2">
        <CardTitle>Member Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900">
            <User className="h-8 w-8 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-muted-foreground">{member.id}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-secondary rounded-lg">
            <p className="text-muted-foreground text-sm">Total Points</p>
            <p className="text-2xl font-bold text-purple-600">{member.points}</p>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <p className="text-muted-foreground text-sm">Current Rank</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">#{member.rank}</p>
              <Badge variant={member.rank <= 3 ? "default" : "outline"} className={member.rank <= 3 ? "bg-purple-600" : ""}>
                {member.rank <= 3 ? "Top " + member.rank : "Rank"}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
