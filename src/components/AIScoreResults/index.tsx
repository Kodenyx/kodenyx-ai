
import React, { useState, useEffect } from "react";
import ScoreDisplayBlock from "./ScoreDisplayBlock";
import TierIdentityBlock from "./TierIdentityBlock";
import CostOfInactionBlock from "./CostOfInactionBlock";
import InsightsBlock from "./InsightsBlock";
import AutomationOpportunityBlock from "./AutomationOpportunityBlock";
import CtaBlock from "./CtaBlock";
import WebhookConfigModal from "../WebhookConfigModal";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AIScoreResultsProps {
  score: number;
  formData: any;
}

const AIScoreResults: React.FC<AIScoreResultsProps> = ({ score, formData }) => {
  const [webhookUrl, setWebhookUrl] = useState<string>("");
  const [sentToSheets, setSentToSheets] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedWebhook = localStorage.getItem('scorecard_webhook_url');
    if (savedWebhook) {
      setWebhookUrl(savedWebhook);
    }
  }, []);

  const sendToGoogleSheets = async () => {
    if (!webhookUrl) {
      toast({
        title: "No webhook configured",
        description: "Please configure a webhook URL first.",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-to-sheets', {
        body: { 
          score, 
          formData,
          webhookUrl
        }
      });

      if (error) throw error;

      setSentToSheets(true);
      toast({
        title: "Success!",
        description: "Your score data has been sent to Google Sheets.",
      });
    } catch (error) {
      console.error("Error sending to Google Sheets:", error);
      toast({
        title: "Error",
        description: "Failed to send data to Google Sheets. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="p-4 md:p-8">
      {/* Score Display */}
      <ScoreDisplayBlock score={score} />
      
      {/* Google Sheets Integration */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex items-center gap-3">
          <Database className="h-5 w-5 text-gray-600" />
          <div>
            <h3 className="font-medium">Export to Google Sheets</h3>
            <p className="text-sm text-gray-600">Send your score data to a Google Sheet for tracking</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <WebhookConfigModal 
            onWebhookSave={setWebhookUrl} 
            savedWebhook={webhookUrl} 
          />
          {webhookUrl && !sentToSheets && (
            <Button 
              variant="default" 
              onClick={sendToGoogleSheets}
              disabled={isSending || !webhookUrl}
              className="flex items-center gap-2"
            >
              {isSending ? "Sending..." : "Send to Google Sheets"}
            </Button>
          )}
          {sentToSheets && (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <Check className="h-4 w-4" />
              <span>Sent to Google Sheets</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Tier Identity Block */}
      <TierIdentityBlock score={score} />
      
      {/* Cost of Inaction Block */}
      <CostOfInactionBlock 
        manualHours={formData.manualHours || "11-20"} 
        hourlyValue={formData.hourlyValue || "skip"}
        teamSize={formData.teamSize}
      />
      
      {/* Insights Block */}
      <InsightsBlock score={score} />
      
      {/* Automation Opportunity Block */}
      <AutomationOpportunityBlock 
        automationPriority={formData.automationPriority || "lead-nurture"} 
      />
      
      {/* Call to Action Block */}
      <CtaBlock />
    </div>
  );
};

export default AIScoreResults;
