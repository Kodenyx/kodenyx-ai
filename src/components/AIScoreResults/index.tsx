
import React from "react";
import TierIdentityBlock from "./TierIdentityBlock";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import CtaBlock from "./CtaBlock";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  return (
    <div className="p-6 bg-white rounded-lg">
      {/* SECTION 1: Tier Identity Block */}
      <TierIdentityBlock score={score} />
      
      {/* Grid Layout for Score and Opportunity Sections */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* SECTION 2: Enhanced Score Display */}
        <ScoreDisplayBlock score={score} />

        {/* SECTION 3: Enhanced Top Automation Opportunity */}
        <AutomationOpportunityBlock 
          automationPriority={formData.automationPriority} 
        />
      </div>

      {/* SECTION 4: Enhanced Cost of Inaction */}
      <CostOfInactionBlock 
        manualHours={formData.manualHours} 
        hourlyValue={formData.hourlyValue || "skip"} 
      />

      {/* SECTION 5: Enhanced CTA Block */}
      {score > 7 && <CtaBlock />}
    </div>
  );
};

export default AIScoreResults;
