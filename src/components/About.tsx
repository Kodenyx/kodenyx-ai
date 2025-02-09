
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Dr. Aarti Anand, PhD",
      role: "Founder & CEO",
      bio: "After years of building SaaS products, Aarti saw businesses wasting time on outdated, manual prospecting and thought, \"This is broken.\" With AI on the rise, she knew the answer wasn't more outreach—it was smarter automation.\n\nNow, Aarti is on a mission to help businesses ditch the grind and scale faster. No more chasing leads that go nowhere—just an AI-driven system that works while you sleep.",
      image: "/lovable-uploads/0307e07c-23d0-4f3e-abf5-49ead20f9f20.png"
    },
    {
      name: "Navpreet Anand",
      role: "Advisor",
      bio: "Navpreet Anand serves as a strategic advisor to Kodenyx AI, bringing extensive experience in business strategy and technology innovation. His guidance helps shape the company's vision and growth trajectory, ensuring we stay at the forefront of AI-driven lead generation solutions.",
      image: "/lovable-uploads/9b56392d-3fb5-4bc3-bab9-6f9384802921.png"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="animate-slide-up bg-[#1A1F2C] text-white shadow-lg hover:shadow-xl transition-shadow duration-300" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-primary"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-center text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-300 text-center mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-300 text-center leading-relaxed italic whitespace-pre-line">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
