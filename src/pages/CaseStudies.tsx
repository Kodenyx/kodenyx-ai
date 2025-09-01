
import { useState } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

const CaseStudies = () => {
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const { data: caseStudies, isLoading, error } = useCaseStudies(showFeaturedOnly);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <SimpleNavbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <SimpleNavbar />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Case Studies</h1>
            <p className="text-muted-foreground">Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've helped businesses transform their operations with AI automation. 
            Real results from real companies.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={!showFeaturedOnly ? "default" : "outline"}
              onClick={() => setShowFeaturedOnly(false)}
            >
              All Case Studies
            </Button>
            <Button
              variant={showFeaturedOnly ? "default" : "outline"}
              onClick={() => setShowFeaturedOnly(true)}
            >
              Featured Only
            </Button>
          </div>
        </div>

        {/* Case Studies Grid */}
        {caseStudies && caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No Case Studies Yet
            </h3>
            <p className="text-gray-600 mb-8">
              We're working on adding more success stories. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with AI automation.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
