
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
  
  // Automatically store data in database when the component mounts
  useEffect(() => {
    const storeInDatabase = async () => {
      setIsSending(true);
      try {
        const { data, error } = await supabase.functions.invoke('send-to-sheets', {
          body: { 
            score, 
            formData
          }
        });

        if (error) throw error;
        
        console.log("Score data successfully stored in database");
        
        toast({
          title: "Data saved",
          description: "Your results have been securely stored",
          variant: "default"
        });
      } catch (error) {
        console.error("Error storing data:", error);
        
        toast({
          title: "Storage error",
          description: "There was an issue saving your results, but you can still view them here",
          variant: "destructive"
        });
      } finally {
        setIsSending(false);
      }
    };

    // Call the function to store data automatically
    storeInDatabase();
  }, [score, formData, toast]);

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
