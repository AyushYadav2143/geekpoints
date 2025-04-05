
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone } from 'lucide-react';

interface PromotionCardProps {
  title: string;
  content: string;
  imageUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ 
  title, 
  content, 
  imageUrl, 
  ctaText, 
  ctaUrl 
}) => {
  return (
    <Card className="w-full overflow-hidden border-purple-200 dark:border-purple-900">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5" />
          <CardTitle>Geeks for Geeks LpU chapter.</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {imageUrl && (
          <div className="relative w-full mb-4 overflow-hidden rounded-md aspect-[16/9] animate-float">
            <img 
              src="/lovable-uploads/banner1.jpeg"
              alt="Promotion image" 
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <p className="mb-4">{content}</p>
        {ctaText && ctaUrl && (
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
          >
            {ctaText}
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default PromotionCard;
