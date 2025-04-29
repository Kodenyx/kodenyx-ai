
import React, { useEffect, useState, useRef } from "react";
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
  }
];

const LogoItem = ({ name, imageSrc }: LogoItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4">
      <img
        src={imageSrc}
        alt={`${name} logo`}
        className="h-10 w-auto max-w-[180px] object-contain hover:opacity-100 transition-opacity duration-300"
        style={{
          filter: "grayscale(100%)",
          opacity: 0.7,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}
      />
    </div>
  );
};

const AsSeenOn: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const isMobile = useIsMobile();
  const autoScrollRef = useRef<number | null>(null);
  
  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      window.clearInterval(autoScrollRef.current);
    }
    
    autoScrollRef.current = window.setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000);
  };

  useEffect(() => {
    if (api) {
      startAutoScroll();
    }
    
    return () => {
      if (autoScrollRef.current) {
        window.clearInterval(autoScrollRef.current);
      }
    };
  }, [api]);
  
  return (
    <section className="py-8 bg-secondary/5 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-sm uppercase tracking-wider text-primary/70 mb-6 font-medium">
          As Featured In
        </h3>
        
        <div className="relative overflow-hidden">
          <Carousel 
            className="w-full" 
            opts={{ 
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.concat(logos).concat(logos).map((logo, index) => (
                <CarouselItem 
                  key={index}
                  className={cn(
                    "pl-2 md:pl-4",
                    isMobile ? "basis-1/2" : "basis-1/3"
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
