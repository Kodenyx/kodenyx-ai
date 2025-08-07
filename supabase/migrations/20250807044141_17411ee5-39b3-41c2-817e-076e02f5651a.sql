
-- First, let's check and fix the RLS policies for testimonials
-- Drop all existing policies and recreate them properly
DROP POLICY IF EXISTS "Anyone can submit testimonials" ON testimonials;
DROP POLICY IF EXISTS "Anyone can view approved testimonials" ON testimonials;

-- Create a new policy that allows anyone (including anonymous users) to insert testimonials
CREATE POLICY "Allow public testimonial submission" 
ON testimonials 
FOR INSERT 
TO anon, authenticated, public
WITH CHECK (true);

-- Recreate the select policy for viewing approved testimonials
CREATE POLICY "Allow viewing approved testimonials" 
ON testimonials 
FOR SELECT 
TO anon, authenticated, public
USING (is_approved = true);
