import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#process" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          <a 
            href="https://cal.com/aarti-anand82" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Book A Call
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;