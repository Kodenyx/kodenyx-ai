
-- Add category column to testimonials table
ALTER TABLE public.testimonials 
ADD COLUMN category TEXT NOT NULL DEFAULT 'ai-automation-services';

-- Add constraint to ensure only valid categories are used
ALTER TABLE public.testimonials 
ADD CONSTRAINT testimonials_category_check 
CHECK (category IN ('business-coaching', 'ai-youth-program', 'ai-automation-services'));

-- Update the existing index to include category for better performance
DROP INDEX idx_testimonials_approved;
CREATE INDEX idx_testimonials_approved_category ON public.testimonials(category, is_approved, created_at DESC);
