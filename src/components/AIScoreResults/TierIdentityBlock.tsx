
import React from "react";
import { determineReadinessTier } from "@/utils/scoreUtils";
import { Award, ChevronRight, TrendingUp } from "lucide-react";

interface TierIdentityBlockProps {
  score: number;
}

const TierIdentityBlock: React.FC<TierIdentityBlockProps> = ({ score }) => {
  // Get tier information
  const { tierName, description, nextTier, nextTierName } = determineReadinessTier(score);
  const scorePercentage = Math.round((score / 27) * 100);
  
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
        <Award className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        You're a: <span className="text-primary">{tierName}</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-5">{description}</p>
      
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
