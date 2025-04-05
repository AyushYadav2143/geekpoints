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
              GeekPoints is the official point-tracking application of GeeksforGeeks LPU, developed to bring transparency and accountability within the organisation. The primary aim of this app is to ensure that every member's contribution is recognized and rewarded in a fair and systematic manner. Members can view their earned points, track task history, and monitor their growth, creating a transparent environment where hard work is visible and appreciated. At the same time, admins can assign points, manage tasks, and oversee member progress efficiently. With a clean modern interface and real-time updates, GeekPoints serves as a centralized platform that strengthens motivation, encourages participation, and builds a merit-based culture within the organisation.
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
              <li>Club/Event Promotions (10–20 points)</li>
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
                <p className="text-muted-foreground">Points are typically updated within 24–48 hours after an event or activity.</p>
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

      {/* Developer Section */}
      <div className="mb-12">
        <Card>
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            <CardTitle>Meet the Developers</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Ayush */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100">
                  <div className="w-full h-full flex items-center justify-center text-purple-600 text-4xl font-bold">
                    AY
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Ayush Yadav</h3>
                <p className="text-muted-foreground mb-4">Lead Developer</p>
                <p className="mb-4">
                  A skilled full-stack developer with expertise in React.js, Node.js, Java, and Python. Builds modern, scalable web applications with a focus on clean architecture and user-centric design. With a strong foundation in both frontend and backend development, driven by the goal of crafting innovative tech solutions that solve real-world problems.
                </p>
                <div className="flex gap-2">
                  <a href="https://github.com/AyushYadav2143" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon"><Github className="h-5 w-5" /></Button>
                  </a>
                  <a href="https://www.linkedin.com/in/4yushyadav/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon"><Linkedin className="h-5 w-5" /></Button>
                  </a>
                  <a href="mailto:ay2005154@gmail.com">
                    <Button variant="outline" size="icon"><Mail className="h-5 w-5" /></Button>
                  </a>
                </div>
              </div>

              {/* Aryaneel */}
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-purple-100">
                  <div className="w-full h-full flex items-center justify-center text-purple-600 text-4xl font-bold">
                    AS
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Aryaneel Shivam</h3>
                <p className="text-muted-foreground mb-4">Supervisor</p>
                <p className="mb-4">
                  AI-driven data analysis and quantitative finance, currently pursuing a BTech in Computer Science & Engineering. A published author, award-winning innovator, and technical specialist, he seamlessly blends technology, finance, and biomedical research. Driven by adaptability and passion, he is dedicated to shaping the future through being a multidisciplinary polymath.
                </p>
                <div className="flex gap-2">
                  <a href="https://github.com/aryaneelshivam" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon"><Github className="h-5 w-5" /></Button>
                  </a>
                    <Button variant="outline" size="icon"><Linkedin className="h-5 w-5" /></Button>
                  </a>
                  <a href="mailto:aryaneelshivam1234@gmail.com">
                    <Button variant="outline" size="icon"><Mail className="h-5 w-5" /></Button>
                  </a>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tech Support Section */}
      <div className="mb-12">
        <Card>
          <CardHeader className="flex flex-col items-center gap-2 text-center">
            <Mail className="h-6 w-6 text-purple-600" />
            <CardTitle>Need Help or Technical Support?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 max-w-xl mx-auto">
              If you're facing any technical issues or have general queries regarding the GeekPoints app,
              feel free to reach out. We’re here to help you!
            </p>
            <a
              href="mailto: geeksforgeekslpu.contact@gmail.com"
              className="inline-block px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Contact Tech Support
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;