
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
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
import { readinessSchema, type ReadinessFormValues } from "./schemas";
import {
  currentUseOptions,
  repetitiveTasksOptions,
  manualAreasOptions,
  leadHandlingOptions,
  sopApproachOptions,
  aiComfortOptions,
  automationPriorityOptions,
  manualHoursOptions,
  timeOwnerOptions,
  hourlyValueOptions
} from "./constants";

interface ReadinessFormProps {
  onBack: () => void;
  onSubmit: (data: ReadinessFormValues) => void;
  isSubmitting: boolean;
  defaultValues?: Partial<ReadinessFormValues>;
}

const ReadinessForm: React.FC<ReadinessFormProps> = ({ 
  onBack, 
  onSubmit,
  isSubmitting,
  defaultValues = {} 
}) => {
  const form = useForm<ReadinessFormValues>({
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
      ...defaultValues
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">AI Readiness Assessment</h3>
        
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
                    control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
          name="hourlyValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="font-medium">Q15: </span>What's the estimated hourly value of the person doing these tasks?
                <br />
                <i className="text-sm text-gray-500">(Whether it's you, your team, or a contractor)</i>
              </FormLabel>
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
            onClick={onBack}
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
          We'll also email these results to you.
        </p>
      </form>
    </Form>
  );
};

export default ReadinessForm;
