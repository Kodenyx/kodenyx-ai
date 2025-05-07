
import React, { useState, useEffect } from "react";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import TierIdentityBlock from "./TierIdentityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import InsightsBlock from "./InsightsBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CtaBlock from "./CtaBlock";
import { supabase } from "@/integrations/supabase/client";
import { calculateCostOfInaction } from "@/utils/scoreUtils";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  const [isSending, setIsSending] = useState<boolean>(false);
  
  // Calculate cost of inaction 
  const costOfInaction = calculateCostOfInaction(formData.manualHours || "11-20", formData.hourlyValue || "skip");

  // Automatically store data in database when the component mounts
  useEffect(() => {
    const storeInDatabase = async () => {
      setIsSending(true);
      try {
        const { data, error } = await supabase.functions.invoke('send-to-sheets', {
          body: { 
            score, 
            formData,
            costOfInaction
          }
        });

        if (error) throw error;
        
        console.log("Score data successfully stored in database");
        
      } catch (error) {
        console.error("Error storing data:", error);
      } finally {
        setIsSending(false);
      }
    };

    // Call the function to store data automatically
    storeInDatabase();
  }, [score, formData, costOfInaction]);

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
