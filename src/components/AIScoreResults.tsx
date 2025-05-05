
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  determineReadinessTier, 
  getAutomationPriorityLabel,
  calculateCostOfInaction,
  getReadinessInsights,
  getWorkshopPromotionContent
} from "@/utils/scoreUtils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Award, DollarSign, PieChart, Star, Fire, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  const [showAlternatives, setShowAlternatives] = useState(false);
  const { tierName, description } = determineReadinessTier(score);
  const automationPriority = getAutomationPriorityLabel(formData.automationPriority);
  const insights = getReadinessInsights(score);
  
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
  
  const scorePercentage = (score / 27) * 100;
  
  // Get dynamic workshop promotion content based on score
  const { preHeadline, headline, subHeadline, ctaButton } = getWorkshopPromotionContent(score);
  
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
      <div className="grid md:grid-cols-2 gap-6 mb-10">
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
      </div>

      {/* Redesigned Cost of Inaction Card */}
      <div className="mb-10">
        <div className="bg-[#FFF3F0] border-l-4 border-destructive rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-3">
              <Fire className="h-6 w-6 text-destructive mr-2 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-800">Cost of Inaction</h3>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-medium mb-2">
                You're bleeding <span className="text-4xl md:text-5xl font-bold text-destructive animate-[pulse_3s_ease-in-out_infinite]">{formattedCostOfInaction}</span><span className="text-gray-700">/year</span> by doing this manually.
              </p>
              <p className="text-gray-700 mb-3">
                That's more than {potentialHires} full-time {potentialHires === 1 ? 'hire' : 'hires'} — or 10x what automation would cost you.
              </p>
              <p className="text-gray-800 font-medium">
                Every month you delay? Another <span className="font-bold text-destructive">{formattedMonthlyCost}</span> walks out the door.
              </p>
            </div>

            <div className="mt-4">
              <Button 
                variant="outline" 
                className="text-sm hover:bg-destructive/10 border-destructive/30 text-gray-700"
                onClick={() => setShowAlternatives(!showAlternatives)}
              >
                {showAlternatives ? "Hide Alternatives" : "What You Could Do Instead →"}
              </Button>
            </div>

            {showAlternatives && (
              <div className="mt-4 p-4 bg-white/50 rounded-md border border-gray-200 animate-fade-in">
                <h4 className="font-medium text-gray-800 mb-2">Instead of wasting {formattedCostOfInaction}, you could:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hire {potentialHires} new team {potentialHires === 1 ? 'member' : 'members'} to drive growth</li>
                  <li>Launch {Math.round(costOfInaction / 20000)} new marketing campaigns</li>
                  <li>Take back your nights and weekends</li>
                  <li>Invest in {Math.floor(costOfInaction / 100000)} new product {Math.floor(costOfInaction / 100000) === 1 ? 'line' : 'lines'}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* What Your Score Means - Dynamic Insights Section */}
      <div className="mb-10 bg-slate-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">What Your Score Means</h3>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <p key={index} className="text-lg">{insight}</p>
          ))}
        </div>
      </div>

      {/* Dynamic Workshop Promotion Section - Enhanced with emotional content */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
        <div className="text-center space-y-4">
          <p className="text-primary font-medium">{preHeadline}</p>
          <h3 className="text-2xl md:text-3xl font-bold">{headline}</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subHeadline}</p>
          
          <div className="mt-6 mb-4">
            <Link to="/ai-readiness-workshop">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 transform transition-transform duration-200 hover:scale-105">
                {ctaButton}
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>Trusted by 200+ CEOs who've saved 10+ hours/week using this exact system</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScoreResults;
