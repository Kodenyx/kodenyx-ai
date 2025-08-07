
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const SimpleNavbar = () => {
  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo size={140} />
          </Link>
          <a 
            href="https://cal.com/aarti-anand82"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg" className="bg-primary text-white hover:bg-primary-dark font-semibold">
              Book A Call
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
