
import { Check } from "lucide-react";

const WhatWeFix = () => {
  const solutions = [
    "Audit your current workflows",
    "Score each one by ROI and time drain",
    "Deliver a 90-day roadmap tailored to your business",
    "Build and deploy AI-powered workflows that save 30+ hours/month"
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            We Don't Just Automate. We Solve the Right Bottlenecks.
          </h2>
          
          <div className="grid gap-6 text-left max-w-2xl mx-auto">
            {solutions.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeFix;
