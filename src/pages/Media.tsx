
import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, FileAudio, Youtube, Podcast } from "lucide-react";
import { Link } from "react-router-dom";

const mediaPosts = [
  {
    id: 1,
    title: "AI-Powered Lead Generation: The Ultimate Guide",
    type: "blog",
    date: "April 28, 2025",
    description: "Learn how AI is transforming lead generation for businesses of all sizes.",
    link: "https://example.com/blog/ai-powered-lead-generation"
  },
  {
    id: 2,
    title: "Automating Sales Processes with AI Tools",
    type: "blog",
    date: "April 15, 2025",
    description: "Discover the latest AI tools that can automate your sales processes.",
    link: "https://example.com/blog/automating-sales-processes"
  },
  {
    id: 3,
    title: "The Future of AI in Business Growth - Podcast Interview",
    type: "podcast",
    date: "March 30, 2025",
    description: "Listen to our CEO discuss the future of AI in business growth strategies.",
    link: "https://example.com/podcast/future-of-ai"
  },
  {
    id: 4,
    title: "How to Implement AI in Your Marketing Strategy",
    type: "youtube",
    date: "March 15, 2025",
    description: "Watch this comprehensive guide on implementing AI in your marketing strategy.",
    link: "https://example.com/youtube/ai-marketing-strategy"
  },
  {
    id: 5,
    title: "Scaling Your Business with AI Solutions",
    type: "podcast",
    date: "February 28, 2025",
    description: "Learn how AI solutions can help scale your business efficiently.",
    link: "https://example.com/podcast/scaling-with-ai"
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
          <h1 className="text-4xl font-bold mb-4">Media & Resources</h1>
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
              <CardContent className="flex-grow">
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
          <h2 className="text-2xl font-bold mb-4">Want to feature Kodenyx AI in your content?</h2>
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            We're always open to collaboration opportunities with podcasters, bloggers, and content creators.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Media;
