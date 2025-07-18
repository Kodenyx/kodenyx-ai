-- Create table to store chatbot conversations
CREATE TABLE public.chatbot_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chatbot_conversations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert conversations
CREATE POLICY "Anyone can insert chatbot conversations" 
ON public.chatbot_conversations 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to view conversations (for analytics)
CREATE POLICY "Anyone can view chatbot conversations" 
ON public.chatbot_conversations 
FOR SELECT 
USING (true);