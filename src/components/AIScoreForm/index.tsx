
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { calculateReadinessScore } from "@/utils/scoreUtils";

import ContactForm from "./ContactForm";
import ReadinessForm from "./ReadinessForm";
import AIScoreResults from "@/components/AIScoreResults";
import { calculateCostOfInaction, sendScoreEmail, sendScoreToDatabase } from "./utils";
import type { ContactFormValues, ReadinessFormValues } from "./schemas";

type FormSection = "contact" | "readiness" | "results";

const AIScoreForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<FormSection>("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scoreData, setScoreData] = useState({
    score: 0,
    formData: {}
  });
  
  const [contactData, setContactData] = useState<ContactFormValues>({
    fullName: "",
    email: "",
    linkedin: "",
    businessType: "",
    teamSize: "",
  });
  
  const [readinessData, setReadinessData] = useState<ReadinessFormValues>({
    currentUse: "",
    repetitiveTasks: "",
    manualAreas: [],
    leadHandling: "",
    sopApproach: "",
    aiComfort: "",
    automationPriority: "",
    manualHours: "",
    timeOwner: "",
    hourlyValue: "",
  });

  // Progress tracking
  const progress = currentSection === "contact" ? 30 : currentSection === "readiness" ? 80 : 100;

  // Handle contact form submission
  const onContactNext = (data: ContactFormValues) => {
    console.log("Contact data:", data);
    setContactData(data);
    setCurrentSection("readiness");
  };

  // Handle readiness form submission
  const onReadinessSubmit = async (data: ReadinessFormValues) => {
    setIsSubmitting(true);
    setReadinessData(data);
    
    // Combine data from both forms
    const formData = {
      ...contactData,
      ...data,
    };
    
    console.log("Complete form data:", formData);
    
    try {
      // Calculate the AI readiness score
      const score = calculateReadinessScore(data);
      console.log("AI Readiness Score:", score);
      
      // Calculate cost of inaction
      const costOfInaction = calculateCostOfInaction(formData.hourlyValue, formData.manualHours);
      
      // Store the score and form data
      setScoreData({
        score,
        formData
      });
      
      toast({
        title: "Scorecard submitted!",
        description: "Your AI readiness score has been calculated.",
      });
      
      // Send score results via email
      await sendScoreEmail(score, formData);
      
      // Send score data to database
      await sendScoreToDatabase(score, formData, costOfInaction);

      // Show results section
      setCurrentSection("results");
      
      // Also navigate to results page for more persistent storage
      navigate('/ai-score-results', { 
        state: { 
          score,
          formData
        }
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error submitting your scorecard. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <Progress value={progress} className="h-2 mb-8" />
      
      {currentSection === "contact" && (
        <ContactForm 
          onNext={onContactNext} 
          defaultValues={contactData}
        />
      )}
      
      {currentSection === "readiness" && (
        <ReadinessForm 
          onBack={() => setCurrentSection("contact")}
          onSubmit={onReadinessSubmit}
          isSubmitting={isSubmitting}
          defaultValues={readinessData}
        />
      )}

      {currentSection === "results" && (
        <AIScoreResults 
          score={scoreData.score} 
          formData={scoreData.formData} 
        />
      )}
    </div>
  );
};

export default AIScoreForm;
