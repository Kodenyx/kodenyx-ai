
import { useState } from 'react';
import { SimpleNavbar } from '@/components/SimpleNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { useCaseStudies } from '@/hooks/useCaseStudies';
import { CaseStudyCard } from '@/components/CaseStudyCard';

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useCaseStudies();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Get unique industries for filter
  const industries = caseStudies
    ? Array.from(new Set(caseStudies.map(cs => cs.industry).filter(Boolean)))
    : [];

  // Filter case studies
  const filteredCaseStudies = caseStudies?.filter(caseStudy => {
    const matchesSearch = searchTerm === '' || 
      caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseStudy.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseStudy.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || 
      caseStudy.industry === selectedIndustry;
    
    const matchesFeatured = !showFeaturedOnly || caseStudy.featured;

    return matchesSearch && matchesIndustry && matchesFeatured;
  }) || [];

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results From Real Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses like yours automate processes, 
            increase efficiency, and drive growth through AI and automation solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map(industry => (
                <SelectItem key={industry} value={industry!}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant={showFeaturedOnly ? "default" : "outline"}
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className="w-full md:w-auto"
          >
            Featured Only
          </Button>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            {isLoading ? 'Loading...' : `${filteredCaseStudies.length} case studies found`}
          </p>
          
          {/* Active filters */}
          <div className="flex gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm('')} className="ml-1 text-xs">×</button>
              </Badge>
            )}
            {selectedIndustry !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                {selectedIndustry}
                <button onClick={() => setSelectedIndustry('all')} className="ml-1 text-xs">×</button>
              </Badge>
            )}
            {showFeaturedOnly && (
              <Badge variant="secondary" className="gap-1">
                Featured
                <button onClick={() => setShowFeaturedOnly(false)} className="ml-1 text-xs">×</button>
              </Badge>
            )}
          </div>
        </div>

        {/* Case Studies Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-muted animate-pulse rounded-lg h-96" />
            ))}
          </div>
        ) : filteredCaseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map(caseStudy => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No case studies found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setShowFeaturedOnly(false);
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-muted/50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how AI and automation can revolutionize your operations. 
            Let's discuss your specific challenges and create a custom solution.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Start Your Transformation</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
