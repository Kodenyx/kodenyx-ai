
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

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
    
    // Form ID for newsletter subscription
    const FORM_ID = "1558321"
    
    console.log('Subscribing to newsletter:', { name, email })
    console.log('Using Form ID:', FORM_ID)

    // Using the form-based API that doesn't require an API key for subscribing
    const body = JSON.stringify({
      email,
      first_name: name
    })

    console.log('Request body:', body)

    // Direct form submission to ConvertKit - this method doesn't require an API key
    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    })

    // Log the response status and body for debugging
    console.log('ConvertKit response status:', response.status)
    const responseText = await response.text()
    console.log('ConvertKit response body:', responseText)

    let data
    try {
      // Try to parse the response as JSON
      data = JSON.parse(responseText)
    } catch (e) {
      console.error('Error parsing JSON response:', e)
      data = { message: 'Invalid response from ConvertKit API' }
    }

    // If there's any error with the ConvertKit API
    if (!response.ok) {
      console.error('ConvertKit API error:', data)
      return new Response(
        JSON.stringify({ error: data.message || 'Failed to subscribe to newsletter', details: data }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
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
