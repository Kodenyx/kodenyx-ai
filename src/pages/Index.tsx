import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;