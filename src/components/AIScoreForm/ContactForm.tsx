
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
import { contactSchema, type ContactFormValues } from "./schemas";
import { businessTypes, teamSizes } from "./constants";

interface ContactFormProps {
  onNext: (data: ContactFormValues) => void;
  defaultValues?: Partial<ContactFormValues>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onNext, defaultValues = {} }) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      linkedin: "",
      businessType: "",
      teamSize: "",
      ...defaultValues
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log("Contact data:", data);
    onNext(data);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Contact & Business Information</h3>
        
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
  );
};

export default ContactForm;
