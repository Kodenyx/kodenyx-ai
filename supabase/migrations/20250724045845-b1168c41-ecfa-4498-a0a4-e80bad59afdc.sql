
-- Insert Sheri Otto's testimonial
INSERT INTO public.testimonials (
  name, 
  role, 
  company, 
  testimonial, 
  rating, 
  category, 
  is_approved,
  video_url
) VALUES (
  'Sheri Otto',
  'Founder',
  'Growth Lane Strategies',
  'Working with Aarti through the AI-First Business Coaching Program has been transformational for my business. Her strategic approach to implementing AI solutions has streamlined my operations and freed up countless hours. The personalized coaching helped me identify key areas where automation could make the biggest impact, and the results have been incredible.',
  5,
  'business-coaching',
  true,
  'https://www.youtube.com/embed/dQw4w9WgXcQ'
);

-- Verify the testimonial was added
SELECT name, category, is_approved FROM public.testimonials WHERE name = 'Sheri Otto';
