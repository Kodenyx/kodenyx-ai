import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

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

  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#process" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          {user ? (
            <Button 
              onClick={handleLogout}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Sign Out
            </Button>
          ) : (
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Sign In
            </Button>
          )}
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