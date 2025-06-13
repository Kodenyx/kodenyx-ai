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
import { 
  Settings, 
  Clock, 
  Database, 
  TrendingDown,
  Send,
  Plus
} from "lucide-react";

interface FormData {
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
  chaseDownTask: string;
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
}

const AIAuditWeek1IntakeForm = () => {
  const { toast } = useToast();
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [inefficientTasks, setInefficientTasks] = useState<string[]>(['']);
  
  const form = useForm<FormData>({
    defaultValues: {
      topWorkflows: "",
      clientAssignment: "",
      onboardingProcess: "",
      deliveryTools: [],
      otherDeliveryTool: "",
      trackingProgress: "",
      inefficientTasks: [''],
      manualOnboarding: "",
      chaseDownTask: "",
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

  const updateInefficientTask = (index: number, value: string) => {
    const updatedTasks = [...inefficientTasks];
    updatedTasks[index] = value;
    setInefficientTasks(updatedTasks);
    form.setValue('inefficientTasks', updatedTasks);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Form Submitted Successfully",
      description: "Thank you for completing the Week 1 intake form. We'll review your responses and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 max-w-4xl mx-auto">
            AI Audit Intake – Week 1: 
            <span className="text-primary block">Understanding Your Business Today</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Help us understand your current workflows, pain points, and growth challenges 
            so we can create the most effective AI automation roadmap for your business.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-4xl mx-auto">
            
            {/* Section 1: System Flow */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">System Flow</CardTitle>
                    <CardDescription>Understanding your current workflow processes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="topWorkflows"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1. What are the top 3 workflows your team handles regularly?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your most common workflows..."
                          {...field}
                          rows={4}
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
                      <FormLabel>2. How are new clients assigned internally?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Explain your client assignment process..."
                          {...field}
                          rows={3}
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
                      <FormLabel>3. Do you follow a standard onboarding process?</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value}>
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
                  <Label className="text-sm font-medium">4. Which tools do you use to manage client delivery?</Label>
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
                      <FormLabel>5. How do you track work and progress after onboarding?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your progress tracking methods..."
                          {...field}
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 2: Time Drains */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Time Drains</CardTitle>
                    <CardDescription>Identifying inefficiencies and manual processes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <FormLabel>6. What's one task your team repeats that feels inefficient?</FormLabel>
                  <div className="space-y-3 mt-3">
                    {inefficientTasks.map((task, index) => (
                      <Input
                        key={index}
                        placeholder="Enter an inefficient task..."
                        value={task}
                        onChange={(e) => updateInefficientTask(index, e.target.value)}
                      />
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
                      <FormLabel>7. What's the most manual part of your onboarding process?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the manual onboarding steps..."
                          {...field}
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="chaseDownTask"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>8. What do you often have to chase someone down for?</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="What do you frequently follow up on..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="updateGathering"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>9. How do you gather updates before a client check-in?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your update gathering process..."
                          {...field}
                          rows={3}
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
                      <FormLabel>10. What part of your work (or your team's) eats up too much time?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Identify time-consuming activities..."
                          {...field}
                          rows={3}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 3: Data & Tools */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Data & Tools</CardTitle>
                    <CardDescription>Understanding your current tech stack and data needs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="salesOpsTools"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>11. Which tools do you use for sales, internal ops, and reporting?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List your current tools and their purposes..."
                          {...field}
                          rows={4}
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
                      <FormLabel>12. Are any tools underused, duplicated, or not working as intended?</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Identify problematic tools..."
                          {...field}
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
                      <FormLabel>13. What's a piece of data you wish you had at your fingertips?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the data you need but don't easily have..."
                          {...field}
                          rows={3}
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
                      <FormLabel>14. Where are important client notes or convos stored today?</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Where do you store client information..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Section 4: Growth Blockers */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Growth Blockers</CardTitle>
                    <CardDescription>Identifying what prevents your business from scaling</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="newClientRejection"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>15. What's one reason you've said "no" to taking on a new client?</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Why have you turned down clients..."
                          {...field}
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
                      <FormLabel>16. If 10 new clients signed next month, what would break first?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What would be your biggest bottleneck..."
                          {...field}
                          rows={3}
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
                      <FormLabel>17. What would need to happen for your team to confidently take on more clients?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What changes would give you confidence to scale..."
                          {...field}
                          rows={3}
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
                      <FormLabel>18. What system or process hasn't scaled well as your business has grown?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Identify scaling challenges..."
                          {...field}
                          rows={3}
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
                      <FormLabel>19. What's your #1 goal for this audit? What would make it a win?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Define success for this audit..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4">
                    <Send className="mr-2 w-5 h-5" />
                    Submit Week 1 Intake Form
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll review your responses and contact you within 24 hours to schedule your audit kickoff call.
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
