
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I've had the pleasure of working with Aarti and the Kodenyx team over the last few months on a complex Industrial IoT Fleet project and couldn't be more excited. The level of professionalism and customer engagement has been exceptional. Their expertise in solving complex business challenges, automating workflows, and delivering impactful data played a key role in advancing the RFP process and pilot expansion.  At SPARRO we look forward to our continual relationship with Kodenyx and winning these complex enterprise opportunities.",
    author: "Jason Wickam",
    role: "GM/VP",
    company: "Sparro",
    image: "/lovable-uploads/f73b2b38-cf1d-4695-989b-855f911e8a39.png"
  },
  {
    quote: "The team at Kodenyx is exemplary in communication and systems of automating my digital marketing presence. Campaigns led by Aarti have led to new business partners, exponential growth potential, and recognition from well respected international organizations within my field. Thank you for your commitment towards building my digital presence behind the scenes so i can focus on whats most important in my business and life.",
    author: "Tim Lee",
    role: "Founder",
    company: "Movement Mastery Training",
    image: "/lovable-uploads/300ee339-426c-4e1a-b223-9380d9309fa9.png"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-slide-up bg-[#1A1F2C] text-white shadow-lg hover:shadow-xl transition-shadow duration-300" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-100"></div>
                  )}
                </div>
                <p className="text-lg text-gray-300 text-center mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                  <div className="font-semibold text-primary mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                    {testimonial.company && (
                      <>
                        <br />
                        {testimonial.company}
                      </>
                    )}
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
