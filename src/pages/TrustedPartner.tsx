import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Users, Zap, Target } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const TrustedPartner = () => {
  const features = [
    "Weekly strategy syncs",
    "Shared AI roadmap + project tracker",
    "Dedicated team for implementation, revisions, and optimization",
    "Async support via Slack or Notion",
    "Priority access to new workflow templates and agents",
    "Month-to-month model: no long-term contract"
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-400 mb-4">
              Most AI implementation fails because no one owns it.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plug In a Trusted AI Partner - Without Hiring or Slowing Down
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We're your on-demand AI implementation team - so you scale without duct tape.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 inline-block mb-8">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                $5,000/month
              </div>
              <div className="text-gray-400">
                Flat rate pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-800 mb-8">
              You've tried to delegate it. You've tried to DIY it.<br />
              But AI keeps falling through the cracks.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              You know the opportunities are massive - but someone on your team has to own the workflows, the tools, the testing, and the implementation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              And right now, that someone is you.<br />
              Which means it doesn't get done - or it gets duct-taped together by different vendors who don't talk to each other.
            </p>
            <p className="text-lg text-gray-600">
              Meanwhile, the business is growing… but the systems?<br />
              Not so much.
            </p>
          </div>
        </div>
      </section>

      {/* Without Clear Ownership */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Without clear ownership, automation stalls out.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              You end up with:
            </p>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Endless tools, but no cohesive systems</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Manual workarounds that drain time</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">A team stretched too thin to build or maintain anything new</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Delays, confusion, or worst of all… wasted spend on the wrong AI tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What If Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What if AI implementation worked more like plugging in a senior hire - minus the headcount?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              What if you had:
            </p>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-800">An expert team that maps, builds, and maintains your automations</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-800">Weekly visibility into what's being implemented and when</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-800">A go-to crew for questions, blockers, and async strategy</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-800">A clear roadmap that turns ideas into high-leverage workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Modern Teams Scale */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              This is how modern teams scale - with systems that grow with them.
            </h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Lead capture becomes automated</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Onboarding is smooth and consistent</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Internal capacity is matched to demand in real time</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">Your team stops reinventing the wheel</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-primary">•</span>
                <span className="text-lg text-gray-300">And you… finally get your time back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Introducing the Trusted Partner Program
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Your on-demand AI implementation team.
            </p>
            <p className="text-lg text-gray-600 text-center mb-8">
              We handle the execution - so you don't have to chase it.
            </p>
            <h3 className="text-xl font-bold text-center mb-8">
              Here's what's included:
            </h3>
            <div className="grid md:grid-cols-1 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Ideal for teams with 10+ employees who are growing fast but need the systems to match.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Automation Backbone
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              You Bring the Vision. We'll Build the System.
            </p>
            <a 
              href="https://cal.com/aarti-anand82"
              target="_blank"
              rel="noopener noreferrer"
            >
               <Button size="lg" variant="default" className="text-lg px-8 py-4">
                 Book A Call
               </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedPartner;