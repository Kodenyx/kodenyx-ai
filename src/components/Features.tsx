
import { Bot, Target, ChartLine, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Smart Targeting",
    description: "Why chase leads when they can come to you? Attract your ideal clients with organic content and precision-targeted ads",
    icon: Target,
  },
  {
    title: "Lead Capture",
    description: "Stop letting leads slip away - grab attention and turn visitors into leads with high-converting offers",
    icon: Users,
  },
  {
    title: "AI-Powered Automation",
    description: "Let our AI agents nurture your leads on autopilot - your leads won't ghost you when AI is doing the follow-ups.",
    icon: Bot,
  },
  {
    title: "Performance Analytics",
    description: "Real-time analytics that show what's working (and what's not). Optimize like a pro with real-time insights—because guessing is for amateurs.",
    icon: ChartLine,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            AI-Powered Lead Generation
          </h2>
          <p className="text-gray-600 text-lg">
            Most businesses passively wait for leads to come to their website—only to watch them slip through the cracks. Our AI Agents flip the script—we don't wait, we take charge.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
