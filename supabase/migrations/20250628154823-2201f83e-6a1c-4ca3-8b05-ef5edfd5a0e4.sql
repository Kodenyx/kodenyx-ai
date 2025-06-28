
-- Add LinkedIn profile column to podcast_guest_applications table
ALTER TABLE public.podcast_guest_applications 
ADD COLUMN linkedin_profile TEXT;
