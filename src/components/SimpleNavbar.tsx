
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SimpleNavbar = () => {
  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center">
            <Logo size={60} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
