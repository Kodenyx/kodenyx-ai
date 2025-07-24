
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Star, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const TestimonialCollection = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    testimonial: "",
    rating: 5,
    category: "",
    image_url: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const categories = [
    { value: "business-coaching", label: "AI-First Business Coaching Program" },
    { value: "ai-youth-program", label: "AI for Youth Program" },
    { value: "ai-automation-services", label: "AI/Automation Services" }
  ];

  const handleInputChange = (field: string, value: string | number) => {
    console.log('Form field updated:', field, value);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started with data:', formData);
    
    if (!formData.name || !formData.testimonial || !formData.category) {
      console.log('Validation failed - missing required fields:', {
        name: !!formData.name,
        testimonial: !!formData.testimonial,
        category: !!formData.category
      });
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Starting database insertion...');

    try {
      const testimonialData = {
        name: formData.name,
        role: formData.role || null,
        company: formData.company || null,
        testimonial: formData.testimonial,
        rating: formData.rating,
        category: formData.category,
        image_url: formData.image_url || null,
        is_approved: false
      };

      console.log('Attempting to insert testimonial:', testimonialData);

      const { data, error } = await supabase
        .from('testimonials')
        .insert([testimonialData])
        .select();

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Testimonial successfully inserted:', data);
      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "Your testimonial has been submitted and will be reviewed before being published.",
      });
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your testimonial. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 cursor-pointer transition-colors ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
        }`}
        onClick={() => handleInputChange('rating', i + 1)}
      />
    ));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <SimpleNavbar />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-foreground">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your testimonial has been submitted successfully and will be reviewed before being published on our website.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/your-image.jpg" 
              alt="Thank you" 
              className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 text-foreground">Share Your Experience</h1>
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                "Thank you for taking the time to share your experience. Your story matters and helps others understand the real impact of this work. I'm grateful for your trust and excited to share your transformation with others who are on a similar journey."
              </p>
            </div>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Submit Your Testimonial</CardTitle>
              <CardDescription className="text-muted-foreground">
                Your feedback helps us improve and helps others make informed decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-foreground">Role/Title</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      placeholder="e.g., CEO, Student, etc."
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-foreground">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Optional"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-foreground">Program/Service *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select the program or service" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="rating" className="text-foreground">Rating</Label>
                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(formData.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({formData.rating}/5)
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="testimonial" className="text-foreground">Your Testimonial *</Label>
                  <Textarea
                    id="testimonial"
                    value={formData.testimonial}
                    onChange={(e) => handleInputChange('testimonial', e.target.value)}
                    placeholder="Share your experience with our program or service..."
                    className="min-h-[120px] bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image_url" className="text-foreground">Profile Image URL (Optional)</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => handleInputChange('image_url', e.target.value)}
                    placeholder="https://example.com/your-photo.jpg"
                    className="bg-background border-border"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All testimonials are reviewed before being published. 
                    We may contact you to verify your submission.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Testimonial
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCollection;
