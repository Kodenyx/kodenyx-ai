
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Calendar, Target, Shield, Zap } from "lucide-react";
import SimpleNavbar from "@/components/SimpleNavbar";

const ColdEmailAutomationOffer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Never Wake Up Wondering Where Your Next Lead Will Come From
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              A Fully Done-for-You Cold Email System That Books Qualified Appointments — While You Focus on Growing Your Business
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                We write the copy. Set up the tech. Send the emails. Book the calls.<br />
                Your only job? Drop your leads in a Google Drive folder once a month.<br />
                We take care of the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to See How It Works?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Enter your email to get the walkthrough + sample results
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Zap className="mr-2 h-4 w-4" />
                Get Instant Access
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              How It Works (You'll Only Touch It Once a Month)
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    1
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Drop Your Leads</h3>
                  <p className="text-gray-300 text-lg">
                    Upload a simple lead list to a shared Google Drive folder once per month.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    2
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">We Do the Rest</h3>
                  <div className="text-gray-300 text-lg">
                    <p className="mb-2">We:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Write your cold email copy
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Set up domain warming
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Personalize your outreach
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Automate follow-ups
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Book directly to your calendar
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    3
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Your Calendar Fills Up</h3>
                  <p className="text-gray-300 text-lg">
                    We track performance and optimize as we go — all you see are qualified prospects booking time with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-16">
              This Is Built for Founders Who:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1" />
                  <p className="text-lg text-gray-700">Don't have time to learn another outreach tool</p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1" />
                  <p className="text-lg text-gray-700">Don't want to spend hours writing copy or managing campaigns</p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1" />
                  <p className="text-lg text-gray-700">Need leads consistently, not randomly</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1" />
                  <p className="text-lg text-gray-700">Want predictable revenue without hiring a full sales team</p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1" />
                  <p className="text-lg text-gray-700">Prefer results over dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              What You Get
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Full email strategy and copy — tested and optimized",
                "Inbox + domain setup (yes, we warm your inbox too)",
                "Cold email and follow-up sequences automated",
                "Prospect targeting + scraping (if needed)",
                "Weekly monitoring + reporting",
                "Calendar booking integration",
                "100% done-for-you setup + maintenance"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Guarantee */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              10 Qualified Appointments in 60 Days — or You Don't Pay
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              We're confident in our system. If we don't book you at least 10 qualified calls in your first 60 days, you don't owe us a cent.
            </p>
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-16">
              Common Objections (And Why They Don't Apply Here)
            </h2>
            
            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4">"Cold email doesn't work anymore."</h3>
                  <p className="text-gray-700 text-lg">
                    → Most cold emails don't work because they're written and sent like spam. Ours are personalized, strategic, and optimized to convert.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4">"I don't have time to manage another system."</h3>
                  <p className="text-gray-700 text-lg">
                    → You don't need to. You drop a file into Google Drive once a month. That's it.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4">"I've tried other agencies — they were all fluff."</h3>
                  <p className="text-gray-700 text-lg">
                    → We don't sell fluff. We sell booked calls. And we back it up with a guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-black mb-4">"Will this damage my domain?"</h3>
                  <p className="text-gray-700 text-lg">
                    → Nope. We use properly warmed inboxes, monitor deliverability, and handle every technical detail behind the scenes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want a Lead Engine That Runs Itself?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop chasing. Start booking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/aarti-anand82" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4">
                  👉 Show Me the System
                </Button>
              </a>
              <a 
                href="https://cal.com/aarti-anand82" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
                  💬 Book a Free 15-Minute Discovery Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColdEmailAutomationOffer;
