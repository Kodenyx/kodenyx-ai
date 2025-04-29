
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

interface LogoItemProps {
  name: string;
  imageSrc: string;
}

const logos: LogoItemProps[] = [
  {
    name: "U.S. Insider",
    imageSrc: "/lovable-uploads/fdec118f-82b9-4731-aa6f-18d5e3ddd8fd.png"
  },
  {
    name: "BoredSci",
    imageSrc: "/lovable-uploads/fa64d886-9a9b-42ae-969f-bb7501d24d8fc.png"
  },
  // Duplicating logos to create the illusion of an infinite loop
  {
    name: "U.S. Insider",
    imageSrc: "/lovable-uploads/fdec118f-82b9-4731-aa6f-18d5e3ddd8fd.png"
  },
  {
    name: "BoredSci",
    imageSrc: "/lovable-uploads/fa64d886-9a9b-42ae-969f-bb7501d24d8fc.png"
  }
];

const LogoItem = ({ name, imageSrc }: LogoItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4">
      <img
        src={imageSrc}
        alt={`${name} logo`}
        className="h-10 w-auto max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        style={{
          filter: "grayscale(100%)",
          boxShadow: "0 1px 3px rgba(155, 135, 245, 0.2)"
        }}
      />
    </div>
  );
};

const AsSeenOn: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const scrollContent = () => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scrollContent, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-10 bg-gradient-to-r from-[#f8f9fa] to-[#f0f2f5] dark:from-secondary/5 dark:to-secondary/10">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-sm uppercase tracking-wider text-primary/80 mb-6 font-medium">
          As Featured In
        </h3>
        
        <div className="overflow-hidden rounded-lg bg-white/60 dark:bg-black/5 shadow-sm backdrop-blur-sm p-2">
          <Carousel 
            className="w-full" 
            opts={{ 
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.map((logo, index) => (
                <CarouselItem 
                  key={index}
                  className={cn(
                    "pl-2 md:pl-4",
                    isMobile ? "basis-1/2" : "basis-1/4"
                  )}
                >
                  <LogoItem name={logo.name} imageSrc={logo.imageSrc} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
