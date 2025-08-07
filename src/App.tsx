
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import AIAudit from "./pages/AIAudit";
import AIAuditB2B from "./pages/AIAuditB2B";
import AIForYouth from "./pages/AIForYouth";
import AIReadyScore from "./pages/AIReadyScore";
import AIScoreResultsPage from "./pages/AIScoreResultsPage";
import Testimonials from "./pages/Testimonials";
import AdminTestimonials from "./pages/AdminTestimonials";
import TestimonialCollection from "./pages/TestimonialCollection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-audit" element={<AIAudit />} />
            <Route path="/ai-audit-b2b" element={<AIAuditB2B />} />
            <Route path="/ai-for-youth" element={<AIForYouth />} />
            <Route path="/ai-ready-score" element={<AIReadyScore />} />
            <Route path="/ai-score-results" element={<AIScoreResultsPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/testimonials/submit" element={<TestimonialCollection />} />
            <Route path="/admin/testimonials" element={<AdminTestimonials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
