
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";

const GoogleSheetsGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <HelpCircle className="h-4 w-4 mr-1" />
          <span>How to set up</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Setting Up Google Sheets Integration</DialogTitle>
          <DialogDescription>
            Learn how to connect your AI Readiness Scorecard to Google Sheets using Zapier
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <p>
            Follow these steps to automatically send scorecard data to a Google Sheet
            using Zapier (no coding required):
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="step1">
              <AccordionTrigger>Step 1: Create a Zapier account</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  If you don't already have a Zapier account, you'll need to create one at{" "}
                  <a
                    href="https://zapier.com/sign-up"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    https://zapier.com/sign-up
                  </a>
                </p>
                <p>
                  Zapier offers a free plan that allows you to create basic automations
                  which is enough for this integration.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step2">
              <AccordionTrigger>Step 2: Create a Google Sheet</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Go to <a href="https://sheets.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Google Sheets</a></li>
                  <li>Create a new spreadsheet</li>
                  <li>
                    Add the following column headers in the first row:
                    <div className="bg-gray-50 p-2 mt-1 rounded font-mono text-sm">
                      score, fullName, email, businessType, teamSize, currentUse, repetitiveTasks, manualAreas, leadHandling, sopApproach, aiComfort, automationPriority, manualHours, timeOwner, hourlyValue, timestamp
                    </div>
                  </li>
                  <li>Save your spreadsheet with a memorable name</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step3">
              <AccordionTrigger>Step 3: Create a Zap with a Webhook trigger</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Go to Zapier and click "Create Zap"</li>
                  <li>For the trigger app, search for and select "Webhooks by Zapier"</li>
                  <li>Select "Catch Hook" as the trigger event</li>
                  <li>Click "Continue" - Zapier will generate a custom webhook URL</li>
                  <li>Copy this URL - you'll need to enter it in the webhook configuration in our app</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step4">
              <AccordionTrigger>Step 4: Set up the Google Sheets action</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>In your Zap, click "+" to add an action</li>
                  <li>Search for and select "Google Sheets"</li>
                  <li>Select "Create Spreadsheet Row" as the action</li>
                  <li>Connect your Google account if prompted</li>
                  <li>Select the spreadsheet and worksheet you created earlier</li>
                  <li>
                    Map the incoming data from the webhook to your spreadsheet columns:
                    <div className="bg-gray-50 p-2 mt-1 rounded text-sm">
                      <p><strong>score:</strong> Score from webhook payload</p>
                      <p><strong>fullName:</strong> Full Name from webhook payload</p>
                      <p><strong>email:</strong> Email from webhook payload</p>
                      {/* Add other important fields */}
                      <p><strong>timestamp:</strong> Timestamp from webhook payload</p>
                    </div>
                  </li>
                  <li>Complete the Zap setup and turn it on</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step5">
              <AccordionTrigger>Step 5: Configure the webhook in our app</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Return to this app</li>
                  <li>Click on "Connect to Google Sheets"</li>
                  <li>Paste the webhook URL you copied from Zapier</li>
                  <li>Click "Save Configuration"</li>
                  <li>Now you can click "Send to Google Sheets" to export score results</li>
                </ol>
                <p className="mt-3">
                  That's it! Your scorecard results will now be automatically added to your Google Sheet.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h3 className="font-medium text-blue-800">Troubleshooting Tips</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-blue-700">
              <li>Make sure your Zap is turned on in Zapier</li>
              <li>Verify that you've correctly mapped all fields in Zapier</li>
              <li>Check the Zapier task history to see if data is being received</li>
              <li>If using a free Zapier plan, remember there's a limit on how many tasks can run per month</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GoogleSheetsGuide;
