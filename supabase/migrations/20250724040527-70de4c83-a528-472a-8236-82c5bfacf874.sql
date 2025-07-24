
-- Update Sheri's name to Sheri Otto
UPDATE public.testimonials 
SET name = 'Sheri Otto'
WHERE name = 'Sheri Henley';

-- If the above doesn't work (in case the testimonial wasn't added yet), let's add it with the correct name
INSERT INTO public.testimonials (name, role, company, testimonial, rating, category, is_approved) VALUES
(
  'Sheri Otto',
  'Founder',
  'Growth Lane Strategies',
  'Working with Aarti through the AI-First Business Coaching Program has been transformational for my business. Her strategic approach helped me implement AI systems that have streamlined my operations and freed up valuable time to focus on high-impact activities. The clarity and confidence I gained from her coaching has been invaluable in scaling my business efficiently.',
  5,
  'ai-first-business-coaching',
  true
)
ON CONFLICT (name) DO UPDATE SET
  name = EXCLUDED.name,
  role = EXCLUDED.role,
  company = EXCLUDED.company;

-- Add video_url column to testimonials table to support video testimonials
ALTER TABLE public.testimonials 
ADD COLUMN IF NOT EXISTS video_url text;
