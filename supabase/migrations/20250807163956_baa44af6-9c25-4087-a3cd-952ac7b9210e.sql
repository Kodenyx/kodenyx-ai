
-- First, let's check what policies currently exist and drop them all to start fresh
DO $$
BEGIN
    -- Drop all existing policies on testimonials table
    DROP POLICY IF EXISTS "Enable insert for testimonials" ON public.testimonials;
    DROP POLICY IF EXISTS "Enable read access for approved testimonials" ON public.testimonials;
    DROP POLICY IF EXISTS "Allow public testimonial submission" ON public.testimonials;
    DROP POLICY IF EXISTS "Allow viewing approved testimonials" ON public.testimonials;
END $$;

-- Create a simple, permissive insert policy
CREATE POLICY "Anyone can insert testimonials" ON public.testimonials
FOR INSERT 
TO public
WITH CHECK (true);

-- Create the select policy for approved testimonials
CREATE POLICY "Anyone can view approved testimonials" ON public.testimonials
FOR SELECT 
TO public
USING (is_approved = true OR is_approved IS NULL);
