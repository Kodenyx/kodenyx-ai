
import SimpleNavbar from "@/components/SimpleNavbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      <div className="pt-20">
        {/* Hero Section with Personal Note */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center mb-8">
                <img 
                  src="/lovable-uploads/your-image.jpg" 
                  alt="Kodenyx Team" 
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
                <div className="bg-card border border-border rounded-lg p-6 max-w-2xl">
                  <p className="text-muted-foreground italic text-lg leading-relaxed">
                    "Thank you for taking the time to share your experience. Your story matters and helps others understand the real impact of this work. I'm grateful for your trust and excited to share your transformation with others who are on a similar journey."
                  </p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Real Stories. Real Wins. Real Transformation.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The best part of this work? Watching incredible humans unlock clarity, confidence, and systems that finally give them back their time.
              </p>
            </div>
          </div>
        </section>

        <TestimonialsSection 
          title="Client Success Stories"
          showCategoryFilter={true}
          expandable={true}
        />

        {/* Call to Action Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                ✨ Ready to Be the Next Success Story?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're scaling your business or preparing the next generation —
                there's a seat here for you.
                <br />
                Let's unlock your next level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
                  onClick={() => window.location.href = '/ai-audit-b2b'}
                >
                  Book a Free AI Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                  onClick={() => window.location.href = '/ai-for-youth'}
                >
                  Explore AI for Youth Program
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
