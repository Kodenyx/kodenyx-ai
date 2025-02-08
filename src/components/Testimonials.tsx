
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Working with Kodenyx on a complex Industrial IoT Fleet project has been exceptional. Their expertise in solving business challenges, automating workflows, and delivering impactful data played a key role in advancing the RFP process and pilot expansion. We look forward to winning more enterprise opportunities together.",
    author: "Jason Wickam",
    role: "GM/VP",
    company: "Sparro",
  },
  {
    quote: "The team at Kodenyx is exemplary in communication and systems of automating my digital marketing presence. Campaigns led by Aarti have led to new business partners, exponential growth potential, and recognition from well respected international organizations within my field. Thank you for your commitment towards building my digital presence behind the scenes so i can focus on whats most important in my business and life.",
    author: "Tim Lee",
    role: "Founder",
    company: "Movement Mastery Training",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                <p className="text-xl mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-secondary">{testimonial.author}</div>
                  <div className="text-gray-600">
                    {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
