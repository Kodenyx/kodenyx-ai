
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import SimpleNavbar from "@/components/SimpleNavbar";
import { supabase } from "@/integrations/supabase/client";

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
      
      // Use the Supabase client to invoke the edge function
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { name, email },
      });
      
      console.log('Response data:', data);
      
      if (error) {
        throw new Error(error.message || 'Error subscribing to newsletter');
      }

      toast({
        title: "Thanks for subscribing!",
        description: data?.message || "You've been added to The AI-First CEO newsletter.",
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
      <SimpleNavbar />
      <main className="flex-1 bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD] text-gray-800">
        <div className="container mx-auto px-4 py-32 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/6e08bf04-9c3f-4db8-ad56-dcc8ea694a1c.png" 
                  alt="Aarti Anand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-[#9b87f5]">AI-First</span> CEO
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              The AI-First CEO is the newsletter for founders and CEOs who are done wasting time on what should already be automated.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Each issue delivers real strategies to automate sales, marketing & ops. Frameworks to save 10+ hours/week without hiring. Case studies and tools to grow without burnout.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-lg rounded-lg p-8 max-w-xl mx-auto border border-[#E0DDFF] animate-fade-in">
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
                  className="bg-white border-[#E0DDFF] text-gray-800"
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
                  className="bg-white border-[#E0DDFF] text-gray-800"
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
          
          <div className="mt-12 text-center text-sm text-gray-600">
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Newsletter;
