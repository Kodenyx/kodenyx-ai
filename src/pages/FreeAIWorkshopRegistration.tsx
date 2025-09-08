import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Clock, CheckCircle, Star, TrendingUp, Target, Gift } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const FreeAIWorkshopRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      biggest_challenge: formData.get('biggest_challenge') as string,
    };

    try {
      const { error } = await supabase.functions.invoke('subscribe-contact', {
        body: { ...data, source: 'free_workshop_registration' }
      });

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "We'll send you the workshop details and Zoom link shortly.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Gift className="h-5 w-5" />
              <span className="font-semibold">100% FREE Workshop</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Turn Your SMB Into an 
              <span className="text-primary"> AI-Powered</span> Growth Machine
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join our free workshop where we reveal the exact AI systems and workflow optimizations 
              we've used to help 50+ SMBs reduce costs by 30-60% while scaling faster than ever.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Next Session: Every Friday 2PM EST
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                90 Minutes + Q&A
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Limited to 25 Attendees
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">The 5-Minute AI Audit Framework</h4>
                      <p className="text-sm text-muted-foreground">Instantly identify which workflows are costing you the most time and money</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">SMB-Specific AI Implementation Roadmap</h4>
                      <p className="text-sm text-muted-foreground">Step-by-step guide tailored for businesses with 5-50 employees</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">ROI Calculator & Success Metrics</h4>
                      <p className="text-sm text-muted-foreground">Measure and prove the impact of your AI investments</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Live Case Study Walkthroughs</h4>
                      <p className="text-sm text-muted-foreground">Real examples from our client work with actual results</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <blockquote className="text-sm italic mb-2">
                  "This workshop completely changed how we think about AI. We implemented 3 automations within a week and saved 15 hours per week immediately."
                </blockquote>
                <p className="text-xs text-muted-foreground">- Sarah Chen, Founder at GrowthLabs Marketing</p>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <Card className="shadow-2xl border-2 border-primary/20">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-2xl">Reserve Your Free Spot</CardTitle>
                <p className="text-muted-foreground">Join 500+ SMB owners who've transformed their operations</p>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Business Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="your@company.com"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      required 
                      placeholder="Your company name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="biggest_challenge">Biggest Workflow Challenge</Label>
                    <Textarea 
                      id="biggest_challenge" 
                      name="biggest_challenge" 
                      placeholder="What's the most time-consuming manual process in your business?"
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full text-lg py-6" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Get My Free Workshop Access"}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-8">Join SMB Leaders Already Winning with AI</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$147K</div>
              <p className="text-sm text-muted-foreground">Average annual savings per client</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">23 Hours</div>
              <p className="text-sm text-muted-foreground">Average weekly time savings</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <p className="text-sm text-muted-foreground">Of attendees implement within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="h-6 w-6 text-destructive" />
            <span className="font-semibold text-destructive">Limited Spots Available</span>
          </div>
          
          <p className="text-lg mb-6">
            We keep our workshops small for maximum interaction and personalized guidance. 
            Only <strong>25 spots</strong> available per session.
          </p>
          
          <p className="text-muted-foreground">
            Next workshop: <strong>This Friday at 2PM EST</strong> - Spots filling fast!
          </p>
        </div>
      </section>
    </div>
  );
};

export default FreeAIWorkshopRegistration;