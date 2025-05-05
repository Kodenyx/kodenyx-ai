
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Flame } from "lucide-react";
import { calculateCostOfInaction, getCostComparisons } from "@/utils/scoreUtils";

interface CostOfInactionBlockProps {
  manualHours: string;
  hourlyValue: string;
}

const CostOfInactionBlock: React.FC<CostOfInactionBlockProps> = ({ 
  manualHours, 
  hourlyValue 
}) => {
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
  const costComparisons = getCostComparisons(costOfInaction);

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
                  {costComparisons.map((comparison, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-xl">{comparison.emoji}</span>
                      <span className="text-gray-200">{comparison.text}</span>
                    </li>
                  ))}
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
