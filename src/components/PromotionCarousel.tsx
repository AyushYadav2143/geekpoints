
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PromotionCard from '@/components/PromotionCard';

// Promotions data - this could come from an API or CMS in a real app
const promotions = [
  {
    id: 1,
    title: "Join Our Next Event!",
    content: "Don't miss our upcoming tech workshop where you can earn extra points and learn new skills. Register now to secure your spot!",
    imageUrl: "/lovable-uploads/a2024e8c-b0af-4517-97e6-c4fea12969ad.png",
    ctaText: "Learn More",
    ctaUrl: "#"
  },
  {
    id: 2,
    title: "Mentoring Program",
    content: "Become a mentor and earn up to 20 points while helping new members. Our mentoring program starts next month.",
    ctaText: "Sign Up",
    ctaUrl: "#"
  },
  {
    id: 3,
    title: "Community Challenge",
    content: "Participate in our quarterly coding challenge and win prizes! Earn between 15-30 points based on your performance.",
    ctaText: "View Challenge",
    ctaUrl: "#"
  }
];

const PromotionCarousel: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {promotions.map((promo) => (
          <CarouselItem key={promo.id} className="md:basis-full lg:basis-full">
            <div className="p-1">
              <PromotionCard
                title={promo.title}
                content={promo.content}
                imageUrl={promo.imageUrl}
                ctaText={promo.ctaText}
                ctaUrl={promo.ctaUrl}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative static mr-2 translate-y-0" />
        <CarouselNext className="relative static ml-2 translate-y-0" />
      </div>
    </Carousel>
  );
};

export default PromotionCarousel;
