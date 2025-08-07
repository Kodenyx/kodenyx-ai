

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const GrowthPath = () => {
  const offers = [
    {
      title: "AI Audit",
      description: "We map your systems and deliver a 90-day roadmap that shows what to automate - and in what order.",
      link: "/ai-audit-b2b",
      cta: "Learn More",
      image: "/lovable-uploads/49d54cb6-4472-4e49-b78f-d3793aac28e5.png"
    },
    {
      title: "AI Automation Services (Implementation)",
      description: "Complete AI automation implementation across all your business processes including lead generation, nurturing, internal ops, and custom AI tools.",
      link: "/ai-automation-services",
      cta: "View All Services",
      image: "/lovable-uploads/33499c43-6dc8-41e8-b60f-6832a8f809e6.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              What's Slowing You Down?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From messy ops to zero leads - we solve high-impact bottlenecks with fast, done-for-you systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="bg-[#2A2F3E] text-white border-2 border-gray-700 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2A2F3E]/20"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{offer.description}</p>
                  <a 
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors">
                      {offer.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPath;

