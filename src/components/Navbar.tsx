
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X, PhoneCall, List, Mail } from "lucide-react";
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
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo size={128} />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <List size={18} />
              FAQs
            </button>
            <a 
              href="/newsletter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Newsletter
            </a>
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
          <div className="md:hidden mt-4 flex flex-col gap-4 animate-fade-in">
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-gray-300 hover:text-white transition-colors py-2 text-left"
            >
              Features
            </button>
            <a 
              href="#process" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-gray-300 hover:text-white transition-colors py-2 flex items-center gap-2 w-full text-left"
            >
              <List size={18} />
              FAQs
            </button>
            <a 
              href="/newsletter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail size={18} />
              Newsletter
            </a>
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;

