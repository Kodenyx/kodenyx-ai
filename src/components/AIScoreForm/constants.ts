
// Form options
export const businessTypes = [
  { value: "coaching", label: "Coaching / Consulting" },
  { value: "real-estate", label: "Real Estate / Mortgage" },
  { value: "healthcare", label: "Healthcare / Wellness" },
  { value: "tech", label: "Tech / SaaS" },
  { value: "marketing", label: "Marketing / Creative Services" },
  { value: "professional", label: "Professional Services (Legal, Finance, etc.)" },
  { value: "other", label: "Other" },
];

export const teamSizes = [
  { value: "solo", label: "Just me" },
  { value: "small", label: "2-5" },
  { value: "medium", label: "6-20" },
  { value: "large", label: "21+" },
];

export const currentUseOptions = [
  { value: "none", label: "Not using any automation or AI" },
  { value: "basic", label: "Basic automation (email sequences, etc.)" },
  { value: "some", label: "Some AI tools occasionally" },
  { value: "integrated", label: "Integrated into daily operations" },
  { value: "advanced", label: "Advanced AI systems throughout business" },
];

export const repetitiveTasksOptions = [
  { value: "manual", label: "Manually by team members" },
  { value: "outsourced", label: "Outsourced to contractors" },
  { value: "some-automation", label: "Some automation but still requires oversight" },
  { value: "fully-automated", label: "Fully automated systems" },
];

export const manualAreasOptions = [
  { value: "lead-gen", label: "Lead generation" },
  { value: "sales", label: "Sales processes" },
  { value: "customer-service", label: "Customer service" },
  { value: "content", label: "Content creation" },
  { value: "admin", label: "Admin & operations" },
  { value: "finance", label: "Finance & accounting" },
  { value: "hr", label: "HR & recruiting" },
  { value: "product", label: "Product development" },
];

export const leadHandlingOptions = [
  { value: "missed", label: "Sometimes missed or delayed response" },
  { value: "manual", label: "Manual outreach when we have time" },
  { value: "basic-auto", label: "Basic automation but needs human follow-up" },
  { value: "fully-auto", label: "Fully automated qualification and routing" },
];

export const sopApproachOptions = [
  { value: "none", label: "No formal SOPs" },
  { value: "outdated", label: "Outdated documents rarely referenced" },
  { value: "standard", label: "Standard documents we update periodically" },
  { value: "living", label: "Living documents integrated with tools" },
];

export const aiComfortOptions = [
  { value: "uncomfortable", label: "Very uncomfortable" },
  { value: "curious", label: "Curious but uncertain" },
  { value: "moderate", label: "Moderately comfortable" },
  { value: "very", label: "Very comfortable" },
];

export const automationPriorityOptions = [
  { value: "lead-nurture", label: "Lead nurturing & follow-up" },
  { value: "content", label: "Content creation & distribution" },
  { value: "client-onboarding", label: "Client onboarding" },
  { value: "reporting", label: "Reporting & analytics" },
  { value: "project-management", label: "Project management" },
  { value: "customer-support", label: "Customer support" },
  { value: "other", label: "Other" },
];

export const manualHoursOptions = [
  { value: "0-5", label: "0-5 hours" },
  { value: "6-10", label: "6-10 hours" },
  { value: "11-20", label: "11-20 hours" },
  { value: "21-40", label: "21-40 hours" },
  { value: "40+", label: "More than 40 hours" },
];

export const timeOwnerOptions = [
  { value: "me", label: "Me (founder/CEO)" },
  { value: "exec", label: "Executive team" },
  { value: "managers", label: "Mid-level managers" },
  { value: "team", label: "Team members" },
  { value: "contractors", label: "Contractors/freelancers" },
];

export const hourlyValueOptions = [
  { value: "skip", label: "Skip this question" },
  { value: "under-50", label: "Under $50/hour" },
  { value: "50-100", label: "$50-100/hour" },
  { value: "100-250", label: "$100-250/hour" },
  { value: "250-500", label: "$250-500/hour" },
  { value: "500+", label: "Over $500/hour" },
];

// Rate mappings for cost calculation
export const hourlyRates = {
  "under-50": 25,
  "50-100": 75,
  "100-250": 175,
  "250-500": 375,
  "500+": 750
};

export const weeklyHours = {
  "0-5": 2.5,
  "6-10": 8,
  "11-20": 15,
  "21-40": 30,
  "40+": 50
};
