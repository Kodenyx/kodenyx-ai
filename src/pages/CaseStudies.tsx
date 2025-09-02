
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import { Loader2 } from "lucide-react";
import { UpdateCaseStudyImage } from "@/components/UpdateCaseStudyImage";
import { SeedCaseStudy } from "@/components/SeedCaseStudy";

const CaseStudies = () => {
  const { data: caseStudies, isLoading, error } = useCaseStudies();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    console.error('Error loading case studies:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load case studies</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with AI automation
          </p>
        </div>

        {/* Admin tools */}
        <div className="mb-8 flex justify-center gap-4">
          <UpdateCaseStudyImage />
          <SeedCaseStudy />
        </div>

        {caseStudies && caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No case studies available yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
