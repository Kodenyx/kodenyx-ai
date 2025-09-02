
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { updateCaseStudyImage } from '@/utils/updateCaseStudyImage';
import { useToast } from '@/hooks/use-toast';

export const UpdateCaseStudyImage = () => {
  const [title, setTitle] = useState('How a Mid-Sized Financial Firm Reclaimed 6,000 Hours and $400K/Year');
  const [imageUrl, setImageUrl] = useState('/lovable-uploads/8ee4b126-5904-4ad2-a895-c9673bbe869b.png');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUpdate = async () => {
    if (!title || !imageUrl) {
      toast({
        title: "Error",
        description: "Title and image URL are required",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await updateCaseStudyImage({ title, image_url: imageUrl });
      toast({
        title: "Success",
        description: "Case study image updated successfully",
      });
      // Reload the page to see the changes
      window.location.reload();
    } catch (error) {
      console.error('Error updating case study:', error);
      toast({
        title: "Error",
        description: "Failed to update case study image",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Update Case Study Image</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Case Study Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter case study title"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Image URL</label>
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>
        <Button 
          onClick={handleUpdate} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Updating...' : 'Update Image'}
        </Button>
      </CardContent>
    </Card>
  );
};
