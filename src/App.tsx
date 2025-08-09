
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIReadyScore from "./pages/AIReadyScore";
import AIScoreResultsPage from "./pages/AIScoreResultsPage";
import AIFirstReadinessScore from "./pages/AIFirstReadinessScore";
import AIAudit from "./pages/AIAudit";
import AIAuditB2B from "./pages/AIAuditB2B";
import AIAutomationServices from "./pages/AIAutomationServices";
import AIForBusiness from "./pages/AIForBusiness";
import AIForYouth from "./pages/AIForYouth";
import AIWorkshop from "./pages/AIWorkshop";
import AIReadinessWorkshop from "./pages/AIReadinessWorkshop";
import AIFirstCEOPodcast from "./pages/AIFirstCEOPodcast";
import AIFirstCEOPodcastGuestIntake from "./pages/AIFirstCEOPodcastGuestIntake";
import AIAuditWeek1IntakeForm from "./pages/AIAuditWeek1IntakeForm";
import Auth from "./pages/Auth";
import AdminTestimonials from "./pages/AdminTestimonials";
import TestimonialCollection from "./pages/TestimonialCollection";
import Testimonials from "./pages/Testimonials";
import Newsletter from "./pages/Newsletter";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import BackupLandingPage from "./pages/BackupLandingPage";
import ColdEmailAutomation from "./pages/ColdEmailAutomation";
import ColdEmailAutomationOffer from "./pages/ColdEmailAutomationOffer";
import TrustedPartner from "./pages/TrustedPartner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-ready-score" element={<AIReadyScore />} />
          <Route path="/ai-score-results" element={<AIScoreResultsPage />} />
          <Route path="/ai-first-readiness-score" element={<AIFirstReadinessScore />} />
          <Route path="/ai-audit" element={<AIAudit />} />
          <Route path="/ai-audit-b2b" element={<AIAuditB2B />} />
          <Route path="/ai-automation-services" element={<AIAutomationServices />} />
          <Route path="/ai-for-business" element={<AIForBusiness />} />
          <Route path="/ai-for-youth" element={<AIForYouth />} />
          <Route path="/ai-workshop" element={<AIWorkshop />} />
          <Route path="/ai-readiness-workshop" element={<AIReadinessWorkshop />} />
          <Route path="/ai-first-ceo-podcast" element={<AIFirstCEOPodcast />} />
          <Route path="/ai-first-ceo-podcast-guest-intake" element={<AIFirstCEOPodcastGuestIntake />} />
          <Route path="/ai-audit-week-1-intake-form" element={<AIAuditWeek1IntakeForm />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/collect-testimonial" element={<TestimonialCollection />} />
          <Route path="/testimonials/submit" element={<TestimonialCollection />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/media" element={<Media />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/backup-landing" element={<BackupLandingPage />} />
          <Route path="/cold-email-automation" element={<ColdEmailAutomation />} />
          <Route path="/cold-email-automation-offer" element={<ColdEmailAutomationOffer />} />
          <Route path="/trusted-partner" element={<TrustedPartner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
