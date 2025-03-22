
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";

const Newsletter = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Submitting data:', { name, email });
      const { data: response, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { name, email },
      });

      console.log('Response:', response);

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      toast({
        title: "Thanks for subscribing!",
        description: "You've been added to The AI-First CEO newsletter.",
      });

      // Reset form
      setName("");
      setEmail("");
    } catch (error: any) {
      console.error('Detailed error:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-[#1A1F2C] via-[#232838] to-[#101524] text-white">
        <div className="container mx-auto px-4 py-24 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-[#9b87f5]">AI-First</span> CEO
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              The AI-First CEO is a weekly newsletter for leaders who want to work less, close more, and scale smarter—using AI-powered automation to turn bottlenecks into breakthroughs.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Each issue delivers real strategies to automate sales, marketing & ops. Frameworks to save 10+ hours/week without hiring. Case studies and tools to grow without burnout.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16141f] shadow-lg rounded-lg p-8 max-w-xl mx-auto border border-gray-800 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name" 
                  required
                  className="bg-[#2d2d3d] border-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  required
                  className="bg-[#2d2d3d] border-gray-700 text-white"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-medium text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Join 200+ CEOs"}
              </Button>
            </form>
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-400">
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Newsletter;
