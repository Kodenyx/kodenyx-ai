import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Users, Zap, Target } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const TrustedPartner = () => {
  const features = [
    "Unlimited workflow builds (based on roadmap)",
    "Ongoing support & team enablement", 
    "Monthly strategy reviews"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Scale Fast",
      description: "Accelerate your growth without adding headcount or internal complexity"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Get access to our specialized AI implementation experts"
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Regular strategy reviews keep you aligned with your business goals"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted Partner Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We become your AI implementation partner — managing roadmap delivery, building automations, and training your team.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 inline-block mb-8">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                $5,000/month
              </div>
              <div className="text-gray-400">
                Flat rate pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Partnership
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-8 text-center">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ideal For
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-xl md:text-2xl text-gray-800">
                Firms ready to scale fast without adding headcount
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Let's discuss how we can accelerate your AI implementation
            </p>
            <a 
              href="https://cal.com/aarti-anand82"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedPartner;