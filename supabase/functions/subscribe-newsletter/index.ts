
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    })
  }

  try {
    const { name, email } = await req.json()
    const FORM_ID = "1558321" // Updated form ID for newsletter
    const API_KEY = Deno.env.get('CONVERTKIT_API_KEY') || '3vcrjfR5Yfz3e1Se2AzGHQ'

    console.log('Subscribing to newsletter:', { name, email })
    console.log('Using Form ID:', FORM_ID)
    console.log('API Key length:', API_KEY ? API_KEY.length : 'not set')

    const body = JSON.stringify({
      api_key: API_KEY,
      email,
      first_name: name
    })

    console.log('Request body:', body)

    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    })

    // Log the complete response
    const responseStatus = response.status
    const responseText = await response.text()
    console.log('ConvertKit response status:', responseStatus)
    console.log('ConvertKit response body:', responseText)

    let data
    try {
      data = JSON.parse(responseText)
    } catch (e) {
      console.error('Error parsing JSON response:', e)
      data = { message: 'Invalid response from ConvertKit API' }
    }

    // If the ConvertKit API returns an error, we need to handle it properly
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

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
