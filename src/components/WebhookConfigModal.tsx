
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Database, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleSheetsGuide from "./GoogleSheetsGuide";

interface WebhookConfigModalProps {
  onWebhookSave: (url: string) => void;
  savedWebhook: string;
}

const WebhookConfigModal: React.FC<WebhookConfigModalProps> = ({ 
  onWebhookSave,
  savedWebhook
}) => {
  const [webhookUrl, setWebhookUrl] = useState(savedWebhook || "");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    if (!webhookUrl || !webhookUrl.startsWith("http")) {
      toast({
        title: "Invalid Webhook URL",
        description: "Please enter a valid webhook URL starting with http:// or https://",
        variant: "destructive"
      });
      return;
    }
    
    onWebhookSave(webhookUrl);
    localStorage.setItem('scorecard_webhook_url', webhookUrl);
    
    toast({
      title: "Webhook URL Saved",
      description: "Your webhook URL has been saved successfully."
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Database className="h-4 w-4" />
          {savedWebhook ? "Edit Google Sheets Connection" : "Connect to Google Sheets"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Connect to Google Sheets</span>
            <GoogleSheetsGuide />
          </DialogTitle>
          <DialogDescription>
            Enter your webhook URL from Zapier, Make.com, or similar service that connects to Google Sheets.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="webhook-url">Webhook URL</Label>
            <Input
              id="webhook-url"
              placeholder="https://hooks.zapier.com/..."
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Need help setting up? Click the "How to set up" button for a step-by-step guide.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>Save Configuration</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WebhookConfigModal;
