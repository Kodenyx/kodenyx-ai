
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X, PhoneCall, GraduationCap, Mail, Mic } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo size={140} />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/ai-first-ceo-podcast" 
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <Mic size={18} />
            AI-First CEO Podcast
          </Link>
          <button 
            onClick={() => handleNavClick('services')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Services
          </button>
          <Link to="/media" className="text-gray-300 hover:text-white transition-colors">
            Media
          </Link>
          {user && (
            <Button 
              onClick={handleLogout}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Sign Out
            </Button>
          )}
          <a 
            href="https://cal.com/aarti-anand82" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary-dark text-white">
              <PhoneCall className="mr-2" size={18} />
              Book A Call
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md z-50 py-4 animate-fade-in px-4">
          <div className="flex flex-col gap-4">
            <Link 
              to="/ai-first-ceo-podcast"
              className="text-gray-300 hover:text-white transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mic size={18} />
              AI-First CEO Podcast
            </Link>
            <button 
              onClick={() => {
                handleNavClick('services');
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-white transition-colors py-2 text-left"
            >
              Services
            </button>
            <Link 
              to="/media"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Media
            </Link>
            {user && (
              <Button 
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="bg-primary hover:bg-primary-dark text-white w-full"
              >
                Sign Out
              </Button>
            )}
            <a 
              href="https://cal.com/aarti-anand82" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-primary hover:bg-primary-dark text-white w-full">
                <PhoneCall className="mr-2" size={18} />
                Book A Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
