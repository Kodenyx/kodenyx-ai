
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import { getAutomationPriorityLabel } from "@/utils/scoreUtils";

interface AutomationOpportunityBlockProps {
  automationPriority: string;
  industry?: string;
  teamSize?: string;
}

const AutomationOpportunityBlock: React.FC<AutomationOpportunityBlockProps> = ({ 
  automationPriority,
  industry,
  teamSize
}) => {
  const priorityLabel = getAutomationPriorityLabel(automationPriority);

  // Get personalized blurb based on industry, automationPriority and teamSize
  const getPersonalizedBlurb = () => {
    // Convert team size to a comparable format
    const isSmallTeam = teamSize === "solo" || teamSize === "small";
    const isLargeTeam = teamSize === "medium" || teamSize === "large";
    
    // Tech/SaaS conditions
    if (industry === "tech" && automationPriority === "client-onboarding" && isSmallTeam) {
      return "SaaS teams under 10 waste hours onboarding manually. AI can auto-trigger welcome emails, assign setup tasks, and track adoption — freeing up product and CS time.";
    }
    
    if (industry === "tech" && automationPriority === "customer-support" && isLargeTeam) {
      return "Larger SaaS companies use AI to auto-resolve Tier 1 support tickets and deflect FAQs — cutting ticket volume by 40% and letting CS focus on revenue-driving conversations.";
    }
    
    // Coaching/Consulting conditions
    if (industry === "coaching" && automationPriority === "lead-nurture" && isSmallTeam) {
      return "Solo consultants can't follow up with every lead fast enough. AI handles reminders, drip sequences, and booking nudges — so no warm lead falls through.";
    }
    
    // Real Estate conditions
    if (industry === "real-estate" && automationPriority === "lead-nurture") {
      return "Real estate pros lose deals to slow follow-up. AI responds instantly, pre-qualifies leads, and books showings — even while you're out in the field.";
    }
    
    // Healthcare/Wellness conditions
    if (industry === "healthcare" && automationPriority === "client-onboarding" && isSmallTeam) {
      return "Small wellness teams are overwhelmed with intake forms and reminders. AI automates patient follow-ups, appointment prep, and handoffs — cutting no-shows and admin time.";
    }
    
    // Professional Services conditions
    if (industry === "professional-services" && automationPriority === "reporting") {
      return "Law and finance teams often spend hours prepping client reports. AI pulls data, formats summaries, and delivers updates — no more late nights wrangling numbers.";
    }
    
    // Admin tasks
    if (automationPriority === "admin") {
      return "Admin tasks silently eat hours — scheduling, forms, reminders. AI takes those off your plate so your team can focus on higher-leverage work.";
    }
    
    // Default case
    return "No matter your role or industry, AI can help reclaim hours, reduce friction, and give your team the systems edge to scale smarter — not harder.";
  };

  // Automation opportunity contextual line - fallback if no personalized blurb applies
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

  // Use the personalized blurb if applicable, otherwise fall back to generic context
  const contextMessage = getPersonalizedBlurb();

  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="text-primary h-5 w-5" /> Your #1 Automation Opportunity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-2">{priorityLabel}</p>
        <p className="text-sm text-gray-600 mb-3">{contextMessage}</p>
        <div className="bg-gray-50 p-3 rounded-md mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{getClientResult()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomationOpportunityBlock;
