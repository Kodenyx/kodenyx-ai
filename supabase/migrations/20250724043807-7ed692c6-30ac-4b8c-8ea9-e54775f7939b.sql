
-- Let's check what testimonials currently exist
SELECT name, category, is_approved FROM public.testimonials;

-- Delete any existing Sheri testimonial to avoid conflicts
DELETE FROM public.testimonials WHERE name ILIKE '%Sheri%';

-- Add the video_url column if it doesn't exist
ALTER TABLE public.testimonials 
ADD COLUMN IF NOT EXISTS video_url text;

-- Insert Sheri's testimonial with the exact category that matches the filter
INSERT INTO public.testimonials (name, role, company, testimonial, rating, category, is_approved, video_url) VALUES
(
  'Sheri Otto',
  'Founder',
  'Growth Lane Strategies',
  'Working with Aarti through the AI-First Business Coaching Program has been transformational for my business. Her strategic approach helped me implement AI systems that have streamlined my operations and freed up valuable time to focus on high-impact activities. The clarity and confidence I gained from her coaching has been invaluable in scaling my business efficiently.',
  5,
  'ai-first-business-coaching',
  true,
  'https://youtube.com/shorts/nUz7qk7c27E?feature=share'
);

-- Also ensure Rashmi's testimonial is correctly categorized  
UPDATE public.testimonials 
SET category = 'ai-first-business-coaching'
WHERE name = 'Rashmi Munjal';

-- Verify the testimonials are now properly categorized
SELECT name, category, is_approved FROM public.testimonials WHERE category = 'ai-first-business-coaching';
