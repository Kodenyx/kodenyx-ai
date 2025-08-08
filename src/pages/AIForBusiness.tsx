
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Zap, Target, Calendar, ArrowRight } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const AIForBusiness = () => {
  const features = [
    "Run an AI Audit to find your biggest time leaks and automation wins",
    "Build workflows, SOPs, and offers that scale without you at the center", 
    "Install repeatable sales and content systems powered by smart AI tools",
    "Make faster, cleaner decisions as a calm, focused CEO"
  ];

  const includes = [
    "My full AI Prompt Library",
    "Weekly live coaching", 
    "Strategic playbooks (sales, marketing, time buyback)",
    "A private founder community that's scaling with systems"
  ];

  return (
    <div className="min-h-screen">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/20 rounded-full px-4 py-2 text-base text-primary-light font-medium inline-block mb-6">
              6-Month Coaching Program
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
              AI for Business
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              A coaching experience that combines strategy, systems, and execution — helping you scale with confidence without adding more hours or headcount.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://cal.com/aarti-anand82"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-8 w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" /> Book Strategy Call
                </Button>
              </a>
              <p className="text-sm text-gray-400 max-w-xs">
                Investment: $1,440 for 6 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center">
              Who This Is For
            </h2>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-semibold text-black">
                Founders, operators, and entrepreneurs who are scaling… but stuck in the weeds.
              </p>
              
              <p>
                You've hit a point where more effort doesn't mean more growth.<br />
                You're smart, capable, and working hard — but your business still depends too much on you.
              </p>
              
              <p>
                You know AI could help — but you don't know where to start, what to automate, or how to turn it into ROI.
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="text-black font-semibold">
                  This is for you if you're ready to buy back your time, build systems that scale, and lead like a CEO — not a task manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
              The Problem
            </h2>
            
            <div className="space-y-8 text-lg text-white/90 leading-relaxed">
              <p className="text-xl font-semibold text-white">
                Most business owners are flying blind when it comes to AI and systems.
              </p>
              
              <p>
                They're juggling everything — sales, delivery, marketing — and stuck in $10/hour work that keeps them busy, but not better.
              </p>
              
              <p>
                They've tried courses, hired agencies, downloaded templates… but nothing sticks.<br />
                <span className="font-semibold">Why?</span> Because they're missing a clear, tailored strategy that works for their business, their stage, and their goals.
              </p>
              
              <div className="bg-white/10 border border-white/20 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">
                  They don't need more hacks.
                </p>
                <p className="text-white/90">
                  They need a complete operating system — with the right mindset, tools, and structure to scale without breaking themselves or their business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center">
              The Reality Shift
            </h2>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                When I first started building systems with founders, they didn't need more information — they needed clarity.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-4">
                  <p className="font-semibold text-primary">Clarity on what to fix.</p>
                </div>
                <div className="text-center p-4">
                  <p className="font-semibold text-primary">Clarity on what to automate.</p>
                </div>
                <div className="text-center p-4">
                  <p className="font-semibold text-primary">Clarity on what their business should look like if it wasn't so dependent on them.</p>
                </div>
              </div>
              
              <p>
                That's why I created AI for Business — a coaching experience that combines strategy, systems, and execution — with an AI Audit as the first step.
              </p>
              
              <p>
                I've helped founders go from scattered and stuck to scaling with confidence — without adding more hours or headcount.
              </p>
              
              <div className="bg-gray-100 border-l-4 border-primary p-6 rounded">
                <p className="text-black font-semibold mb-2">
                  This isn't about turning your business into a robot.
                </p>
                <p className="text-gray-700">
                  It's about creating leverage — so you can lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
              The Solution
            </h2>
            
            <p className="text-xl text-center text-white/90 mb-12">
              AI for Business is a 6-month coaching program that helps you:
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-white/90">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">You'll get access to:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
              Investment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-primary/20 bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">6 Months</h3>
                  <div className="text-4xl font-bold text-primary mb-4">$1,440</div>
                  <p className="text-gray-600 mb-6">Complete transformation in 6 months</p>
                  <a 
                    href="https://cal.com/aarti-anand82"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary bg-primary/5 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">12 Months</h3>
                  <div className="text-4xl font-bold text-primary mb-4">$2,249</div>
                  <p className="text-gray-600 mb-6">Extended support and implementation</p>
                  <a 
                    href="https://cal.com/aarti-anand82"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
              <p className="text-lg text-black font-semibold">
                No fluff. No refunds. Just real implementation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Lead Like a CEO?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Stop managing tasks. Start building systems that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/aarti-anand82"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 border border-white/20 shadow-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Button>
              </a>
              <a 
                href="/ai-audit-b2b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="text-white border-2 border-white/40 hover:bg-white/10 hover:text-white font-semibold text-lg px-8 py-4 bg-transparent">
                  <Target className="mr-2 h-5 w-5" />
                  Start with AI Audit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIForBusiness;
