
import { Check } from "lucide-react";

const WhoThisIsFor = () => {
  const targetAudience = [
    "You're managing a 20+ person team with scattered systems",
    "Your ops feel reactive, not reliable",
    "You're still duct-taping tools or running on Slack memory",
    "You need leverage — not more headcount",
    "You want to use AI, but don't know where to start"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
            Built for Founders Who've Outgrown Doing Everything Themselves
          </h2>
          
          <div className="grid gap-6 text-left max-w-2xl mx-auto">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
