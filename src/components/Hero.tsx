import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactDialog from "./ContactDialog";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="pt-48 md:pt-52 min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Brand Text Content Only */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your Lead Generation with{" "}
              <span className="text-primary-light">AI-Powered</span> Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Stop chasing leads manually. Let our AI agents attract, capture, and nurture your prospects 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/ai-ready-score" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 w-full sm:w-auto">
                  <ArrowRight className="mr-2 h-5 w-5" /> Get Instant AI-Ready Score
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Chatbot Interface */}
          <div className="relative w-full max-w-[600px] mx-auto animate-slide-up">
            <div className="bg-[#1a1a2e] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="px-4 py-3 bg-[#13131f] border-b border-gray-800 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-[#2d2d3d] rounded-lg p-4 max-w-[80%]">
                  <p className="text-white">
                    👋 Hi! I'm your AI assistant. I can help you find your dream home or investment property. What type of property are you looking for?
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <input
                    type="text"
                    placeholder="Ask about properties..."
                    className="flex-1 bg-[#2d2d3d] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary hover:bg-primary-dark text-white px-6">
                    Send
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
      <ContactDialog 
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default Hero;
