
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { seedFinancialFirmCaseStudy } from '@/utils/seedCaseStudy';
import { useToast } from '@/hooks/use-toast';

export const SeedCaseStudy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSeedCaseStudy = async () => {
    setIsLoading(true);
    try {
      await seedFinancialFirmCaseStudy();
      toast({
        title: "Success!",
        description: "Financial firm case study has been added successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add case study. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Add Financial Firm Case Study</h3>
      <p className="text-sm text-gray-600 mb-4">
        Click the button below to add the financial firm case study to your database.
      </p>
      <Button 
        onClick={handleSeedCaseStudy}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Adding Case Study..." : "Add Case Study"}
      </Button>
    </div>
  );
};
