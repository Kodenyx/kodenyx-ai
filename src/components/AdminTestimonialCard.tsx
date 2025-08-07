
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, X, Trash2, ExternalLink, Calendar } from "lucide-react";
import { Testimonial } from "@/hooks/useTestimonials";
import { format } from "date-fns";

interface AdminTestimonialCardProps {
  testimonial: Testimonial;
  onApprove: () => void;
  onReject: () => void;
  onDelete: () => void;
  isLoading?: boolean;
  isApproved?: boolean;
}

const AdminTestimonialCard = ({
  testimonial,
  onApprove,
  onReject,
  onDelete,
  isLoading = false,
  isApproved = false
}: AdminTestimonialCardProps) => {
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
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const isVideoTestimonial = testimonial.video_url && testimonial.video_url.trim() !== '';

  return (
    <Card className={`border-l-4 ${isApproved ? 'border-l-green-500' : 'border-l-yellow-500'}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start gap-4 flex-1">
            {testimonial.image_url ? (
              <img 
                src={testimonial.image_url} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <Badge variant={isApproved ? "default" : "secondary"}>
                  {isApproved ? "Approved" : "Pending"}
                </Badge>
              </div>
              
              {(testimonial.role || testimonial.company) && (
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonial.role}
                  {testimonial.role && testimonial.company && ' at '}
                  {testimonial.company}
                </p>
              )}
              
              <div className="flex items-center gap-4 mb-2">
                <Badge variant="outline">
                  {categoryLabels[testimonial.category as keyof typeof categoryLabels] || testimonial.category}
                </Badge>
                
                {testimonial.rating && (
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({testimonial.rating}/5)
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Submitted {format(new Date(testimonial.created_at), 'MMM d, yyyy')}</span>
                {isVideoTestimonial && (
                  <Badge variant="outline" className="ml-2">
                    Video
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 ml-4">
            {!isApproved && (
              <Button
                size="sm"
                onClick={onApprove}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Check className="w-4 h-4" />
              </Button>
            )}
            
            {isApproved && (
              <Button
                size="sm"
                variant="outline"
                onClick={onReject}
                disabled={isLoading}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            
            <Button
              size="sm"
              variant="destructive"
              onClick={onDelete}
              disabled={isLoading}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Video Testimonial Preview */}
        {isVideoTestimonial && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink className="w-4 h-4" />
              <a 
                href={testimonial.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                View Video Testimonial
              </a>
            </div>
          </div>
        )}
        
        {/* Testimonial Content */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <blockquote className="italic leading-relaxed">
            "{testimonial.testimonial}"
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminTestimonialCard;
