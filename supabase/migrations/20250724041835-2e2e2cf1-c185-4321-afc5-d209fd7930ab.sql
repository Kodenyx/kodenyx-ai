
-- Update Sheri's testimonial to include video URL
UPDATE public.testimonials 
SET video_url = 'https://youtube.com/shorts/nUz7qk7c27E?feature=share'
WHERE name = 'Sheri Otto';

-- Ensure Rashmi's testimonial is under AI-First Business Coaching Program
UPDATE public.testimonials 
SET category = 'ai-first-business-coaching'
WHERE name = 'Rashmi Munjal';

-- Ensure Sheri's testimonial is under AI-First Business Coaching Program
UPDATE public.testimonials 
SET category = 'ai-first-business-coaching'
WHERE name = 'Sheri Otto';

-- Add video_url column if it doesn't exist
ALTER TABLE public.testimonials 
ADD COLUMN IF NOT EXISTS video_url text;
