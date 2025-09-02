
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

    // Create case study data with only provided inputs - no fake data
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
  
  // Only use provided title or generate a basic one from URL
  const title = customTitle || 'New Case Study';
  
  // Only use provided image URL
  const imageUrl = customImageUrl;

  console.log('Final case study data:', {
    title,
    imageUrl
  });

  return {
    title: title,
    client_name: '', // Empty - to be filled manually
    industry: '', // Empty - to be filled manually  
    challenge: '', // Empty - to be filled manually
    solution: '', // Empty - to be filled manually
    results: '', // Empty - to be filled manually
    image_url: imageUrl,
    gamma_url: url,
    tags: [], // Empty array
    testimonial_quote: '', // Empty - to be filled manually
    testimonial_author: '', // Empty - to be filled manually
    testimonial_role: '', // Empty - to be filled manually
    project_duration: '', // Empty - to be filled manually
    services_provided: [], // Empty array
    metrics: {} // Empty object
  };
}
