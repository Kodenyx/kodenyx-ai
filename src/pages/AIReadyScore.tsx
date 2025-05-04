
import React from "react";
import { Button } from "@/components/ui/button";
import SimpleNavbar from "@/components/SimpleNavbar";
import { ArrowRight, Users, Wrench, HelpCircle, Lightbulb, TrendingUp, Zap, DollarSign, ListOrdered } from "lucide-react";
import { Link } from "react-router-dom";

const AIReadyScore = () => {
  const scrollToQuiz = () => {
    // Redirect to the full quiz page
    window.location.href = "/ai-first-readiness-score";
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 bg-gradient-to-br from-secondary to-secondary/95 text-white min-h-[90vh] flex items-center">
        <div className="container mx-auto py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary mb-2 animate-fade-in">Most founders are running lean — but not smart.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Discover Your AI Readiness Score in 3 Minutes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Pinpoint the systems costing you time — and get a personalized plan to automate smarter, without hiring.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 animate-fade-in transition-all duration-300 hover:scale-105"
              style={{ animationDelay: "200ms" }}
              onClick={scrollToQuiz}
            >
              <ArrowRight className="mr-2 h-5 w-5" /> Get My Score & Next Steps
            </Button>
            <p className="text-gray-300 mt-4 text-sm animate-fade-in" style={{ animationDelay: "300ms" }}>
              ✅ Trusted by 500+ business leaders reclaiming 10+ hours/week using this quiz
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-secondary text-center">Who This Is For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Founders and CEOs</span> doing too much manually
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Operators</span> tired of duct-taped tools and bottlenecks
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Teams</span> curious about AI but unsure where to start
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Business leaders</span> who want clarity before investing in automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-secondary text-center">What You'll Get</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <p className="text-lg text-gray-800">A personalized AI Readiness Score</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Zap className="text-primary h-5 w-5" />
                </div>
                <p className="text-lg text-gray-800">Your top 2 automation opportunities</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <DollarSign className="text-primary h-5 w-5" />
                </div>
                <p className="text-lg text-gray-800">An estimate of what your current systems are costing you</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <ArrowRight className="text-primary h-5 w-5" />
                </div>
                <p className="text-lg text-gray-800">A clear next step to take your business from manual to AI-first</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/ai-first-readiness-score">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white text-lg px-8 transition-all duration-300 hover:scale-105"
                >
                  <ArrowRight className="mr-2 h-5 w-5" /> Take the 3-Minute Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIReadyScore;
