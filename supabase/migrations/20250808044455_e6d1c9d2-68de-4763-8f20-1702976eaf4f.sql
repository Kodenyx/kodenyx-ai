
-- Update Nate's age to 11 years old
UPDATE testimonials 
SET age = 11 
WHERE name ILIKE '%nate%' AND category = 'ai-youth-program';
