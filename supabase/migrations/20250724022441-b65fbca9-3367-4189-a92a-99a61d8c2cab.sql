
-- Create testimonials table
CREATE TABLE public.testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text,
  company text,
  testimonial text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  category text NOT NULL DEFAULT 'business-coaching',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  is_approved boolean DEFAULT false
);

-- Add constraint to ensure only valid categories are used
ALTER TABLE public.testimonials 
ADD CONSTRAINT testimonials_category_check 
CHECK (category IN ('business-coaching', 'ai-youth-program', 'ai-automation-services'));

-- Create index for better performance
CREATE INDEX idx_testimonials_approved_category ON public.testimonials(category, is_approved, created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read approved testimonials
CREATE POLICY "Anyone can view approved testimonials" 
ON public.testimonials 
FOR SELECT 
USING (is_approved = true);

-- Create policy to allow anyone to insert testimonials (they'll need approval)
CREATE POLICY "Anyone can submit testimonials" 
ON public.testimonials 
FOR INSERT 
WITH CHECK (true);

-- Insert the testimonials you provided
INSERT INTO public.testimonials (name, role, company, testimonial, rating, category, is_approved) VALUES
(
  'Rashmi Munjal',
  NULL,
  NULL,
  'Joining the "AI-First Business" coaching program with Aarti has been a truly transformational experience. Through her clear, practical guidance and strategic mindset coaching, I''ve shifted from feeling stuck and reactive to thinking proactively and strategically. I''ve learned to use AI not just as a tool, but as a strategic partner to streamline workflows, make faster decisions, and free up time for more meaningful work. Aarti has a unique way of breaking down complex concepts into simple, actionable steps, making AI feel accessible and empowering. This program has transformed my mindset, boosted my confidence, and equipped me with practical tools I can apply immediately.',
  5,
  'business-coaching',
  true
),
(
  'Bennett Skaggs',
  'Founder',
  'Next Step Nurses',
  'I am the founder of Next Step Nurses. I have been building out social and newsletter funnels for over two years. I started working with Aarti and it has made my business infinitely more productive and efficient. I now have a highly effective funnel in place to help me scale my business, and this is my favorite part, work less while scaling.',
  5,
  'business-coaching',
  true
);
