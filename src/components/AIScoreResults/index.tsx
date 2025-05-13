
import React from "react";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import TierIdentityBlock from "./TierIdentityBlock";
import InsightsBlock from "./InsightsBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import FeedbackBlock from "./FeedbackBlock";
import CtaBlock from "./CtaBlock";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  return (
    <div className="p-6 md:p-8 space-y-10">
      <ScoreDisplayBlock score={score} />
      <TierIdentityBlock score={score} />
      <InsightsBlock score={score} formData={formData} />
      <AutomationOpportunityBlock score={score} formData={formData} />
      <CostOfInactionBlock score={score} formData={formData} />
      <FeedbackBlock />
      <CtaBlock />
    </div>
  );
};

export default AIScoreResults;
