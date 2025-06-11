
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Users, BookOpen, Code, Lightbulb, Calendar, Trophy, Star } from "lucide-react";

const AIForYouth = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Hands-on workshops and practical AI projects designed for young minds"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Coding Skills",
      description: "Learn programming fundamentals and AI development tools"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Projects",
      description: "Create real-world AI solutions for community problems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship",
      description: "One-on-one guidance from AI industry professionals"
    }
  ];

  const programs = [
    {
      title: "AI Foundations",
      age: "Ages 12-15",
      duration: "8 weeks",
      description: "Introduction to AI concepts, basic programming, and fun AI projects",
      level: "Beginner"
    },
    {
      title: "AI Innovators",
      age: "Ages 16-18",
      duration: "12 weeks",
      description: "Advanced AI development, machine learning, and startup project development",
      level: "Advanced"
    },
    {
      title: "Summer AI Camp",
      age: "Ages 13-17",
      duration: "4 weeks",
      description: "Intensive summer program combining AI learning with real project development",
      level: "All Levels"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      age: 16,
      quote: "This program opened my eyes to the endless possibilities of AI. I built my first chatbot and now I'm considering AI engineering for college!",
      project: "Built a study assistant chatbot"
    },
    {
      name: "Marcus Johnson",
      age: 14,
      quote: "The mentors were amazing and made complex AI concepts easy to understand. I learned more in 8 weeks than I thought possible.",
      project: "Created an image recognition app"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            AI for Youth Program
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Empowering the Next Generation of
            <span className="text-primary block">AI Innovators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our comprehensive AI education program designed specifically for young minds. 
            Learn, create, and innovate with artificial intelligence while building real-world projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              <Calendar className="mr-2 w-5 h-5" />
              Enroll Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={program.level === "Beginner" ? "secondary" : program.level === "Advanced" ? "default" : "outline"}>
                      {program.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{program.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{program.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}, {testimonial.age}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    <Trophy className="w-3 h-3 mr-1" />
                    {testimonial.project}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of young innovators who are already building the future with AI. 
            Limited spots available for our next cohort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              <Calendar className="mr-2 w-5 h-5" />
              Apply Now
            </Button>
            <Button size="lg" variant="outline">
              Schedule Info Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIForYouth;
