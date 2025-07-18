
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const GrowthPath = () => {
  const offers = [
    {
      title: "AI Audit",
      description: "We map your systems and deliver a 90-day roadmap that shows what to automate — and in what order.",
      link: "/ai-audit-b2b",
      cta: "Learn More"
    },
    {
      title: "Cold Email Automation",
      description: "We build the list, write the copy, and automate outbound so your calendar fills itself.",
      link: "/cold-email-automation-offer",
      cta: "See How It Works"
    },
    {
      title: "Trusted Partner Program",
      description: "We automate onboarding, follow-ups, capacity planning, and more to save 30+ hours/month.",
      link: "/trusted-ai-partner",
      cta: "View Program Details"
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
              From messy ops to zero leads — we solve high-impact bottlenecks with fast, done-for-you systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="bg-black text-white border-2 border-gray-800 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{offer.description}</p>
                  <a 
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black">
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
