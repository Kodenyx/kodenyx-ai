
import { supabase } from '@/integrations/supabase/client';

export const updateCaseStudyImage = async (params: { 
  title?: string; 
  id?: string; 
  image_url?: string 
}) => {
  try {
    console.log('Updating case study image:', params);
    
    const { data, error } = await supabase.functions.invoke('update-case-study-image', {
      body: params
    });

    if (error) {
      console.error('Error updating case study image:', error);
      throw error;
    }

    console.log('Case study image updated successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to update case study image:', error);
    throw error;
  }
};
