
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
    { value: "ai-first-business-coaching", label: "AI-First Business Coaching Program" },
    { value: "ai-youth-program", label: "AI for Youth" },
    { value: "ai-automation-services", label: "AI/Automation Services" }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-foreground">Loading testimonials...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{title}</h2>
          <p className="text-center text-muted-foreground">
            No testimonials available yet. Be the first to share your experience!
          </p>
          <div className="text-center mt-6">
            <Button 
              onClick={() => window.location.href = '/testimonials/submit'}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Submit a Testimonial
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{title}</h2>
        
        {showCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Badge
                key={cat.value || 'all'}
                variant={selectedCategory === cat.value ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
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
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Submit Your Testimonial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
