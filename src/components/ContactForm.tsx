import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description: "We'll be in touch with you shortly.",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-md text-center">
        <h2 className="text-4xl font-bold text-secondary mb-8">Ready to Get Started?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Company" required />
          <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;