
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

    // Check if this case study already exists by URL
    const { data: existingCaseStudy } = await supabase
      .from('case_studies')
      .select('id')
      .eq('gamma_url', url)
      .single();

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
  console.log('Extracting data from HTML for URL:', url);
  
  // Extract title from various possible sources - try multiple approaches
  let title = 'Case Study';
  
  // Try to get title from <title> tag first
  const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
  if (titleMatch) {
    title = titleMatch[1].trim().replace(' - Gamma', '').replace('Gamma - ', '');
    console.log('Extracted title from <title> tag:', title);
  }
  
  // Try to get title from Open Graph meta tag
  const ogTitleMatch = html.match(/<meta[^>]*property=["\']og:title["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i);
  if (ogTitleMatch && ogTitleMatch[1] !== title) {
    title = ogTitleMatch[1].trim();
    console.log('Extracted title from og:title:', title);
  }

  // Try to extract from URL path as fallback
  if (title === 'Case Study' || title.includes('Gamma')) {
    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart && lastPart.includes('-')) {
      // Convert URL slug to readable title
      title = lastPart.split('-')
        .filter(part => part.length > 2) // Remove short connector words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      console.log('Generated title from URL:', title);
    }
  }

  // Extract meta description for summary
  const descriptionMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i);
  const description = descriptionMatch ? descriptionMatch[1] : '';
  console.log('Extracted description:', description);

  // Try to extract thumbnail from meta tags
  let imageUrl = '';
  const ogImageMatch = html.match(/<meta[^>]*property=["\']og:image["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i);
  if (ogImageMatch) {
    imageUrl = ogImageMatch[1];
    console.log('Extracted og:image:', imageUrl);
  } else {
    // Fallback to twitter image
    const twitterImageMatch = html.match(/<meta[^>]*name=["\']twitter:image["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i);
    if (twitterImageMatch) {
      imageUrl = twitterImageMatch[1];
      console.log('Extracted twitter:image:', imageUrl);
    }
  }

  // Generate more specific client name based on title
  let clientName = 'Featured Client';
  if (title && title !== 'Case Study') {
    // Try to extract company/client name from title
    const words = title.split(' ');
    if (words.length > 2) {
      // Take first 1-2 words as potential client name
      clientName = words.slice(0, 2).join(' ');
    }
  }

  // Try to determine industry from title/description
  let industry = 'Business Services';
  const titleLower = title.toLowerCase();
  const descLower = description.toLowerCase();
  const combined = `${titleLower} ${descLower}`;
  
  if (combined.includes('financial') || combined.includes('finance') || combined.includes('bank')) {
    industry = 'Financial Services';
  } else if (combined.includes('marketing') || combined.includes('digital') || combined.includes('agency')) {
    industry = 'Marketing & Advertising';
  } else if (combined.includes('tech') || combined.includes('software') || combined.includes('ai')) {
    industry = 'Technology';
  } else if (combined.includes('healthcare') || combined.includes('medical')) {
    industry = 'Healthcare';
  } else if (combined.includes('retail') || combined.includes('ecommerce') || combined.includes('e-commerce')) {
    industry = 'Retail & E-commerce';
  }

  console.log('Final extracted data:', {
    title,
    clientName,
    industry,
    imageUrl: imageUrl || '/lovable-uploads/b477447b-cb21-454f-abae-d16b6abdffc8.png'
  });

  return {
    title: title,
    client_name: clientName,
    industry: industry,
    challenge: description || 'Business process optimization and efficiency improvement challenges.',
    solution: 'Comprehensive AI automation solutions tailored to streamline operations and improve productivity.',
    results: 'Significant improvements in operational efficiency and cost savings through AI implementation.',
    image_url: imageUrl || '/lovable-uploads/b477447b-cb21-454f-abae-d16b6abdffc8.png',
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
