import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
    };

    try {
      const { error } = await supabase.functions.invoke('subscribe-contact', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Thanks for your interest!",
        description: "We'll be in touch with you shortly with the 3 fixes.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-secondary mb-3">Struggling to convert leads?</h2>
        <p className="text-lg text-gray-600 mb-8">Avoid 3 biggest mistakes businesses make when trying to convert leads</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" type="text" placeholder="Your Name" required />
          <Input name="email" type="email" placeholder="Your Email" required />
          <Input name="company" type="text" placeholder="Company" required />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Unlock the 3 Fixes"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;