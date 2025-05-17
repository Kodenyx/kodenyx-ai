
// Utility functions for the send-score-email edge function

// CORS headers for cross-origin requests
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Create a consistent response format
export function createResponse(data: any, status = 200) {
  return new Response(
    JSON.stringify(data),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status
    }
  );
}

// Create an error response
export function createErrorResponse(error: string, status = 500) {
  console.error(`Error: ${error}`);
  return createResponse({ error }, status);
}

// Validate required email data
export function validateEmailData(requestData: any): { isValid: boolean; error?: string } {
  if (!requestData.score) {
    return { isValid: false, error: "Missing required field: score" };
  }
  
  if (!requestData.formData || !requestData.formData.email) {
    return { isValid: false, error: "Missing required field: email" };
  }
  
  return { isValid: true };
}
