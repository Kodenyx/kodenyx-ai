
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.48.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CaseStudyData {
  title: string;
  client_name: string;
  industry?: string;
  challenge: string;
  solution: string;
  results: string;
  image_url?: string;
  tags?: string[];
  testimonial_quote?: string;
  testimonial_author?: string;
  testimonial_role?: string;
  project_duration?: string;
  services_provided?: string[];
  metrics?: any;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { url } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Processing URL:', url);

    // Fetch the content from the provided URL
    const response = await fetch(url);
    const html = await response.text();
    
    console.log('Fetched HTML content, length:', html.length);

    // Extract case study data from the HTML
    const caseStudyData = extractCaseStudyData(html, url);
    
    console.log('Extracted case study data:', caseStudyData);

    // Insert into database
    const { data, error } = await supabase
      .from('case_studies')
      .insert([{
        ...caseStudyData,
        is_published: true,
        featured: true
      }])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save case study', details: error }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Case study saved successfully:', data);

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});

function extractCaseStudyData(html: string, url: string): CaseStudyData {
  // For Gamma presentations, we'll extract the title and use the provided data
  // This is a simplified extraction - in a real scenario, you might want more sophisticated parsing
  
  const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
  const title = titleMatch ? titleMatch[1].trim() : "How a Mid-Sized Financial Firm Reclaimed 6,000 Hours and $400K/Year";

  // Return the financial firm case study data with the new image
  return {
    title: title,
    client_name: "Mid-Sized Financial Firm",
    industry: "Financial Services",
    challenge: "The firm was struggling with manual processes that consumed thousands of hours annually, leading to inefficiencies and high operational costs. Staff were overwhelmed with repetitive tasks that prevented them from focusing on high-value client work.",
    solution: "We implemented comprehensive AI automation solutions to streamline their operations, including automated document processing, client onboarding workflows, and intelligent task routing systems.",
    results: "Successfully reclaimed 6,000 hours annually and achieved $400,000 in cost savings per year, allowing the team to focus on strategic initiatives and client relationships.",
    image_url: "/lovable-uploads/b477447b-cb21-454f-abae-d16b6abdffc8.png",
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
    }
  };
}
