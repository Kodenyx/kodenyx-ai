
-- Add gamma_url field to case_studies table to store the original Gamma presentation link
ALTER TABLE public.case_studies 
ADD COLUMN gamma_url text;

-- Add a comment to document the purpose of this field
COMMENT ON COLUMN public.case_studies.gamma_url IS 'URL to the original Gamma presentation for this case study';
