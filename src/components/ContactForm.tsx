import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const FORM_ID = "7646729";

interface SecretResponse {
  data: {
    secret: string;
  } | null;
  error: Error | null;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;

    try {
      console.log('Starting form submission process...');
      
      const { data, error: secretError } = await supabase.rpc('get_secret', {
        secret_name: 'CONVERTKIT_API_KEY'
      }) as SecretResponse;

      console.log('Secret response:', { data, error: secretError });

      if (secretError) {
        throw new Error('Failed to get API key: ' + secretError.message);
      }

      if (!data?.secret) {
        throw new Error('API key not found. Please ensure CONVERTKIT_API_KEY is set in Supabase Vault.');
      }

      console.log('Successfully retrieved API key, making ConvertKit API request...');

      const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: data.secret,
          email,
          first_name: name,
          fields: {
            company,
          },
        }),
      });

      const responseData = await response.json();
      console.log('ConvertKit API response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || "Subscription failed");
      }

      toast({
        title: "Thanks for your interest!",
        description: "You've been successfully subscribed. Check your email for the lead conversion tips.",
      });

      // Reset the form
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error 
          ? error.message 
          : "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-secondary mb-3">Struggling to convert leads?</h2>
        <p className="text-lg text-gray-600 mb-8">Avoid 3 biggest mistakes businesses make when trying to convert leads</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input type="text" name="company" placeholder="Company" required />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Unlock the 3 Fixes"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;