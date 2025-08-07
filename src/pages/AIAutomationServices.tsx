
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const AIAutomationServices = () => {
  const services = [
    {
      title: "Lead Gen",
      items: [
        {
          title: "Cold Email Automation",
          description: "We build the list, write the copy, and automate outbound so your calendar fills itself.",
          link: "/cold-email-automation",
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
  ];

  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Automation Services (Implementation)
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Complete AI automation implementation across all your business processes
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className="border-l-4 border-primary pl-8">
                  <h2 className="text-3xl font-bold text-black mb-8">{service.title}</h2>
                  <div className="grid md:grid-cols-1 gap-6">
                    {service.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed text-lg">{item.description}</p>
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                              {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationServices;
