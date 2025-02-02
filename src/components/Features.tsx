import { Bot, Target, ChartLine, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Automation",
    description: "Let our smart algorithms handle lead nurturing while you focus on growth",
    icon: Bot,
  },
  {
    title: "Smart Targeting",
    description: "Reach the right audience with precision targeting and segmentation",
    icon: Target,
  },
  {
    title: "Performance Analytics",
    description: "Track and optimize your campaigns with detailed insights",
    icon: ChartLine,
  },
  {
    title: "Lead Management",
    description: "Organize and prioritize leads effectively with our CRM system",
    icon: Users,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          Features that Drive Growth
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
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