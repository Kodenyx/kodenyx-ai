
import { useState } from 'react';
import { useCaseStudies } from '@/hooks/useCaseStudies';
import { updateCaseStudyImage } from '@/utils/updateCaseStudyImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';

interface CaseStudyUpdate {
  id: string;
  title: string;
  image_url: string;
}

export const CaseStudyManager = () => {
  const { data: caseStudies, isLoading, refetch } = useCaseStudies(false);
  const [updates, setUpdates] = useState<Record<string, CaseStudyUpdate>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleUpdateChange = (id: string, field: keyof CaseStudyUpdate, value: string) => {
    setUpdates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        id,
        [field]: value
      }
    }));
  };

  const handleSave = async (caseStudy: any) => {
    const update = updates[caseStudy.id];
    if (!update || (!update.title && !update.image_url)) {
      toast({
        title: "No changes",
        description: "Please make changes before saving",
        variant: "destructive",
      });
      return;
    }

    setSaving(prev => ({ ...prev, [caseStudy.id]: true }));
    
    try {
      await updateCaseStudyImage({ 
        id: caseStudy.id,
        ...(update.title && { title: update.title }),
        ...(update.image_url && { image_url: update.image_url })
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
                      New Thumbnail URL
                    </label>
                    <Input
                      placeholder="Enter new image URL"
                      value={currentUpdate?.image_url || ''}
                      onChange={(e) => handleUpdateChange(caseStudy.id, 'image_url', e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    onClick={() => handleSave(caseStudy)}
                    disabled={isCurrentlySaving || (!currentUpdate?.title && !currentUpdate?.image_url)}
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
                  
                  {currentUpdate?.image_url && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Thumbnail Preview
                      </label>
                      <img 
                        src={currentUpdate.image_url} 
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
