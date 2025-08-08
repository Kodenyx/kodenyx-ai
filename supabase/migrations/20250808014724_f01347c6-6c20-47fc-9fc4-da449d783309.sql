
-- Update Maverick's age to 12 years old
UPDATE testimonials 
SET age = 12 
WHERE name ILIKE '%maverick%' AND category = 'ai-youth-program';
