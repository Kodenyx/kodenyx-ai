
import { Check } from "lucide-react";

const WhyKodenyx = () => {
  const reasons = [
    "Done-for-you builds",
    "Audit-led strategy", 
    "ROI-first systems",
    "No extra headcount required"
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            We're Not Here to Sell You Tools. We're Here to Build Your Leverage.
          </h2>
          
          <div className="grid gap-6 text-left max-w-2xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKodenyx;
