
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Define the form schema for each section
const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  linkedin: z.string().optional(),
  businessType: z.string().min(1, "Please select a business type"),
  teamSize: z.string().min(1, "Please select your team size"),
});

const readinessSchema = z.object({
  currentUse: z.string().min(1, "Please select an option"),
  repetitiveTasks: z.string().min(1, "Please select an option"),
  manualAreas: z.array(z.string()).min(1, "Select at least one area").max(2, "Select up to 2 areas"),
  leadHandling: z.string().min(1, "Please select an option"),
  sopApproach: z.string().min(1, "Please select an option"),
  aiComfort: z.string().min(1, "Please select an option"),
  automationPriority: z.string().min(1, "Please select an option"),
  manualHours: z.string().min(1, "Please select an option"),
  timeOwner: z.string().min(1, "Please select an option"),
  hourlyValue: z.string().optional(),
});

// Form options
const businessTypes = [
  { value: "coaching", label: "Coaching / Consulting" },
  { value: "real-estate", label: "Real Estate / Mortgage" },
  { value: "healthcare", label: "Healthcare / Wellness" },
  { value: "tech", label: "Tech / SaaS" },
  { value: "marketing", label: "Marketing / Creative Services" },
  { value: "professional", label: "Professional Services (Legal, Finance, etc.)" },
  { value: "other", label: "Other" },
];

const teamSizes = [
  { value: "solo", label: "Just me" },
  { value: "small", label: "2-5" },
  { value: "medium", label: "6-20" },
  { value: "large", label: "21+" },
];

const currentUseOptions = [
  { value: "none", label: "Not using any automation or AI" },
  { value: "basic", label: "Basic automation (email sequences, etc.)" },
  { value: "some", label: "Some AI tools occasionally" },
  { value: "integrated", label: "Integrated into daily operations" },
  { value: "advanced", label: "Advanced AI systems throughout business" },
];

const repetitiveTasksOptions = [
  { value: "manual", label: "Manually by team members" },
  { value: "outsourced", label: "Outsourced to contractors" },
  { value: "some-automation", label: "Some automation but still requires oversight" },
  { value: "fully-automated", label: "Fully automated systems" },
];

const manualAreasOptions = [
  { value: "lead-gen", label: "Lead generation" },
  { value: "sales", label: "Sales processes" },
  { value: "customer-service", label: "Customer service" },
  { value: "content", label: "Content creation" },
  { value: "admin", label: "Admin & operations" },
  { value: "finance", label: "Finance & accounting" },
  { value: "hr", label: "HR & recruiting" },
  { value: "product", label: "Product development" },
];

const leadHandlingOptions = [
  { value: "missed", label: "Sometimes missed or delayed response" },
  { value: "manual", label: "Manual outreach when we have time" },
  { value: "basic-auto", label: "Basic automation but needs human follow-up" },
  { value: "fully-auto", label: "Fully automated qualification and routing" },
];

const sopApproachOptions = [
  { value: "none", label: "No formal SOPs" },
  { value: "outdated", label: "Outdated documents rarely referenced" },
  { value: "standard", label: "Standard documents we update periodically" },
  { value: "living", label: "Living documents integrated with tools" },
];

const aiComfortOptions = [
  { value: "uncomfortable", label: "Very uncomfortable" },
  { value: "curious", label: "Curious but uncertain" },
  { value: "moderate", label: "Moderately comfortable" },
  { value: "very", label: "Very comfortable" },
];

const automationPriorityOptions = [
  { value: "lead-nurture", label: "Lead nurturing & follow-up" },
  { value: "content", label: "Content creation & distribution" },
  { value: "client-onboarding", label: "Client onboarding" },
  { value: "reporting", label: "Reporting & analytics" },
  { value: "project-management", label: "Project management" },
  { value: "customer-support", label: "Customer support" },
  { value: "other", label: "Other" },
];

const manualHoursOptions = [
  { value: "0-5", label: "0-5 hours" },
  { value: "6-10", label: "6-10 hours" },
  { value: "11-20", label: "11-20 hours" },
  { value: "21-40", label: "21-40 hours" },
  { value: "40+", label: "More than 40 hours" },
];

const timeOwnerOptions = [
  { value: "me", label: "Me (founder/CEO)" },
  { value: "exec", label: "Executive team" },
  { value: "managers", label: "Mid-level managers" },
  { value: "team", label: "Team members" },
  { value: "contractors", label: "Contractors/freelancers" },
];

