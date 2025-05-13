
import React from "react";

interface InsightsBlockProps {
  score: number;
  formData?: any; // Added formData as an optional prop
}

const InsightsBlock: React.FC<InsightsBlockProps> = ({ score }) => {
  // Generate insights based on score
  const getInsights = (): string[] => {
    if (score <= 6) {
      return [
        "Your business is primarily manual with minimal systems in place.",
        "Most of your time is spent on repetitive tasks that could be automated.",
        "You're likely experiencing burnout from wearing too many hats.",
        "Your growth is limited by how much you personally can handle each day."
      ];
    } else if (score <= 13) {
      return [
        "You've started building systems, but they still rely heavily on you.",
        "You've recognized the need for automation but haven't fully implemented it.",
        "Your business has potential to scale, but is bottlenecked by manual processes.",
        "With targeted AI solutions, you could free up 10+ hours per week."
      ];
    } else if (score <= 20) {
      return [
        "You have solid systems in place, but you're still involved in daily operations.",
        "Much of your team's time is spent on tasks that could be automated with AI.",
        "Your business has good momentum but still hits capacity ceilings.",
        "Implementing AI decision-making could give you true scale without hiring."
      ];
    } else {
      return [
        "Your business already operates with strong systems and some automation.",
        "You're ready for advanced AI implementation to handle complex decisions.",
        "With a few strategic AI upgrades, your business could run 24/7 without you.",
        "You're positioned to create true leverage and exponential growth."
      ];
    }
  };

  const insights = getInsights();

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
