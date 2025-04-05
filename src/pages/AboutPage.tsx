
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PromotionCard from '@/components/PromotionCard';
import { AlertTriangle, HelpCircle, Info, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About GeekPoints</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how our point system works and how to earn more points.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Info className="h-5 w-5 text-purple-600" />
            <CardTitle>What are GeekPoints?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              GeekPoints is a comprehensive point tracking system designed to recognize and reward member contributions, 
              participation, and achievements within our tech community. Points are awarded for various activities 
              including event attendance, project contributions, community support, and more.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Award className="h-5 w-5 text-purple-600" />
            <CardTitle>How to Earn Points</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Attend club meetings and events (5-10 points)</li>
              <li>Complete challenge projects (15-30 points)</li>
              <li>Help fellow members with problems (5-20 points)</li>
              <li>Present workshops or talks (25-50 points)</li>
              <li>Contribute to club-sponsored open source projects (10-40 points)</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <HelpCircle className="h-5 w-5 text-purple-600" />
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">How often are points updated?</h3>
                <p className="text-muted-foreground">Points are typically updated within 24-48 hours after an event or activity.</p>
              </div>
              <div>
                <h3 className="font-medium">What rewards can I earn with points?</h3>
                <p className="text-muted-foreground">Points can be redeemed for club merchandise, priority registration for special events, and exclusive workshop access.</p>
              </div>
              <div>
                <h3 className="font-medium">Can I transfer my points to someone else?</h3>
                <p className="text-muted-foreground">Points are non-transferable and tied to your unique membership ID.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-purple-600" />
            <CardTitle>Point Disputes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you believe there's an error in your point total, please contact the club administrator with details
              about the missing or incorrect points. Include your member ID, the event or activity in question, 
              and any supporting documentation. Disputes are typically resolved within 5 business days.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <PromotionCard 
          title="Become a GeekPoints Champion"
          content="Take your membership to the next level! Members with over 500 points qualify for our exclusive champion program with additional perks and networking opportunities."
          ctaText="Learn More"
          ctaUrl="#"
        />
      </div>
    </div>
  );
};

export default AboutPage;
