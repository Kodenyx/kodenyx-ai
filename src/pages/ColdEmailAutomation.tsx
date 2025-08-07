
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Calendar, Target, Shield, Zap, ArrowRight } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const ColdEmailAutomation = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const features = [
    "Setup domains and email boxes for you",
    "All warmed up for 21 days so won't end up in spam",
    "Scrape leads off platforms that target your offer and ICP",
    "Lead enrichment",
    "Personalize emails via AI",
    "Draft copy for each email",
    "System runs on autopilot",
    "Only manual task: drop leads in Google folder once a month"
  ];

  return (
    <div className="min-h-screen">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Cold Email Automation That Books Qualified Calls
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              We build the system, write the copy, and handle the automation. Your only job? Drop leads in a Google folder once a month.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Complete cold email system setup with AI personalization and autopilot operation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to See How It Works?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get the full walkthrough and see sample results
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-gray-300"
                required
              />
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Zap className="mr-2 h-4 w-4" />
                Get Details
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              What We Handle For You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-white/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-black">
              Simple 3-Step Process
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    1
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-black">We Build Your System</h3>
                  <p className="text-gray-700 text-lg">
                    Complete setup including domains, email boxes, warming, lead scraping, AI personalization, and copy creation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    2
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-black">System Runs on Autopilot</h3>
                  <p className="text-gray-700 text-lg">
                    Everything operates automatically. Your only task: drop leads in a Google folder once per month.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    3
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-black">Qualified Calls Get Booked</h3>
                  <p className="text-gray-700 text-lg">
                    Prospects respond to personalized outreach and book directly to your calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Risk-Free Investment
            </h2>
            
            <Card className="border-2 border-primary bg-white/5 mb-8">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Setup Investment</h3>
                    <p className="text-lg text-white/90 mb-2">Paid upfront: <span className="text-primary font-bold">$997</span></p>
                    <p className="text-white/80">We build and launch your complete system</p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Performance Payment</h3>
                    <p className="text-lg text-white/90 mb-2">If we deliver 10 qualified appointments in under 60 days:</p>
                    <p className="text-lg text-white/90 mb-2">You pay the remaining: <span className="text-primary font-bold">$2,000</span></p>
                    <p className="text-white/80">Total investment: $2,997</p>
                  </div>
                  
                  <div className="bg-primary/20 border border-primary/30 rounded-lg p-6">
                    <Shield className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold text-white mb-2">100% Risk-Free Guarantee</h3>
                    <p className="text-white/90">
                      If we don't deliver 10 qualified appointments in 60 days — no payment, no pressure. 
                      <span className="font-bold"> We refund your entire upfront payment.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Ready to Fill Your Calendar?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's build your cold email system that works while you sleep
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/aarti-anand82" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Button>
              </a>
              <Button variant="outline" size="lg" className="text-black border-gray-300 hover:bg-gray-50 hover:text-black text-lg px-8 py-4">
                <Mail className="mr-2 h-5 w-5" />
                Get More Details
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColdEmailAutomation;
