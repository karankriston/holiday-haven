import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+918667820589";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Main navbar */}
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                <circle cx="12" cy="8" r="2" fill="currentColor" />
                <path d="M8 14l4-4 4 4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-serif font-bold text-foreground">
              Ooty<span className="text-primary">Escapes</span>
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
            <a href={`tel:${phoneNumber}`}>
              <Button variant="default" size="default" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </Button>
            </a>
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
              <a href={`tel:${phoneNumber}`}>
                <Button variant="default" className="w-full flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {phoneNumber}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
