
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Calendar, Clock, Users, Zap, ArrowRight, Shield } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const AIChatAgents = () => {
  return (
    <div className="min-h-screen">
      <SimpleNavbar />
      
      {/* Hero Section - Problem & Agitation */}
      <section className="pt-24 pb-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Your Best Leads Are Slipping Away While You Sleep
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Every minute your website visitors wait for a response, you lose money. 67% of prospects abandon sites within 3 minutes when they can't get instant answers.
            </p>
            <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                <strong>The brutal truth:</strong> While you're in meetings, sleeping, or handling other tasks, qualified prospects are visiting your site, getting frustrated, and going to your competitors who respond instantly.
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
              How Much Revenue Are You Losing Right Now?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">67%</div>
                  <p className="text-gray-700">of visitors leave if they can't get instant answers</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">3 min</div>
                  <p className="text-gray-700">average wait time before prospects give up</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-4">24/7</div>
                  <p className="text-gray-700">hours your competitors are stealing your leads</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Meanwhile, your team is drowning in:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Repetitive qualification questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">After-hours missed opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Manual scheduling back-and-forth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Unqualified leads wasting sales time</span>
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
              Here's What Winners Do Differently
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">They Never Sleep on Opportunities</h3>
                <p className="text-white/90 text-lg">
                  Top-performing companies capture leads 24/7 with AI agents that instantly engage, qualify, and book meetings - even at 2 AM on weekends.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">They Qualify Before They Sell</h3>
                <p className="text-white/90 text-lg">
                  Smart businesses use AI to ask the right questions upfront, so sales teams only talk to prospects who are ready, willing, and able to buy.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">They Scale Without Hiring</h3>
                <p className="text-white/90 text-lg">
                  While competitors hire expensive sales reps, leaders deploy AI agents that handle 10x more conversations at a fraction of the cost.
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
              Real Results from Real Clients
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">340%</div>
                  <p className="text-lg text-gray-700 mb-2">Increase in qualified leads</p>
                  <p className="text-sm text-gray-600">SaaS Company, 6 months</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">85%</div>
                  <p className="text-lg text-gray-700 mb-2">Reduction in response time</p>
                  <p className="text-sm text-gray-600">Professional Services, 3 months</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">$250K</div>
                  <p className="text-lg text-gray-700 mb-2">Additional revenue captured</p>
                  <p className="text-sm text-gray-600">Manufacturing Co., 12 months</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "Our AI chat agent books more qualified meetings in a week than our sales team used to book in a month. It's like having our best salesperson working 24/7."
              </blockquote>
              <cite className="text-primary font-semibold">- Sarah C, VP Sales</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              Meet Your New 24/7 Sales Machine
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What Our AI Chat Agents Do:</h3>
                <div className="space-y-4">
                  {[
                    "Instantly engage every website visitor",
                    "Ask intelligent qualifying questions",
                    "Capture contact information naturally",
                    "Schedule meetings directly to calendars",
                    "Follow up with missed conversations",
                    "Transfer hot leads to human agents",
                    "Provide instant pricing and information",
                    "Work in multiple languages"
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
                    "Never miss another qualified lead",
                    "Sales team focuses on closing, not qualifying",
                    "Revenue flows in around the clock",
                    "Reduce cost per lead by 60%+",
                    "Scale conversations without hiring",
                    "Get detailed prospect insights instantly",
                    "Turn your website into a lead magnet",
                    "Outpace competitors who still use forms"
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
              <h3 className="text-2xl font-bold text-white mb-4">Risk-Free Guarantee</h3>
              <p className="text-white/90 text-lg">
                If our AI chat agent doesn't increase your qualified leads by at least 200% in 60 days, we'll refund every penny and let you keep the system.
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
              Stop Losing Leads to Competitors Who Respond Faster
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              See exactly how an AI chat agent would work on your website. Book a 15-minute demo and we'll show you the leads you're missing right now.
            </p>
            
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
              <p className="text-lg text-yellow-800 font-medium">
                <Clock className="inline h-5 w-5 mr-2" />
                Limited Time: Setup includes a free trial for 30 days (normally $499)
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
                <span>10+ companies already using our AI agents</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                <span>Average 340% increase in qualified leads</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatAgents;
