
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { name, role, company, testimonial, rating, category, image_url } = await req.json()

    // Validate required fields
    if (!name?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!testimonial?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Testimonial is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!category) {
      return new Response(
        JSON.stringify({ error: 'Category is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Insert testimonial directly using service role (bypasses RLS)
    const { data, error } = await supabaseClient
      .from('testimonials')
      .insert([{
        name: name.trim(),
        role: role?.trim() || null,
        company: company?.trim() || null,
        testimonial: testimonial.trim(),
        rating: rating || 5,
        category,
        image_url: image_url?.trim() || null,
        is_approved: false
      }])
      .select()

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit testimonial' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ data, message: 'Testimonial submitted successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
