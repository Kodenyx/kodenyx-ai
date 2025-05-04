
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
