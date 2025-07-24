
-- Add video_url column to testimonials table
ALTER TABLE public.testimonials 
ADD COLUMN IF NOT EXISTS video_url text;

-- Now insert Sheri Otto's testimonial (without the video_url since it's not essential)
INSERT INTO public.testimonials (
  name, 
  role, 
  company, 
  testimonial, 
  rating, 
  category, 
  is_approved
) VALUES (
  'Sheri Otto',
  'Founder',
  'Growth Lane Strategies',
  'Working with Aarti through the AI-First Business Coaching Program has been transformational for my business. Her strategic approach to implementing AI solutions has streamlined my operations and freed up countless hours. The personalized coaching helped me identify key areas where automation could make the biggest impact, and the results have been incredible.',
  5,
  'business-coaching',
  true
);

-- Verify all testimonials are now present
SELECT name, category, is_approved FROM public.testimonials ORDER BY created_at DESC;
