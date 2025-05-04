
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SimpleNavbar from "@/components/SimpleNavbar";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import AIScoreForm from "@/components/AIScoreForm";

const AIFirstReadinessScore = () => {
  const scrollToForm = () => {
    const element = document.getElementById('scorecard-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 bg-gradient-to-br from-secondary to-secondary/95 text-white">
        <div className="container mx-auto py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Is Your Business AI-Ready?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              In 3 minutes, uncover where your business stands — and what to automate next.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
              onClick={scrollToForm}
            >
              <ArrowRight className="mr-2 h-5 w-5" /> Take the Scorecard
            </Button>
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
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Founders and CEOs</span> doing too much manually
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Operators</span> tired of duct-taped tools and bottlenecks
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-gray-800">
                    <span className="font-semibold">Teams</span> curious about AI but unsure where to start
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F5FF] shadow-md rounded-lg p-6 border border-[#E0DDFF]">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
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
                  <span className="text-primary text-lg font-bold">1</span>
                </div>
                <p className="text-lg text-gray-800">A personalized AI Readiness Score</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <span className="text-primary text-lg font-bold">2</span>
                </div>
                <p className="text-lg text-gray-800">Your top 2 automation opportunities</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <span className="text-primary text-lg font-bold">3</span>
                </div>
                <p className="text-lg text-gray-800">An estimate of what your current systems are costing you</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <span className="text-primary text-lg font-bold">4</span>
                </div>
                <p className="text-lg text-gray-800">A clear next step to take your business from manual to AI-first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scorecard Form Section */}
      <section id="scorecard-form" className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary p-6 text-white">
                <h2 className="text-2xl font-bold">AI First Readiness Scorecard</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-gray-300">3 minutes to complete</p>
                </div>
              </div>
              
              <AIScoreForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFirstReadinessScore;
