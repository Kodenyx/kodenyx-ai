
-- First, let's see what categories are currently allowed
SELECT constraint_name, check_clause 
FROM information_schema.check_constraints 
WHERE table_name = 'testimonials';

-- Remove the old constraint that's preventing the correct category
ALTER TABLE public.testimonials 
DROP CONSTRAINT IF EXISTS testimonials_category_check;

-- Add a new constraint that includes the correct category
ALTER TABLE public.testimonials 
ADD CONSTRAINT testimonials_category_check 
CHECK (category IN ('business-coaching', 'ai-first-business-coaching', 'ai-youth-program', 'ai-automation-services'));

-- Remove existing testimonials for Sheri and Rashmi
DELETE FROM public.testimonials WHERE name IN ('Sheri Otto', 'Rashmi Munjal');

-- Add Sheri's testimonial with the correct category
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

-- Add Rashmi's testimonial with the correct category
INSERT INTO public.testimonials (name, testimonial, rating, category, is_approved) VALUES
(
  'Rashmi Munjal',
  'Joining the "AI-First Business" coaching program with Aarti has been a truly transformational experience. Through her clear, practical guidance and strategic mindset coaching, I''ve shifted from feeling stuck and reactive to thinking proactively and strategically. I''ve learned to use AI not just as a tool, but as a strategic partner to streamline workflows, make faster decisions, and free up time for more meaningful work. Aarti has a unique way of breaking down complex concepts into simple, actionable steps, making AI feel accessible and empowering. This program has transformed my mindset, boosted my confidence, and equipped me with practical tools I can apply immediately.',
  5,
  'ai-first-business-coaching',
  true
);

-- Verify both testimonials are now properly categorized
SELECT name, category, is_approved FROM public.testimonials WHERE category = 'ai-first-business-coaching';
