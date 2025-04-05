
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, HelpCircle, Info, Award, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
              <li>Logistical Support (10 points)</li>
              <li>Club/Event Promotions (10-20 points)</li>
              <li>Mentoring new members (20 points)</li>
              <li>Club Representations (30 points)</li>
              <li>Handling External Relations (30 points)</li>
              <li>Recruiting new members (20 points)</li>
              <li>Event Management (40 points)</li>
              <li>Hosting Events/Leading (50 points)</li>
              <li>Managing Socials, Website, Club branding (10 points)</li>
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
      
      <div className="mb-12">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardTitle>Meet the Developers</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100">
                  <div className="w-full h-full flex items-center justify-center text-purple-600 text-4xl font-bold">
                    AG
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Aryan Gupta</h3>
                <p className="text-muted-foreground mb-4">Lead Developer</p>
                <p className="mb-4">Full-stack developer with expertise in React and Node.js. Passionate about creating tools that help communities thrive.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100">
                  <div className="w-full h-full flex items-center justify-center text-purple-600 text-4xl font-bold">
                    SD
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Shreya Dhir</h3>
                <p className="text-muted-foreground mb-4">UX Designer</p>
                <p className="mb-4">Designer focused on creating intuitive and accessible user experiences. Combining aesthetics with functionality.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-4">Have questions, suggestions, or need assistance? Reach out to our team.</p>
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                <a href="mailto:support@geekpoints.tech" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> support@geekpoints.tech
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
