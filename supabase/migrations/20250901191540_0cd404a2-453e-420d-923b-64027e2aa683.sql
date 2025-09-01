
-- Create a table for case studies
CREATE TABLE public.case_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  image_url TEXT,
  client_logo_url TEXT,
  tags TEXT[],
  testimonial_quote TEXT,
  testimonial_author TEXT,
  testimonial_role TEXT,
  project_duration TEXT,
  services_provided TEXT[],
  metrics JSONB, -- Store metrics like ROI, time saved, etc.
  is_published BOOLEAN NOT NULL DEFAULT false,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) 
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to view published case studies
CREATE POLICY "Anyone can view published case studies" 
  ON public.case_studies 
  FOR SELECT 
  USING (is_published = true);

-- Create policy for admin management (you can modify this based on your auth setup)
CREATE POLICY "Admins can manage case studies" 
  ON public.case_studies 
  FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');
