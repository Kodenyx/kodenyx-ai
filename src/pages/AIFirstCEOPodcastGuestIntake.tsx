import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import SimpleNavbar from "@/components/SimpleNavbar";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Upload } from "lucide-react";

const AIFirstCEOPodcastGuestIntake = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    titleRole: "",
    email: "",
    website: "",
    linkedinProfile: "",
    socialMediaLinks: "",
    businessDescription: "",
    scalingSystem: "",
    bottleneckBreakthrough: "",
    workflowsToShare: "",
    avoidTopics: "",
    shortBio: "",
    headshotUrl: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('Starting form submission...');
    console.log('Form data:', formData);

    try {
      // Validate required fields
      const requiredFields = [
        'fullName', 'companyName', 'titleRole', 'email', 
        'website', 'linkedinProfile', 'businessDescription', 
        'scalingSystem', 'bottleneckBreakthrough'
      ];
      
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
      
      if (missingFields.length > 0) {
        console.error('Missing required fields:', missingFields);
        toast({
          title: "Missing required fields",
          description: `Please fill in: ${missingFields.join(', ')}`,
          variant: "destructive",
        });
        return;
      }

      console.log('All required fields present, submitting to database...');

      // Save to Supabase database
      const { data, error } = await supabase
        .from('podcast_guest_responses')
        .insert({
          full_name: formData.fullName,
          company_name: formData.companyName,
          title_role: formData.titleRole,
          email: formData.email,
          website: formData.website,
          linkedin_profile: formData.linkedinProfile,
          social_media_links: formData.socialMediaLinks || null,
          business_description: formData.businessDescription,
          scaling_system: formData.scalingSystem,
          bottleneck_breakthrough: formData.bottleneckBreakthrough,
          workflows_to_share: formData.workflowsToShare || null,
          avoid_topics: formData.avoidTopics || null,
          short_bio: formData.shortBio || null,
          headshot_url: formData.headshotUrl || null
        })
        .select(); // Add select to get the inserted data back

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Guest intake form saved successfully:', data);
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll review your responses and be in touch with prep details.",
      });

      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error saving guest intake form:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <SimpleNavbar />
        
        <section className="pt-24 md:pt-28 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/95 text-white">
          <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">Thank You!</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Thanks so much — we'll review your responses and be in touch with prep details. 
                Excited to have you on the show!
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Submit Another Response
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 bg-gradient-to-br from-secondary to-secondary/95 text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary-light">AI-First</span> CEO Podcast – Guest Intake
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Thanks for being a guest on the AI-First CEO Podcast. This quick form helps us shape an episode 
              that's sharp, valuable, and true to your story. Please complete it at least 48 hours before recording.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Section 1: Basic Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary border-b border-gray-200 pb-4">
                Section 1: Basic Info
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-gray-700 font-medium">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    required
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="titleRole" className="text-gray-700 font-medium">
                    Title/Role *
                  </Label>
                  <Input
                    id="titleRole"
                    value={formData.titleRole}
                    onChange={(e) => handleInputChange('titleRole', e.target.value)}
                    required
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Best Contact Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-gray-700 font-medium">
                    Website *
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    required
                    className="border-gray-300"
                    placeholder="https://"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="linkedinProfile" className="text-gray-700 font-medium">
                    LinkedIn Profile *
                  </Label>
                  <Input
                    id="linkedinProfile"
                    type="url"
                    value={formData.linkedinProfile}
                    onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                    required
                    className="border-gray-300"
                    placeholder="https://linkedin.com/in/"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialMediaLinks" className="text-gray-700 font-medium">
                  Social Media Links (optional)
                </Label>
                <Input
                  id="socialMediaLinks"
                  value={formData.socialMediaLinks}
                  onChange={(e) => handleInputChange('socialMediaLinks', e.target.value)}
                  className="border-gray-300"
                  placeholder="Twitter, Instagram, etc."
                />
              </div>
            </div>

            {/* Section 2: About You + The Conversation */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary border-b border-gray-200 pb-4">
                Section 2: About You + The Conversation
              </h2>
              
              <div className="space-y-2">
                <Label htmlFor="businessDescription" className="text-gray-700 font-medium">
                  Briefly describe your business and who you serve. *
                </Label>
                <Textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                  required
                  className="border-gray-300 min-h-[100px]"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scalingSystem" className="text-gray-700 font-medium">
                  What's one system, automation, or leadership decision that helped you scale without doing it all yourself? *
                </Label>
                <Textarea
                  id="scalingSystem"
                  value={formData.scalingSystem}
                  onChange={(e) => handleInputChange('scalingSystem', e.target.value)}
                  required
                  className="border-gray-300 min-h-[100px]"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bottleneckBreakthrough" className="text-gray-700 font-medium">
                  What's one bottleneck you used to face — and how did you break through it? *
                </Label>
                <Textarea
                  id="bottleneckBreakthrough"
                  value={formData.bottleneckBreakthrough}
                  onChange={(e) => handleInputChange('bottleneckBreakthrough', e.target.value)}
                  required
                  className="border-gray-300 min-h-[100px]"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="workflowsToShare" className="text-gray-700 font-medium">
                  Are there any workflows, frameworks, or tools you'd like to share on the show?
                </Label>
                <Textarea
                  id="workflowsToShare"
                  value={formData.workflowsToShare}
                  onChange={(e) => handleInputChange('workflowsToShare', e.target.value)}
                  className="border-gray-300 min-h-[100px]"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avoidTopics" className="text-gray-700 font-medium">
                  Anything you'd like me to avoid or be mindful of during the interview?
                </Label>
                <Textarea
                  id="avoidTopics"
                  value={formData.avoidTopics}
                  onChange={(e) => handleInputChange('avoidTopics', e.target.value)}
                  className="border-gray-300 min-h-[100px]"
                  rows={4}
                />
              </div>
            </div>

            {/* Section 3: Optional for Promotion */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary border-b border-gray-200 pb-4">
                Section 3: Optional for Promotion
              </h2>
              
              <div className="space-y-2">
                <Label htmlFor="shortBio" className="text-gray-700 font-medium">
                  Short Bio (2–3 sentences)
                </Label>
                <Textarea
                  id="shortBio"
                  value={formData.shortBio}
                  onChange={(e) => handleInputChange('shortBio', e.target.value)}
                  className="border-gray-300 min-h-[80px]"
                  rows={3}
                  placeholder="This will be used for show notes and promotional materials"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headshotUrl" className="text-gray-700 font-medium">
                  Headshot (Image URL)
                </Label>
                <Input
                  id="headshotUrl"
                  type="url"
                  value={formData.headshotUrl}
                  onChange={(e) => handleInputChange('headshotUrl', e.target.value)}
                  className="border-gray-300"
                  placeholder="Link to your professional headshot"
                />
                <p className="text-sm text-gray-500">
                  Please provide a link to a high-quality professional headshot for promotional use
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-gray-200">
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium text-lg py-6"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Guest Intake Form"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AIFirstCEOPodcastGuestIntake;
