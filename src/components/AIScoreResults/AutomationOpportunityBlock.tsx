
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { getAutomationPriorityLabel } from "@/utils/scoreUtils";

interface AutomationOpportunityBlockProps {
  automationPriority: string;
}

const AutomationOpportunityBlock: React.FC<AutomationOpportunityBlockProps> = ({ 
  automationPriority 
}) => {
  const priorityLabel = getAutomationPriorityLabel(automationPriority);

  // Automation opportunity contextual line
  const getOpportunityContext = () => {
    switch (automationPriority) {
      case "lead-nurture":
        return "Founders spend 7+ hours/week here. AI can nurture leads 24/7.";
      case "client-onboarding":
        return "One founder saved $14K/month automating this step.";
      case "customer-support":
        return "Turn support from a cost center to a growth driver with AI.";
      case "reporting":
        return "Get real-time insights without manual data collection.";
      default:
        return "This high-ROI area is your fastest path to time freedom.";
    }
  };

  const getClientResult = () => {
    switch (automationPriority) {
      case "lead-nurture":
        return "Clients see 3x response rates with fully automated follow-up.";
      case "client-onboarding":
        return "One founder saved $14K/month automating this step.";
      case "customer-support":
        return "Founders reclaim 10+ hours/week with AI-powered support.";
      case "reporting":
        return "Eliminate 5+ hours of weekly reporting work with automated dashboards.";
      default:
        return "Founders typically save 5-10 hours/week in this area.";
    }
  };

  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="text-primary h-5 w-5" /> Your #1 Automation Opportunity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-2">{priorityLabel}</p>
        <p className="text-sm text-gray-600 mb-3">{getOpportunityContext()}</p>
        <div className="bg-gray-50 p-3 rounded-md mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{getClientResult()}</span>
          </div>
        </div>
        
        <Link to="/ai-readiness-workshop" className="inline-block">
          <Button size="sm" className="flex items-center gap-2 mt-2">
            <span>Fix This Bottleneck With AI</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AutomationOpportunityBlock;
