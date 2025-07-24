
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  testimonial: string;
  rating?: number;
  image_url?: string;
  category: string;
  created_at: string;
  is_approved?: boolean;
}

export const useTestimonials = (category?: string) => {
  return useQuery({
    queryKey: ['testimonials', category],
    queryFn: async () => {
      let query = supabase
        .from('testimonials')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
      }

      return data as Testimonial[];
    },
  });
};
