
import { hourlyRates, weeklyHours } from "./constants";

// Helper function to calculate cost of inaction
export function calculateCostOfInaction(hourlyValue: string | undefined, manualHours: string | undefined): number {
  if (!hourlyValue || hourlyValue === 'skip' || !manualHours) {
    return 0;
  }
  
  const hourlyRate = hourlyRates[hourlyValue as keyof typeof hourlyRates] || 0;
  const hours = weeklyHours[manualHours as keyof typeof weeklyHours] || 0;
  
  // Calculate monthly cost (4 weeks)
  return hourlyRate * hours * 4;
}

// Function to send score results via email
export const sendScoreEmail = async (score: number, formData: any) => {
  try {
    console.log("Sending score email with data:", { score, email: formData.email });
    
    const { data, error } = await supabase.functions.invoke('send-score-email', {
      body: { score, formData }
    });
    
    if (error) {
      console.error("Error sending score email:", error);
      return { success: false, error };
    } else {
      console.log("Score email sent successfully:", data);
      return { success: true, data };
    }
  } catch (err) {
    console.error("Exception sending score email:", err);
    return { success: false, error: err };
  }
};

// Function to send score data to database
export const sendScoreToDatabase = async (score: number, formData: any, costOfInaction: number) => {
  try {
    console.log("Sending score to database:", { score, formData, costOfInaction });
    
    const { data, error } = await supabase.functions.invoke('send-to-sheets', {
      body: { score, formData, costOfInaction }
    });
    
    if (error) {
      console.error("Error storing score in database:", error);
      return { success: false, error };
    } else {
      console.log("Score stored in database successfully:", data);
      return { success: true, data };
    }
  } catch (err) {
    console.error("Exception storing score in database:", err);
    return { success: false, error: err };
  }
};

// Import this at the top of the file
import { supabase } from "@/integrations/supabase/client";
