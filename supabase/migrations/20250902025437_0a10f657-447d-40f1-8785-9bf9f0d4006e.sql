
-- Delete all case studies from the database
DELETE FROM case_studies;

-- Verify deletion (should return 0 rows)
SELECT COUNT(*) FROM case_studies;
