
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  determineReadinessTier, 
  getAutomationPriorityLabel,
  calculateCostOfInaction,
  getReadinessInsights,
  getWorkshopPromotionContent,
  getCostComparisons
} from "@/utils/scoreUtils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  ChevronRight, 
  Clock, 
  Flame, 
  Star, 
  TrendingUp, 
  ArrowRight, 
  BarChart, 
  Zap  
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  const [showCostBreakdown, setShowCostBreakdown] = useState(true);
  const [animateScore, setAnimateScore] = useState(false);
  const { toast } = useToast();
  
  // Get tier information
  const { tierName, description, nextTier, nextTierName } = determineReadinessTier(score);
  const automationPriority = getAutomationPriorityLabel(formData.automationPriority);
  const insights = getReadinessInsights(score);
  
  // Calculate cost of inaction
  const costOfInaction = calculateCostOfInaction(
    formData.manualHours, 
    formData.hourlyValue || "skip"
  );
  
  const formattedCostOfInaction = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(costOfInaction);

  const monthlyCost = costOfInaction / 12;
  const formattedMonthlyCost = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(monthlyCost);

  const potentialHires = Math.round(costOfInaction / 110000);
  const costComparisons = getCostComparisons(costOfInaction);
  
  const scorePercentage = (score / 27) * 100;
  
  // Get workshop promotion content
  const { preHeadline, headline, subHeadline, ctaButton } = getWorkshopPromotionContent(score);

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

  // Automation opportunity contextual line
  const getOpportunityContext = () => {
    switch (formData.automationPriority) {
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
    switch (formData.automationPriority) {
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
    <div className="p-6 bg-white rounded-lg">
      {/* SECTION 1: Tier Identity Block - Enhanced */}
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
          You're ahead of {Math.round(scorePercentage)}% of founders in our database — but still operating at half capacity
        </div>
      </div>

      {/* Grid Layout for Score and Opportunity Sections */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* SECTION 2: Enhanced Score Display */}
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

        {/* SECTION 3: Enhanced Top Automation Opportunity */}
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="text-primary h-5 w-5" /> Your #1 Automation Opportunity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-2">{automationPriority}</p>
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
      </div>

      {/* SECTION 4: Enhanced Cost of Inaction - Dark Theme */}
      <div className="mb-10">
        <div className="bg-[#1A1F2C] border-l-4 border-primary rounded-lg shadow-md overflow-hidden text-white">
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Flame className="h-6 w-6 text-primary mr-2 animate-pulse" />
              <h3 className="text-2xl font-bold">Cost of Inaction</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-medium mb-2">
                You're bleeding <span className="text-4xl md:text-5xl font-bold text-primary animate-[pulse_3s_ease-in-out_infinite]">{formattedCostOfInaction}</span><span className="text-gray-300">/year</span> by doing this manually.
              </p>
              <p className="text-gray-300 mb-3">
                That's more than {potentialHires} full-time {potentialHires === 1 ? 'hire' : 'hires'} — or 10x what automation would cost you.
              </p>
              <p className="text-gray-100 font-medium">
                Every month you delay? Another <span className="font-bold text-primary">{formattedMonthlyCost}</span> walks out the door.
              </p>
            </div>

            {/* Cost Breakdown Section */}
            <div className="mt-6">
              <Collapsible
                open={showCostBreakdown}
                onOpenChange={setShowCostBreakdown}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  >
                    <span>What That Cost Really Means</span>
                    <span className="text-xs">{showCostBreakdown ? '▲ Hide' : '▼ Show'}</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 bg-white/10 rounded-md p-4 border border-white/10 animate-slide-up">
                  <h4 className="font-semibold text-white mb-3">In real terms, you're losing:</h4>
                  <ul className="space-y-3">
                    {costComparisons.map((comparison, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-xl">{comparison.emoji}</span>
                        <span className="text-gray-200">{comparison.text}</span>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: Enhanced CTA Block */}
      {score > 7 && (
        <div className="mb-10 bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg shadow-lg border border-primary/20">
          <div className="text-center space-y-4">
            <p className="text-primary font-medium">Ready to Fix the Bottlenecks Holding You Back?</p>
            <h3 className="text-2xl md:text-3xl font-bold">Join the AI Workshop to Build a Business That Scales Without You</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Map your highest-leverage automations and replace manual systems with AI that works 24/7.
            </p>
            
            <div className="mt-6 mb-4">
              <Link to="/ai-readiness-workshop">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 transform transition-transform duration-200 hover:scale-105">
                  Reserve My Spot in the AI Workshop
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm">
              <div className="flex items-center text-gray-600">
                <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                <span>200+ CEOs have used this system</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 text-primary mr-1" />
                <span>Only 7 founder seats left this month</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* What Your Score Means - Dynamic Insights Section */}
      <div className="mb-10 bg-slate-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">What Your Score Means</h3>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <p key={index} className="text-lg">{insight}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIScoreResults;
