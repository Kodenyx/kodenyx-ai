
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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }

    if (!formData.testimonial.trim()) {
      toast({
        title: "Missing Information", 
        description: "Please enter your testimonial",
        variant: "destructive"
      });
      return;
    }

    if (!formData.category) {
      toast({
        title: "Missing Information",
        description: "Please select a program or service",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-testimonial', {
        body: {
          name: formData.name.trim(),
          role: formData.role.trim() || null,
          company: formData.company.trim() || null,
          testimonial: formData.testimonial.trim(),
          rating: formData.rating,
          category: formData.category,
          image_url: formData.image_url.trim() || null
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit testimonial');
      }
      
      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "Your testimonial has been submitted and will be reviewed before being published.",
      });
      
      // Clear form data
      setFormData({
        name: "",
        role: "",
        company: "",
        testimonial: "",
        rating: 5,
        category: "",
        image_url: ""
      });
      
    } catch (error: any) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: "Submission Error",
        description: error.message || "There was an error submitting your testimonial. Please try again.",
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
      <div className="min-h-screen bg-white">
        <SimpleNavbar />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your testimonial has been submitted successfully and will be reviewed before being published on our website.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                window.location.href = '/';
              }}
              className="bg-[#9b87f5] text-white hover:bg-[#7E69AB]"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/84e44840-f20f-465e-ab64-1d50c66bf786.png" 
              alt="Aarti Kodenyx" 
              className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Share Your Experience</h1>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "Thank you for taking the time to share your experience. Your story matters and helps others understand the real impact of this work. I'm grateful for your trust and excited to share your transformation with others who are on a similar journey."
              </p>
            </div>
          </div>

          <Card className="border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Submit Your Testimonial</CardTitle>
              <CardDescription className="text-gray-600">
                Your feedback helps us improve and helps others make informed decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-gray-900 font-medium">Role/Title</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      placeholder="e.g., CEO, Student, etc."
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-900 font-medium">Company/Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Optional"
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-gray-900 font-medium">Program/Service *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-[#9b87f5] focus:ring-[#9b87f5]">
                      <SelectValue placeholder="Select the program or service" className="text-gray-500" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value} className="text-gray-900 hover:bg-gray-50">
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="rating" className="text-gray-900 font-medium">Rating</Label>
                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(formData.rating)}
                    <span className="ml-2 text-sm text-gray-600">
                      ({formData.rating}/5)
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="testimonial" className="text-gray-900 font-medium">Your Testimonial *</Label>
                  <Textarea
                    id="testimonial"
                    value={formData.testimonial}
                    onChange={(e) => handleInputChange('testimonial', e.target.value)}
                    placeholder="Share your experience with our program or service..."
                    className="min-h-[120px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image_url" className="text-gray-900 font-medium">Profile Image URL (Optional)</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => handleInputChange('image_url', e.target.value)}
                    placeholder="https://example.com/your-photo.jpg"
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> All testimonials are reviewed before being published. 
                    We may contact you to verify your submission.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-[#9b87f5] text-white hover:bg-[#7E69AB] disabled:opacity-50"
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
