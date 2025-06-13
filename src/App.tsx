
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
import AIAuditWeek1IntakeForm from "./pages/AIAuditWeek1IntakeForm";

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
            <Route path="/ai-audit/week1-intake-form" element={<AIAuditWeek1IntakeForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
