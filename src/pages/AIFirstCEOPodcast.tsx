
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import SimpleNavbar from "@/components/SimpleNavbar";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Play } from "lucide-react";

const AIFirstCEOPodcast = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { name: "", email },
      });

      if (error) {
        throw new Error(error.message || 'Error subscribing to newsletter');
      }

      toast({
        title: "Thanks for subscribing!",
        description: "You've been added to our newsletter list.",
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (error: any) {
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
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/95 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 animate-fade-in">
              <p className="text-lg md:text-xl text-primary-light font-medium uppercase tracking-wide">
                You built the business. Now it's time to stop being the bottleneck.
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                The <span className="text-primary-light">AI-First</span> CEO Show
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                Where modern founders learn to scale with leverage - not labor
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://podcasts.apple.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" /> Listen on Apple Podcasts
                  </Button>
                </a>
                <a 
                  href="https://open.spotify.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary text-lg px-8 w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" /> Subscribe on Spotify
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Podcast Cover Art */}
            <div className="relative w-full max-w-[500px] mx-auto animate-slide-up">
              <div className="aspect-square rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                <img 
                  src="/lovable-uploads/8f1d4cc2-2367-49c3-a33a-1d192fb0dfb3.png" 
                  alt="The AI-First CEO Podcast with Aarti Anand" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Latest Episodes</h2>
          
          {/* Spotify Embed */}
          <div className="max-w-4xl mx-auto flex justify-center">
            <iframe 
              style={{borderRadius:"12px"}} 
              src="https://open.spotify.com/embed/episode/6Rvud7R4KidgjdStwia5re/video?utm_source=generator" 
              width="624" 
              height="351" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-20 bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-secondary">About the Podcast</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This show is for founders who want to stop doing it all — and start building a business that runs without them. 
            Hosted by Aarti Anand, each episode dives into the workflows, mindsets, and automation strategies behind calm, 
            AI-first leadership.
          </p>
        </div>
      </section>

      {/* About the Host */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Host Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/fcca60d0-7306-429e-8236-14b745cb7b55.png" 
                  alt="Aarti Anand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Host Bio */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-secondary">About the Host</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aarti Anand is the founder of Kodenyx AI. She helps companies escape burnout and scale with systems, 
                automation, and AI-first thinking. This podcast is where she shares what's actually working — in real 
                businesses, with real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Want insights from the show delivered to your inbox?</h2>
          
          {!isSubscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                required
                className="bg-white/10 text-white placeholder:text-gray-400 text-lg py-6"
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          ) : (
            <div className="bg-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-lg">You've successfully subscribed to The AI-First CEO newsletter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AIFirstCEOPodcast;
