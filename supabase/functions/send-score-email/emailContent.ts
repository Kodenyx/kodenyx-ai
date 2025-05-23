
// Email content formatting functions

// Format business insights based on form data
export function formatBusinessInsights(formData: any): string {
  let insights = '';
  
  // Current AI use
  const aiUseMap: Record<string, string> = {
    "none": "You're not currently using any automation or AI",
    "basic": "You have basic automation in place",
    "some": "You're using some AI tools occasionally",
    "integrated": "You have AI integrated into daily operations",
    "advanced": "You have advanced AI systems throughout your business"
  };
  
  if (formData.currentUse && aiUseMap[formData.currentUse]) {
    insights += `<p><strong>AI Usage:</strong> ${aiUseMap[formData.currentUse]}</p>`;
  }
  
  // Manual areas - where they're struggling
  if (formData.manualAreas && formData.manualAreas.length > 0) {
    const areaMap: Record<string, string> = {
      "lead-gen": "lead generation",
      "sales": "sales processes",
      "customer-service": "customer service",
      "content": "content creation",
      "admin": "admin & operations",
      "finance": "finance & accounting",
      "hr": "HR & recruiting",
      "product": "product development"
    };
    
    const formattedAreas = formData.manualAreas
      .map((area: string) => areaMap[area] || area)
      .join(" and ");
    
    insights += `<p><strong>Improvement Areas:</strong> Your ${formattedAreas} processes could benefit most from AI automation.</p>`;
  }
  
  // Lead handling
  const leadHandlingMap: Record<string, string> = {
    "missed": "You're sometimes missing or delaying responses to leads",
    "manual": "You're handling leads with manual outreach when time permits",
    "basic-auto": "You have basic automation but still need human follow-up for leads",
    "fully-auto": "You have fully automated qualification and routing for leads"
  };
  
  if (formData.leadHandling && leadHandlingMap[formData.leadHandling]) {
    insights += `<p><strong>Lead Handling:</strong> ${leadHandlingMap[formData.leadHandling]}</p>`;
  }
  
  if (insights === '') {
    insights = '<p>We need more information to provide detailed business insights.</p>';
  }
  
  return insights;
}

// Calculate potential savings based on form data
export function calculatePotentialSavings(formData: any): string {
  if (!formData.manualHours || !formData.timeOwner) {
    return "Complete the assessment with hours spent on manual tasks to see your potential savings.";
  }
  
  // Extract hours per week
  const hourRangesMap: Record<string, number> = {
    "0-5": 2.5,
    "6-10": 8,
    "11-20": 15,
    "21-40": 30,
    "40+": 50
  };
  
  const hourlyValueMap: Record<string, number> = {
    "skip": 100, // default value
    "under-50": 40,
    "50-100": 75,
    "100-250": 175,
    "250-500": 375,
    "500+": 650
  };
  
  // Get values from maps or set defaults
  const hoursPerWeek = hourRangesMap[formData.manualHours] || 10;
  const hourlyValue = hourlyValueMap[formData.hourlyValue] || 100;
  
  // Calculate weekly, monthly, and annual savings (assuming 50% time savings with AI)
  const weeklySavings = hoursPerWeek * hourlyValue * 0.5;
  const monthlySavings = weeklySavings * 4;
  const annualSavings = monthlySavings * 12;
  
  return `
    <p><strong>Current Manual Effort:</strong> ~${hoursPerWeek} hours per week</p>
    <p><strong>Potential Time Savings:</strong> ~${hoursPerWeek * 0.5} hours per week</p>
    <p><strong>Estimated Annual Value:</strong> $${annualSavings.toLocaleString()} 
       (based on $${hourlyValue}/hour value of time)</p>
  `;
}

// Generate HTML email content
export function generateEmailContent(score: number, formData: any): string {
  // Use the readiness score to determine the level
  const readinessScore = score; // In the future, this could be different from score
  const scoreLevel = readinessScore < 7 ? "Beginner" : readinessScore < 13 ? "Intermediate" : 
                     readinessScore < 19 ? "Advanced" : "Expert";
                     
  // Format the business insights and savings
  const businessInsights = formatBusinessInsights(formData);
  const potentialSavings = calculatePotentialSavings(formData);
  
  // HTML email content
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #6941C6; text-align: center;">Your AI Readiness Score: ${readinessScore}/27</h1>
      <div style="text-align: center; padding: 20px; background-color: #f9f5ff; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #6941C6;">Your Level: ${scoreLevel}</h2>
      </div>
      
      <h3 style="color: #333;">Business Insights</h3>
      <div style="padding: 15px; background-color: #f5f5f5; border-radius: 8px; margin-bottom: 20px;">
        ${businessInsights}
      </div>
      
      <h3 style="color: #333;">Potential Time & Cost Savings</h3>
      <div style="padding: 15px; background-color: #f5f5f5; border-radius: 8px; margin-bottom: 20px;">
        <p>${potentialSavings}</p>
      </div>
      
      <h3 style="color: #6941C6;">Next Steps</h3>
      <p>Book a free consultation to discuss how you can implement AI in your business:</p>
      <div style="text-align: center; margin: 25px 0;">
        <a href="https://cal.com/aarti-anand82" style="background-color: #6941C6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Book a Call</a>
      </div>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
      <p style="color: #777; font-size: 14px; text-align: center;">
        This is an automated email sent from the AI Readiness Score assessment.
      </p>
    </div>
  `;
}

// Generate admin email content with additional user details
export function generateAdminEmailContent(score: number, formData: any, standardEmailContent: string): string {
  const readinessScore = score;
  const scoreLevel = readinessScore < 7 ? "Beginner" : readinessScore < 13 ? "Intermediate" : 
                     readinessScore < 19 ? "Advanced" : "Expert";
                     
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #6941C6;">New AI Readiness Assessment Submission</h2>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>LinkedIn:</strong> ${formData.linkedin || 'Not provided'}</p>
      <p><strong>Business Type:</strong> ${formData.businessType}</p>
      <p><strong>Team Size:</strong> ${formData.teamSize}</p>
      <hr style="margin: 20px 0;">
      ${standardEmailContent}
    </div>
  `;
}
