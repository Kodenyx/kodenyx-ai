
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SimpleNavbar = () => {
  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-0.5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Link to="/">
            <Logo size={80} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
