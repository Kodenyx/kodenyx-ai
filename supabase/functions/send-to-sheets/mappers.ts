
// Mapping functions to convert raw form values to descriptive labels

// Map business type value to human-readable label
export function getBusinessTypeLabel(value: string): string {
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

// Map repetitive tasks value to human-readable label
export function getRepetitiveTasksLabel(value: string): string {
  const repetitiveTasksOptions = {
    "manual": "Manually by team members",
    "outsourced": "Outsourced to contractors",
    "some-automation": "Some automation but still requires oversight",
    "fully-automated": "Fully automated systems"
  };
  return repetitiveTasksOptions[value] || value;
}

// Map manual areas values to human-readable labels
export function getManualAreasLabels(values: string[]): string[] {
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

// Map lead handling value to human-readable label
export function getLeadHandlingLabel(value: string): string {
  const leadHandlingOptions = {
    "missed": "Sometimes missed or delayed response",
    "manual": "Manual outreach when we have time",
    "basic-auto": "Basic automation but needs human follow-up",
    "fully-auto": "Fully automated qualification and routing"
  };
  return leadHandlingOptions[value] || value;
}

// Map SOP approach value to human-readable label
export function getSopApproachLabel(value: string): string {
  const sopApproachOptions = {
    "none": "No formal SOPs",
    "outdated": "Outdated documents rarely referenced",
    "standard": "Standard documents we update periodically",
    "living": "Living documents integrated with tools"
  };
  return sopApproachOptions[value] || value;
}

// Map AI comfort value to human-readable label
export function getAIComfortLabel(value: string): string {
  const aiComfortOptions = {
    "uncomfortable": "Very uncomfortable",
    "curious": "Curious but uncertain",
    "moderate": "Moderately comfortable",
    "very": "Very comfortable"
  };
  return aiComfortOptions[value] || value;
}

// Map automation priority value to human-readable label
export function getAutomationPriorityLabel(value: string): string {
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

// Map manual hours value to human-readable label
export function getManualHoursLabel(value: string): string {
  const manualHoursOptions = {
    "0-5": "0-5 hours",
    "6-10": "6-10 hours",
    "11-20": "11-20 hours",
    "21-40": "21-40 hours",
    "40+": "More than 40 hours"
  };
  return manualHoursOptions[value] || value;
}

// Map time owner value to human-readable label
export function getTimeOwnerLabel(value: string): string {
  const timeOwnerOptions = {
    "me": "Me (founder/CEO)",
    "exec": "Executive team",
    "managers": "Mid-level managers",
    "team": "Team members",
    "contractors": "Contractors/freelancers"
  };
  return timeOwnerOptions[value] || value;
}

// Map team size value to human-readable label
export function getTeamSizeLabel(value: string): string {
  const teamSizeMap = {
    "solo": "Just me",
    "small": "2-5",
    "medium": "6-20",
    "large": "21+"
  };
  return teamSizeMap[value] || value;
}

// Map hourly value to human-readable label
export function getHourlyValueLabel(value: string): string {
  const hourlyValueMap = {
    "skip": "Skip this question",
    "under-50": "Under $50/hour",
    "50-100": "$50-100/hour",
    "100-250": "$100-250/hour",
    "250-500": "$250-500/hour",
    "500+": "Over $500/hour"
  };
  return hourlyValueMap[value] || value;
}

// Map current use value to human-readable label
export function getCurrentUseLabel(value: string): string {
  const currentUseMap = {
    "none": "Not using any automation or AI",
    "basic": "Basic automation (email sequences, etc.)",
    "some": "Some AI tools occasionally",
    "integrated": "Integrated into daily operations",
    "advanced": "Advanced AI systems throughout business"
  };
  return currentUseMap[value] || value;
}
