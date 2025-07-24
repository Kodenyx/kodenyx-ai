
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIForYouth from "./pages/AIForYouth";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AIAuditWeek1IntakeForm from "./pages/AIAuditWeek1IntakeForm";
import AIFirstCEOPodcastGuestIntake from "./pages/AIFirstCEOPodcastGuestIntake";
import TestimonialCollection from "@/pages/TestimonialCollection";
import Testimonials from "@/pages/Testimonials";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-for-youth" element={<AIForYouth />} />
          <Route path="/audit-intake" element={<AIAuditWeek1IntakeForm />} />
          <Route path="/podcast-guest" element={<AIFirstCEOPodcastGuestIntake />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/testimonials/submit" element={<TestimonialCollection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
