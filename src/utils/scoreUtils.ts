
// Function to calculate the AI readiness score based on form responses
export function calculateReadinessScore(formData: any): number {
  let totalScore = 0;

  // Q6: Current use of automation or AI
  switch (formData.currentUse) {
    case "none":
      totalScore += 0;
      break;
    case "basic":
    case "some":
      totalScore += 1;
      break;
    case "integrated":
      totalScore += 2;
      break;
    case "advanced":
      totalScore += 3;
      break;
  }

  // Q7: How are repetitive tasks handled?
  switch (formData.repetitiveTasks) {
    case "manual":
      totalScore += 0;
      break;
    case "outsourced":
      totalScore += 1;
      break;
    case "some-automation":
      totalScore += 2;
      break;
    case "fully-automated":
      totalScore += 3;
      break;
  }

  // Q8: Most manual/inefficient areas (choose 2)
  // Calculate based on the highest-friction areas selected
  const highFrictionAreas = ["admin", "finance", "customer-service"];
  const mediumFrictionAreas = ["sales", "lead-gen", "content"];
  const lowFrictionAreas = ["hr", "product"];

  let q8Score = 0;
  const manualAreas = formData.manualAreas || [];
  
  const highFrictionCount = manualAreas.filter(area => highFrictionAreas.includes(area)).length;
  const mediumFrictionCount = manualAreas.filter(area => mediumFrictionAreas.includes(area)).length;
  const lowFrictionCount = manualAreas.filter(area => lowFrictionAreas.includes(area)).length;

  if (highFrictionCount === 2) {
    q8Score = 0;
  } else if (highFrictionCount === 1 && mediumFrictionCount === 1) {
    q8Score = 1;
  } else if (mediumFrictionCount === 2) {
    q8Score = 2;
  } else if (lowFrictionCount > 0) {
    q8Score = 3;
  }

  totalScore += q8Score;

  // Q9: What happens when a lead reaches out?
  switch (formData.leadHandling) {
    case "missed":
      totalScore += 0;
      break;
    case "manual":
      totalScore += 1;
      break;
    case "basic-auto":
      totalScore += 2;
      break;
    case "fully-auto":
      totalScore += 3;
      break;
  }

  // Q10: SOP Documentation
  switch (formData.sopApproach) {
    case "none":
      totalScore += 0;
      break;
    case "outdated":
      totalScore += 1;
      break;
    case "standard":
      totalScore += 2;
      break;
    case "living":
      totalScore += 3;
      break;
  }

  // Q11: Comfort identifying AI opportunities
  switch (formData.aiComfort) {
    case "uncomfortable":
      totalScore += 0;
      break;
    case "curious":
      totalScore += 1;
      break;
    case "moderate":
      totalScore += 2;
      break;
    case "very":
      totalScore += 3;
      break;
  }

  // Q12: If you could automate one part of your business today...
  switch (formData.automationPriority) {
    case "lead-nurture":
    case "client-onboarding":
      totalScore += 3;
      break;
    case "customer-support":
    case "reporting":
      totalScore += 2;
      break;
    case "project-management":
    case "content":
    case "other":
      totalScore += 1;
      break;
  }

  // Q13: Hours/week spent on manual work
  switch (formData.manualHours) {
    case "40+":
      totalScore += 0;
      break;
    case "21-40":
      totalScore += 1;
      break;
    case "11-20":
    case "6-10":
      totalScore += 2;
      break;
    case "0-5":
      totalScore += 3;
      break;
  }

  // Q14: Whose time is being spent?
  switch (formData.timeOwner) {
    case "me":
      totalScore += 0;
      break;
    case "exec":
      totalScore += 1;
      break;
    case "managers":
      totalScore += 2;
      break;
    case "team":
    case "contractors":
      totalScore += 3;
      break;
  }

  return Math.min(totalScore, 27); // Cap at 27 points max
}

// Function to determine readiness tier based on total score
export function determineReadinessTier(score: number): {
  tierName: string;
  description: string;
} {
  if (score <= 6) {
    return {
      tierName: "The Do-It-All Founder",
      description: "You're wearing all the hats and stuck in the weeds. But now you know where to start.",
    };
  } else if (score <= 12) {
    return {
      tierName: "The Process Builder",
      description: "You've started creating systems — now it's time to automate them.",
    };
  } else if (score <= 18) {
    return {
      tierName: "The System Architect",
      description: "You've got SOPs and workflows. Let's plug AI into the engine.",
    };
  } else if (score <= 23) {
    return {
      tierName: "The Automation Leader",
      description: "You're scaling smart. Time to unlock deeper leverage with AI agents.",
    };
  } else {
    return {
      tierName: "The AI-First Operator",
      description: "You've built the foundation. AI is your next competitive advantage.",
    };
  }
}

// Function to map the automation priority label
export function getAutomationPriorityLabel(value: string): string {
  const priorityMap: Record<string, string> = {
    "lead-nurture": "Lead nurturing & follow-up",
    "content": "Content creation & distribution",
    "client-onboarding": "Client onboarding",
    "reporting": "Reporting & analytics",
    "project-management": "Project management",
    "customer-support": "Customer support",
    "other": "Other"
  };
  
  return priorityMap[value] || value;
}

// Function to calculate the Cost of Inaction (COI)
export function calculateCostOfInaction(manualHours: string, hourlyValue: string): number {
  // Map manual hours to numeric values
  const hoursMap: Record<string, number> = {
    "0-5": 3,
    "6-10": 8,
    "11-20": 15,
    "21-40": 30,
    "40+": 45
  };
  
  // Map hourly value to numeric values
  const valueMap: Record<string, number> = {
    "under-50": 40,
    "50-100": 75,
    "100-250": 175,
    "250-500": 375,
    "500+": 600,
    "skip": 100 // Default value
  };
  
  const weeklyHours = hoursMap[manualHours] || 15;
  const hourlyRate = valueMap[hourlyValue] || 100;
  
  // Calculate annual cost
  return weeklyHours * hourlyRate * 52;
}
