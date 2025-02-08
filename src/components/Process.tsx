
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book A Call",
    description: "We'll dive into your goals, challenges, and audience to craft the perfect game plan.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a data-driven strategy combining content, automation, and targeted ads to attract and convert your ideal clients.",
  },
  {
    number: "03",
    title: "Execution",
    description: "From automated content, running AI agents, to optimized campaigns, we bring the strategy to life and fine-tune it weekly for peak performance.",
  },
  {
    number: "04",
    title: "Convert",
    description: "We automate nurturing so prospects warm up and convert seamlessly, without the manual grind.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg">
            A simple but powerful process to transform your lead generation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-slide-up bg-secondary-foreground/5 rounded-lg p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
