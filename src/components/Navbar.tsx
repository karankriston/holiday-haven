import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+91 7639919694";
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "hero" } });
    } else {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="OotyEscapes Logo" className="w-7 h-7 object-contain" />
            <span className="text-xl font-serif font-bold text-foreground">
              Ooty<span className="text-primary">Escapes</span>
            </span>
          </Link>

          {/* Desktop menu - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a 
              href="/" 
              onClick={handleHomeClick}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#categories" 
              onClick={(e) => handleNavClick(e, "categories")}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Categories
            </a>
            <a 
              href="#long-trips" 
              onClick={(e) => handleNavClick(e, "long-trips")}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Long Trips
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, "reviews")}
              className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Reviews
            </a>
          </div>

          {/* Phone Button - Right */}
          <div className="hidden md:block">
            <a href="tel:+917639919694">
              <Button variant="default" size="lg" className="flex items-center gap-2 rounded-sm px-5 py-2.5">
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
              <a 
                href="/" 
                onClick={handleHomeClick}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#categories" 
                onClick={(e) => handleNavClick(e, "categories")}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
              >
                Categories
              </a>
              <a 
                href="#long-trips" 
                onClick={(e) => handleNavClick(e, "long-trips")}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
              >
                Long Trips
              </a>
              <a 
                href="#reviews" 
                onClick={(e) => handleNavClick(e, "reviews")}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
              >
                Reviews
              </a>
              <a href="tel:+917639919694">
                <Button variant="default" className="w-full flex items-center gap-2 rounded-sm">
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
