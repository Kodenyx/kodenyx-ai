
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
      // Since the testimonials table doesn't exist in the Supabase types yet,
      // we'll return mock data for now
      const mockTestimonials: Testimonial[] = [
        {
          id: '1',
          name: 'John Doe',
          role: 'CEO',
          company: 'Tech Corp',
          testimonial: 'Amazing business coaching program! Really helped scale our operations.',
          rating: 5,
          category: 'business-coaching',
          created_at: new Date().toISOString(),
          is_approved: true
        },
        {
          id: '2',
          name: 'Jane Smith',
          role: 'Student',
          company: 'High School',
          testimonial: 'The AI for Youth program opened my eyes to amazing possibilities.',
          rating: 5,
          category: 'ai-youth-program',
          created_at: new Date().toISOString(),
          is_approved: true
        },
        {
          id: '3',
          name: 'Mike Johnson',
          role: 'Operations Manager',
          company: 'Manufacturing Inc',
          testimonial: 'The AI automation services streamlined our entire workflow.',
          rating: 5,
          category: 'ai-automation-services',
          created_at: new Date().toISOString(),
          is_approved: true
        }
      ];

      // Filter by category if specified
      if (category) {
        return mockTestimonials.filter(testimonial => testimonial.category === category);
      }

      return mockTestimonials;
    },
  });
};
