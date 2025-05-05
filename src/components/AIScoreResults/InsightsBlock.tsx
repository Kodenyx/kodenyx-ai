
import React from "react";

interface InsightsBlockProps {
  insights: string[];
}

const InsightsBlock: React.FC<InsightsBlockProps> = ({ insights }) => {
  return (
    <div className="mb-10 bg-slate-50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">What Your Score Means</h3>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <p key={index} className="text-lg">{insight}</p>
        ))}
      </div>
    </div>
  );
};

export default InsightsBlock;
