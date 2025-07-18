
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewHero = () => {
  return (
    <div className="pt-32 md:pt-36 min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/20 rounded-full px-4 py-2 text-base text-primary-light font-medium inline-block mb-6">
            Most AI advice is just noise.
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            We Don't Start With AI.{" "}
            <span className="text-primary-light">We Start With What's Broken.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            We audit your workflows, score them by ROI, and build AI systems that eliminate busywork, unlock margin, and give you confidence your business can run without you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/ai-audit-b2b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 w-full sm:w-auto">
                <ArrowRight className="mr-2 h-5 w-5" /> Start with an AI Audit
              </Button>
            </a>
            <p className="text-sm text-gray-400 max-w-xs">
              Clarity on what to automate - and what to ignore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
