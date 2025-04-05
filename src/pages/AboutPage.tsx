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
              and any supporting documentation. Disputes are typically resolved within 5 business days.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-12">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardTitle>Meet the Developers</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100">
                  <div className="w-full h-full flex items-center justify-center text-purple-600 text-4xl font-bold">
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">Lead Developer</p>
                <div className="flex gap-2">
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100">
                  <div className="w-full h-full flex items-center justify-center text-purple-600 text-4xl font-bold">
                  </div>
                </div>
                <div className="flex gap-2">
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

