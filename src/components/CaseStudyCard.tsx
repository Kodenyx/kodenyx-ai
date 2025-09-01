
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Building2, Clock } from 'lucide-react';
import { CaseStudy } from '@/hooks/useCaseStudies';
import { LeadCaptureModal } from './LeadCaptureModal';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const handleDownloadClick = () => {
    setShowLeadCapture(true);
  };

  const handleDownloadSuccess = (downloadUrl: string) => {
    // In a real implementation, this would trigger the actual download
    window.open(downloadUrl, '_blank');
  };

  return (
    <>
      <Card className="h-full flex flex-col">
        {caseStudy.image_url && (
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <img 
              src={caseStudy.image_url} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <CardHeader className="flex-none">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg line-clamp-2">{caseStudy.title}</h3>
            {caseStudy.featured && (
              <Badge variant="secondary" className="shrink-0">Featured</Badge>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span>{caseStudy.industry || 'Various'}</span>
            </div>
            {caseStudy.project_duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{caseStudy.project_duration}</span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm mb-1">Challenge:</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Results:</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {caseStudy.results}
              </p>
            </div>

            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {caseStudy.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {caseStudy.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{caseStudy.tags.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button 
            onClick={handleDownloadClick} 
            className="w-full"
            variant="default"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Case Study
          </Button>
        </CardFooter>
      </Card>

      <LeadCaptureModal
        isOpen={showLeadCapture}
        onClose={() => setShowLeadCapture(false)}
        caseStudyTitle={caseStudy.title}
        caseStudyId={caseStudy.id}
        onSuccess={handleDownloadSuccess}
      />
    </>
  );
};
