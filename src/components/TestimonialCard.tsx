
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { Testimonial } from "@/hooks/useTestimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  showCategory?: boolean;
  expandable?: boolean;
}

const TestimonialCard = ({ testimonial, showCategory = false, expandable = false }: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const categoryLabels = {
    'business-coaching': 'AI-First Business Coaching Program',
    'ai-first-business-coaching': 'AI-First Business Coaching Program',
    'ai-youth-program': 'AI for Youth',
    'ai-automation-services': 'AI/Automation Services'
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'
        }`}
      />
    ));
  };

  const shouldTruncate = expandable && testimonial.testimonial.length > 200;
  const truncatedText = shouldTruncate ? testimonial.testimonial.substring(0, 200) + '...' : testimonial.testimonial;
  const displayText = shouldTruncate && !isExpanded ? truncatedText : testimonial.testimonial;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full border-[#3A3F4C] bg-[#2A2F3C]">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {testimonial.image_url ? (
            <img 
              src={testimonial.image_url} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
              <span className="text-[#9b87f5] font-semibold">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
              {testimonial.rating && (
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              )}
            </div>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-gray-300 mb-2">
                {testimonial.role}
                {testimonial.role && testimonial.company && ' at '}
                {testimonial.company}
              </p>
            )}
            {showCategory && (
              <Badge variant="secondary" className="mb-2 bg-[#9b87f5]/20 text-[#9b87f5] border-[#9b87f5]/30">
                {categoryLabels[testimonial.category as keyof typeof categoryLabels]}
              </Badge>
            )}
          </div>
        </div>
        
        <blockquote className="text-gray-300 italic leading-relaxed mb-4">
          "{displayText}"
        </blockquote>

        {shouldTruncate && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-center text-[#9b87f5] hover:text-white hover:bg-[#9b87f5]"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Read More
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
