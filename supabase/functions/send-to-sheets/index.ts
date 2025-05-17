
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders, createErrorResponse, createResponse, validateScoreData } from "./utils.ts";
import { storeScoreData } from "./database.ts";

// Main function handler
serve(async (req) => {
  console.log("Send-to-sheets function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request data
    const requestData = await req.json();
    const { score, formData, costOfInaction } = requestData;

    // Validate required data
    const validation = validateScoreData(requestData);
    if (!validation.isValid) {
      return createErrorResponse(validation.error || "Invalid data", 400);
    }

    console.log("Received data:", { score, formData, costOfInaction });
    
    // Store the data in the database
    const data = await storeScoreData(score, formData, costOfInaction);

    // Return success response
    return createResponse({ success: true, data });
    
  } catch (error) {
    console.error("Error in send-to-sheets function:", error);
    return createErrorResponse(error.message, 500);
  }
});
