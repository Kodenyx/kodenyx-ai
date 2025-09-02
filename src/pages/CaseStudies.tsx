
import { useCaseStudies } from "@/hooks/useCaseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { AddCaseStudyForm } from "@/components/AddCaseStudyForm";
import { CaseStudyManager } from "@/components/CaseStudyManager";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const CaseStudies = () => {
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showManager, setShowManager] = useState(false);
  const { data: caseStudies, isLoading, error } = useCaseStudies(showFeaturedOnly);

  const isAdmin = window.location.search.includes('admin=true');
  const isDebug = window.location.search.includes('debug=true');

  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleNavbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Client Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Real results from real businesses that have transformed their operations with AI automation
              </p>
            </div>
          </div>
        </section>

        {/* Admin Tools */}
        {isAdmin && (
          <section className="py-8 bg-gray-100 border-b">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-4 flex-wrap mb-6">
                <Badge
                  variant={showManager ? "default" : "outline"}
                  className="cursor-pointer px-6 py-2 text-sm font-medium transition-colors"
                  onClick={() => setShowManager(!showManager)}
                >
                  {showManager ? 'Hide' : 'Show'} Case Study Manager
                </Badge>
                <Badge
                  variant={showAddForm ? "default" : "outline"}
                  className="cursor-pointer px-6 py-2 text-sm font-medium transition-colors"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  {showAddForm ? 'Hide' : 'Show'} Add Form
                </Badge>
              </div>
              
              {showManager && <CaseStudyManager />}
              {showAddForm && <AddCaseStudyForm />}
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge
                variant={!showFeaturedOnly ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm font-medium transition-colors ${
                  !showFeaturedOnly 
                    ? "bg-[#9b87f5] text-white border-[#9b87f5]" 
                    : "border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white bg-white"
                }`}
                onClick={() => setShowFeaturedOnly(false)}
              >
                All Case Studies
              </Badge>
              <Badge
                variant={showFeaturedOnly ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm font-medium transition-colors ${
                  showFeaturedOnly 
                    ? "bg-[#9b87f5] text-white border-[#9b87f5]" 
                    : "border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white bg-white"
                }`}
                onClick={() => setShowFeaturedOnly(true)}
              >
                Featured Case Studies
              </Badge>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#9b87f5]" />
                <span className="ml-2 text-gray-900">Loading case studies...</span>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-gray-700 text-lg">
                  Unable to load case studies at this time.
                </p>
              </div>
            ) : !caseStudies || caseStudies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-700 text-lg mb-4">
                  {showFeaturedOnly 
                    ? "No featured case studies available yet." 
                    : "No case studies available yet."
                  }
                </p>
                <p className="text-gray-600">
                  Check back soon for inspiring client success stories.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join these successful businesses and discover how AI automation can transform your operations and free up your time for what matters most.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;
