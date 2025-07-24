
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Testimonial } from "@/hooks/useTestimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  showCategory?: boolean;
}

const TestimonialCard = ({ testimonial, showCategory = false }: TestimonialCardProps) => {
  const categoryLabels = {
    'business-coaching': 'Business Coaching',
    'ai-youth-program': 'AI for Youth',
    'ai-automation-services': 'AI/Automation Services'
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {testimonial.image_url ? (
            <img 
              src={testimonial.image_url} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              {testimonial.rating && (
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              )}
            </div>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-muted-foreground mb-2">
                {testimonial.role}
                {testimonial.role && testimonial.company && ' at '}
                {testimonial.company}
              </p>
            )}
            {showCategory && (
              <Badge variant="secondary" className="mb-2">
                {categoryLabels[testimonial.category as keyof typeof categoryLabels]}
              </Badge>
            )}
          </div>
        </div>
        
        <blockquote className="text-muted-foreground italic leading-relaxed">
          "{testimonial.testimonial}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