const hourlyValueOptions = [
  { value: "skip", label: "Skip this question" },
  { value: "under-50", label: "Under $50/hour" },
  { value: "50-100", label: "$50-100/hour" },
  { value: "100-250", label: "$100-250/hour" },
  { value: "250-500", label: "$250-500/hour" },
  { value: "500+", label: "Over $500/hour" },
];

type FormSection = "contact" | "readiness";

const AIScoreForm = () => {
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState<FormSection>("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      linkedin: "",
      businessType: "",
      teamSize: "",
    },
  });

  const readinessForm = useForm<z.infer<typeof readinessSchema>>({
    resolver: zodResolver(readinessSchema),
    defaultValues: {
      currentUse: "",
      repetitiveTasks: "",
      manualAreas: [],
      leadHandling: "",
      sopApproach: "",
      aiComfort: "",
      automationPriority: "",
      manualHours: "",
      timeOwner: "",
      hourlyValue: "",
    },
  });

  const progress = currentSection === "contact" ? 30 : 80;

  const onContactNext = contactForm.handleSubmit((data) => {
    console.log("Contact data:", data);
    setCurrentSection("readiness");
  });

  const onReadinessSubmit = readinessForm.handleSubmit(async (data) => {
    setIsSubmitting(true);
    // Combine data from both forms
    const formData = {
      ...contactForm.getValues(),
      ...data,
    };
    
    console.log("Complete form data:", formData);
    
    try {
      // Here would go the API call to process the scorecard data
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Scorecard submitted!",
        description: "Your AI readiness score is being calculated.",
      });
      
      // Redirect or show results component
      // This would be replaced with actual logic to display results
      alert("Your form has been submitted! Results functionality will be implemented next.");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error submitting your scorecard. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <div className="p-6">
      <Progress value={progress} className="h-2 mb-8" />
      
      {currentSection === "contact" && (
        <Form {...contactForm}>
          <form onSubmit={onContactNext} className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact & Business Information</h3>
            
            <FormField
              control={contactForm.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q1: </span>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q2: </span>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={contactForm.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q3: </span>LinkedIn Profile (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={contactForm.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q4: </span>What best describes your business type?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={contactForm.control}
              name="teamSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q5: </span>How many people are on your team (including contractors)?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your team size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {teamSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      )}
      
      {currentSection === "readiness" && (
        <Form {...readinessForm}>
          <form onSubmit={onReadinessSubmit} className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">AI Readiness Assessment</h3>
            
            <FormField
              control={readinessForm.control}
              name="currentUse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q6: </span>How would you describe your current use of automation or AI in your business?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {currentUseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="repetitiveTasks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q7: </span>How are repetitive tasks handled in your business?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {repetitiveTasksOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="manualAreas"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel><span className="font-medium">Q8: </span>Which 2 areas of your business feel the most manual or inefficient? (Choose up to 2)</FormLabel>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {manualAreasOptions.map((area) => (
                      <FormField
                        key={area.value}
                        control={readinessForm.control}
                        name="manualAreas"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={area.value}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(area.value)}
                                  onCheckedChange={(checked) => {
                                    const current = [...(field.value || [])];
                                    if (checked && current.length < 2) {
                                      field.onChange([...current, area.value]);
                                    } else if (!checked) {
                                      field.onChange(current.filter((value) => value !== area.value));
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">{area.label}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="leadHandling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q9: </span>What happens when a lead reaches out to your business?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {leadHandlingOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="sopApproach"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q10: </span>What's your current approach to documenting SOPs?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sopApproachOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="aiComfort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q11: </span>How comfortable are you identifying where AI could fit in your business?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {aiComfortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="automationPriority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q12: </span>If you could automate one part of your business today, what would it be?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {automationPriorityOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="manualHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q13: </span>How many hours/week are spent on manual, repeatable tasks?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {manualHoursOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="timeOwner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q14: </span>Whose time is being spent on these tasks?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeOwnerOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={readinessForm.control}
              name="hourlyValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel><span className="font-medium">Q15: </span>What's your estimated hourly time value?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option (optional)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {hourlyValueOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                className="sm:w-1/3"
                onClick={() => setCurrentSection("contact")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark sm:w-2/3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Calculating..." : "Calculate My AI Score"}
              </Button>
            </div>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              See your readiness score, your automation bottlenecks, and what to do next.
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default AIScoreForm;

