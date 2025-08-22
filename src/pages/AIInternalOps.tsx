import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Clock, Users, FileText, Zap, Target, TrendingUp } from 'lucide-react';
import SimpleNavbar from '@/components/SimpleNavbar';

const AIInternalOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      {/* Hero Section - Problem */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium">
            Post-Deal Automation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Your Deals Close, But Your 
            <span className="text-primary"> Operations Break</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            You've mastered lead generation. Your sales funnel converts. But after the handshake? 
            Chaos. Manual onboarding, scattered communication, missed deadlines. Your team drowns 
            in operational tasks while clients wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg">
              Automate Your Operations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Agitation - Pain Points */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            The Hidden Cost of Manual Operations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-l-destructive">
              <CardContent className="p-0">
                <Clock className="w-8 h-8 text-destructive mb-4" />
                <h3 className="text-xl font-semibold mb-3">Time Hemorrhage</h3>
                <p className="text-muted-foreground">
                  Your team spends 60% of their time on repetitive tasks. Client onboarding 
                  takes weeks instead of hours. Projects stall waiting for approvals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-destructive">
              <CardContent className="p-0">
                <Users className="w-8 h-8 text-destructive mb-4" />
                <h3 className="text-xl font-semibold mb-3">Client Frustration</h3>
                <p className="text-muted-foreground">
                  Clients get lost in your process. They receive conflicting information. 
                  Response times vary wildly. First impressions shatter.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-destructive">
              <CardContent className="p-0">
                <FileText className="w-8 h-8 text-destructive mb-4" />
                <h3 className="text-xl font-semibold mb-3">Operational Chaos</h3>
                <p className="text-muted-foreground">
                  Information lives in silos. Tasks fall through cracks. Your team 
                  works harder but delivers inconsistent results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact - What This Costs You */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            What Poor Operations Really Cost You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">67%</div>
              <p className="text-muted-foreground">Client churn due to poor onboarding</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">40h/week</div>
              <p className="text-muted-foreground">Wasted on manual processes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">$50K</div>
              <p className="text-muted-foreground">Lost revenue per failed client</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">3x</div>
              <p className="text-muted-foreground">Longer project delivery times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise - The Solution */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              AI Internal Operations That Actually Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We automate everything that happens after the deal closes. From client onboarding 
              to project delivery, your operations run like clockwork.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instant Client Onboarding</h3>
                <p className="text-muted-foreground mb-4">
                  AI agents collect requirements, set up accounts, and guide clients through 
                  your process automatically.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Automated welcome sequences</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Smart questionnaire routing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Progress tracking dashboards</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Project Management AI</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent project orchestration that adapts to changes and keeps 
                  everyone aligned automatically.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Dynamic timeline adjustments</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Automated status updates</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Risk prediction & mitigation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time insights into operational efficiency with predictive 
                  recommendations for optimization.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Bottleneck identification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Team productivity metrics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Client satisfaction tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">
              5+ companies already streamlined their operations
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Michael R, Operations Director</p>
                      <p className="text-sm text-muted-foreground">Tech Services Firm</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Our client onboarding went from 3 weeks to 2 days. The AI handles everything 
                    seamlessly - our team can focus on actual delivery instead of paperwork."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Lisa M, CEO</p>
                      <p className="text-sm text-muted-foreground">Digital Agency</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "We eliminated 80% of manual tasks. Projects deliver on time, clients are 
                    happier, and our team finally has bandwidth to grow the business."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What Success Looks Like
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-muted-foreground">Faster onboarding</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Client satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">Time savings</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">Team productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Losing Clients to Poor Operations
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a demo and see how we can automate your post-deal processes in 30 days.
          </p>
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
              Limited Time: Setup includes a free trial for 30 days (normally $499)
            </Badge>
          </div>
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
            Book Your Operations Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm mt-4 opacity-75">
            30-minute consultation • No commitment required • See immediate improvement opportunities
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIInternalOps;
