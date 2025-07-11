
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Let's Build the System That Buys Back Your Time
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            In 4 weeks, you'll know exactly what to automate — and why. And we'll build it for you.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="/ai-audit-b2b" 
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white shadow-xl">
                Book Your AI Audit
              </Button>
            </a>
            <p className="text-sm text-gray-600 max-w-xs">
              Done-for-you. ROI-first. Built to scale with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
