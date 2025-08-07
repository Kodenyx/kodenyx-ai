
import SimpleNavbar from "@/components/SimpleNavbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleNavbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center mb-8">
                <img 
                  src="/lovable-uploads/84e44840-f20f-465e-ab64-1d50c66bf786.png" 
                  alt="Aarti Kodenyx" 
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Real Stories. Real Wins. Real Transformation.
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                ✨ Ready to Be the Next Success Story?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Whether you're scaling your business or preparing the next generation —
                there's a seat here for you.
                <br />
                Let's unlock your next level.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#9b87f5] text-white hover:bg-[#7E69AB] px-8 py-4 text-lg"
                  onClick={() => window.location.href = '/ai-audit-b2b'}
                >
                  Book a Free AI Audit
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
