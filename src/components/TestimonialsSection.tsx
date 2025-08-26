import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTestimonials } from "@/hooks/useTestimonials";
import TestimonialCard from "./TestimonialCard";
import { Loader2 } from "lucide-react";

interface TestimonialsSectionProps {
  title?: string;
  category?: string;
  showCategoryFilter?: boolean;
  maxItems?: number;
  expandable?: boolean;
}

const TestimonialsSection = ({ 
  title = "What Our Clients Say", 
  category,
  showCategoryFilter = false,
  maxItems,
  expandable = false
}: TestimonialsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(category);
  const { data: testimonials, isLoading, error } = useTestimonials(selectedCategory);

  const categories = [
    { value: undefined, label: "All" },
    { value: "business-coaching", label: "Business Coaching" },
    { value: "ai-youth-program", label: "AI for Youth" },
    { value: "ai-automation-services", label: "AI/Automation Services" },
    { value: "ai-audit", label: "AI Audit" }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#9b87f5]" />
            <span className="ml-2 text-gray-900">Loading testimonials...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700">
            Unable to load testimonials at this time.
          </p>
        </div>
      </section>
    );
  }

  const displayedTestimonials = maxItems 
    ? testimonials?.slice(0, maxItems) 
    : testimonials;

  if (!displayedTestimonials || displayedTestimonials.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{title}</h2>
          <p className="text-center text-gray-700">
            No testimonials available for this category yet.
          </p>
          <div className="text-center mt-6">
            <Button 
              onClick={() => window.location.href = '/testimonials/submit'}
              className="bg-[#9b87f5] text-white hover:bg-[#7E69AB] border-2 border-[#9b87f5] hover:border-[#7E69AB] font-semibold px-6 py-3 text-lg shadow-lg"
            >
              Submit a Testimonial
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{title}</h2>
        
        {showCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Badge
                key={cat.value || 'all'}
                variant={selectedCategory === cat.value ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 transition-colors font-semibold ${
                  selectedCategory === cat.value 
                    ? "bg-[#9b87f5] text-white border-[#9b87f5]" 
                    : "border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white bg-white"
                }`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </Badge>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              showCategory={!selectedCategory}
              expandable={expandable}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.location.href = '/testimonials/submit'}
            className="bg-[#9b87f5] text-white hover:bg-[#7E69AB] border-2 border-[#9b87f5] hover:border-[#7E69AB] font-semibold px-6 py-3 text-lg shadow-lg"
          >
            Submit Your Testimonial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
