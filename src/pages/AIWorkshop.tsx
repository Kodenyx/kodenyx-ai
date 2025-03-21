
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Users, TrendingUp, DollarSign, Award, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const AIWorkshop = () => {
  const handleRegisterClick = () => {
    window.open("https://cal.com/aarti-anand82", "_blank");
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Header section */}
      <div className="pt-24 md:pt-28 bg-gradient-to-br from-secondary to-secondary/95 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              B2B AI <span className="text-primary">Automation Workshop</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how to transform your business operations and stay ahead of the competition
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8"
              onClick={handleRegisterClick}
            >
              Register for Workshop
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        {/* Workshop details section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-secondary/80 border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-primary" /> Workshop Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300">2 hours of intensive learning and practical insights</p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/80 border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-primary" /> Next Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300">Every Tuesday at 10:00 AM PST</p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/80 border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-primary" /> Ideal For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300">B2B business owners and decision makers</p>
            </CardContent>
          </Card>
        </div>

        {/* Why attend section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why You Need to Attend</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-secondary/50 p-8 rounded-lg border border-gray-700 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <TrendingUp className="text-primary h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Stay Competitive</h3>
                  <p className="text-gray-300">
                    Businesses that fail to adopt AI automation will fall behind competitors who leverage these technologies to reduce costs and improve efficiency.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-lg border border-gray-700 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <DollarSign className="text-primary h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cost Reduction</h3>
                  <p className="text-gray-300">
                    Learn how automated workflows can significantly reduce operational costs and improve your bottom line within months, not years.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-lg border border-gray-700 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Award className="text-primary h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Quality Improvement</h3>
                  <p className="text-gray-300">
                    Discover how AI can help deliver more consistent, high-quality outputs while freeing your team to focus on creative and strategic tasks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-lg border border-gray-700 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-destructive/20 p-3 rounded-full">
                  <AlertTriangle className="text-destructive h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cost of Inaction</h3>
                  <p className="text-gray-300">
                    The cost of not automating will prove increasingly expensive as competition adopts these technologies. Don't be left behind in the AI revolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What you'll learn section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What You'll Learn</h2>
          
          <div className="bg-secondary/30 p-8 md:p-12 rounded-xl border border-gray-700 shadow-xl">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Automation Fundamentals</h3>
                  <p className="text-gray-300">Understanding the basics of workflow automation and how AI enhances traditional automation processes.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Identifying Automation Opportunities</h3>
                  <p className="text-gray-300">Learn how to audit your business processes and identify high-impact areas for automation.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Implementation Strategies</h3>
                  <p className="text-gray-300">Step-by-step guidance on how to implement AI automation with minimal disruption to your existing operations.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ROI Calculation</h3>
                  <p className="text-gray-300">Tools and frameworks to accurately measure the return on your automation investments.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our workshop and start your journey towards efficient, cost-effective business operations through AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8"
              onClick={handleRegisterClick}
            >
              Register Now
            </Button>
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10 text-lg px-8"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkshop;
