
-- Create a table for case studies
CREATE TABLE public.case_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  metrics JSONB, -- Store key metrics like revenue increase, time saved, etc.
  image_url TEXT,
  client_logo_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  featured BOOLEAN NOT NULL DEFAULT false,
  tags TEXT[], -- Array of tags for categorization
  testimonial_quote TEXT,
  testimonial_author TEXT,
  testimonial_role TEXT,
  project_duration TEXT, -- e.g., "3 months", "6 weeks"
  services_provided TEXT[] -- Array of services like "AI Automation", "Process Optimization"
);

-- Add Row Level Security (RLS)
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public to view published case studies
CREATE POLICY "Anyone can view published case studies" 
  ON public.case_studies 
  FOR SELECT 
  USING (is_published = true);

-- Create policy for admin access (you'll need to implement admin authentication)
CREATE POLICY "Admins can manage case studies" 
  ON public.case_studies 
  FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create indexes for better performance
CREATE INDEX idx_case_studies_published ON public.case_studies(is_published);
CREATE INDEX idx_case_studies_featured ON public.case_studies(featured);
CREATE INDEX idx_case_studies_industry ON public.case_studies(industry);
