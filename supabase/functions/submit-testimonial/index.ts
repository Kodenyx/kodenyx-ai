
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('Submit testimonial function called:', req.method);

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing environment variables:', { supabaseUrl: !!supabaseUrl, supabaseServiceKey: !!supabaseServiceKey });
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey)

    const requestBody = await req.json()
    console.log('Request body received:', requestBody);

    const { name, role, company, testimonial, rating, category, image_url } = requestBody

    // Validate required fields
    if (!name?.trim()) {
      console.log('Validation error: Name is required');
      return new Response(
        JSON.stringify({ error: 'Name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!testimonial?.trim()) {
      console.log('Validation error: Testimonial is required');
      return new Response(
        JSON.stringify({ error: 'Testimonial is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!category) {
      console.log('Validation error: Category is required');
      return new Response(
        JSON.stringify({ error: 'Category is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Attempting to insert testimonial:', {
      name: name.trim(),
      category,
      testimonial_length: testimonial.trim().length
    });

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
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit testimonial: ' + error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Testimonial inserted successfully:', data);

    return new Response(
      JSON.stringify({ data, message: 'Testimonial submitted successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error') }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
