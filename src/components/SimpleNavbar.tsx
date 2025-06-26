
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const SimpleNavbar = () => {
  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-2 max-h-[48px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo size={120} className="max-h-[32px] w-auto" />
          </Link>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              <Home className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
