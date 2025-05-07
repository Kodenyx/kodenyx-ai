
import React from "react";
import TierIdentityBlock from "./TierIdentityBlock";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import CtaBlock from "./CtaBlock";
import InsightsBlock from "./InsightsBlock";
import FeedbackBlock from "./FeedbackBlock";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  // Generate insights based on score
  const getScoreInsights = (score: number) => {
    if (score < 3) {
      return [
        "Your business is in the early stages of AI adoption.",
        "Manual processes are likely costing you significant time and potential revenue.",
        "Focus on identifying 1-2 key areas where automation could provide immediate relief."
      ];
    } else if (score < 7) {
      return [
        "You've made good progress in leveraging some automation.",
        "There are still significant opportunities to integrate AI more deeply into your operations.",
        "Consider how AI could transform your customer interactions and internal processes."
      ];
    } else {
      return [
        "You're well-positioned to leverage AI as a competitive advantage.",
        "Focus on refining and expanding your current AI implementations.",
        "Consider creating AI workflows that can operate 24/7 without your direct involvement."
      ];
    }
  };
  
  const insights = getScoreInsights(score);

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
      
      {/* SECTION 5: Insights Block */}
      <InsightsBlock insights={insights} />
      
      {/* SECTION 6: Feedback Block - NEW */}
      <FeedbackBlock />

      {/* SECTION 7: Enhanced CTA Block */}
      {score > 7 && <CtaBlock />}
    </div>
  );
};

export default AIScoreResults;
