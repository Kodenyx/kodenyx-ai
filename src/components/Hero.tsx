import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-primary/5">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
            Attract & Nurture Leads on Autopilot
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your marketing with AI-powered automation. Generate more leads, close more deals, and scale your business effortlessly.
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;