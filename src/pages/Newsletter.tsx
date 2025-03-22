
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";

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
      <main className="flex-1 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-24 max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
              <Mail size={32} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The AI-First CEO</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The AI-First CEO is a weekly newsletter for leaders who want to work less, close more, and scale smarter—using AI-powered automation to turn bottlenecks into breakthroughs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Each issue delivers real strategies to automate sales, marketing & ops. Frameworks to save 10+ hours/week without hiring. Case studies and tools to grow without burnout.
            </p>
          </div>

          <div className="bg-card shadow-lg rounded-lg p-8 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Join 200+ CEOs"}
              </Button>
            </form>
          </div>
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Newsletter;
