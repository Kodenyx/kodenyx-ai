
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
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      title: "AI Automation Services (Implementation)",
      description: "Complete AI automation implementation across all your business processes",
      subcategories: [
        {
          title: "Lead Gen",
          items: [
            {
              title: "Cold Email Automation",
              description: "We build the list, write the copy, and automate outbound so your calendar fills itself.",
              link: "/cold-email-automation-offer",
              cta: "See How It Works"
            }
          ]
        },
        {
          title: "Lead Nurture via AI Agents/Chat",
          items: [
            {
              title: "AI Chat Agents",
              description: "24/7 AI-powered chat agents that qualify leads and book meetings automatically.",
              link: "/ai-chat-agents",
              cta: "View Details"
            }
          ]
        },
        {
          title: "Internal Ops",
          items: [
            {
              title: "Trusted Partner Program",
              description: "We automate onboarding, follow-ups, capacity planning, and more to save 30+ hours/month.",
              link: "/trusted-ai-partner",
              cta: "View Program Details"
            }
          ]
        },
        {
          title: "AI-Powered Tools Lead Magnets",
          items: [
            {
              title: "Custom AI Tools",
              description: "Interactive AI-powered lead magnets that capture and qualify prospects automatically.",
              link: "/ai-tools-lead-magnets",
              cta: "Explore Tools"
            }
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
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
              <Card key={index} className="bg-secondary text-white border-2 border-gray-800 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/20"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                  
                  {/* Simple service - just description and CTA */}
                  {!offer.subcategories && (
                    <>
                      <p className="text-gray-300 mb-6 leading-relaxed">{offer.description}</p>
                      <a 
                        href={offer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black bg-transparent">
                          {offer.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </>
                  )}

                  {/* Service with subcategories */}
                  {offer.subcategories && (
                    <>
                      <p className="text-gray-300 mb-6 leading-relaxed">{offer.description}</p>
                      <div className="space-y-6">
                        {offer.subcategories.map((subcategory, subIndex) => (
                          <div key={subIndex} className="border-l-2 border-primary pl-4">
                            <h4 className="text-lg font-semibold text-primary mb-3">{subcategory.title}</h4>
                            <div className="space-y-4">
                              {subcategory.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="bg-gray-800/30 p-4 rounded-lg">
                                  <h5 className="text-white font-medium mb-2">{item.title}</h5>
                                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                                  <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
                                      {item.cta} <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
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
