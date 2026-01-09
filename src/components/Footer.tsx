import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-serif font-bold">
                Wanderlust <span className="text-primary">Holidays</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for unforgettable travel experiences across India. 
              Creating memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/#categories" className="text-primary-foreground/70 hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link to="/#long-trips" className="text-primary-foreground/70 hover:text-primary transition-colors">Long Trips</Link></li>
              <li><Link to="/#reviews" className="text-primary-foreground/70 hover:text-primary transition-colors">Reviews</Link></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Popular Tours</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Ooty Delight</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Kerala Backwaters</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Ladakh Expedition</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Royal Rajasthan</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors">Andaman Paradise</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  123 Travel Lane, T. Nagar,<br />Chennai, Tamil Nadu 600017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@wanderlust.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  info@wanderlust.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Wanderlust Holidays. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
