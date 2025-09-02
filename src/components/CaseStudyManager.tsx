
import { useState } from 'react';
import { useCaseStudies } from '@/hooks/useCaseStudies';
import { updateCaseStudyImage } from '@/utils/updateCaseStudyImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, Upload } from 'lucide-react';

interface CaseStudyUpdate {
  id: string;
  title: string;
  image_url: string;
  image_file?: File;
}

export const CaseStudyManager = () => {
  const { data: caseStudies, isLoading, refetch } = useCaseStudies(false);
  const [updates, setUpdates] = useState<Record<string, CaseStudyUpdate>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [imagePreviews, setImagePreviews] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleUpdateChange = (id: string, field: keyof CaseStudyUpdate, value: string | File) => {
    setUpdates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        id,
        [field]: value
      }
    }));
  };

  const handleImageFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpdateChange(id, 'image_file', file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews(prev => ({
          ...prev,
          [id]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
      
      // Clear URL input when file is selected
      handleUpdateChange(id, 'image_url', '');
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => {
        // In a real implementation, you'd upload to your server/storage
        // For now, we'll use the data URL
        resolve(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSave = async (caseStudy: any) => {
    const update = updates[caseStudy.id];
    if (!update || (!update.title && !update.image_url && !update.image_file)) {
      toast({
        title: "No changes",
        description: "Please make changes before saving",
        variant: "destructive",
      });
      return;
    }

    setSaving(prev => ({ ...prev, [caseStudy.id]: true }));
    
    try {
      let imageUrl = update.image_url;
      
      // If a file was uploaded, convert it to data URL
      if (update.image_file) {
        imageUrl = await uploadImage(update.image_file);
      }
      
      await updateCaseStudyImage({ 
        id: caseStudy.id,
        ...(update.title && { title: update.title }),
        ...(imageUrl && { image_url: imageUrl })
      });
      
      toast({
        title: "Success",
        description: "Case study updated successfully",
      });
      
      // Clear the update for this case study
      setUpdates(prev => {
        const newUpdates = { ...prev };
        delete newUpdates[caseStudy.id];
        return newUpdates;
      });
      
      // Clear image preview
      setImagePreviews(prev => {
        const newPreviews = { ...prev };
        delete newPreviews[caseStudy.id];
        return newPreviews;
      });
      
      // Refetch data
      refetch();
    } catch (error) {
      console.error('Error updating case study:', error);
      toast({
        title: "Error",
        description: "Failed to update case study",
        variant: "destructive",
      });
    } finally {
      setSaving(prev => ({ ...prev, [caseStudy.id]: false }));
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-8 h-8 animate-spin text-[#9b87f5]" />
        <span className="ml-2">Loading case studies...</span>
      </div>
    );
  }

  if (!caseStudies || caseStudies.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-600">No case studies found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Case Studies</h2>
        <p className="text-gray-600">Update titles and thumbnails for existing case studies</p>
      </div>
      
      {caseStudies.map((caseStudy) => {
        const currentUpdate = updates[caseStudy.id];
        const isCurrentlySaving = saving[caseStudy.id];
        const imagePreview = imagePreviews[caseStudy.id];
        
        return (
          <Card key={caseStudy.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Current: {caseStudy.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Title
                    </label>
                    <Input
                      placeholder={caseStudy.title}
                      value={currentUpdate?.title || ''}
                      onChange={(e) => handleUpdateChange(caseStudy.id, 'title', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload New Thumbnail
                    </label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageFileChange(caseStudy.id, e)}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload an image file</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL
                    </label>
                    <Input
                      placeholder="Enter image URL"
                      value={currentUpdate?.image_url || ''}
                      onChange={(e) => handleUpdateChange(caseStudy.id, 'image_url', e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Or paste an image URL</p>
                  </div>
                  
                  <Button 
                    onClick={() => handleSave(caseStudy)}
                    disabled={isCurrentlySaving || (!currentUpdate?.title && !currentUpdate?.image_url && !currentUpdate?.image_file)}
                    className="w-full"
                  >
                    {isCurrentlySaving ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Update Case Study
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Thumbnail
                    </label>
                    {caseStudy.image_url ? (
                      <img 
                        src={caseStudy.image_url} 
                        alt="Current thumbnail"
                        className="w-full h-32 object-cover rounded-md border"
                      />
                    ) : (
                      <div className="w-full h-32 bg-gray-100 rounded-md border flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    )}
                  </div>
                  
                  {(imagePreview || currentUpdate?.image_url) && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Thumbnail Preview
                      </label>
                      <img 
                        src={imagePreview || currentUpdate.image_url} 
                        alt="New thumbnail preview"
                        className="w-full h-32 object-cover rounded-md border"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
