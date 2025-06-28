
-- Create a table for AI First CEO Podcast guest intake responses
CREATE TABLE public.podcast_guest_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Section 1: Basic Info
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  title_role TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT NOT NULL,
  linkedin_profile TEXT NOT NULL,
  social_media_links TEXT,
  
  -- Section 2: About You + The Conversation
  business_description TEXT NOT NULL,
  scaling_system TEXT NOT NULL,
  bottleneck_breakthrough TEXT NOT NULL,
  workflows_to_share TEXT,
  avoid_topics TEXT,
  
  -- Section 3: Optional for Promotion
  short_bio TEXT,
  headshot_url TEXT
);

-- Add Row Level Security (RLS) - making it public for now since this is an intake form
ALTER TABLE public.podcast_guest_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert responses (public intake form)
CREATE POLICY "Anyone can submit podcast guest responses" 
  ON public.podcast_guest_responses 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading responses (you might want to restrict this later)
CREATE POLICY "Anyone can view podcast guest responses" 
  ON public.podcast_guest_responses 
  FOR SELECT 
  USING (true);
