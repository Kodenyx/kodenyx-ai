
import { Card, CardContent } from "@/components/ui/card";
import { HeadsetIcon, Filter, MessageCircle, Star } from "lucide-react";

const agents = [
  {
    title: "AI Receptionist & Booking Agent",
    description: "24/7 virtual receptionist that greets visitors, answers questions, and seamlessly schedules meetings while managing your calendar—handling time zones and availability without double bookings.",
    icon: HeadsetIcon,
    bgImage: "/lovable-uploads/0307e07c-23d0-4f3e-abf5-49ead20f9f20.png"
  },
  {
    title: "Lead Qualifier Agent",
    description: "Intelligently qualifies leads by asking relevant questions, scoring prospects, and ensuring only the most promising opportunities reach your sales team.",
    icon: Filter,
    bgImage: "/lovable-uploads/9b56392d-3fb5-4bc3-bab9-6f9384802921.png"
  },
  {
    title: "Lead Nurturing Agent",
    description: "Educates and nurtures leads on autopilot through personalized content and engagement, warming them up until they're ready for conversion.",
    icon: MessageCircle,
    bgImage: "/lovable-uploads/300ee339-426c-4e1a-b223-9380d9309fa9.png"
  },
  {
    title: "Review AI Agent",
    description: "Enhances your online reputation and builds trust with customers by efficiently managing Google and Facebook reviews, automating responses, and maintaining a stellar online presence.",
    icon: Star,
    bgImage: "/lovable-uploads/f73b2b38-cf1d-4695-989b-855f911e8a39.png"
  },
];

const AIAgents = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Meet Your AI Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI agents work tirelessly 24/7 to capture, qualify, and nurture your leads—scaling your business without scaling your team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up bg-[#1A1F2C] text-white relative overflow-hidden" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${agent.bgImage})` }}
              />
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{agent.title}</h3>
                <p className="text-gray-300">{agent.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
