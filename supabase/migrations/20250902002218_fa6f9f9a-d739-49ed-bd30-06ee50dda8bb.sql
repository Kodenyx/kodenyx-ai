
-- Allow anonymous/public users to insert published case studies
-- This keeps viewing public and lets your seed action work from the client.
CREATE POLICY "Anyone can insert published case studies"
ON public.case_studies
FOR INSERT
TO public
WITH CHECK (is_published = true);
