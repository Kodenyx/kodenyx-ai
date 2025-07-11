
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIAgents from "@/components/AIAgents";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import AsSeenOn from "@/components/AsSeenOn";

const BackupLandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AsSeenOn />
      <Features />
      <AIAgents />
      <Process />
      <Testimonials />
      <FAQ />
      <About />
      <ContactForm />
    </div>
  );
};

export default BackupLandingPage;
