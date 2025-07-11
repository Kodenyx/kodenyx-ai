
import { Button } from "@/components/ui/button";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Check } from "lucide-react";

const AIAuditB2B = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      <main className="pt-20">
        {/* Pre-headline */}
        <div className="text-center py-4 bg-muted/30">
          <p className="text-sm text-muted-foreground font-medium">
            Still Duct-Taping Tools Together?
          </p>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            We Build AI Systems That Scale — Not Just More Tech to Manage
          </h1>
          
          <div className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            <p className="mb-4">You've invested in the tools.</p>
            <p className="mb-4">Now it's time to extract the leverage.</p>
            <p>In 30 days, we'll map your operations, identify high-ROI automation opportunities, and deliver a clear AI implementation plan.</p>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="bg-muted/20 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                The Problem
              </h2>
              <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <p className="mb-6">
                  Most teams are operating below their potential — not because of lack of effort, but because of inefficiency.
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
                <p className="text-xl font-medium text-foreground">
                  Without a clear roadmap, automation feels overwhelming — and expensive to get wrong.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Inaction Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                The Cost of Inaction
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-6">
                  While competitors are systemizing with AI to move faster and scale lean…
                </p>
                <p className="mb-6 text-xl font-medium text-foreground">
                  You're still relying on duct-taped tools and team bandwidth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Every delayed system costs margin
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Every manual task limits scale
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Every missed opportunity compounds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You Need Section */}
        <section className="bg-muted/20 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                What You Actually Need
              </h2>
              <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
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
                    What systems will generate the highest return — and in what order
                  </li>
                </ul>
                <p className="text-xl font-bold text-foreground">
                  That's exactly what the AI Audit delivers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Audit Process Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                The AI Audit — A 4-Week Operational Diagnostic
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {/* Week 1 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-primary font-bold text-sm mb-2">WEEK 1</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Map Your Operations
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Analyze current workflows, tools, and team handoffs
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Identify inefficiencies and friction
                    </li>
                  </ul>
                </div>

                {/* Week 2 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-primary font-bold text-sm mb-2">WEEK 2</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Assess Automation Opportunities
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Spot high-potential automation use cases
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Analyze cost-saving and time-saving potential
                    </li>
                  </ul>
                </div>

                {/* Week 3 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-primary font-bold text-sm mb-2">WEEK 3</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Prioritize for ROI
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Score each opportunity by complexity and return
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Identify short- and long-term wins
                    </li>
                  </ul>
                </div>

                {/* Week 4 */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-primary font-bold text-sm mb-2">WEEK 4</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Deliver the Blueprint
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      A custom 90/180/365-day roadmap
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Clear priorities, next steps, and ROI projections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="bg-muted/20 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Deliverables Include
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Prioritized workflow automation list</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">Workflow maps for top 3–5 systems</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">AI automation roadmap (90/180/365-day plan)</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">ROI projections for each automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Who This Is For
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">Founders scaling with lean ops</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">Teams over-relying on headcount</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">COOs tackling operational bloat</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-muted-foreground">B2B businesses unsure where to start with AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="bg-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Investment
              </h2>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                $1,999
              </div>
              <div className="text-lg text-muted-foreground mb-6">
                <p className="mb-2">Flat Fee</p>
                <p className="mb-2">One-time. No upsells. No long-term contract.</p>
                <p className="text-xl font-medium text-foreground">
                  Pays for itself if you implement just one automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Let's Build Your Automation Roadmap
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Click below to schedule a discovery call. We'll confirm fit and walk you through the next steps.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://cal.com/aarti-anand82" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
                    Book My AI Audit
                  </Button>
                </a>
                
                <div className="text-muted-foreground">
                  <p className="mb-4">Want to preview the kind of report you'll get?</p>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    See Sample Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIAuditB2B;
