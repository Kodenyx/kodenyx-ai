
-- 1) See how many records will be deleted
SELECT count(*) AS case_studies_before FROM public.case_studies;

-- 2) Delete all case studies
DELETE FROM public.case_studies;

-- 3) Verify deletion
SELECT count(*) AS case_studies_after FROM public.case_studies;
