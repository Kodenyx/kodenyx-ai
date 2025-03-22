
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

// ConvertKit settings
const FORM_ID = "7583349"
const API_KEY = Deno.env.get('CONVERTKIT_API_KEY')

// This is a public-facing function that doesn't require auth
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
    const { name, email } = await req.json()
    
    console.log('Received newsletter subscription:', { name, email })

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

    // Send to ConvertKit
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
          first_name: name,
        }),
      }
    );

    const convertKitData = await convertKitResponse.json();
    console.log('ConvertKit API response:', convertKitData);

    if (!convertKitResponse.ok) {
      throw new Error(`ConvertKit API error: ${JSON.stringify(convertKitData)}`);
    }

    // Successfully subscribed
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Successfully subscribed to the newsletter!"
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
