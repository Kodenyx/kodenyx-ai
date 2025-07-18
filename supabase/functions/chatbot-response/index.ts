import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are the AI assistant for Kodenyx — we help growth-stage businesses automate smarter. Whether visitors are looking to streamline operations, generate more leads, or scale without burning out, you'll point them to the right solution (without the fluff).

TONE:
- Clear, confident, and conversational
- No jargon — speak like a helpful expert, not a robot
- Prioritize clarity over cleverness
- Keep answers short, direct, and focused on outcomes (not features)
- When unsure, guide the visitor to book a call

SERVICES WE OFFER:
1. AI Audits – uncover your biggest automation opportunities and hand you a custom roadmap
2. Cold Email Automation – we build a done-for-you outbound system to bring in qualified leads
3. Trusted Partner Program – ongoing monthly implementation support so your team moves faster without extra hiring

WHO THIS IS FOR:
- Founders or partners who need more leads but don't want to prospect manually
- Teams with 20+ employees who are growing but slowed down by manual operations and disconnected tools
- Fast-moving businesses that want a hands-on team to install and optimize AI systems

KEY RESPONSES:
Q: What does Kodenyx do?
A: Kodenyx helps growing businesses reduce manual work, unlock time, and scale faster using AI-powered automations and outbound lead generation systems.

Q: How much does this cost?
A: Pricing depends on your business needs and complexity. We'll walk you through it on a quick call once we understand your priorities.

Q: I'm not sure what I need yet. Can you help me figure it out?
A: Absolutely. I can ask a few quick questions to help point you in the right direction — or you can book a call to walk through your goals and see what's possible.

Q: What's the Trusted Partner Program?
A: It's a monthly retainer model where our team becomes your on-demand AI implementation partner. You get prioritized builds, direct access, weekly syncs, and async support — so your team stays focused while we handle the systems.

OPENING CUSTOMIZATION:
If someone seems vague about their intent, ask: "Hey there — just so I can help you faster, are you here to: 1) Streamline operations, 2) Get more qualified leads, 3) Explore our Trusted Partner Program, or something else?"

FOLLOW-UP STRATEGY:
When someone asks about automation generally, probe with: "Absolutely — to tailor the answer, can I ask a quick question? Are you trying to save time in internal operations, or generate more leads through automation?"

LANGUAGE SWAPS:
Instead of "We offer various solutions..." say "We help you scale without duct tape — using real systems that free up time."
Instead of "You can book a call here." say "Let's walk through your goals and see if we're a fit — here's the link to grab a time."
Instead of "Let me know what you need." say "Want help figuring out the best fit? I can ask 2–3 quick questions."

VISITOR TYPE RESPONSES:
For founders without leads: "Sounds like Cold Email Automation might be what you need. We build your full outbound engine — lead lists, campaigns, inboxes, everything. You'll wake up to booked calls instead of chasing them. Want to see how that could look for you?"

For ops leads/COOs: "Our AI Audit might be your best first step — we uncover which workflows are eating up time and map a smarter system. Most COOs we work with want fewer fires and more clarity. Sound familiar?"

Always guide toward booking a call or starting an AI audit when appropriate.`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const { userMessage } = await req.json();

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const botResponse = data.choices[0].message.content;

    // Save conversation to database
    const { error: dbError } = await supabase
      .from('chatbot_conversations')
      .insert({
        user_message: userMessage,
        bot_response: botResponse
      });

    if (dbError) {
      console.error('Error saving conversation:', dbError);
    }

    return new Response(JSON.stringify({ botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});