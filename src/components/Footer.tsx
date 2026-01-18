import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const phoneNumber = "918667820589";
  const whatsappMessage = encodeURIComponent("Hi Raghul, Your packages look interesting—I'm excited to know more about them.");

  return (
    <footer id="footer" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="OotyEscapes Logo" className="w-7 h-7 object-contain" />
              <span className="text-xl font-serif font-bold">
                Ooty<span className="text-primary">Escapes</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for unforgettable travel experiences in the Nilgiris. 
              Creating memories that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a 
                href={`tel:+${phoneNumber}`}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/category/hill-stations" className="text-primary-foreground/70 hover:text-primary transition-colors">Ooty Tour Packages</Link></li>
              <li><Link to="/long-trips" className="text-primary-foreground/70 hover:text-primary transition-colors">Long Trips</Link></li>
              <li><Link to="/category/pilgrimage" className="text-primary-foreground/70 hover:text-primary transition-colors">Honeymoon Packages</Link></li>
              <li><Link to="/category/adventure" className="text-primary-foreground/70 hover:text-primary transition-colors">Treks & Adventures</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Popular Tours</h3>
            <ul className="space-y-3">
              <li><Link to="/category/hill-stations/tour/ooty-delight" state={{ fromFooter: true }} className="text-primary-foreground/70 hover:text-primary transition-colors">Ooty Delight Tour</Link></li>
              <li><Link to="/category/wildlife" state={{ fromFooter: true }} className="text-primary-foreground/70 hover:text-primary transition-colors">Toy Train Ride</Link></li>
              <li><Link to="/category/pilgrimage/tour/char-dham" state={{ fromFooter: true }} className="text-primary-foreground/70 hover:text-primary transition-colors">Honeymoon Package</Link></li>
              <li><Link to="/category/hill-stations/tour/kodaikanal-escape" state={{ fromFooter: true }} className="text-primary-foreground/70 hover:text-primary transition-colors">Coonoor Experience</Link></li>
              <li><Link to="/category/hill-stations/tour/munnar-magic" state={{ fromFooter: true }} className="text-primary-foreground/70 hover:text-primary transition-colors">Pykara Adventure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Ooty, Nilgiris District,<br />Tamil Nadu 643001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:+${phoneNumber}`} className="text-primary-foreground/70 hover:text-primary transition-colors">
                  +91 86678 20589
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a 
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:ootyescapes@gmail.com" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  ootyescapes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 OotyEscapes. All rights reserved. Crafted with love for travelers.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" state={{ fromFooter: true }} className="text-primary-foreground/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" state={{ fromFooter: true }} className="text-primary-foreground/50 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Brand Bottom Bar */}
      <div className="bg-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <img src={logoImg} alt="OotyEscapes Logo" className="w-6 h-6 object-contain" />
          <span className="font-serif font-bold text-lg tracking-wide">
            <span className="text-foreground">Ooty</span>
            <span className="text-primary">Escapes</span>
          </span>
          <img src={logoImg} alt="OotyEscapes Logo" className="w-6 h-6 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
