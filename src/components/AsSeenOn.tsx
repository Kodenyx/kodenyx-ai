
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { removeBackground, loadImage } from "@/utils/imageUtils";

interface LogoItemProps {
  name: string;
  imageSrc: string;
  removeBackgroundFlag?: boolean;
}

const logos: LogoItemProps[] = [
  {
    name: "U.S. Insider",
    imageSrc: "/lovable-uploads/7ded63dd-39f9-42fe-9ee7-ba358e2e58f4.png",
    removeBackgroundFlag: true // Flag to remove background for this logo
  },
  {
    name: "Boardsi",
    imageSrc: "/lovable-uploads/c1cb9add-ab4b-4cf0-8b1c-a4391372a6ae.png"
  }
];

const LogoItem = ({ name, imageSrc, removeBackgroundFlag }: LogoItemProps) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string | null>(null);
  
  useEffect(() => {
    if (removeBackgroundFlag) {
      const processImage = async () => {
        try {
          const response = await fetch(imageSrc);
          const blob = await response.blob();
          const image = await loadImage(blob);
          const processedBlob = await removeBackground(image);
          const processedUrl = URL.createObjectURL(processedBlob);
          setProcessedImageSrc(processedUrl);
        } catch (error) {
          console.error("Error processing image:", error);
          // Fallback to original image if processing fails
          setProcessedImageSrc(null);
        }
      };
      processImage();
      
      // Cleanup
      return () => {
        if (processedImageSrc) {
          URL.revokeObjectURL(processedImageSrc);
        }
      };
    }
  }, [imageSrc, removeBackgroundFlag]);

  return (
    <div className="flex flex-col items-center justify-center px-8 py-4">
      <img
        src={processedImageSrc || imageSrc}
        alt={`${name} logo`}
        className="h-10 w-auto max-w-[180px] object-contain hover:opacity-100 transition-opacity duration-300"
        style={{
          opacity: 1,
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
    <section className="py-8 bg-white">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-sm uppercase tracking-wider text-[#1A1F2C] mb-6 font-bold">
          As Featured In
        </h3>
        
        <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-inner py-2">
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
                  <LogoItem 
                    name={logo.name} 
                    imageSrc={logo.imageSrc} 
                    removeBackgroundFlag={logo.removeBackgroundFlag} 
                  />
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
