import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

// ConvertKit settings
const FORM_ID = "7583349"
const API_KEY = Deno.env.get('CONVERTKIT_API_KEY')

serve(async (req) => {
  console.log("Function called with method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("Handling OPTIONS request");
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    })
  }

  try {
    const { email } = await req.json()
    
    console.log('Received guest application:', { email })

    // Simple validation
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Store in Supabase database (we'll store minimal info for now)
    const { data: dbData, error: dbError } = await supabase
      .from('podcast_guest_responses')
      .insert({
        email,
        full_name: '', // We'll make this required later when we expand the form
        company_name: 'Pending', // Placeholder
        title_role: 'Pending', // Placeholder
        website: 'Pending', // Placeholder
        linkedin_profile: 'Pending', // Placeholder
        business_description: 'Initial interest submitted via email',
        scaling_system: 'To be provided',
        bottleneck_breakthrough: 'To be discussed'
      })

    if (dbError) {
      console.error('Supabase error:', dbError)
      // Continue with ConvertKit even if DB fails
    } else {
      console.log('Successfully stored in database:', dbData)
    }

    // Also send to ConvertKit (keep existing functionality)
    const convertKitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email,
          first_name: '',
        }),
      }
    );

    const convertKitData = await convertKitResponse.json();
    console.log('ConvertKit API response:', convertKitData);

    if (!convertKitResponse.ok) {
      console.error(`ConvertKit API error: ${JSON.stringify(convertKitData)}`);
    }

    // Successfully processed
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Thank you for your interest! We'll be in touch soon.",
        stored_in_database: !dbError
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'An unexpected error occurred' }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
