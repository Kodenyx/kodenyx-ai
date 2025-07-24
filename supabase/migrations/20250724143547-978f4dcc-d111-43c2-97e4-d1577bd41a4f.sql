
-- Check for recent AI for Youth testimonials
SELECT id, name, testimonial, category, is_approved, created_at 
FROM public.testimonials 
WHERE category = 'ai-youth-program' 
ORDER BY created_at DESC 
LIMIT 5;

-- Also check for any very recent testimonials regardless of category
SELECT id, name, testimonial, category, is_approved, created_at 
FROM public.testimonials 
WHERE created_at > NOW() - INTERVAL '1 hour'
ORDER BY created_at DESC;
