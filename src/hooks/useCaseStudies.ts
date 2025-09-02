
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface CaseStudy {
  id: string;
  title: string;
  client_name: string;
  industry?: string;
  challenge: string;
  solution: string;
  results: string;
  image_url?: string;
  client_logo_url?: string;
  gamma_url?: string;
  tags?: string[];
  testimonial_quote?: string;
  testimonial_author?: string;
  testimonial_role?: string;
  project_duration?: string;
  services_provided?: string[];
  metrics?: any;
  is_published: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useCaseStudies = (featuredOnly = false) => {
  return useQuery({
    queryKey: ['case-studies', featuredOnly],
    queryFn: async () => {
      let query = supabase
        .from('case_studies')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (featuredOnly) {
        query = query.eq('featured', true);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching case studies:', error);
        throw error;
      }

      console.log('Fetched case studies:', data);
      return data as CaseStudy[];
    },
  });
};
