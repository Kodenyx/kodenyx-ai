
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { 
  corsHeaders, 
  createResponse, 
  createErrorResponse, 
  validateEmailData 
} from "./utils.ts";
import { 
  generateEmailContent, 
  generateAdminEmailContent 
} from "./emailContent.ts";
import { EmailService } from "./emailService.ts";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request data
    const requestData = await req.json();
    const { score, formData } = requestData;

    // Validate required data
    const validation = validateEmailData(requestData);
    if (!validation.isValid) {
      return createErrorResponse(validation.error || "Invalid data", 400);
    }

    console.log("Sending email with score data:", { 
      score, 
      email: formData.email 
    });

    // Initialize email service
    const emailService = new EmailService(Deno.env.get("RESEND_API_KEY"));

    // Calculate readiness level
    const readinessScore = score;
    const scoreLevel = readinessScore < 7 ? "Beginner" : readinessScore < 13 ? "Intermediate" : 
                       readinessScore < 19 ? "Advanced" : "Expert";

    // Generate email content
    const htmlContent = generateEmailContent(readinessScore, formData);
    const adminHtmlContent = generateAdminEmailContent(readinessScore, formData, htmlContent);

    // Send emails
    try {
      // For user's email - send to admin but mention it's intended for the user
      await emailService.sendUserEmail(
        formData.email,
        `Your AI Readiness Score: ${readinessScore}/27 (${scoreLevel})`,
        htmlContent
      );

      // Send a copy to admin with additional info
      await emailService.sendAdminEmail(
        formData.fullName,
        formData.email,
        readinessScore,
        scoreLevel,
        adminHtmlContent
      );

      return createResponse({ 
        success: true, 
        message: "Emails sent successfully" 
      });
      
    } catch (emailError) {
      console.error("Error sending emails:", emailError);
      return createErrorResponse("Failed to send one or more emails");
    }
    
  } catch (error) {
    console.error("Error in send-score-email function:", error);
    return createErrorResponse(error.message || "Unknown error occurred");
  }
});
