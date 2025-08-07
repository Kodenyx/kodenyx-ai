
-- Drop the existing policy and recreate it to ensure it works properly
DROP POLICY IF EXISTS "Allow public testimonial submission" ON public.testimonials;

-- Create a new policy that explicitly allows anyone to insert testimonials
CREATE POLICY "Enable insert for testimonials" ON public.testimonials
FOR INSERT 
WITH CHECK (true);

-- Also ensure the select policy works for approved testimonials
DROP POLICY IF EXISTS "Allow viewing approved testimonials" ON public.testimonials;

CREATE POLICY "Enable read access for approved testimonials" ON public.testimonials
FOR SELECT 
USING (is_approved = true OR is_approved IS NULL);
