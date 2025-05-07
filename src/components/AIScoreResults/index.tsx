
import React from "react";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import TierIdentityBlock from "./TierIdentityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import InsightsBlock from "./InsightsBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CtaBlock from "./CtaBlock";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
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
      <CtaBlock score={score} />
    </div>
  );
};

export default AIScoreResults;
