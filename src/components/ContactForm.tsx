import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      console.log('Submitting data:', data);
      const { data: response, error } = await supabase.functions.invoke('subscribe-contact', {
        body: data,
      });

      console.log('Response:', response);

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      toast({
        title: "Thanks for your interest!",
        description: "We'll be in touch with you shortly with the 3 fixes.",
      });

      formRef.current?.reset();
    } catch (error: any) {
      console.error('Detailed error:', error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Struggling to convert leads?</h2>
        <p className="text-lg text-gray-300 mb-8">Avoid 3 biggest mistakes businesses make when trying to convert leads</p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" type="text" placeholder="Your Name" required className="bg-white/10 text-white placeholder:text-gray-400" />
          <Input name="email" type="email" placeholder="Your Email" required className="bg-white/10 text-white placeholder:text-gray-400" />
          <Input name="company" type="text" placeholder="Company" required className="bg-white/10 text-white placeholder:text-gray-400" />
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