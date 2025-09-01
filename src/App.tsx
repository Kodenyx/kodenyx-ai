import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import PodcastGuest from "@/pages/PodcastGuest";
import SubmitTestimonial from "@/pages/SubmitTestimonial";
import AuditIntake from "@/pages/AuditIntake";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import CaseStudies from "@/pages/CaseStudies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/podcast-guest" element={<PodcastGuest />} />
            <Route path="/submit-testimonial" element={<SubmitTestimonial />} />
            <Route path="/audit-intake" element={<AuditIntake />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
