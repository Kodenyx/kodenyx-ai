import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, FileAudio, Youtube, Podcast } from "lucide-react";
import { Link } from "react-router-dom";

const mediaPosts = [
  {
    id: 1,
    title: "Systems Over Hustle: How To Transform B2B Operations with AI-Powered Automation",
    type: "blog",
    date: "April 28, 2025",
    description: "Aarti explains her unique ability to diagnose operational bottlenecks has helped clients add millions in revenue while reclaiming their time.",
    link: "https://www.thewantrepreneurshow.com/blog/systems-over-hustle-how-aarti-anand-transforms-b2b-operations-with-ai-powered-automation/",
    image: "/lovable-uploads/c331e81e-7bdf-4cc4-9b88-20cf7fb5a532.png"
  },
  {
    id: 2,
    title: "How AI Automation Can Save Your Business From Burnout",
    type: "blog",
    date: "April 15, 2025",
    description: "Aarti sits down with Rob and Dean and discuss how she helps business owners eliminate bottlenecks and reclaim their time through strategic automation.",
    link: "https://simplybefound.com/ai-automation-can-save-business-from-burnout/",
    image: "/lovable-uploads/10267656-0ccf-4c0c-a643-7f4a62e5cade.png"
  },
  {
    id: 3,
    title: "Aarti on Financial Freedom Podcast with Dr. Choo",
    type: "podcast",
    date: "March 30, 2025",
    description: "In this episode, Aarti breaks down exactly how founders and professionals can leverage it to reclaim time, boost productivity, and build businesses around the lives they truly want.",
    link: "https://podcasts.apple.com/us/podcast/ai-automation-mindset-shift-for-founders-aarti-anand/id1568423486?i=1000704279690",
    image: "/lovable-uploads/506cb0eb-6056-40ee-96c3-1ea7c661ab1a.png"
  },
  {
    id: 4,
    title: "How to Implement AI in Your Marketing Strategy",
    type: "youtube",
    date: "March 15, 2025",
    description: "Watch this comprehensive guide on implementing AI in your marketing strategy.",
    link: "https://www.youtube.com/watch?v=dwXucMUztDs",
    image: "/lovable-uploads/d7bcb9bb-a19e-4980-9157-2f0df5e68d2c.png"
  },
];

const getMediaIcon = (type: string) => {
  switch (type) {
    case "blog":
      return <FileText className="text-primary" />;
    case "podcast":
      return <Podcast className="text-primary" />;
    case "youtube":
      return <Youtube className="text-primary" />;
    default:
      return <FileAudio className="text-primary" />;
  }
};

const MediaFilterButton = ({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <Button
      variant={active ? "default" : "outline"}
      onClick={onClick}
      className={`${active ? "bg-primary text-white" : "border-primary text-primary hover:bg-primary/10"}`}
    >
      {children}
    </Button>
  );
};

const Media = () => {
  const [filter, setFilter] = React.useState<string>("all");
  
  const filteredPosts = React.useMemo(() => {
    if (filter === "all") return mediaPosts;
    return mediaPosts.filter(post => post.type === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      <div className="container mx-auto pt-24 pb-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Media Coverage</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of blogs, podcasts, and interviews featuring insights on AI-powered lead generation and business growth.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <MediaFilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </MediaFilterButton>
          <MediaFilterButton active={filter === "blog"} onClick={() => setFilter("blog")}>
            <FileText size={18} className="mr-2" />
            Blogs
          </MediaFilterButton>
          <MediaFilterButton active={filter === "podcast"} onClick={() => setFilter("podcast")}>
            <Podcast size={18} className="mr-2" />
            Podcasts
          </MediaFilterButton>
          <MediaFilterButton active={filter === "youtube"} onClick={() => setFilter("youtube")}>
            <Youtube size={18} className="mr-2" />
            Videos
          </MediaFilterButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{post.title}</CardTitle>
                  {getMediaIcon(post.type)}
                </div>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              {post.image && (
                <div className="px-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-contain rounded-md" 
                  />
                </div>
              )}
              <CardContent className={`${post.image ? 'pt-4' : ''} flex-grow`}>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    {post.type === "blog" ? "Read Article" : post.type === "podcast" ? "Listen Now" : "Watch Video"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">No media items found for this category.</p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Feature Kodenyx AI or Interview Aarti Anand?</h2>
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            If your audience is curious about AI, automation, or building scalable systems without burnout—let's collaborate. We love sharing actionable insights with podcasters, creators, and media platforms.
          </p>
          <a href="https://cal.com/aarti-anand/interview" target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Book a Guest Interview
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
