
import { supabase } from '@/integrations/supabase/client';

export const addCaseStudyFromLink = async (url: string) => {
  try {
    console.log('Adding case study from URL:', url);
    
    const { data, error } = await supabase.functions.invoke('add-case-study-from-link', {
      body: { url }
    });

    if (error) {
      console.error('Error adding case study:', error);
      throw error;
    }

    console.log('Case study added successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to add case study from link:', error);
    throw error;
  }
};
