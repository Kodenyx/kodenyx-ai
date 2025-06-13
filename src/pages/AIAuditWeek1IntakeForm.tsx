

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SimpleNavbar from "@/components/SimpleNavbar";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Settings, 
  Clock, 
  Database, 
  TrendingDown,
  Send,
  Plus,
  Minus,
  Building
} from "lucide-react";

interface FormData {
  // Business Overview
  businessName: string;
  teamSize: string;
  
  // System Flow
  topWorkflows: string;
  clientAssignment: string;
  onboardingProcess: string;
  deliveryTools: string[];
  otherDeliveryTool: string;
  trackingProgress: string;
  
  // Time Drains
  inefficientTasks: string[];
  manualOnboarding: string;
  chaseDownTask: string[];
  updateGathering: string;
  timeConsumingWork: string;
  
  // Data & Tools
  salesOpsTools: string;
  underusedTools: string;
  neededData: string;
  clientNotesStorage: string;
  
  // Growth Blockers
  newClientRejection: string;
  wouldBreakFirst: string;
  confidenceNeeds: string;
  scalingIssues: string;
  auditGoal: string;
  
  // Additional Thoughts
  additionalThoughts: string;
}

const AIAuditWeek1IntakeForm = () => {
  const { toast } = useToast();
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [inefficientTasks, setInefficientTasks] = useState<string[]>(['']);
  const [chaseDownTasks, setChaseDownTasks] = useState<string[]>(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      businessName: "",
      teamSize: "",
      topWorkflows: "",
      clientAssignment: "",
      onboardingProcess: "",
      deliveryTools: [],
      otherDeliveryTool: "",
      trackingProgress: "",
      inefficientTasks: [''],
      manualOnboarding: "",
      chaseDownTask: [''],
      updateGathering: "",
      timeConsumingWork: "",
      salesOpsTools: "",
      underusedTools: "",
      neededData: "",
      clientNotesStorage: "",
      newClientRejection: "",
      wouldBreakFirst: "",
      confidenceNeeds: "",
      scalingIssues: "",
      auditGoal: "",
      additionalThoughts: "",
    },
  });

  const deliveryToolOptions = [
    "Slack",
    "Google Docs",
    "Airtable",
    "SharePoint",
    "Notion",
    "Other"
  ];

  const handleToolChange = (tool: string, checked: boolean) => {
    let updatedTools;
    if (checked) {
      updatedTools = [...selectedTools, tool];
      if (tool === "Other") {
        setShowOtherInput(true);
      }
    } else {
      updatedTools = selectedTools.filter(t => t !== tool);
      if (tool === "Other") {
        setShowOtherInput(false);
        form.setValue('otherDeliveryTool', '');
      }
    }
    setSelectedTools(updatedTools);
    form.setValue('deliveryTools', updatedTools);
  };

  const addInefficientTask = () => {
    const newTasks = [...inefficientTasks, ''];
    setInefficientTasks(newTasks);
    form.setValue('inefficientTasks', newTasks);
  };

  const removeInefficientTask = (index: number) => {
    if (inefficientTasks.length > 1) {
      const updatedTasks = inefficientTasks.filter((_, i) => i !== index);
      setInefficientTasks(updatedTasks);
      form.setValue('inefficientTasks', updatedTasks);
    }
  };

  const updateInefficientTask = (index: number, value: string) => {
    const updatedTasks = [...inefficientTasks];
    updatedTasks[index] = value;
    setInefficientTasks(updatedTasks);
    form.setValue('inefficientTasks', updatedTasks);
  };

  const addChaseDownTask = () => {
    const newTasks = [...chaseDownTasks, ''];
    setChaseDownTasks(newTasks);
    form.setValue('chaseDownTask', newTasks);
  };

  const removeChaseDownTask = (index: number) => {
    if (chaseDownTasks.length > 1) {
      const updatedTasks = chaseDownTasks.filter((_, i) => i !== index);
      setChaseDownTasks(updatedTasks);
      form.setValue('chaseDownTask', updatedTasks);
    }
  };

  const updateChaseDownTask = (index: number, value: string) => {
    const updatedTasks = [...chaseDownTasks];
    updatedTasks[index] = value;
    setChaseDownTasks(updatedTasks);
    form.setValue('chaseDownTask', updatedTasks);
  };

  const validateForm = (): boolean => {
    const data = form.getValues();
    let hasErrors = false;
    
    // Check required fields
    if (!data.businessName.trim()) {
      form.setError('businessName', { message: 'Business name is required' });
      hasErrors = true;
    }
    
    if (!data.teamSize) {
      form.setError('teamSize', { message: 'Team size is required' });
      hasErrors = true;
    }
    
    if (!data.topWorkflows.trim()) {
      form.setError('topWorkflows', { message: 'Top workflows is required' });
      hasErrors = true;
    }
    
    if (!data.clientAssignment.trim()) {
      form.setError('clientAssignment', { message: 'Client assignment process is required' });
      hasErrors = true;
    }
    
    if (!data.onboardingProcess) {
      form.setError('onboardingProcess', { message: 'Onboarding process selection is required' });
      hasErrors = true;
    }
    
    if (data.deliveryTools.length === 0) {
      toast({
        variant: "destructive",
        title: "Required Field Missing",
        description: "Please select at least one delivery tool.",
      });
      hasErrors = true;
    }
    
    if (!data.trackingProgress.trim()) {
      form.setError('trackingProgress', { message: 'Progress tracking method is required' });
      hasErrors = true;
    }
    
    // Check inefficient tasks - at least one non-empty task
    const validInefficientTasks = data.inefficientTasks.filter(task => task.trim());
    if (validInefficientTasks.length === 0) {
      toast({
        variant: "destructive",
        title: "Required Field Missing",
        description: "Please enter at least one inefficient task.",
      });
      hasErrors = true;
    }
    
    if (!data.manualOnboarding.trim()) {
      form.setError('manualOnboarding', { message: 'Manual onboarding description is required' });
      hasErrors = true;
    }
    
    // Check chase down tasks - at least one non-empty task
    const validChaseDownTasks = data.chaseDownTask.filter(task => task.trim());
    if (validChaseDownTasks.length === 0) {
      toast({
        variant: "destructive",
        title: "Required Field Missing",
        description: "Please enter at least one item you chase down for.",
      });
      hasErrors = true;
    }
    
    if (!data.updateGathering.trim()) {
      form.setError('updateGathering', { message: 'Update gathering process is required' });
      hasErrors = true;
    }
    
    if (!data.timeConsumingWork.trim()) {
      form.setError('timeConsumingWork', { message: 'Time consuming work description is required' });
      hasErrors = true;
    }
    
    if (!data.salesOpsTools.trim()) {
      form.setError('salesOpsTools', { message: 'Sales/ops tools list is required' });
      hasErrors = true;
    }
    
    if (!data.underusedTools.trim()) {
      form.setError('underusedTools', { message: 'Underused tools information is required' });
      hasErrors = true;
    }
    
    if (!data.neededData.trim()) {
      form.setError('neededData', { message: 'Needed data description is required' });
      hasErrors = true;
    }
    
    if (!data.clientNotesStorage.trim()) {
      form.setError('clientNotesStorage', { message: 'Client notes storage location is required' });
      hasErrors = true;
    }
    
    if (!data.newClientRejection.trim()) {
      form.setError('newClientRejection', { message: 'New client rejection reason is required' });
      hasErrors = true;
    }
    
    if (!data.wouldBreakFirst.trim()) {
      form.setError('wouldBreakFirst', { message: 'Scaling bottleneck description is required' });
      hasErrors = true;
    }
    
    if (!data.confidenceNeeds.trim()) {
      form.setError('confidenceNeeds', { message: 'Confidence needs description is required' });
      hasErrors = true;
    }
    
    if (!data.scalingIssues.trim()) {
      form.setError('scalingIssues', { message: 'Scaling issues description is required' });
      hasErrors = true;
    }
    
    if (!data.auditGoal.trim()) {
      form.setError('auditGoal', { message: 'Audit goal is required' });
      hasErrors = true;
    }
    
    if (!data.additionalThoughts.trim()) {
      form.setError('additionalThoughts', { message: 'Additional thoughts are required' });
      hasErrors = true;
    }
    
    return !hasErrors;
  };

  const onSubmit = async (data: FormData) => {
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Please Complete All Fields",
        description: "All questions are required. Please fill in all fields before submitting.",
      });
      return;
    }
    
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    try {
      // Submit to our edge function
      const { data: result, error } = await supabase.functions.invoke('submit-audit-intake', {
        body: data
      });

      if (error) {
        console.error("Error submitting form:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was an error submitting your form. Please try again.",
        });
      } else {
        console.log("Form submitted successfully:", result);
        toast({
          title: "Form Submitted Successfully",
          description: "Thank you for completing the Week 1 intake form. We'll review your responses and get back to you soon.",
        });
        
        // Reset form after successful submission
        form.reset();
        setSelectedTools([]);
        setShowOtherInput(false);
        setInefficientTasks(['']);
        setChaseDownTasks(['']);
      }
    } catch (error) {
      console.error("Exception submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleNavbar />
      
      {/* Header Section - Keep Dark */}
      <section className="pt-24 pb-8 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
            Step 1 of Your AI Audit
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
            Tell Us About Your Business—
            <span className="text-primary block">We'll Show You Where AI Fits</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            This intake helps us create a personalized automation blueprint that actually works for your team and processes.
          </p>
        </div>
      </section>

      {/* Form Content - Light Background */}
      <div className="container mx-auto px-4 pb-16 -mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-4xl mx-auto">
            
            {/* New Section 0: Business Overview */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Business Overview</CardTitle>
                    <CardDescription className="text-gray-600">Tell us about your business basics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">Business/Company Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your business name..."
                          {...field}
                          className="border-gray-300 focus:border-primary focus:ring-primary"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How many team members do you have? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} required>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1-2" id="team-1-2" />
                            <Label htmlFor="team-1-2">1-2 team members</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3-5" id="team-3-5" />
                            <Label htmlFor="team-3-5">3-5 team members</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6-10" id="team-6-10" />
                            <Label htmlFor="team-6-10">6-10 team members</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="11-25" id="team-11-25" />
                            <Label htmlFor="team-11-25">11-25 team members</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="26+" id="team-26-plus" />
                            <Label htmlFor="team-26-plus">26+ team members</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 1: System Flow */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">System Flow</CardTitle>
                    <CardDescription className="text-gray-600">Understanding your current workflow processes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <FormField
                  control={form.control}
                  name="topWorkflows"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">1. What are the top 3 workflows your team handles regularly? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your most common workflows..."
                          {...field}
                          rows={4}
                          className="border-gray-300 focus:border-primary focus:ring-primary"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="clientAssignment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>2. How are new clients assigned internally? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Explain your client assignment process..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="onboardingProcess"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>3. Do you follow a standard onboarding process? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} required>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no">No</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sort-of" id="sort-of" />
                            <Label htmlFor="sort-of">Sort of – varies by team member</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label className="text-sm font-medium">4. Which tools do you use to manage client delivery? *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                    {deliveryToolOptions.map((tool) => (
                      <div key={tool} className="flex items-center space-x-2">
                        <Checkbox
                          id={tool}
                          checked={selectedTools.includes(tool)}
                          onCheckedChange={(checked) => handleToolChange(tool, !!checked)}
                        />
                        <Label htmlFor={tool} className="text-sm">{tool}</Label>
                      </div>
                    ))}
                  </div>
                  {showOtherInput && (
                    <div className="mt-4">
                      <FormField
                        control={form.control}
                        name="otherDeliveryTool"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Please specify other tool..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="trackingProgress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>5. How do you track work and progress after onboarding? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your progress tracking methods..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 2: Time Drains */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Time Drains</CardTitle>
                    <CardDescription className="text-gray-600">Identifying inefficiencies and manual processes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div>
                  <FormLabel>6. What's one task your team repeats that feels inefficient? *</FormLabel>
                  <div className="space-y-3 mt-3">
                    {inefficientTasks.map((task, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          placeholder="Enter an inefficient task..."
                          value={task}
                          onChange={(e) => updateInefficientTask(index, e.target.value)}
                          className="flex-1"
                          required={index === 0}
                        />
                        {inefficientTasks.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeInefficientTask(index)}
                            className="flex items-center gap-1 px-2"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addInefficientTask}
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Another Task
                    </Button>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="manualOnboarding"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>7. What's the most manual part of your onboarding process? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the manual onboarding steps..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <FormLabel>8. What do you often have to chase someone down for? *</FormLabel>
                  <div className="space-y-3 mt-3">
                    {chaseDownTasks.map((task, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          placeholder="What do you frequently follow up on..."
                          value={task}
                          onChange={(e) => updateChaseDownTask(index, e.target.value)}
                          className="flex-1"
                          required={index === 0}
                        />
                        {chaseDownTasks.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeChaseDownTask(index)}
                            className="flex items-center gap-1 px-2"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addChaseDownTask}
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Another Item
                    </Button>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="updateGathering"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>9. How do you gather updates before a client check-in? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your update gathering process..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeConsumingWork"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>10. What part of your work (or your team's) eats up too much time? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Identify time-consuming activities..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 3: Data & Tools */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Data & Tools</CardTitle>
                    <CardDescription className="text-gray-600">Understanding your current tech stack and data needs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <FormField
                  control={form.control}
                  name="salesOpsTools"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>11. Which tools do you use for sales, internal ops, and reporting? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List your current tools and their purposes..."
                          {...field}
                          rows={4}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="underusedTools"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>12. Are any tools underused, duplicated, or not working as intended? *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Identify problematic tools..."
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="neededData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>13. What's a piece of data you wish you had at your fingertips? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the data you need but don't easily have..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="clientNotesStorage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>14. Where are important client notes or convos stored today? *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Where do you store client information..."
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 4: Growth Blockers */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Growth Blockers</CardTitle>
                    <CardDescription className="text-gray-600">Identifying what prevents your business from scaling</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <FormField
                  control={form.control}
                  name="newClientRejection"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>15. What's one reason you've said "no" to taking on a new client? *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Why have you turned down clients..."
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="wouldBreakFirst"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>16. If 10 new clients signed next month, what would break first? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What would be your biggest bottleneck..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confidenceNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>17. What would need to happen for your team to confidently take on more clients? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What changes would give you confidence to scale..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="scalingIssues"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>18. What system or process hasn't scaled well as your business has grown? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Identify scaling challenges..."
                          {...field}
                          rows={3}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="auditGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>19. What's your #1 goal for this audit? What would make it a win? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Define success for this audit..."
                          {...field}
                          rows={4}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Additional Thoughts Section */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="pt-6 p-8">
                <FormField
                  control={form.control}
                  name="additionalThoughts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">20. Anything on your mind you don't see on this form and would want our team to consider? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share any additional thoughts, concerns, or context that might be helpful for our team to know..."
                          {...field}
                          rows={4}
                          className="border-gray-300 focus:border-primary focus:ring-primary"
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Section */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="pt-6 p-8">
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 w-5 h-5" />
                    {isSubmitting ? "Submitting..." : "Submit Week 1 Intake Form"}
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    We will review your responses and contact you within 24 hours to schedule your Week 2 call.
                  </p>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AIAuditWeek1IntakeForm;

