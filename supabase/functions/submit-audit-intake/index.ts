
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AuditIntakeFormData {
  topWorkflows: string;
  clientAssignment: string;
  onboardingProcess: string;
  deliveryTools: string[];
  otherDeliveryTool: string;
  trackingProgress: string;
  inefficientTasks: string[];
  manualOnboarding: string;
  chaseDownTask: string[];
  updateGathering: string;
  timeConsumingWork: string;
  salesOpsTools: string;
  underusedTools: string;
  neededData: string;
  clientNotesStorage: string;
  newClientRejection: string;
  wouldBreakFirst: string;
  confidenceNeeds: string;
  scalingIssues: string;
  auditGoal: string;
  additionalThoughts: string;
}

// Create a Supabase client
function createSupabaseClient() {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );
}

serve(async (req) => {
  console.log("Submit audit intake function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request data
    const formData: AuditIntakeFormData = await req.json();
    console.log("Received form data:", formData);

    // Create database client
    const supabase = createSupabaseClient();
    
    // Prepare the data for insertion
    const insertData = {
      top_workflows: formData.topWorkflows,
      client_assignment: formData.clientAssignment,
      onboarding_process: formData.onboardingProcess,
      delivery_tools: formData.deliveryTools,
      other_delivery_tool: formData.otherDeliveryTool,
      tracking_progress: formData.trackingProgress,
      inefficient_tasks: formData.inefficientTasks,
      manual_onboarding: formData.manualOnboarding,
      chase_down_tasks: formData.chaseDownTask,
      update_gathering: formData.updateGathering,
      time_consuming_work: formData.timeConsumingWork,
      sales_ops_tools: formData.salesOpsTools,
      underused_tools: formData.underusedTools,
      needed_data: formData.neededData,
      client_notes_storage: formData.clientNotesStorage,
      new_client_rejection: formData.newClientRejection,
      would_break_first: formData.wouldBreakFirst,
      confidence_needs: formData.confidenceNeeds,
      scaling_issues: formData.scalingIssues,
      audit_goal: formData.auditGoal,
      additional_thoughts: formData.additionalThoughts
    };

    console.log("Inserting data into ai_audit_week1_responses:", insertData);

    // Insert the data into the database
    const { data, error } = await supabase
      .from('ai_audit_week1_responses')
      .insert(insertData)
      .select();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: `Database error: ${error.message}` }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log("Successfully stored audit intake response:", data);
    
    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error("Error in submit-audit-intake function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
