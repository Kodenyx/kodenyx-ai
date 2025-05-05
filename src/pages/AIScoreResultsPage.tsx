
import React, { useEffect } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import AIScoreResults from "@/components/AIScoreResults";
import { useToast } from "@/hooks/use-toast";

const AIScoreResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { score, formData } = location.state || { score: 0, formData: {} };

  // Redirect if no score data is present
  useEffect(() => {
    if (!location.state || score === 0) {
      toast({
        title: "Missing information",
        description: "Please complete the assessment to see your results.",
        variant: "destructive"
      });
      navigate('/ai-first-readiness-score');
    }
  }, [location.state, navigate, toast, score]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SimpleNavbar />
      
      <section className="pt-16 px-4">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Let's Decode Your Score — And Turn It Into Leverage.</h1>
              <p className="text-gray-600">Your personalized path to leveraging AI in your business</p>
            </div>
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
