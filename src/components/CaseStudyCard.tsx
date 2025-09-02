
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CaseStudy } from "@/hooks/useCaseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  const handleViewPresentation = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (caseStudy.gamma_url) {
      window.open(caseStudy.gamma_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      {caseStudy.image_url && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={caseStudy.image_url}
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {caseStudy.featured && (
            <Badge className="absolute top-4 left-4" variant="default">
              Featured
            </Badge>
          )}
          {caseStudy.gamma_url && (
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleViewPresentation}
                className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          {caseStudy.client_logo_url && (
            <img
              src={caseStudy.client_logo_url}
              alt={`${caseStudy.client_name} logo`}
              className="h-8 w-auto"
            />
          )}
          {caseStudy.industry && (
            <Badge variant="outline">{caseStudy.industry}</Badge>
          )}
        </div>
        <CardTitle className="text-xl group-hover:text-[#9b87f5] transition-colors">
          {caseStudy.title}
        </CardTitle>
        {caseStudy.client_name && (
          <p className="text-sm text-muted-foreground font-medium">
            {caseStudy.client_name}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {caseStudy.metrics && (
          <div className="grid grid-cols-2 gap-2 pt-4 border-t">
            {Object.entries(caseStudy.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="font-bold text-lg text-primary">{String(value)}</div>
                <div className="text-xs text-muted-foreground capitalize">
                  {key.replace('_', ' ')}
                </div>
              </div>
            ))}
          </div>
        )}

        {caseStudy.tags && caseStudy.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {caseStudy.testimonial_quote && (
          <div className="bg-muted p-4 rounded-lg mt-4">
            <blockquote className="text-sm italic mb-2">
              "{caseStudy.testimonial_quote}"
            </blockquote>
            {caseStudy.testimonial_author && (
              <cite className="text-xs text-muted-foreground">
                - {caseStudy.testimonial_author}
                {caseStudy.testimonial_role && `, ${caseStudy.testimonial_role}`}
              </cite>
            )}
          </div>
        )}

        {caseStudy.gamma_url && (
          <div className="pt-4 border-t">
            <Button 
              onClick={handleViewPresentation}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold"
            >
              View Full Presentation
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
