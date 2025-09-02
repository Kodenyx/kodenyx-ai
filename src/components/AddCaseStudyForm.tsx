
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Plus } from "lucide-react";
import { addCaseStudyFromLink } from "@/utils/addCaseStudyFromLink";

export const AddCaseStudyForm = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a Gamma presentation URL",
        variant: "destructive",
      });
      return;
    }

    // Basic URL validation
    if (!url.includes('gamma.app') && !url.includes('gamma.co')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Gamma presentation URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Adding case study from URL:', url);
      const result = await addCaseStudyFromLink(url);
      
      toast({
        title: "Success!",
        description: "Case study added successfully",
      });
      
      setUrl('');
      
      // Refresh the page to show the new case study
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (error) {
      console.error('Failed to add case study:', error);
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Case Study
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="url"
              placeholder="https://gamma.app/docs/your-presentation"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter a Gamma presentation URL to automatically create a case study
            </p>
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading || !url.trim()}
            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Adding Case Study...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 mr-2" />
                Add Case Study
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
