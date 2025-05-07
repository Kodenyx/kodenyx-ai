
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { score, formData, webhookUrl } = await req.json();

    if (!webhookUrl || !score) {
      throw new Error("Missing required parameters: webhookUrl and score must be provided");
    }

    // Format data for webhook
    const payload = {
      score,
      ...formData,
      timestamp: new Date().toISOString()
    };

    console.log("Sending data to webhook:", payload);
    
    // Send data to the webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Webhook returned error: ${response.status} ${errorText}`);
    }

    const result = await response.text();
    console.log("Webhook response:", result);

    return new Response(JSON.stringify({ success: true }), {
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
