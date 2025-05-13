
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

const logos = [
  {
    name: "NBC News",
    imageSrc: "/lovable-uploads/86270432-a17b-408e-a2f3-21cc9562fab1.png"
  },
  {
    name: "Fox 40",
    imageSrc: "/lovable-uploads/5617e93d-9a8e-4d9a-8e21-981ab3e0b538.png"
  },
  {
    name: "WSB-TV",
    imageSrc: "/lovable-uploads/9f0e91b0-b81e-424c-a5c9-42e5a2650073.png"
  },
  {
    name: "CNN",
    imageSrc: "/lovable-uploads/8d5b5c8b-b152-40ee-8eed-c89b3fcc4829.png"
  },
  {
    name: "Associated Press",
    imageSrc: "/lovable-uploads/06e680a3-5618-4b93-882e-0d912a4a5e12.png"
  },
  {
    name: "USA Today",
    imageSrc: "/lovable-uploads/0b47662b-2f6d-493f-a191-2d15c5d62393.png"
  },
  {
    name: "The Globe and Mail",
    imageSrc: "/lovable-uploads/85a321e4-04e9-4753-84f6-7d4822294311.png"
  },
  {
    name: "Google News",
    imageSrc: "/lovable-uploads/fb49d265-5923-468a-904c-fe770238e153.png"
  },
  {
    name: "Financial Post",
    imageSrc: "/lovable-uploads/f6af16ea-aece-4e54-ad5b-f8ffe21d5fb9.png"
  },
  {
    name: "MarketWatch",
    imageSrc: "/lovable-uploads/d5ace4db-b569-4f5e-8b94-386303913552.png"
  },
  {
    name: "National Post",
    imageSrc: "/lovable-uploads/8a7db869-0bfd-463e-84aa-db87bcf886e3.png"
  },
  {
    name: "Reuters",
    imageSrc: "/lovable-uploads/b063844f-8187-4896-8883-13ce45036a61.png"
  },
  {
    name: "Street Insider",
    imageSrc: "/lovable-uploads/dc4a69f6-6794-4e40-b6f1-d5e490f30b4f.png"
  },
  {
    name: "Yahoo Finance",
    imageSrc: "/lovable-uploads/dd244f54-851e-4f6b-9149-ce3d1a68e474.png"
  },
  {
    name: "Barchart",
    imageSrc: "/lovable-uploads/fee9a18d-f273-409f-a9e9-92ca32b1883d.png"
  },
  {
    name: "Benzinga",
    imageSrc: "/lovable-uploads/9122afee-2b60-4520-bb6b-c828af54cb01.png"
  },
  {
    name: "Business Insider",
    imageSrc: "/lovable-uploads/234ae182-d2f6-41ca-8b9c-108ae1267081.png"
  },
  {
    name: "Canoe.com",
    imageSrc: "/lovable-uploads/059d4fb8-49f0-4fb0-9f78-7ef5291376e4.png"
  },
  {
    name: "Dow Jones Factiva",
    imageSrc: "/lovable-uploads/6ec45d16-0e33-48a0-a746-bb802e4322d8.png"
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
          filter: "grayscale(70%)",
          opacity: 0.85,
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
        <h3 className="text-center text-lg uppercase tracking-wider text-gray-800 mb-6 font-semibold">
          As Featured In
        </h3>
        
        <div className="relative overflow-hidden bg-secondary/5 rounded-lg shadow-inner py-2">
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
              {logos.concat(logos).map((logo, index) => (
                <CarouselItem 
                  key={index}
                  className={cn(
                    "pl-2 md:pl-4",
                    isMobile ? "basis-1/3" : "basis-1/6"
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
