
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Check, X, Trash2, ExternalLink, Play } from "lucide-react";
import { Testimonial } from "@/hooks/useTestimonials";

interface AdminTestimonialCardProps {
  testimonial: Testimonial;
  onApprove: () => void;
  onReject: () => void;
  onDelete: () => void;
  isLoading: boolean;
  isApproved?: boolean;
}

const AdminTestimonialCard = ({ 
  testimonial, 
  onApprove, 
  onReject, 
  onDelete, 
  isLoading,
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
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
        }`}
      />
    ));
  };

  const isVideoTestimonial = testimonial.video_url && testimonial.video_url.trim() !== '';

  const handleVideoClick = () => {
    if (testimonial.video_url) {
      window.open(testimonial.video_url, '_blank');
    }
  };

  return (
    <Card className={`${isApproved ? 'border-green-200' : 'border-yellow-200'}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start gap-4">
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
                {testimonial.age && (
                  <Badge variant="outline" className="text-xs">
                    Age {testimonial.age}
                  </Badge>
                )}
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
              <Badge variant="secondary">
                {categoryLabels[testimonial.category as keyof typeof categoryLabels] || testimonial.category}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={isApproved ? "default" : "secondary"}>
              {isApproved ? "Approved" : "Pending"}
            </Badge>
          </div>
        </div>

        {/* Video Testimonial */}
        {isVideoTestimonial && (
          <div className="mb-4">
            <div className="relative group">
              <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border-2 border-primary/30 hover:border-primary/50"
                   onClick={handleVideoClick}>
                <img 
                  src="/lovable-uploads/56ff0bb4-cc2b-4bed-8ad9-84ee1498ee49.png" 
                  alt="Video testimonial thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="bg-primary rounded-full p-3 mr-2">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Click to watch video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
          "{testimonial.testimonial}"
        </blockquote>

        <div className="text-xs text-muted-foreground mb-4">
          Submitted on {new Date(testimonial.created_at).toLocaleDateString()}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {!isApproved && (
              <Button 
                onClick={onApprove}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                <Check className="w-4 h-4 mr-1" />
                Approve
              </Button>
            )}
            {isApproved && (
              <Button 
                onClick={onReject}
                disabled={isLoading}
                variant="outline"
                size="sm"
              >
                <X className="w-4 h-4 mr-1" />
                Unapprove
              </Button>
            )}
          </div>
          <Button 
            onClick={onDelete}
            disabled={isLoading}
            variant="destructive"
            size="sm"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminTestimonialCard;
