
import { z } from "zod";

// Define the form schema for contact section
export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  linkedin: z.string().optional(),
  businessType: z.string().min(1, "Please select a business type"),
  teamSize: z.string().min(1, "Please select your team size"),
});

// Define the form schema for readiness section
export const readinessSchema = z.object({
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

// Define types based on schemas
export type ContactFormValues = z.infer<typeof contactSchema>;
export type ReadinessFormValues = z.infer<typeof readinessSchema>;
