
import { Card, CardContent } from "@/components/ui/card";

const ProofWins = () => {
  const stats = [
    "50+ workflows deployed",
    "30+ hours/month saved per founder", 
    "$100K+ in operational cost reductions"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
            Real Systems. Real Time Saved. Real Margin Unlocked.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-xl font-semibold text-primary">{stat}</p>
              </div>
            ))}
          </div>
          
          <Card className="bg-gray-50 border-none shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-4">
                "We went from constant follow-ups and manual onboarding to a system that just runs. I finally feel like I can step back without fires."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Founder, $2M service business
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProofWins;
