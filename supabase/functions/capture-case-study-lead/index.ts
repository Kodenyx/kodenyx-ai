
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

interface LeadData {
  name: string;
  email: string;
  caseStudyId: string;
  caseStudyTitle: string;
}

serve(async (req) => {
  console.log("Capture case study lead function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  try {
    const { name, email, caseStudyId, caseStudyTitle }: LeadData = await req.json();
    
    console.log('Received lead data:', { name, email, caseStudyId, caseStudyTitle });

    // Validate required fields
    if (!name || !email || !caseStudyId) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Initialize Supabase client for logging
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Create lead record in database for tracking
    const { error: dbError } = await supabase
      .from('case_study_downloads')
      .insert({
        name,
        email,
        case_study_id: caseStudyId,
        case_study_title: caseStudyTitle,
        downloaded_at: new Date().toISOString()
      });

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue with GHL integration even if DB logging fails
    }

    // Integrate with GoHighLevel CRM
    const ghlApiKey = Deno.env.get('GHL_API_KEY');
    
    if (ghlApiKey) {
      try {
        // Create or update contact in GHL
        const ghlResponse = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${ghlApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: name.split(' ')[0],
            lastName: name.split(' ').slice(1).join(' '),
            email,
            tags: [`case-study-download`, `case-study-${caseStudyId}`],
            customFields: [
              {
                key: 'case_study_downloaded',
                value: caseStudyTitle
              }
            ]
          }),
        });

        const ghlData = await ghlResponse.json();
        console.log('GHL API response:', ghlData);

        if (!ghlResponse.ok) {
          console.error('GHL API error:', ghlData);
        }
      } catch (ghlError) {
        console.error('Error integrating with GHL:', ghlError);
        // Continue even if GHL integration fails
      }
    } else {
      console.warn('GHL_API_KEY not configured');
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Lead captured successfully",
        downloadUrl: `/case-study-download/${caseStudyId}`
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
    
  } catch (error) {
    console.error('Error in capture-case-study-lead function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
