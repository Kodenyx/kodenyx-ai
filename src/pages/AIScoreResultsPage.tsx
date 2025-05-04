
import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { useLocation } from "react-router-dom";
import AIScoreResults from "@/components/AIScoreResults";

const AIScoreResultsPage = () => {
  const location = useLocation();
  const { score, formData } = location.state || { score: 0, formData: {} };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SimpleNavbar />
      
      <section className="pt-20 px-4">
        <div className="container mx-auto py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Your AI Readiness Results</h1>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200">
              <AIScoreResults score={score} formData={formData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIScoreResultsPage;
