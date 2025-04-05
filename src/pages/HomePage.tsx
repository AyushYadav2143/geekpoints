
import React, { useState } from 'react';
import MemberSearch from '@/components/MemberSearch';
import MemberCard from '@/components/MemberCard';
import PointsChart from '@/components/PointsChart';
import PromotionCard from '@/components/PromotionCard';

const HomePage: React.FC = () => {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GeekPoints</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Track your points, view your rank, and see how you compare to other members.
        </p>
      </div>
      
      <MemberSearch onMemberFound={(id) => setSelectedMemberId(id)} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <MemberCard memberId={selectedMemberId} />
        </div>
        <div className="md:col-span-2">
          <PointsChart memberId={selectedMemberId} />
        </div>
      </div>
      
      <div className="mb-8">
        <PromotionCard 
          title="Join Our Next Event!"
          content="Don't miss our upcoming tech workshop where you can earn extra points and learn new skills. Register now to secure your spot!"
          imageUrl="/lovable-uploads/a2024e8c-b0af-4517-97e6-c4fea12969ad.png"
          ctaText="Learn More"
          ctaUrl="#"
        />
      </div>
    </div>
  );
};

export default HomePage;
