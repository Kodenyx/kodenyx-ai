
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { getAutomationPriorityLabel } from "@/utils/scoreUtils";

interface AutomationOpportunityBlockProps {
  automationPriority: string;
  industry?: string;
  teamSize?: string;
  score?: number; // Added score as an optional prop
  formData?: any; // Added formData as an optional prop
}

const AutomationOpportunityBlock: React.FC<AutomationOpportunityBlockProps> = ({ 
  automationPriority,
  industry,
  teamSize,
  formData
}) => {
  // If formData exists, extract properties from it
  const actualAutomationPriority = formData?.automationPriority || automationPriority;
  const actualIndustry = formData?.industry || industry;
  const actualTeamSize = formData?.teamSize || teamSize;

  const priorityLabel = getAutomationPriorityLabel(actualAutomationPriority);
  
  // Get personalized content based on automation priority
  const getPersonalizedContent = () => {
    switch (actualAutomationPriority) {
      case "lead-nurture":
        return {
          heading: "Lead Nurturing & Follow-Up",
          description: "AI can instantly engage leads, personalize outreach, and send follow-ups — even while you sleep. No more cold leads slipping through the cracks.",
          timeSaving: "⏱ Founders typically save 8–12 hours/week by automating lead follow-up."
        };
      case "content":
        return {
          heading: "Content Creation & Distribution",
          description: "AI can help repurpose content, write posts, generate captions, and schedule across platforms — saving time while keeping your brand visible and consistent.",
          timeSaving: "⏱ Founders typically save 5–10 hours/week in this area."
        };
      case "client-onboarding":
        return {
          heading: "Client Onboarding",
          description: "From welcome emails to form collection and kickoff checklists, AI ensures every client has a smooth, consistent onboarding experience — without you having to manually guide them.",
          timeSaving: "⏱ Founders typically save 4–8 hours/week by automating onboarding."
        };
      case "reporting":
        return {
          heading: "Reporting & Analytics",
          description: "AI can auto-generate performance reports, pull data from tools, and even email updates to clients or stakeholders — no more spreadsheet wrangling.",
          timeSaving: "⏱ Founders typically save 3–6 hours/week with automated reporting."
        };
      case "project-management":
        return {
          heading: "Project Management",
          description: "AI can auto-create tasks from messages, assign team actions, and follow up on due dates — helping you run projects with fewer check-ins and status meetings.",
          timeSaving: "⏱ Founders typically save 5–8 hours/week by automating PM workflows."
        };
      case "customer-support":
        return {
          heading: "Customer Support",
          description: "AI agents can resolve FAQs, route high-priority requests, and update CRMs — reducing ticket volume and response time while keeping customers happy.",
          timeSaving: "⏱ Founders typically save 6–10 hours/week by automating support responses."
        };
      case "other":
      default:
        return {
          heading: "Custom Workflow Automation",
          description: "Whether it's billing, hiring, or compliance, AI can be trained to handle repetitive work across any function. Let's explore where your time leak really is.",
          timeSaving: "⏱ Founders typically save 4–10 hours/week depending on the workflow."
        };
    }
  };

  // Get personalized blurb based on industry, automationPriority and teamSize
  const getPersonalizedBlurb = () => {
    // Convert team size to a comparable format
    const isSmallTeam = actualTeamSize === "solo" || actualTeamSize === "small";
    const isLargeTeam = actualTeamSize === "medium" || actualTeamSize === "large";
    
    // Tech/SaaS conditions
    if (actualIndustry === "tech" && actualAutomationPriority === "client-onboarding" && isSmallTeam) {
      return "SaaS teams under 10 waste hours onboarding manually. AI can auto-trigger welcome emails, assign setup tasks, and track adoption — freeing up product and CS time.";
    }
    
    if (actualIndustry === "tech" && actualAutomationPriority === "customer-support" && isLargeTeam) {
      return "Larger SaaS companies use AI to auto-resolve Tier 1 support tickets and deflect FAQs — cutting ticket volume by 40% and letting CS focus on revenue-driving conversations.";
    }
    
    // Coaching/Consulting conditions
    if (actualIndustry === "coaching" && actualAutomationPriority === "lead-nurture" && isSmallTeam) {
      return "Solo consultants can't follow up with every lead fast enough. AI handles reminders, drip sequences, and booking nudges — so no warm lead falls through.";
    }
    
    // Real Estate conditions
    if (actualIndustry === "real-estate" && actualAutomationPriority === "lead-nurture") {
      return "Real estate pros lose deals to slow follow-up. AI responds instantly, pre-qualifies leads, and books showings — even while you're out in the field.";
    }
    
    // Healthcare/Wellness conditions
    if (actualIndustry === "healthcare" && actualAutomationPriority === "client-onboarding" && isSmallTeam) {
      return "Small wellness teams are overwhelmed with intake forms and reminders. AI automates patient follow-ups, appointment prep, and handoffs — cutting no-shows and admin time.";
    }
    
    // Professional Services conditions
    if (actualIndustry === "professional-services" && actualAutomationPriority === "reporting") {
      return "Law and finance teams often spend hours prepping client reports. AI pulls data, formats summaries, and delivers updates — no more late nights wrangling numbers.";
    }
    
    // Admin tasks
    if (actualAutomationPriority === "admin") {
      return "Admin tasks silently eat hours — scheduling, forms, reminders. AI takes those off your plate so your team can focus on higher-leverage work.";
    }
    
    // Default case - use the standard description from getPersonalizedContent
    return getPersonalizedContent().description;
  };

  const content = getPersonalizedContent();

  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="text-primary h-5 w-5" /> Your #1 Automation Opportunity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-2">{content.heading}</p>
        <p className="text-sm text-gray-600 mb-3">{getPersonalizedBlurb()}</p>
        <div className="bg-gray-50 p-3 rounded-md mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{content.timeSaving}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomationOpportunityBlock;
