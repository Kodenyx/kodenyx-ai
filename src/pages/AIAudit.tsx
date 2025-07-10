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
  DollarSign,
  AlertTriangle,
  Zap,
  Star
} from "lucide-react";

const AIAudit = () => {
  const agitationPoints = [
    "Your competitors are already automating their workflows while you're still doing everything manually",
    "Every day you delay AI adoption costs you thousands in lost productivity and missed opportunities", 
    "Your team is burning out from repetitive tasks that could be eliminated tomorrow",
    "You're leaving money on the table because you don't know which processes to automate first"
  ];

  const intrigueQuestions = [
    "What if your biggest bottleneck could become your biggest competitive advantage?",
    "What if you could reclaim 20+ hours per week without hiring a single new employee?", 
    "What if there was a way to know exactly which AI tools would 10X your ROI?",
    "What if you could automate your business growth while you sleep?"
  ];

  const transformationScenarios = [
    {
      icon: <Clock className="w-6 h-6" />,
      before: "Spending 15 hours/week on manual follow-ups",
      after: "AI handles all follow-ups automatically, freeing up your entire week"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      before: "Losing leads because of slow response times",
      after: "Converting 40% more leads with instant, personalized AI responses"
    },
    {
      icon: <Users className="w-6 h-6" />,
      before: "Team overwhelmed by repetitive tasks",
      after: "Team focused on high-value work that actually grows your business"
    }
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

  const blueprintDeliverables = [
    "A complete workflow automation roadmap (worth $5,000 if done by consultants)",
    "Priority-ranked list of high-ROI opportunities (save months of trial and error)", 
    "Step-by-step implementation plan (hand it to any tech team to execute)",
    "Custom AI tool recommendations (no more guessing what works)",
    "ROI calculations for each automation (know your returns before you invest)"
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
    <div className="min-h-screen bg-gradient-to-br from-[#F8F9FA] via-[#F1F3F4] to-[#E8EAED]">
      <SimpleNavbar />
      
      {/* HERO - Problem with Preheadline, Headline, Subheadline Structure */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          {/* Preheadline */}
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-base px-4 py-2">
            Still Duct-Taping Tools Together?
          </Badge>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-8 max-w-5xl mx-auto leading-tight">
            We Build AI Systems That Scale{" "}
            <span className="text-primary block mt-2">— Not Just More Tech to Manage</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            You've got the tools. But where's the leverage?
            <br />
            In 30 days, we'll audit your workflows, identify automation opportunities, and give you a step-by-step AI roadmap that pays for itself.
          </p>
        </div>
      </section>

      {/* AGITATE - Pain Amplification */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Here's What's Really Happening While You Wait
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {agitationPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border-l-4 border-accent">
                <AlertTriangle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-secondary font-semibold">
              Every week you delay = $10,000+ in lost productivity and missed opportunities
            </p>
          </div>
        </div>
      </section>

      {/* INTRIGUE - Pattern Interrupts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              But What If I Told You...
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {intrigueQuestions.map((question, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">?</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">{question}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 italic">
              The difference between successful AI adoption and expensive mistakes? 
              <span className="text-primary font-semibold"> A proper roadmap.</span>
            </p>
          </div>
        </div>
      </section>

      {/* POSITIVE FUTURE - Transformation Vision */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Star className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Picture Your Business 90 Days From Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After implementing your custom AI automation roadmap
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {transformationScenarios.map((scenario, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="bg-gray-50 border-gray-200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 font-bold">✕</span>
                      </div>
                      <CardTitle className="text-gray-700">Before</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{scenario.before}</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        {scenario.icon}
                      </div>
                      <CardTitle className="text-primary">After</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-semibold">{scenario.after}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">The Result?</h3>
            <p className="text-xl text-gray-700 mb-4">
              You'll reclaim 20+ hours per week, increase revenue by 40%, and finally have the automated business you've always wanted.
            </p>
            <p className="text-lg text-primary font-semibold">
              All without the guesswork, expensive mistakes, or endless trial and error.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION - The AI Audit */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Introducing: The AI-First Business Blueprint
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            A 4-week deep-dive audit that creates your custom AI automation roadmap — 
            so you know exactly what to automate, when, and why.
          </p>
          <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">
            No more guessing. No more expensive mistakes. Just results.
          </Badge>
        </div>
      </section>

      {/* What You Get - Enhanced */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Your Complete AI Transformation Blueprint Includes:
          </h2>
          <div className="max-w-4xl mx-auto">
            {blueprintDeliverables.map((deliverable, index) => (
              <div key={index} className="flex items-start gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPS Framework - Positioned as Solution Methodology */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-secondary">
            How We Build Your AI-First Blueprint
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proven MAPS Framework eliminates the guesswork and delivers a clear path to AI success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mapsFramework.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 border-gray-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl text-secondary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment + CTA */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stop Guessing and Start Winning?</h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl mb-6">
              The AI Audit Blueprint: $1,999 total investment
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center text-gray-300">
                <DollarSign className="w-5 h-5 mr-2 text-primary" />
                <span>$1,999 Total Investment</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>4-Week Transformation</span>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Reserve your spot with $1,000 today. The ROI from just one automation will pay for the entire audit.
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-xl">
            <TrendingUp className="mr-2 w-5 h-5" />
            Get My AI Blueprint Now
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            ⚡ Limited spots available — We only take 5 audits per month
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-left text-secondary">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-left">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Urgency */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Let Another Month Go By Without Your AI Blueprint
            </h2>
            <p className="text-xl mb-8">
              Every day you wait is another day your competitors get further ahead. 
              Get your AI-first roadmap and start automating your way to success.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary text-lg px-8 py-4 shadow-xl">
              <ArrowRight className="mr-2 w-5 h-5" />
              Secure My Spot Now
            </Button>
            <p className="text-sm text-gray-200 mt-4">
              💡 What if this could save you 6 months of trial and error?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAudit;
