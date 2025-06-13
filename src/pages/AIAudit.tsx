
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SimpleNavbar from "@/components/SimpleNavbar";
import { 
  CheckCircle, 
  Users, 
  Target, 
  TrendingUp, 
  MapPin, 
  Search, 
  PenTool, 
  ArrowRight,
  Clock,
  DollarSign
} from "lucide-react";

const AIAudit = () => {
  const benefits = [
    "A complete map of your current workflows",
    "A breakdown of where time, money, and energy are leaking", 
    "A ranked list of high-ROI automation opportunities",
    "A personalized rollout plan (in priority order)",
    "A blueprint you can hand to any tech team to execute — including us"
  ];

  const targetAudience = [
    "Founders feeling behind on AI but not sure where to start",
    "Teams spending too much time on repeatable, manual work", 
    "Businesses using a patchwork of tools with no clear system",
    "Operators who want to scale *without* burning out their team"
  ];

  const mapsFramework = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Map the Mess",
      description: "See what's manual, repeated, or unclear"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Assess the Opportunities", 
      description: "Score each workflow by friction and ROI"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Plan the Redesign",
      description: "Propose AI-first versions of key systems"
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Sequence the Rollout",
      description: "Prioritize what to implement, when, and why"
    }
  ];

  const faqs = [
    {
      question: "Will you implement the automations too?",
      answer: "This audit gives you the exact blueprint — you can use us or any team to build it."
    },
    {
      question: "What if I don't know what I want to automate?", 
      answer: "That's the point. You don't need to know. You need a guide."
    },
    {
      question: "How much time will this take?",
      answer: "You'll spend 1 hour per week. We handle the heavy lifting."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
            AI Audit: Go From AI-Curious to AI-First in 30 Days
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            Your business isn't too early for AI.
            <span className="text-primary block">It just needs a blueprint.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            This 4-week AI audit gives you a step-by-step automation roadmap tailored to your workflows, 
            tools, and team — no fluff, no guesswork.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4">
            Book My AI Audit
          </Button>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            By the end of the audit, you'll walk away with:
          </h2>
          <div className="max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            This audit is built for:
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">{audience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MAPS Framework Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We run every audit using the MAPS Framework
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mapsFramework.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price + CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Make This Easy</h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-muted-foreground mb-6">
              The AI Audit is $1,999. You pay $1,000 upfront to reserve your spot.
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center text-muted-foreground">
                <DollarSign className="w-5 h-5 mr-2 text-primary" />
                <span>$1,999 Total Investment</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>4-Week Timeline</span>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4">
            Book Now
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-left">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-left">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your AI-First Blueprint?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop wondering where to start with AI. Get a clear, actionable roadmap 
              tailored specifically to your business in just 30 days.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4">
              <TrendingUp className="mr-2 w-5 h-5" />
              Book My AI Audit Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAudit;
