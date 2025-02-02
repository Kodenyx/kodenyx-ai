import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-secondary">Navika</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
          <a href="#process" className="text-secondary hover:text-primary transition-colors">How it Works</a>
          <a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Testimonials</a>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;