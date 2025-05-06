
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Check, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const AIReadinessWorkshop = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const location = useLocation();

  // Process URL parameters when the page loads (for Stripe redirect)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const success = queryParams.get("success");
    const sessionId = queryParams.get("session_id");
    
    if (success === "true" && sessionId) {
      // Complete registration after successful payment
      completeRegistration(sessionId);
    } else if (success === "true") {
      // Handle success without session ID (unlikely but possible)
      toast({
        title: "Payment successful!",
        description: "Your registration is being processed.",
      });
    } else if (queryParams.get("canceled") === "true") {
      toast({
        title: "Registration canceled",
        description: "You can try again when you're ready.",
        variant: "destructive",
      });
    }
  }, [location.search]);

  // Complete registration after Stripe checkout
  const completeRegistration = async (sessionId) => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke('workshop-registration', {
        body: { sessionId },
      });
      
      if (error) {
        throw new Error(error.message || 'Error completing workshop registration');
      }

      toast({
        title: "Registration successful!",
        description: "We've reserved your spot for the AI Readiness Workshop. Check your email for details.",
      });

      setIsRegistered(true);
    } catch (error) {
      console.error('Registration completion error:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Starting registration process for:', { name, email, company });
      
      // Use the Stripe checkout function to create a checkout session
      const { data, error } = await supabase.functions.invoke('workshop-checkout', {
        body: { name, email, company },
      });
      
      console.log('Checkout response:', data, error);

      if (error) {
        throw new Error(error.message || 'Error creating checkout session');
      }

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error: any) {
      console.error('Detailed error:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar />
      
      {/* Updated Hero Section */}
      <section className="pt-20 px-4 bg-gradient-to-br from-secondary to-secondary/95 text-white">
        <div className="container mx-auto py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-wider text-sm font-medium text-primary-light mb-3 animate-fade-in">
              Feeling Behind on AI? You're Not Alone.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              AI Readiness Workshop: Cut Through the Noise and Find Your First 3 AI Wins
            </h1>
            <p className="text-lg text-gray-300 mb-8 mx-auto max-w-2xl animate-fade-in" style={{ animationDelay: "100ms" }}>
              In just 90 minutes, you'll walk away with clarity, confidence, and a personalized AI game plan — no tech skills required, no hype, just real applications that can save time, cut costs, and future-proof your business in 2025.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 transition-all duration-300 animate-fade-in hover:shadow-lg hover:scale-[1.02]"
              style={{ animationDelay: "200ms" }}
              onClick={() => {
                const element = document.getElementById('register');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Claim My Spot — Limited Seats Available <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Trust Row with Updated Number: 50+ → 100+ */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-light" />
                <span>Trusted by 100+ founders across B2B and service businesses</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-light" />
                <span>As featured in <em>U.S. Insider</em> & <em>BoredSci</em></span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-light" />
                <span>"This was the most clarity I've had on AI in months."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-secondary text-center">Who This Is For</h2>
            <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-lg rounded-lg p-8 border border-[#E0DDFF]">
              <p className="text-lg mb-6 text-gray-700">
                This workshop is designed specifically for founders, B2B business owners, and service providers who:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-gray-800">Feel overwhelmed by AI but don't want to fall behind competitors</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-gray-800">Are spending too much time on manual tasks that should be automated</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-gray-800">Want to understand how AI applies to their specific workflows and business processes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-gray-800">Need clarity on where to start with AI implementation that delivers immediate ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">What You'll Learn in the Workshop</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Where AI Fits In Your Business</h3>
                <p className="text-gray-700">Discover practical applications of AI in marketing, sales, and operations that can be implemented immediately.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Top 3 AI Myths Debunked</h3>
                <p className="text-gray-700">Cut through the hype and understand what's really possible with AI in small-to-medium businesses today.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary">AI Readiness Assessment</h3>
                <p className="text-gray-700">Complete a self-assessment scorecard to determine where your business stands on the AI readiness spectrum.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Practical Next Steps</h3>
                <p className="text-gray-700">Get a clear action plan for moving forward with AI—even if you're not quite ready to fully automate yet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">What You'll Walk Away With</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Your AI Readiness Score</h3>
                  <p className="text-gray-700">Discover if you're an Explorer (just starting), Builder (ready to implement), or Optimizer (enhancing existing AI)—with tailored recommendations for each stage.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">3 AI Implementation Ideas</h3>
                  <p className="text-gray-700">Walk away with 3 concrete ideas for where AI could immediately save time in your specific business, tailored to your industry and workflow.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Clear Next Steps</h3>
                  <p className="text-gray-700">A personalized roadmap for whether to DIY your AI implementation or book a deeper AI Audit for more comprehensive transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Host Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-secondary text-center">About Your Host</h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-primary shadow-xl shrink-0">
                <img 
                  src="/lovable-uploads/fcca60d0-7306-429e-8236-14b745cb7b55.png" 
                  alt="Aarti Anand" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-secondary">Aarti Anand</h3>
                <p className="text-gray-700 mb-4">
                  Founder of Kodenyx AI, Aarti helps business owners automate their workflows smarter and reclaim valuable time without burning out. With over a decade of experience in digital transformation, Aarti specializes in making AI practical, accessible, and immediately valuable for small-to-medium businesses.
                </p>
                <p className="text-gray-700">
                  Through the AI-First CEO newsletter and personalized consulting, she's helped dozens of business owners implement AI solutions that deliver measurable ROI and create sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-16 md:py-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Reserve Your Spot</h2>
              <p className="text-xl text-gray-300 mt-4">
                90 minutes. No tech skills required. Just clarity.
              </p>
              <div className="mt-4 inline-block px-4 py-2 bg-primary/20 rounded-lg text-white">
                <span className="font-semibold">Workshop Fee:</span> $397
              </div>
            </div>
            
            {!isRegistered ? (
              <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Name
                    </label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name" 
                      required
                      className="border-[#E0DDFF] text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com" 
                      required
                      className="border-[#E0DDFF] text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                      Company
                    </label>
                    <Input 
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company name" 
                      required
                      className="border-[#E0DDFF] text-gray-800"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium text-lg py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Secure My Spot - Pay Now"}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Secure transaction. You'll be taken to Stripe to complete your payment.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">You're In!</h3>
                <p className="text-lg mb-6 text-gray-700">
                  Thank you for registering for the AI Readiness Workshop. Check your email for further details about the workshop.
                </p>
                <Button 
                  onClick={() => setIsRegistered(false)}
                  className="bg-primary hover:bg-primary-dark text-white font-medium"
                >
                  Register Another Person
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIReadinessWorkshop;
