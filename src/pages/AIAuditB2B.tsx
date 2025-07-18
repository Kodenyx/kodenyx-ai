
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Check } from "lucide-react";

const AIAuditB2B = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F9FA] via-[#F1F3F4] to-[#E8EAED]">
      <SimpleNavbar />
      
      <main className="pt-20">
        {/* Pre-headline */}
        <div className="text-center py-4 bg-secondary">
          <Badge className="bg-primary/20 text-primary border-primary/30 text-base px-4 py-2">
            Most Businesses Are Rushing to Automate Without Direction
          </Badge>
        </div>

        {/* Hero Section - Dark Background */}
        <section className="bg-secondary text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Automating Without a Blueprint Is Like{" "}
              <span className="text-primary block mt-2">Driving Without a Map</span>
            </h1>
            
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              <p className="mb-6">In 4 weeks, we audit your operations, uncover high-ROI automation opportunities, and deliver a custom AI roadmap - so you prioritize what drives ROI, and cut what doesn't.</p>
            </div>

            <a 
              href="https://cal.com/aarti-anand82" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white shadow-xl">
                Book A Call
              </Button>
            </a>
          </div>
        </section>

        {/* The Problem Section - Light Background */}
        <section className="py-16 md:py-20 bg-white/80">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                The Problem
              </h2>
              <div className="text-lg text-gray-700 mb-8 leading-relaxed">
                <p className="mb-6">
                  Most teams are operating below their potential - not because of lack of effort, but because of inefficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Critical workflows are still manual
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Tools don't talk to each other
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Teams are over-relying on people to do what systems should
                  </li>
                </ul>
                <p className="text-xl font-medium text-secondary">
                  Without a clear plan, automation becomes guesswork. And guesswork gets expensive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Inaction Section - Dark Background */}
        <section className="py-16 md:py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The Cost of Inaction
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed">
                <p className="mb-6">
                  While competitors are systemizing with AI to move faster and scale lean...
                </p>
                <p className="mb-6 text-xl font-medium text-white">
                  You're still relying on duct-taped tools and team bandwidth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Every delayed system costs margin
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Every manual task limits scale
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Every missed opportunity compounds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You Need Section - Light Background */}
        <section className="py-16 md:py-20 bg-white/80">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                What You Actually Need
              </h2>
              <div className="text-lg text-gray-700 mb-8 leading-relaxed">
                <p className="mb-6">A structured audit to identify:</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    Where time and money are leaking
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    Which workflows are automation-ready
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    What systems will generate the highest return - and in what order
                  </li>
                </ul>
                <p className="text-xl font-bold text-secondary">
                  That's exactly what the AI Audit delivers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Audit Process Section - Dark Background */}
        <section className="py-16 md:py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                The AI Audit - A 4-Week Operational Diagnostic
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {/* Week 1 */}
                <Card className="bg-white/10 border-white/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary font-bold text-sm mb-2">WEEK 1</div>
                    <CardTitle className="text-xl font-bold text-white">
                      Map Your Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Analyze current workflows, tools, and team handoffs
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Identify inefficiencies and friction
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 2 */}
                <Card className="bg-white/10 border-white/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary font-bold text-sm mb-2">WEEK 2</div>
                    <CardTitle className="text-xl font-bold text-white">
                      Assess Automation Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Spot high-potential automation use cases
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Analyze cost-saving and time-saving potential
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 3 */}
                <Card className="bg-white/10 border-white/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary font-bold text-sm mb-2">WEEK 3</div>
                    <CardTitle className="text-xl font-bold text-white">
                      Prioritize for ROI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Score each opportunity by complexity and return
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Identify short- and long-term wins
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 4 */}
                <Card className="bg-white/10 border-white/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary font-bold text-sm mb-2">WEEK 4</div>
                    <CardTitle className="text-xl font-bold text-white">
                      Deliver the Blueprint
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        A custom 90/180/365-day roadmap
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Clear priorities, next steps, and ROI projections
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section - Light Background */}
        <section className="py-16 md:py-20 bg-white/80">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
                Deliverables Include
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Prioritized workflow automation list</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">Workflow maps for top 3-5 systems</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">AI automation roadmap (90/180/365-day plan)</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">ROI projections for each automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section - Dark Background */}
        <section className="py-16 md:py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Who This Is For
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-gray-300">Founders scaling with lean ops</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-gray-300">Teams over-relying on headcount</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-gray-300">COOs tackling operational bloat</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-gray-300">B2B businesses unsure where to start with AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section - Light Background */}
        <section className="py-16 md:py-20 bg-white/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                Investment
              </h2>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                $1,999
              </div>
              <div className="text-lg text-gray-700 mb-6">
                <p className="mb-2">Flat Fee</p>
                <p className="mb-2">One-time. No upsells. No long-term contract.</p>
                <p className="text-xl font-medium text-secondary">
                  Pays for itself if you implement just one automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Dark Background */}
        <section className="py-16 md:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Your AI Roadmap Starts with One Smart Step
              </h2>
              <div className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                <p className="mb-4">You've got the tools. You've got the team.</p>
                <p className="mb-4">Now it's time to build the systems that scale.</p>
                <p className="text-xl font-medium text-white">Let's start with the blueprint.</p>
              </div>
              
              <a 
                href="https://cal.com/aarti-anand82" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white shadow-xl">
                  Book A Call
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIAuditB2B;
