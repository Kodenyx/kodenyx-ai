
-- Add age column to testimonials table
ALTER TABLE testimonials ADD COLUMN age integer;

-- Update Maverick's age (9 years old, AI for Youth program)
UPDATE testimonials 
SET age = 9 
WHERE name ILIKE '%maverick%' AND category = 'ai-youth-program';

-- Update Reet's age (15 years old)
UPDATE testimonials 
SET age = 15 
WHERE name ILIKE '%reet%';
