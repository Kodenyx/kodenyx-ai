import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Navika transformed our lead generation process. We've seen a 3x increase in qualified leads.",
    author: "Mike J.",
    role: "Fractional CMO",
    company: "",
  },
  {
    quote: "My lead gen and online presence has exponentially increased with these AI-powered automations.",
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