
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SimpleNavbar = () => {
  const { toast } = useToast();
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    linkedinProfile: ""
  });

  const handleGuestApplicationClick = () => {
    setShowGuestForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting guest application:', formData);

      const { data, error } = await supabase.functions.invoke('submit-podcast-guest', {
        body: {
          email: formData.email,
          linkedinProfile: formData.linkedinProfile
        }
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest! We'll be in touch soon.",
      });

      setFormData({ email: "", linkedinProfile: "" });
      setShowGuestForm(false);
    } catch (error: any) {
      console.error('Error submitting guest application:', error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
              Apply to be a guest
            </Button>
          </div>
        </div>
      </nav>

      {/* Guest Application Modal/Form */}
      {showGuestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Apply to be a Guest</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="border-gray-300"
                />
              </div>
              
              <div>
                <Label htmlFor="linkedinProfile" className="text-gray-700">LinkedIn Profile</Label>
                <Input
                  id="linkedinProfile"
                  type="url"
                  value={formData.linkedinProfile}
                  onChange={(e) => setFormData(prev => ({ ...prev, linkedinProfile: e.target.value }))}
                  className="border-gray-300"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowGuestForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary-dark text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleNavbar;
