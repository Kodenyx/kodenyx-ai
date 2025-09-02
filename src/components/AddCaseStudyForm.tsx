
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Upload } from "lucide-react";
import { addCaseStudyFromLink } from "@/utils/addCaseStudyFromLink";

export const AddCaseStudyForm = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadThumbnail = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Create a simple upload endpoint that saves to the public folder
      // For now, we'll use a data URL as a placeholder
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => {
          // In a real implementation, you'd upload to your server/storage
          // For now, we'll use the preview URL
          resolve(reader.result as string);
        };
        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.error('Failed to upload thumbnail:', error);
      throw new Error('Failed to upload thumbnail');
    }
  };

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

    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for the case study",
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
      console.log('Adding case study with custom data:', { url, title, thumbnail: !!thumbnail });
      
      let thumbnailUrl = '';
      if (thumbnail) {
        thumbnailUrl = await uploadThumbnail(thumbnail);
      }
      
      const result = await addCaseStudyFromLink(url, title, thumbnailUrl);
      
      toast({
        title: "Success!",
        description: "Case study added successfully",
      });
      
      // Reset form
      setUrl('');
      setTitle('');
      setThumbnail(null);
      setThumbnailPreview('');
      
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
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Case Study Title *
            </label>
            <Input
              id="title"
              type="text"
              placeholder="Enter case study title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
              className="w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="url" className="block text-sm font-medium mb-1">
              Gamma URL *
            </label>
            <Input
              id="url"
              type="url"
              placeholder="https://gamma.app/docs/your-presentation"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              className="w-full"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter the Gamma presentation URL
            </p>
          </div>

          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium mb-1">
              Thumbnail Image
            </label>
            <div className="space-y-2">
              <Input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                disabled={isLoading}
                className="w-full"
              />
              {thumbnailPreview && (
                <div className="relative w-full h-32 border rounded-lg overflow-hidden">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-xs text-muted-foreground">
                Upload a custom thumbnail image for the case study
              </p>
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading || !url.trim() || !title.trim()}
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
