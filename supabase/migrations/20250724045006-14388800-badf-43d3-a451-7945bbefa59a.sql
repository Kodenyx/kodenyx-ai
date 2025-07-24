
-- First, let's see what testimonials are currently in the ai-first-business-coaching category
SELECT name, category FROM public.testimonials WHERE category = 'ai-first-business-coaching';

-- Move testimonials from ai-first-business-coaching to business-coaching
UPDATE public.testimonials 
SET category = 'business-coaching' 
WHERE category = 'ai-first-business-coaching';

-- Remove the old constraint
ALTER TABLE public.testimonials 
DROP CONSTRAINT IF EXISTS testimonials_category_check;

-- Add new constraint without the ai-first-business-coaching category
ALTER TABLE public.testimonials 
ADD CONSTRAINT testimonials_category_check 
CHECK (category IN ('business-coaching', 'ai-youth-program', 'ai-automation-services'));

-- Verify the changes
SELECT name, category, is_approved FROM public.testimonials WHERE category = 'business-coaching';
