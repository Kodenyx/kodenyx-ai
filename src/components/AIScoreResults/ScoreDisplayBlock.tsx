
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart } from "lucide-react";

interface ScoreDisplayBlockProps {
  score: number;
}

const ScoreDisplayBlock: React.FC<ScoreDisplayBlockProps> = ({ score }) => {
  const [animateScore, setAnimateScore] = useState(false);
  const scorePercentage = (score / 27) * 100;
  
  // Initialize animations
  useEffect(() => {
    setTimeout(() => {
      setAnimateScore(true);
    }, 500);
  }, []);

  // Contextual line based on score
  const getContextLine = () => {
    if (score <= 6) {
      return "You're still doing everything manually — but now you know where to start.";
    } else if (score <= 12) {
      return "You've built some systems, but you're still the bottleneck. Automation is your next unlock.";
    } else if (score <= 18) {
      return "Your foundation is solid. Now it's time to step out of the loop.";
    } else {
      return "You're ready for AI to take your business to the next level.";
    }
  };

  // Progress bar segment labels
  const getProgressSegments = () => {
    return (
      <div className="relative w-full h-6 mb-1">
        <div className="absolute top-0 left-0 w-1/4 text-[10px] text-center text-gray-500">
          Manual Mode
        </div>
        <div className="absolute top-0 left-1/4 w-1/4 text-[10px] text-center text-gray-500">
          Momentum
        </div>
        <div className="absolute top-0 left-2/4 w-1/4 text-[10px] text-center text-gray-500">
          Ready to Scale
        </div>
        <div className="absolute top-0 left-3/4 w-1/4 text-[10px] text-center text-gray-500">
          AI-First
        </div>
      </div>
    );
  };

  // Function to determine tier percent
  const getTierPercentage = () => {
    if (score <= 6) return "25%";
    if (score <= 12) return "50%";
    if (score <= 18) return "75%";
    return "90%";
  };

  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="text-primary h-5 w-5" /> Your Readiness Score
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="mb-6">
          {getProgressSegments()}
          <div className="relative h-3">
            <Progress value={scorePercentage} className="h-3 bg-gray-100" />
            <div 
              className="absolute h-6 w-1 bg-black top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out" 
              style={{ left: `${scorePercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className={`text-2xl font-bold transition-all duration-1000 ${animateScore ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            {score} <span className="text-gray-500 text-sm font-normal">out of 27</span>
          </p>
          <p className="text-right text-sm text-gray-500">{getTierPercentage()}</p>
        </div>
        <p className="text-sm text-gray-600 mt-2">{getContextLine()}</p>
      </CardContent>
    </Card>
  );
};

export default ScoreDisplayBlock;
