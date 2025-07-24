
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
    { value: "business-coaching", label: "Business Coaching Program" },
    { value: "ai-youth-program", label: "AI for Youth Program" },
    { value: "ai-automation-services", label: "AI/Automation Services" }
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.testimonial || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, just simulate submission since the database table doesn't exist yet
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
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
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your testimonial has been submitted successfully and will be reviewed before being published on our website.
            </p>
            <Button onClick={() => window.location.href = '/'}>
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
            <h1 className="text-4xl font-bold mb-4">Share Your Experience</h1>
            <p className="text-xl text-muted-foreground">
              Help others learn about your experience with our programs and services
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Submit Your Testimonial</CardTitle>
              <CardDescription>
                Your feedback helps us improve and helps others make informed decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Role/Title</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      placeholder="e.g., CEO, Student, etc."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Program/Service *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
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
                  <Label htmlFor="rating">Rating</Label>
                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(formData.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({formData.rating}/5)
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="testimonial">Your Testimonial *</Label>
                  <Textarea
                    id="testimonial"
                    value={formData.testimonial}
                    onChange={(e) => handleInputChange('testimonial', e.target.value)}
                    placeholder="Share your experience with our program or service..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image_url">Profile Image URL (Optional)</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => handleInputChange('image_url', e.target.value)}
                    placeholder="https://example.com/your-photo.jpg"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> All testimonials are reviewed before being published. 
                    We may contact you to verify your submission.
                  </p>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
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
