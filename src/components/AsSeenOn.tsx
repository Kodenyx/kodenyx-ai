
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
    imageSrc: "/lovable-uploads/fdec118f-82b9-4731-aa6f-18d5e3ddd8fd.png" // Using a placeholder, you'll need to upload actual logos
  },
  {
    name: "BoredSci",
    imageSrc: "/lovable-uploads/fa64d886-9a9b-42ae-969f-bb7501d24d8fc.png" // Using a placeholder, you'll need to upload actual logos
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
        className="h-10 w-auto max-w-[180px] object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-sm"
        style={{
          filter: "grayscale(100%)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
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
    <section className="py-12 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-6">
          As Featured In
        </h3>
        
        <div className="overflow-hidden">
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
