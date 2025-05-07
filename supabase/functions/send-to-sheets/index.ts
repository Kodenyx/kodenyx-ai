
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create a Supabase client with the Admin key
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { score, formData, costOfInaction } = await req.json();

    console.log("Storing data in database:", { score, formData, costOfInaction });
    
    // Get the actual selection labels for fields with options
    const teamSizeMap = {
      "solo": "Just me",
      "small": "2-5",
      "medium": "6-20",
      "large": "21+"
    };

    const currentUseMap = {
      "none": "Not using any automation or AI",
      "basic": "Basic automation (email sequences, etc.)",
      "some": "Some AI tools occasionally",
      "integrated": "Integrated into daily operations",
      "advanced": "Advanced AI systems throughout business"
    };
    
    const hourlyValueMap = {
      "skip": "Skip this question",
      "under-50": "Under $50/hour",
      "50-100": "$50-100/hour",
      "100-250": "$100-250/hour",
      "250-500": "$250-500/hour",
      "500+": "Over $500/hour"
    };

    // Insert the data into the ai_score_results table
    const { data, error } = await supabaseAdmin
      .from('ai_score_results')
      .insert({
        score,
        readiness_score: score, // Store the score as readiness_score as well
        cost_of_inaction: costOfInaction,
        full_name: formData.fullName,
        email: formData.email,
        linkedin: formData.linkedin,
        business_type_label: getBusinessTypeLabel(formData.businessType),
        team_size_label: teamSizeMap[formData.teamSize] || formData.teamSize,
        current_use_label: currentUseMap[formData.currentUse] || formData.currentUse,
        repetitive_tasks_label: getRepetitiveTasksLabel(formData.repetitiveTasks),
        manual_areas_labels: getManualAreasLabels(formData.manualAreas),
        lead_handling_label: getLeadHandlingLabel(formData.leadHandling),
        sop_approach_label: getSopApproachLabel(formData.sopApproach),
        ai_comfort_label: getAIComfortLabel(formData.aiComfort),
        automation_priority_label: getAutomationPriorityLabel(formData.automationPriority),
        manual_hours_label: getManualHoursLabel(formData.manualHours),
        time_owner_label: getTimeOwnerLabel(formData.timeOwner),
        hourly_value_label: hourlyValueMap[formData.hourlyValue] || formData.hourlyValue
      })
      .select();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    console.log("Successfully stored score results in database:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-to-sheets function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

// Helper functions to get the label for each selection
function getBusinessTypeLabel(value: string): string {
  const businessTypes = {
    "coaching": "Coaching / Consulting",
    "real-estate": "Real Estate / Mortgage",
    "healthcare": "Healthcare / Wellness",
    "tech": "Tech / SaaS",
    "marketing": "Marketing / Creative Services",
    "professional": "Professional Services (Legal, Finance, etc.)",
    "other": "Other"
  };
  return businessTypes[value] || value;
}

function getRepetitiveTasksLabel(value: string): string {
  const repetitiveTasksOptions = {
    "manual": "Manually by team members",
    "outsourced": "Outsourced to contractors",
    "some-automation": "Some automation but still requires oversight",
    "fully-automated": "Fully automated systems"
  };
  return repetitiveTasksOptions[value] || value;
}

function getManualAreasLabels(values: string[]): string[] {
  if (!values || !Array.isArray(values)) return [];
  
  const manualAreasOptions = {
    "lead-gen": "Lead generation",
    "sales": "Sales processes",
    "customer-service": "Customer service",
    "content": "Content creation",
    "admin": "Admin & operations",
    "finance": "Finance & accounting",
    "hr": "HR & recruiting",
    "product": "Product development"
  };
  
  return values.map(value => manualAreasOptions[value] || value);
}

function getLeadHandlingLabel(value: string): string {
  const leadHandlingOptions = {
    "missed": "Sometimes missed or delayed response",
    "manual": "Manual outreach when we have time",
    "basic-auto": "Basic automation but needs human follow-up",
    "fully-auto": "Fully automated qualification and routing"
  };
  return leadHandlingOptions[value] || value;
}

function getSopApproachLabel(value: string): string {
  const sopApproachOptions = {
    "none": "No formal SOPs",
    "outdated": "Outdated documents rarely referenced",
    "standard": "Standard documents we update periodically",
    "living": "Living documents integrated with tools"
  };
  return sopApproachOptions[value] || value;
}

function getAIComfortLabel(value: string): string {
  const aiComfortOptions = {
    "uncomfortable": "Very uncomfortable",
    "curious": "Curious but uncertain",
    "moderate": "Moderately comfortable",
    "very": "Very comfortable"
  };
  return aiComfortOptions[value] || value;
}

function getAutomationPriorityLabel(value: string): string {
  const automationPriorityOptions = {
    "lead-nurture": "Lead nurturing & follow-up",
    "content": "Content creation & distribution",
    "client-onboarding": "Client onboarding",
    "reporting": "Reporting & analytics",
    "project-management": "Project management",
    "customer-support": "Customer support",
    "other": "Other"
  };
  return automationPriorityOptions[value] || value;
}

function getManualHoursLabel(value: string): string {
  const manualHoursOptions = {
    "0-5": "0-5 hours",
    "6-10": "6-10 hours",
    "11-20": "11-20 hours",
    "21-40": "21-40 hours",
    "40+": "More than 40 hours"
  };
  return manualHoursOptions[value] || value;
}

function getTimeOwnerLabel(value: string): string {
  const timeOwnerOptions = {
    "me": "Me (founder/CEO)",
    "exec": "Executive team",
    "managers": "Mid-level managers",
    "team": "Team members",
    "contractors": "Contractors/freelancers"
  };
  return timeOwnerOptions[value] || value;
}
