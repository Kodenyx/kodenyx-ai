
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Download, Calendar, Clock, Users, Zap, ArrowRight, Shield, Target, TrendingUp } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const AIToolsLeadMagnets = () => {
  return (
    <div className="min-h-screen">
      <SimpleNavbar />
      
      {/* Hero Section - Problem & Agitation */}
      <section className="pt-24 pb-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Your Lead Magnets Are Boring Your Prospects to Death
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Generic PDFs and tired checklists get deleted faster than spam. Meanwhile, smart companies are capturing 400% more leads with AI-powered tools that prospects actually want to use.
            </p>
            <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                <strong>The harsh reality:</strong> Your prospects have seen a thousand "Ultimate Guides" and "Free Templates." They're immune to traditional lead magnets. But they'll fight over interactive tools that solve real problems instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              Why Your Current Lead Magnets Are Failing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">2%</div>
                  <p className="text-gray-700">average conversion rate of PDF lead magnets</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">80%</div>
                  <p className="text-gray-700">of downloaded PDFs are never opened</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">5 sec</div>
                  <p className="text-gray-700">average time spent engaging with static content</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Your prospects are tired of:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Generic "Ultimate Guides" everyone has</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Templated checklists with no personalization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Static PDFs that provide zero interaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">One-size-fits-all solutions that don't work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              What High-Converting Companies Do Instead
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">They Create Interactive Experiences</h3>
                <p className="text-white/90 text-lg">
                  Smart marketers deploy AI-powered calculators, assessments, and tools that prospects can't resist using. These tools provide instant value while capturing detailed lead data.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">They Personalize Every Interaction</h3>
                <p className="text-white/90 text-lg">
                  Instead of generic content, they use AI to create personalized recommendations, custom reports, and tailored solutions that feel like they were built specifically for each prospect.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">They Capture Rich Behavioral Data</h3>
                <p className="text-white/90 text-lg">
                  While competitors get just name and email, leaders collect detailed insights about prospects' challenges, preferences, and buying intent through interactive tool usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-16">
              Results That Speak for Themselves
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">412%</div>
                  <p className="text-lg text-gray-700 mb-2">Increase in lead conversion rates</p>
                  <p className="text-sm text-gray-600">B2B SaaS Company, 4 months</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">89%</div>
                  <p className="text-lg text-gray-700 mb-2">Lead quality improvement score</p>
                  <p className="text-sm text-gray-600">Marketing Agency, 6 months</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">$180K</div>
                  <p className="text-lg text-gray-700 mb-2">Additional revenue from better leads</p>
                  <p className="text-sm text-gray-600">Professional Services, 8 months</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <blockquote className="text-xl text-gray-700 italic mb-4">
                  "Our AI lead magnet tools generate more qualified leads in a week than our old PDFs did in six months. Prospects actually thank us for creating them."
                </blockquote>
                <cite className="text-primary font-semibold">- Marcus R, Marketing Director</cite>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <blockquote className="text-xl text-gray-700 italic mb-4">
                  "Most 'AI projects' create noise. Aarti creates momentum. She's masterful at spotting the real leverage points—and turning them into systems that deliver ROI on repeat."
                </blockquote>
                <cite className="text-primary font-semibold">- Sheri O, Founder, Growth Lane Strategies</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              Transform Boring PDFs Into Irresistible AI Tools
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What We Create for You:</h3>
                <div className="space-y-4">
                  {[
                    "AI-powered ROI calculators",
                    "Interactive assessment tools",
                    "Personalized recommendation engines",
                    "Dynamic pricing calculators",
                    "Custom diagnostic tools",
                    "Intelligent surveys and quizzes",
                    "Automated report generators",
                    "Industry-specific analyzers"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What This Means for You:</h3>
                <div className="space-y-4">
                  {[
                    "4x higher conversion rates than PDFs",
                    "Rich behavioral data on every prospect",
                    "Qualified leads who actually engage",
                    "Tools prospects share with colleagues",
                    "Detailed insights into buying intent",
                    "Automated lead scoring and routing",
                    "Viral content that spreads organically",
                    "Professional tools that build authority"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary/20 border border-primary/30 rounded-lg p-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-white mb-4">Performance Guarantee</h3>
              <p className="text-white/90 text-lg">
                If your new AI lead magnet tools don't outperform your current magnets by at least 200% in 90 days, we'll refund your investment and build you a new tool for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Stop Boring Prospects. Start Converting Them.
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              See exactly how AI lead magnet tools would work for your business. Book a 15-minute demo and we'll show you the conversion rates you're missing.
            </p>
            
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
              <p className="text-lg text-yellow-800 font-medium">
                <Clock className="inline h-5 w-5 mr-2" />
                Limited Time: Strategy session includes a free lead magnet concept (normally $299)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://cal.com/aarti-anand82" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 shadow-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Free Demo Now
                </Button>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-primary mr-1" />
                <span>15+ companies already using our AI tools</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span>Average 412% increase in conversions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIToolsLeadMagnets;
