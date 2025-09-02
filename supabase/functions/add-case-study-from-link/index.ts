
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
  gamma_url: string;
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

    const { url, title, image_url } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Processing manual case study creation:', { url, title, image_url });

    // Check if this case study already exists by URL
    const { data: existingCaseStudy } = await supabase
      .from('case_studies')
      .select('id')
      .eq('gamma_url', url)
      .maybeSingle();

    if (existingCaseStudy) {
      console.log('Case study already exists, skipping insertion');
      return new Response(
        JSON.stringify({ success: true, message: 'Case study already exists', data: existingCaseStudy }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create case study data with manual inputs
    const caseStudyData = createCaseStudyData(url, title, image_url);
    
    console.log('Created case study data:', caseStudyData);

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

function createCaseStudyData(url: string, customTitle?: string, customImageUrl?: string): CaseStudyData {
  console.log('Creating case study data with manual inputs:', { url, customTitle, customImageUrl });
  
  // Use custom title or generate from URL
  let title = customTitle || 'Case Study';
  
  if (!customTitle) {
    // Generate title from URL as fallback
    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart && lastPart.includes('-')) {
      title = lastPart.split('-')
        .filter(part => part.length > 2)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }

  // Generate client name from title
  let clientName = 'Featured Client';
  if (title && title !== 'Case Study') {
    const words = title.split(' ');
    if (words.length > 1) {
      clientName = words.slice(0, 2).join(' ');
    }
  }

  // Use custom image or fallback
  const imageUrl = customImageUrl || '/lovable-uploads/b477447b-cb21-454f-abae-d16b6abdffc8.png';

  console.log('Final case study data:', {
    title,
    clientName,
    imageUrl
  });

  return {
    title: title,
    client_name: clientName,
    industry: 'Business Services',
    challenge: 'Business process optimization and efficiency improvement challenges.',
    solution: 'Comprehensive AI automation solutions tailored to streamline operations and improve productivity.',
    results: 'Significant improvements in operational efficiency and cost savings through AI implementation.',
    image_url: imageUrl,
    gamma_url: url,
    tags: ['AI Automation', 'Process Optimization', 'Digital Transformation'],
    testimonial_quote: 'The AI solutions transformed our business operations completely.',
    testimonial_author: 'Business Owner',
    testimonial_role: 'CEO',
    project_duration: '2-4 months',
    services_provided: ['AI Implementation', 'Process Automation', 'Training & Support'],
    metrics: {
      "efficiency_gain": "60%+",
      "time_saved": "25+ hrs/week",
      "roi": "300%+"
    }
  };
}
