
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIForYouth from "./pages/AIForYouth";
import AIAuditB2B from "./pages/AIAuditB2B";
import AIFirstCEOPodcast from "./pages/AIFirstCEOPodcast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AIAuditWeek1IntakeForm from "./pages/AIAuditWeek1IntakeForm";
import AIFirstCEOPodcastGuestIntake from "./pages/AIFirstCEOPodcastGuestIntake";
import TestimonialCollection from "@/pages/TestimonialCollection";
import Testimonials from "@/pages/Testimonials";
import Media from "@/pages/Media";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-for-youth" element={<AIForYouth />} />
          <Route path="/ai-audit-b2b" element={<AIAuditB2B />} />
          <Route path="/audit-intake" element={<AIAuditWeek1IntakeForm />} />
          <Route path="/ai-first-ceo-podcast" element={<AIFirstCEOPodcast />} />
          <Route path="/podcast-guest" element={<AIFirstCEOPodcastGuestIntake />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/testimonials/submit" element={<TestimonialCollection />} />
          <Route path="/media" element={<Media />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
