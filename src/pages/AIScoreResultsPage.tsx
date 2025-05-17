
import React, { useEffect } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import AIScoreResults from "@/components/AIScoreResults";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AIScoreResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { score, formData } = location.state || { score: 0, formData: {} };

  // Send score data to database
  const sendScoreToDatabase = async (score: number, formData: any) => {
    try {
      // Calculate cost of inaction (simplified version)
      let costOfInaction = 0;
      if (formData.hourlyValue && formData.hourlyValue !== 'skip' && formData.manualHours) {
        // Rough hourly value based on selected range
        const hourlyRates = {
          "under-50": 25,
          "50-100": 75,
          "100-250": 175,
          "250-500": 375,
          "500+": 750
        };
        
        // Rough weekly hours based on selected range
        const weeklyHours = {
          "0-5": 2.5,
          "6-10": 8,
          "11-20": 15,
          "21-40": 30,
          "40+": 50
        };
        
        // Calculate monthly cost (4 weeks)
        const hourlyRate = hourlyRates[formData.hourlyValue as keyof typeof hourlyRates] || 0;
        const hours = weeklyHours[formData.manualHours as keyof typeof weeklyHours] || 0;
        costOfInaction = hourlyRate * hours * 4;
      }
      
      console.log("Sending score to database:", { score, formData, costOfInaction });
      
      const { data, error } = await supabase.functions.invoke('send-to-sheets', {
        body: { score, formData, costOfInaction }
      });
      
      if (error) {
        console.error("Error storing score in database:", error);
      } else {
        console.log("Score stored in database successfully:", data);
      }
    } catch (err) {
      console.error("Exception storing score in database:", err);
    }
  };

  // Redirect if no score data is present
  useEffect(() => {
    if (!location.state || score === 0) {
      toast({
        title: "Missing information",
        description: "Please complete the assessment to see your results.",
        variant: "destructive"
      });
      navigate('/ai-first-readiness-score');
    } else {
      // Save score to database on page load
      sendScoreToDatabase(score, formData);
    }
  }, [location.state, navigate, toast, score, formData]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SimpleNavbar />
      
      <section className="pt-16 px-4">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="text-primary mr-2 h-6 w-6" />
                <h1 className="text-3xl md:text-4xl font-bold">Results Are In!</h1>
              </div>
              <p className="text-gray-600 text-lg">Let's Decode Your Score — And Turn It Into Leverage.</p>
              <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
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
