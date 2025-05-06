
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the registration details from the request
    const { name, email, company, sessionId } = await req.json();
    
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    console.log('Processing workshop registration:', { name, email, company, sessionId });

    // If a sessionId is provided, we'll verify the payment
    if (sessionId) {
      const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
        apiVersion: "2023-10-16",
      });

      const session = await stripe.checkout.sessions.retrieve(sessionId);
      
      if (session.payment_status !== 'paid') {
        throw new Error("Payment not completed");
      }
      
      console.log('Payment verified for session:', sessionId);
    }

    // Here you would typically store the registration in your database
    // and/or send confirmation emails, etc.
    // For now, we'll just return a success response

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Registration successful"
      }),
      {
        status: 200,
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    console.error('Workshop registration error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      }
    );
  }
});
