import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, MessageCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ChatbotHero = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm your AI assistant. I can help you identify which workflows in your business should be automated for maximum ROI. What's your biggest operational challenge right now?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = { type: "user", text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const userInput = inputValue;
      setInputValue("");
      
      const { data, error } = await supabase.functions.invoke('chatbot-response', {
        body: { userMessage: userInput }
      });
      
      if (error) throw error;
      
      const botResponse = {
        type: "bot",
        text: data.botResponse
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting chatbot response:', error);
      const errorResponse = {
        type: "bot",
        text: "Sorry, I encountered an error. Please try again or consider scheduling an AI audit for personalized assistance."
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="pt-32 md:pt-36 min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/95 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Brand Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-primary/20 rounded-full px-4 py-2 text-base text-primary-light font-medium inline-block">
              Most AI advice is just noise.
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We Don't Start With AI.{" "}
              <span className="text-primary-light">We Start With What's Broken.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We audit your workflows, score them by ROI, and build AI systems that eliminate busywork, unlock margin, and give you confidence your business can run without you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/ai-audit-b2b"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 w-full sm:w-auto">
                  <ArrowRight className="mr-2 h-5 w-5" /> Start with an AI Audit
                </Button>
              </a>
            </div>
          </div>

          {/* Right side - Chatbot Interface */}
          <div className="relative w-full max-w-[150px] mx-auto animate-slide-up">
            <div className="bg-[#1a1a2e] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="px-1 py-2 bg-[#13131f] border-b border-gray-800 flex items-center gap-1">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-1 ml-1">
                  <MessageCircle className="w-3 h-3 text-primary-light" />
                  <span className="text-xs text-gray-300">AI Assistant</span>
                </div>
              </div>
              
              <div className="h-40 p-2 overflow-y-auto space-y-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-1 ${
                        message.type === 'user'
                          ? 'bg-primary text-white ml-4'
                          : 'bg-[#2d2d3d] text-white'
                      }`}
                    >
                      <p className="text-[8px] leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-2 border-t border-gray-800">
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask..."
                    className="flex-1 bg-[#2d2d3d] rounded-lg px-2 py-1 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-primary hover:bg-primary-dark text-white px-2 py-1 h-auto"
                    disabled={!inputValue.trim() || isLoading}
                  >
                    {isLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotHero;