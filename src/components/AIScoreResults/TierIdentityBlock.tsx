
import React from "react";
import { determineReadinessTier } from "@/utils/scoreUtils";
import { Award, ChevronRight, TrendingUp } from "lucide-react";

interface TierIdentityBlockProps {
  score: number;
}

const TierIdentityBlock: React.FC<TierIdentityBlockProps> = ({ score }) => {
  // Get tier information from the scoreUtils
  const { tierName } = determineReadinessTier(score);
  const scorePercentage = Math.round((score / 27) * 100);
  
  // Dynamic headline and subheadline based on score
  let emotionalTruth = "";
  let subHeadline = "";
  
  if (score <= 6) {
    emotionalTruth = "You're Wearing Every Hat and It's Burning You Out";
    subHeadline = "You're the engine, the operator, and the firefighter. But it's costing you time, sanity, and scale. Automation is the key to finally stepping out of the grind.";
  } else if (score <= 13) {
    emotionalTruth = "Still Doing Too Much by Hand";
    subHeadline = "You've started to systemize, but you're still the glue. You're wasting hours every week doing things AI could handle — and blocking your business from real growth.";
  } else if (score <= 20) {
    emotionalTruth = "You've Built the Machine, But You're Still in It";
    subHeadline = "The structure is there, but the systems still need you. It's time to add AI to run operations without you — so you can scale without stress or staffing up.";
  } else if (score <= 24) {
    emotionalTruth = "But You're Still in the Loop Too Often";
    subHeadline = "You've done the hard part — now it's about full freedom. AI agents and real-time decisioning can give you back time, reduce costs, and drive 24/7 growth.";
  } else {
    emotionalTruth = "But There's One More Layer of Leverage Left";
    subHeadline = "You're almost untouchable — but there's still inefficiency at the edges. It's time to embed predictive workflows and adaptive systems that run without oversight.";
  }
  
  // Determine if there's a next tier based on score
  const { nextTier, nextTierName } = determineReadinessTier(score);
  
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
        <Award className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        You're a <span className="text-primary">{tierName}</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
        {emotionalTruth}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-5">{subHeadline}</p>
      
      {nextTier && (
        <div className="mt-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 inline-block">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-medium">Up Next: {nextTierName}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-sm text-gray-600">Where founders save 10+ hours/week</span>
          </div>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600">
        You're ahead of {scorePercentage}% of founders in our database — but still operating at half capacity
      </div>
    </div>
  );
};

export default TierIdentityBlock;
