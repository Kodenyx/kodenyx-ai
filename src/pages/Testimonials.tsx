
import SimpleNavbar from "@/components/SimpleNavbar";
import TestimonialsSection from "@/components/TestimonialsSection";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      <div className="pt-20">
        <TestimonialsSection 
          title="Client Testimonials"
          showCategoryFilter={true}
        />
      </div>
    </div>
  );
};

export default Testimonials;
