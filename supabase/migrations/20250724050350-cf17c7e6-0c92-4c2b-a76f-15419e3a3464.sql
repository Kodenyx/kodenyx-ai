
-- Update Sheri Otto's testimonial to include the video URL
UPDATE public.testimonials 
SET video_url = 'https://youtube.com/shorts/nUz7qk7c27E?feature=share'
WHERE name = 'Sheri Otto';

-- Verify the update
SELECT name, video_url FROM public.testimonials WHERE name = 'Sheri Otto';
