
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
  nextTier?: boolean;
  nextTierName?: string;
} {
  if (score <= 6) {
    return {
      tierName: "The Do-It-All Founder",
      description: "You're wearing all the hats and stuck in the weeds. But now you know where to start.",
      nextTier: true,
      nextTierName: "Process Builder"
    };
  } else if (score <= 12) {
    return {
      tierName: "The Process Builder",
      description: "You've started creating systems — now it's time to automate them.",
      nextTier: true,
      nextTierName: "System Architect"
    };
  } else if (score <= 18) {
    return {
      tierName: "The System Architect",
      description: "You've got SOPs and workflows. Let's plug AI into the engine.",
      nextTier: true,
      nextTierName: "Automation Leader"
    };
  } else if (score <= 23) {
    return {
      tierName: "The Automation Leader",
      description: "You're scaling smart. Time to unlock deeper leverage with AI agents.",
      nextTier: true,
      nextTierName: "AI-First Operator"
    };
  } else {
    return {
      tierName: "The AI-First Operator",
      description: "You've built the foundation. AI is your next competitive advantage.",
      nextTier: false
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

// Function to get readiness insights based on score tier
export function getReadinessInsights(score: number): string[] {
  if (score <= 6) {
    // The Do-It-All Founder
    return [
      "You're doing everything manually — which creates invisible time drains, missed leads, and burnout risk.",
      "The good news? You now know exactly where your business is leaking hours.",
      "With 1–2 simple automations, you could save 5–10 hours/week — without hiring.",
      "The cost of inaction isn't just money — it's momentum.",
      "You're closer than you think to building a business that runs without you."
    ];
  } else if (score <= 12) {
    // The Process Builder
    return [
      "You've started creating repeatable systems — but they still rely on you or your team to run.",
      "Every manual task is stealing profit, speed, and mental energy.",
      "Automating just your lead response or onboarding could return $50K+ a year.",
      "Your business has structure — now it's time to add smart leverage.",
      "The next level is less about tools, more about sequencing the right automations."
    ];
  } else if (score <= 18) {
    // The System Architect
    return [
      "You've built solid foundations — SOPs, workflows, maybe a CRM.",
      "But the real opportunity now is removing yourself from the loop.",
      "AI can handle tasks, update systems, and make decisions in real time.",
      "You're no longer starting from scratch — you're optimizing with intelligence.",
      "Getting to the next tier will unlock scale without adding more people."
    ];
  } else if (score <= 23) {
    // The Automation Leader
    return [
      "You've already reclaimed time and systemized key operations — now it's time to compound.",
      "AI can now replace repetitive team work and drive real-time execution.",
      "Every hour you still spend manually is a missed compounding return.",
      "At this level, your edge isn't tools — it's orchestration.",
      "A few well-placed agents could turn your backend into an autonomous growth engine."
    ];
  } else {
    // The AI-First Operator
    return [
      "You're ahead of the curve — and positioned to dominate your category with AI-first leverage.",
      "Now the goal is orchestration: linking your tools, agents, and workflows into a self-scaling machine.",
      "The opportunity here is to unlock decision-making, personalization, and 24/7 responsiveness.",
      "You don't need more hustle — you need smarter layers of automation.",
      "In the AI Workshop, we'll show you how to turn this infrastructure into an unfair advantage."
    ];
  }
}

// Function to get personalized cost comparisons based on cost of inaction
export function getCostComparisons(costOfInaction: number): { emoji: string; text: string }[] {
  if (costOfInaction >= 500000) {
    return [
      { emoji: "💸", text: `Equivalent to ${Math.round(costOfInaction / 110000)} full-time hires` },
      { emoji: "🚀", text: "Enough to fund 2 product launches" },
      { emoji: "🧠", text: "Could automate 60% of your ops today" }
    ];
  } else if (costOfInaction >= 100000) {
    return [
      { emoji: "🕒", text: "Wasting 10+ hours/week doing repeatable work" },
      { emoji: "📉", text: "Slowing growth with manual systems" },
      { emoji: "🧳", text: `Could afford ${Math.floor(costOfInaction / 25000)} dream vacations every year` }
    ];
  } else {
    return [
      { emoji: "🔁", text: "Still stuck in tasks that AI could handle for pennies" },
      { emoji: "💻", text: "Paying in time instead of tools" },
      { emoji: "🧠", text: "Holding onto roles that block your CEO freedom" }
    ];
  }
}

// Function to get dynamic workshop promotion content based on score tier
export function getWorkshopPromotionContent(score: number): {
  preHeadline: string;
  headline: string;
  subHeadline: string;
  ctaButton: string;
} {
  if (score <= 6) {
    return {
      preHeadline: "You've been doing it all — no wonder it's exhausting.",
      headline: "You're a Do-It-All Founder — Time to Step Out of the Grind",
      subHeadline: "You're stuck in the weeds — still doing what AI could handle. You're losing time, energy, and sanity. The freedom, consistency, and growth you started this business for? You're leaving them on the table every day you wait.",
      ctaButton: "Break the Bottleneck Now"
    };
  } else if (score <= 13) {
    return {
      preHeadline: "You're building momentum — now let's build leverage.",
      headline: "You're a Process Builder — Let's Turn Chaos Into Clarity",
      subHeadline: "You've got the pieces — but you're still the glue. You're bleeding time, bottlenecking ops, and delaying scale. Without automation, you'll keep trading hours for output instead of unlocking freedom, flow, and profitability.",
      ctaButton: "Systemize Me Smarter"
    };
  } else if (score <= 20) {
    return {
      preHeadline: "You're closer than you think.",
      headline: "You're a System Architect — Now Let's Build Your AI-Powered Machine",
      subHeadline: "You've built the machine — but you're still in the driver's seat. That's costing you leverage, peace of mind, and true scalability. AI is the upgrade your business needs to run without you — and grow without more people.",
      ctaButton: "Plug In the AI Engine"
    };
  } else if (score <= 24) {
    return {
      preHeadline: "You're ahead of the curve.",
      headline: "You're an Automation Leader — Let's Multiply Your Impact",
      subHeadline: "You've systemized — but you're not fully free. The next level of efficiency, innovation, and exponential growth is waiting. Without AI, you're leaving massive ROI, better decisions, and market advantage untapped.",
      ctaButton: "Multiply My Impact with AI"
    };
  } else {
    return {
      preHeadline: "You're operating at the edge of efficiency.",
      headline: "You're an AI-First Operator — Let's Take It to the Top 1%",
      subHeadline: "You're close to elite. But without AI agents and adaptive workflows, you're missing the final leap — total operational clarity, predictive systems, and a business that scales with zero friction. Small gaps here equal big costs.",
      ctaButton: "Upgrade Me to Elite"
    };
  }
}
