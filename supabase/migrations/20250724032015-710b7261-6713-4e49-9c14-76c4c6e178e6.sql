
-- Update Bennett's testimonial to be under automation services
UPDATE public.testimonials 
SET category = 'ai-automation-services'
WHERE name = 'Bennett Skaggs';

-- Update Rashmi's testimonial to be under business coaching (it should already be, but let's make sure)
UPDATE public.testimonials 
SET category = 'business-coaching'
WHERE name = 'Rashmi Munjal';
