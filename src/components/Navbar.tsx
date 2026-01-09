import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Chennai, Tamil Nadu
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span className="text-xl font-serif font-bold text-foreground">
              Wanderlust <span className="text-primary">Holidays</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/#categories" className="text-foreground hover:text-primary transition-colors font-medium">
              Destinations
            </Link>
            <Link to="/#long-trips" className="text-foreground hover:text-primary transition-colors font-medium">
              Long Trips
            </Link>
            <Link to="/#reviews" className="text-foreground hover:text-primary transition-colors font-medium">
              Reviews
            </Link>
            <Button variant="default" size="default">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/#categories" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Destinations
              </Link>
              <Link to="/#long-trips" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Long Trips
              </Link>
              <Link to="/#reviews" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Reviews
              </Link>
              <Button variant="default" className="w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
