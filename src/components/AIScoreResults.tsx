
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  determineReadinessTier, 
  getAutomationPriorityLabel,
  calculateCostOfInaction 
} from "@/utils/scoreUtils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Award, DollarSign, PieChart } from "lucide-react";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  const { tierName, description } = determineReadinessTier(score);
  const automationPriority = getAutomationPriorityLabel(formData.automationPriority);
  
  const costOfInaction = calculateCostOfInaction(
    formData.manualHours, 
    formData.hourlyValue || "skip"
  );
  
  const formattedCostOfInaction = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(costOfInaction);

  const scorePercentage = (score / 27) * 100;
  
  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Personalized Tier Display */}
      <div className="text-center mb-10">
        <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
          <Award className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          You're a: <span className="text-primary">{tierName}</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Results Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Readiness Score */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="text-primary h-5 w-5" /> Your Readiness Score
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="mb-3">
              <Progress value={scorePercentage} className="h-3" />
            </div>
            <p className="text-2xl font-bold text-center">
              {score} <span className="text-gray-500 text-sm font-normal">out of 27</span>
            </p>
          </CardContent>
        </Card>

        {/* Top Automation Opportunity */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="text-primary h-5 w-5" /> Top Automation Opportunity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{automationPriority}</p>
          </CardContent>
        </Card>

        {/* Cost of Inaction */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="text-primary h-5 w-5" /> Cost of Inaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Your current manual workload is costing you approximately{" "}
              <strong className="text-destructive">{formattedCostOfInaction}</strong> per year.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-secondary/10 py-8 px-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">
          Ready to turn your score into a smarter, AI-powered business?
        </h3>
        <Link to="/ai-workshop">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-white text-lg px-8">
            Reserve My Spot in the AI Workshop
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AIScoreResults;
