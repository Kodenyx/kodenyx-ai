
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import AIWorkshop from "./pages/AIWorkshop";
import Newsletter from "./pages/Newsletter";
import AIReadinessWorkshop from "./pages/AIReadinessWorkshop";
import AIFirstReadinessScore from "./pages/AIFirstReadinessScore";
import AIScoreResultsPage from "./pages/AIScoreResultsPage";
import AIReadyScore from "./pages/AIReadyScore";
import Media from "./pages/Media";
import AIForYouth from "./pages/AIForYouth";
import AIAudit from "./pages/AIAudit";
import AIAuditB2B from "./pages/AIAuditB2B";
import AIAuditWeek1IntakeForm from "./pages/AIAuditWeek1IntakeForm";
import AIFirstCEOPodcast from "./pages/AIFirstCEOPodcast";
import AIFirstCEOPodcastGuestIntake from "./pages/AIFirstCEOPodcastGuestIntake";
import LandingPage from "./pages/LandingPage";
import BackupLandingPage from "./pages/BackupLandingPage";
import ColdEmailAutomationOffer from "./pages/ColdEmailAutomationOffer";
import TrustedPartner from "./pages/TrustedPartner";

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/ai-workshop" element={<AIWorkshop />} />
            <Route path="/ai-readiness-workshop" element={<AIReadinessWorkshop />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/ai-first-readiness-score" element={<AIFirstReadinessScore />} />
            <Route path="/ai-score-results" element={<AIScoreResultsPage />} />
            <Route path="/ai-ready-score" element={<AIReadyScore />} />
            <Route path="/media" element={<Media />} />
            <Route path="/ai-for-youth" element={<AIForYouth />} />
            <Route path="/ai-audit" element={<AIAudit />} />
            <Route path="/ai-audit-b2b" element={<AIAuditB2B />} />
            <Route path="/ai-audit/week1-intake-form" element={<AIAuditWeek1IntakeForm />} />
            <Route path="/ai-first-ceo-podcast" element={<AIFirstCEOPodcast />} />
            <Route path="/ai-first-ceo-podcast/guest-intake-form" element={<AIFirstCEOPodcastGuestIntake />} />
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/backup-landing" element={<BackupLandingPage />} />
            <Route path="/cold-email-automation-offer" element={<ColdEmailAutomationOffer />} />
            <Route path="/trusted-ai-partner" element={<TrustedPartner />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
