
import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import AIScoreForm from "@/components/AIScoreForm";

const AIFirstReadinessScore = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SimpleNavbar />
      
      {/* Scorecard Form Section */}
      <section id="scorecard-form" className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary p-6 text-white">
                <h2 className="text-2xl font-bold">AI First Readiness Scorecard</h2>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-gray-300">3 minutes to complete</p>
                </div>
              </div>
              
              <AIScoreForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFirstReadinessScore;
