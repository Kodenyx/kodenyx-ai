import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const name = formData.get("name") as string;
      const company = formData.get("company") as string;

      // Log form submission (you can replace this with your preferred form handling logic)
      console.log('Form submitted:', { email, name, company });

      toast({
        title: "Thanks for your interest!",
        description: "We've received your information and will be in touch soon.",
      });

      // Reset the form
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form Error:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting the form. Please try again.",
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
            {isSubmitting ? "Submitting..." : "Get in Touch"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;