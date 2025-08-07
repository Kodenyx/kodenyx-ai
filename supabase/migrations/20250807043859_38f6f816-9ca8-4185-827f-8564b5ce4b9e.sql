
-- Update the RLS policy for testimonials to allow public submissions
DROP POLICY IF EXISTS "Anyone can submit testimonials" ON testimonials;

CREATE POLICY "Anyone can submit testimonials"
ON testimonials
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
