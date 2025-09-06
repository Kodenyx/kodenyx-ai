
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
      // Fetch only lightweight fields for instant load (exclude image_url)
      let query = supabase
        .from('case_studies')
        .select(`
          id,
          title,
          client_name,
          industry,
          challenge,
          solution,
          results,
          client_logo_url,
          gamma_url,
          tags,
          testimonial_quote,
          testimonial_author,
          testimonial_role,
          project_duration,
          services_provided,
          metrics,
          is_published,
          featured,
          created_at,
          updated_at
        `)
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

      return data as CaseStudy[];
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });
};
