
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create a Supabase client with the Admin key
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { score, formData } = await req.json();

    console.log("Storing data in database:", { score, formData });
    
    // Insert the data into the ai_score_results table
    const { data, error } = await supabaseAdmin
      .from('ai_score_results')
      .insert({
        score,
        full_name: formData.fullName,
        email: formData.email,
        linkedin: formData.linkedin,
        business_type: formData.businessType,
        team_size: formData.teamSize,
        current_use: formData.currentUse,
        repetitive_tasks: formData.repetitiveTasks,
        manual_areas: formData.manualAreas,
        lead_handling: formData.leadHandling,
        sop_approach: formData.sopApproach,
        ai_comfort: formData.aiComfort,
        automation_priority: formData.automationPriority,
        manual_hours: formData.manualHours,
        time_owner: formData.timeOwner,
        hourly_value: formData.hourlyValue
      })
      .select();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    console.log("Successfully stored score results in database:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-to-sheets function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
