
import { supabase } from '@/integrations/supabase/client';

export const seedFinancialFirmCaseStudy = async () => {
  const caseStudy = {
    title: "How a Mid-Sized Financial Firm Reclaimed 6,000 Hours and $400K/Year",
    client_name: "Mid-Sized Financial Firm",
    industry: "Financial Services",
    challenge: "The firm was struggling with manual processes that consumed thousands of hours annually, leading to inefficiencies and high operational costs. Staff were overwhelmed with repetitive tasks that prevented them from focusing on high-value client work.",
    solution: "We implemented comprehensive AI automation solutions to streamline their operations, including automated document processing, client onboarding workflows, and intelligent task routing systems.",
    results: "Successfully reclaimed 6,000 hours annually and achieved $400,000 in cost savings per year, allowing the team to focus on strategic initiatives and client relationships.",
    image_url: "/lovable-uploads/8ee4b126-5904-4ad2-a895-c9673bbe869b.png",
    client_logo_url: null,
    tags: ["Financial Services", "Process Automation", "Cost Reduction", "Time Savings"],
    testimonial_quote: "The AI automation solutions transformed our operations completely. We're now able to focus on what matters most - serving our clients.",
    testimonial_author: "Operations Director",
    testimonial_role: "Operations Director",
    project_duration: "3 months",
    services_provided: ["Process Automation", "AI Implementation", "Workflow Optimization", "Staff Training"],
    metrics: {
      "hours_saved": "6,000/year",
      "cost_savings": "$400K/year",
      "efficiency_gain": "75%",
      "roi": "500%"
    },
    is_published: true,
    featured: true
  };

  try {
    const { data, error } = await supabase
      .from('case_studies')
      .insert([caseStudy])
      .select()
      .single();

    if (error) {
      console.error('Error inserting case study:', error);
      throw error;
    }

    console.log('Case study inserted successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to seed case study:', error);
    throw error;
  }
};
