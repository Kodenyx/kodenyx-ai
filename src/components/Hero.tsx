import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/95 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your Lead Generation with{" "}
            <span className="text-primary">AI-Powered</span> Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Stop chasing leads manually. Let our intelligent platform attract, capture, and nurture your prospects 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;