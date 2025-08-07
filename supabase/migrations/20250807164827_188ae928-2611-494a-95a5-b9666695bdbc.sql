
-- Step 1: Backup existing testimonials data (if any) by creating a temporary backup table
CREATE TABLE testimonials_backup AS 
SELECT * FROM testimonials;

-- Step 2: Drop the current testimonials table completely
DROP TABLE IF EXISTS testimonials CASCADE;

-- Step 3: Recreate the testimonials table with proper structure
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  testimonial TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  category TEXT NOT NULL DEFAULT 'business-coaching',
  image_url TEXT,
  video_url TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Step 4: Enable RLS on the new table
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Step 5: Create simple, working RLS policies
-- Policy 1: Anyone can insert testimonials (for public submission)
CREATE POLICY "Allow public testimonial submission" 
  ON public.testimonials 
  FOR INSERT 
  WITH CHECK (true);

-- Policy 2: Anyone can view approved testimonials (for public display)
CREATE POLICY "Allow viewing approved testimonials" 
  ON public.testimonials 
  FOR SELECT 
  USING (is_approved = true);

-- Step 6: Restore backed-up data (if any existed)
INSERT INTO public.testimonials (id, name, role, company, testimonial, rating, category, image_url, video_url, is_approved, created_at, updated_at)
SELECT id, name, role, company, testimonial, rating, category, image_url, video_url, is_approved, created_at, updated_at
FROM testimonials_backup;

-- Step 7: Clean up the backup table
DROP TABLE IF EXISTS testimonials_backup;
