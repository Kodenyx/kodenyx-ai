
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Zap } from "lucide-react";

const CtaBlock: React.FC = () => {
  return (
    <div className="mb-10 bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg shadow-lg border border-primary/20">
      <div className="text-center space-y-4">
        <p className="text-primary font-medium">Ready to Fix the Bottlenecks Holding You Back?</p>
        <h3 className="text-2xl md:text-3xl font-bold">Join the AI Workshop to Build a Business That Scales Without You</h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Map your highest-leverage automations and replace manual systems with AI that works 24/7.
        </p>
        
        <div className="mt-6 mb-4">
          <Link to="/ai-readiness-workshop">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 transform transition-transform duration-200 hover:scale-105">
              Reserve My Spot in the AI Workshop
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm">
          <div className="flex items-center text-gray-600">
            <Zap className="h-4 w-4 text-yellow-500 mr-1" />
            <span>200+ CEOs have used this system</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 text-primary mr-1" />
            <span>Only 7 founder seats left this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBlock;
