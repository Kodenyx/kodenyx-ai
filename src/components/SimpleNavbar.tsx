
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const SimpleNavbar = () => {
  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <Button variant="outline" className="text-gray-300 hover:text-white border-gray-700 hover:border-white">
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
