
-- Create a table for AI Audit Week 1 intake form responses
CREATE TABLE public.ai_audit_week1_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- System Flow (Questions 1-5)
  top_workflows TEXT,
  client_assignment TEXT,
  onboarding_process TEXT,
  delivery_tools TEXT[], -- Array to store multiple tools
  other_delivery_tool TEXT,
  tracking_progress TEXT,
  
  -- Time Drains (Questions 6-10)
  inefficient_tasks TEXT[], -- Array for multiple tasks
  manual_onboarding TEXT,
  chase_down_tasks TEXT[], -- Array for multiple items
  update_gathering TEXT,
  time_consuming_work TEXT,
  
  -- Data & Tools (Questions 11-14)
  sales_ops_tools TEXT,
  underused_tools TEXT,
  needed_data TEXT,
  client_notes_storage TEXT,
  
  -- Growth Blockers (Questions 15-19)
  new_client_rejection TEXT,
  would_break_first TEXT,
  confidence_needs TEXT,
  scaling_issues TEXT,
  audit_goal TEXT,
  
  -- Additional Thoughts (Question 20)
  additional_thoughts TEXT
);

-- Add Row Level Security (RLS) - making it public for now since this is an intake form
ALTER TABLE public.ai_audit_week1_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert responses (public intake form)
CREATE POLICY "Anyone can submit audit responses" 
  ON public.ai_audit_week1_responses 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading responses (you might want to restrict this later)
CREATE POLICY "Anyone can view audit responses" 
  ON public.ai_audit_week1_responses 
  FOR SELECT 
  USING (true);
