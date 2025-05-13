
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Flame } from "lucide-react";
import { calculateCostOfInaction, getDynamicCostMessages } from "@/utils/scoreUtils";

interface CostOfInactionBlockProps {
  manualHours?: string;
  hourlyValue?: string;
  teamSize?: string;
  score?: number; // Added score as an optional prop
  formData?: any; // Added formData as an optional prop
}

const CostOfInactionBlock: React.FC<CostOfInactionBlockProps> = ({ 
  manualHours: propManualHours, 
  hourlyValue: propHourlyValue,
  teamSize: propTeamSize = "solo", // Default to solo if not provided
  formData
}) => {
  // Extract values from formData if provided
  const manualHours = formData?.manualHours || propManualHours || "11-20"; // Default value
  const hourlyValue = formData?.hourlyValue || propHourlyValue || "100-250"; // Default value
  const teamSize = formData?.teamSize || propTeamSize || "solo"; // Default value

  const [showCostBreakdown, setShowCostBreakdown] = useState(true);
  
  // Calculate cost of inaction
  const costOfInaction = calculateCostOfInaction(manualHours, hourlyValue);
  
  const formattedCostOfInaction = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(costOfInaction);

  const monthlyCost = costOfInaction / 12;
  const formattedMonthlyCost = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(monthlyCost);

  const potentialHires = Math.round(costOfInaction / 110000);
  
  // Get dynamic cost messages
  const dynamicMessages = getDynamicCostMessages(manualHours, costOfInaction, teamSize);

  return (
    <div className="mb-10">
      <div className="bg-[#1A1F2C] border-l-4 border-primary rounded-lg shadow-md overflow-hidden text-white">
        <div className="p-6">
          <div className="flex items-center mb-3">
            <Flame className="h-6 w-6 text-primary mr-2 animate-pulse" />
            <h3 className="text-2xl font-bold">Cost of Inaction</h3>
          </div>
          
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">
              You're bleeding <span className="text-4xl md:text-5xl font-bold text-primary animate-[pulse_3s_ease-in-out_infinite]">{formattedCostOfInaction}</span><span className="text-gray-300">/year</span> by doing this manually.
            </p>
            <p className="text-gray-300 mb-3">
              That's more than {potentialHires} full-time {potentialHires === 1 ? 'hire' : 'hires'} — or 10x what automation would cost you.
            </p>
            <p className="text-gray-100 font-medium">
              Every month you delay? Another <span className="font-bold text-primary">{formattedMonthlyCost}</span> walks out the door.
            </p>
          </div>

          {/* Cost Breakdown Section */}
          <div className="mt-6">
            <Collapsible
              open={showCostBreakdown}
              onOpenChange={setShowCostBreakdown}
              className="w-full"
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-white/10 border-white/20 hover:bg-white/20 text-white"
                >
                  <span>What That Cost Really Means</span>
                  <span className="text-xs">{showCostBreakdown ? '▲ Hide' : '▼ Show'}</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 bg-white/10 rounded-md p-4 border border-white/10 animate-slide-up">
                <h4 className="font-semibold text-white mb-3">In real terms, you're losing:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🕒</span>
                    <span className="text-gray-200">{dynamicMessages.timeMessage}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">💸</span>
                    <span className="text-gray-200">{dynamicMessages.costMessage}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🎯</span>
                    <span className="text-gray-200">{dynamicMessages.opportunityMessage}</span>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfInactionBlock;
