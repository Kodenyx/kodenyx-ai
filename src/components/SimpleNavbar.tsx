
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const SimpleNavbar = () => {
  const handleGuestApplicationClick = () => {
    // Scroll to the guest application section
    const guestSection = document.querySelector('#guest-application');
    if (guestSection) {
      guestSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo size={140} />
          </Link>
          <Button 
            onClick={handleGuestApplicationClick}
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <Home className="mr-2" size={18} />
            Apply to be a guest
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
