
-- Create a separate table for guest applications (email only for now)
CREATE TABLE public.podcast_guest_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'pending'
);

-- Add Row Level Security (RLS) - making it public for now since this is an intake form
ALTER TABLE public.podcast_guest_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications (public intake form)
CREATE POLICY "Anyone can submit podcast guest applications" 
  ON public.podcast_guest_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading applications (you might want to restrict this later)
CREATE POLICY "Anyone can view podcast guest applications" 
  ON public.podcast_guest_applications 
  FOR SELECT 
  USING (true);
