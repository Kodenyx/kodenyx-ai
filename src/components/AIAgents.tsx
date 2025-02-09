
import { Card, CardContent } from "@/components/ui/card";
import { UserRound, Calendar, Filter, PhoneCall, Database } from "lucide-react";

const agents = [
  {
    title: "AI Receptionist",
    description: "24/7 virtual receptionist that greets visitors, answers common questions, and routes inquiries to the right department—never keeping your leads waiting.",
    icon: UserRound,
  },
  {
    title: "Appointment Booking Agent",
    description: "Seamlessly schedules meetings and manages your calendar, handling time zones and availability without double bookings or back-and-forth emails.",
    icon: Calendar,
  },
  {
    title: "Lead Qualifier Agent",
    description: "Intelligently qualifies leads by asking relevant questions, scoring prospects, and ensuring only the most promising opportunities reach your sales team.",
    icon: Filter,
  },
  {
    title: "Communication Manager",
    description: "Handles follow-ups, sends reminders, and maintains consistent communication with prospects across multiple channels.",
    icon: PhoneCall,
  },
  {
    title: "Data Analysis Agent",
    description: "Analyzes lead behavior, identifies patterns, and provides actionable insights to optimize your lead generation strategy.",
    icon: Database,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{agent.title}</h3>
                <p className="text-gray-600">{agent.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
