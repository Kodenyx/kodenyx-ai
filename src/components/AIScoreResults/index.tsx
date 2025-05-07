
import React, { useState, useEffect } from "react";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import TierIdentityBlock from "./TierIdentityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import InsightsBlock from "./InsightsBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CtaBlock from "./CtaBlock";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const { toast } = useToast();
  
  // Automatically send data to Google Sheets when the component mounts
  useEffect(() => {
    const sendToGoogleSheets = async () => {
      // Define a default webhook URL - this should be your main webhook URL that all results go to
      const defaultWebhookUrl = "https://YOUR_DEFAULT_WEBHOOK_URL"; 
      
      setIsSending(true);
      try {
        const { data, error } = await supabase.functions.invoke('send-to-sheets', {
          body: { 
            score, 
            formData,
            webhookUrl: defaultWebhookUrl
          }
        });

        if (error) throw error;
        
        console.log("Score data automatically sent to Google Sheets");
      } catch (error) {
        console.error("Error sending to Google Sheets:", error);
        // We don't show errors to the user since this is happening behind the scenes
      } finally {
        setIsSending(false);
      }
    };

    // Call the function to send data automatically
    sendToGoogleSheets();
  }, [score, formData]);

  return (
    <div className="p-4 md:p-8">
      {/* Score Display */}
      <ScoreDisplayBlock score={score} />
      
      {/* Tier Identity Block */}
      <TierIdentityBlock score={score} />
      
      {/* Cost of Inaction Block */}
      <CostOfInactionBlock 
        manualHours={formData.manualHours || "11-20"} 
        hourlyValue={formData.hourlyValue || "skip"}
        teamSize={formData.teamSize}
      />
      
      {/* Insights Block */}
      <InsightsBlock score={score} />
      
      {/* Automation Opportunity Block */}
      <AutomationOpportunityBlock 
        automationPriority={formData.automationPriority || "lead-nurture"} 
      />
      
      {/* Call to Action Block */}
      <CtaBlock />
    </div>
  );
};

export default AIScoreResults;
