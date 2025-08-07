
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNavbar />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D3E4FD]">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold mb-6 text-[#9b87f5]">404</h1>
          <p className="text-xl text-gray-700 mb-8">The page you're looking for could not be found.</p>
          <p className="text-gray-600 mb-8">
            This could happen if you clicked an old link or if the page has been moved or renamed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold w-full sm:w-auto">
                Return to Home
              </Button>
            </Link>
            <Link to="/newsletter">
              <Button variant="outline" className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white font-semibold w-full sm:w-auto">
                Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
