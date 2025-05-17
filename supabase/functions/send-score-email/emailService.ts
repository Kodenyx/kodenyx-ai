
import { Resend } from "npm:resend@2.0.0";

// Email sending service
export class EmailService {
  private resend: Resend;
  
  constructor(apiKey: string | undefined) {
    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }
    this.resend = new Resend(apiKey);
  }
  
  // Send email to user
  async sendUserEmail(
    recipientEmail: string, 
    subject: string, 
    htmlContent: string
  ): Promise<any> {
    try {
      const response = await this.resend.emails.send({
        from: "AI Readiness Score <a.anand@kodenyx.com>",
        to: ["a.anand@kodenyx.com"], // In testing mode, sending to admin with different subject
        subject: `[FOR: ${recipientEmail}] ${subject}`,
        html: htmlContent,
      });
      
      console.log("Email intended for user sent to admin:", response);
      return response;
    } catch (error) {
      console.error("Error sending user email:", error);
      throw error;
    }
  }
  
  // Send email to admin
  async sendAdminEmail(
    userName: string, 
    userEmail: string, 
    score: number, 
    level: string, 
    htmlContent: string
  ): Promise<any> {
    try {
      const response = await this.resend.emails.send({
        from: "AI Readiness Score <a.anand@kodenyx.com>",
        to: ["a.anand@kodenyx.com"],
        subject: `[ADMIN] AI Readiness Score for ${userName}: ${score}/27 (${level})`,
        html: htmlContent,
      });
      
      console.log("Admin email sent successfully:", response);
      return response;
    } catch (error) {
      console.error("Error sending admin email:", error);
      throw error;
    }
  }
}
