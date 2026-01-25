import { useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";

// Import gallery images
import ootyDelight1 from "@/assets/gallery/ooty-delight-1.jpg";
import ootyDelight2 from "@/assets/gallery/ooty-delight-2.jpg";
import ootyDelight3 from "@/assets/gallery/ooty-delight-3.jpg";
import ootyDelight4 from "@/assets/gallery/ooty-delight-4.jpg";
import coonoor1 from "@/assets/gallery/coonoor-1.jpg";
import coonoor2 from "@/assets/gallery/coonoor-2.jpg";
import coonoor3 from "@/assets/gallery/coonoor-3.jpg";
import coonoor4 from "@/assets/gallery/coonoor-4.jpg";
import pykara1 from "@/assets/gallery/pykara-1.jpg";
import pykara2 from "@/assets/gallery/pykara-2.jpg";
import pykara3 from "@/assets/gallery/pykara-3.jpg";
import pykara4 from "@/assets/gallery/pykara-4.jpg";
import kodanadu1 from "@/assets/gallery/kodanadu-1.jpg";
import kodanadu2 from "@/assets/gallery/kodanadu-2.jpg";
import kodanadu3 from "@/assets/gallery/kodanadu-3.jpg";
import kodanadu4 from "@/assets/gallery/kodanadu-4.jpg";
import kerala1 from "@/assets/gallery/kerala-backwaters-1.jpg";
import kerala2 from "@/assets/gallery/kerala-backwaters-2.jpg";
import kerala3 from "@/assets/gallery/kerala-backwaters-3.jpg";
import kerala4 from "@/assets/gallery/kerala-backwaters-4.jpg";
import temple1 from "@/assets/gallery/tamil-temple-1.jpg";
import temple2 from "@/assets/gallery/tamil-temple-2.jpg";
import temple3 from "@/assets/gallery/tamil-temple-3.jpg";
import temple4 from "@/assets/gallery/tamil-temple-4.jpg";
import karnataka1 from "@/assets/gallery/karnataka-new-1.jpg";
import karnataka2 from "@/assets/gallery/karnataka-new-2.jpg";
import karnataka3 from "@/assets/gallery/karnataka-new-3.jpg";
import karnataka4 from "@/assets/gallery/karnataka-new-4.jpg";
import andhra1 from "@/assets/gallery/andhra-new-1.jpg";
import andhra2 from "@/assets/gallery/andhra-new-2.jpg";
import andhra3 from "@/assets/gallery/andhra-new-3.jpg";
import andhra4 from "@/assets/gallery/andhra-new-4.jpg";
import keralaCoastal1 from "@/assets/gallery/kerala-coastal-1.jpg";
import keralaCoastal2 from "@/assets/gallery/kerala-coastal-2.jpg";
import keralaCoastal3 from "@/assets/gallery/kerala-coastal-3.jpg";
import keralaCoastal4 from "@/assets/gallery/kerala-coastal-4.jpg";
import southIndia1 from "@/assets/gallery/south-complete-1.jpg";
import southIndia2 from "@/assets/gallery/south-complete-2.jpg";
import southIndia3 from "@/assets/gallery/south-complete-3.jpg";
import southIndia4 from "@/assets/gallery/south-complete-4.jpg";
import trekDoddabetta1 from "@/assets/gallery/trek-doddabetta-1.jpg";
import trekDoddabetta2 from "@/assets/gallery/trek-doddabetta-2.jpg";
import trekDoddabetta3 from "@/assets/gallery/trek-doddabetta-3.jpg";
import trekDoddabetta4 from "@/assets/gallery/trek-doddabetta-4.jpg";
import trekMukurthi1 from "@/assets/gallery/trek-mukurthi-1.jpg";
import trekMukurthi2 from "@/assets/gallery/trek-mukurthi-2.jpg";
import trekMukurthi3 from "@/assets/gallery/trek-mukurthi-3.jpg";
import trekMukurthi4 from "@/assets/gallery/trek-mukurthi-4.jpg";
import trekAvalanche1 from "@/assets/gallery/trek-avalanche-1.jpg";
import trekAvalanche2 from "@/assets/gallery/trek-avalanche-2.jpg";
import trekAvalanche3 from "@/assets/gallery/trek-avalanche-3.jpg";
import trekAvalanche4 from "@/assets/gallery/trek-avalanche-4.jpg";
import birdwatch1 from "@/assets/gallery/birdwatch-1.jpg";
import birdwatch2 from "@/assets/gallery/birdwatch-2.jpg";
import birdwatch3 from "@/assets/gallery/birdwatch-3.jpg";
import birdwatch4 from "@/assets/gallery/birdwatch-4.jpg";

import bannerHillstations from "@/assets/banner-hillstations.jpg";
import bannerPickup from "@/assets/banner-pickup.jpg";
import bannerSouth from "@/assets/banner-south.jpg";
import bannerToytrain from "@/assets/banner-toytrain.jpg";
import bannerAdventure from "@/assets/banner-adventure.jpg";
import bannerHoneymoon from "@/assets/banner-honeymoon.jpg";

// Package-specific banners for Ooty tours
import bannerOotyDelight from "@/assets/banner-ooty-delight.jpg";
import bannerCoonoor from "@/assets/banner-coonoor.jpg";
import bannerPykara from "@/assets/banner-pykara.jpg";
import bannerAvalanche from "@/assets/banner-avalanche.jpg";
import bannerKodanadu from "@/assets/banner-kodanadu.jpg";
import bannerBirdwatch from "@/assets/banner-birdwatch.jpg";

// Package-specific banners for South Serenity tours
import bannerKeralaBackwaters from "@/assets/banner-kerala-backwaters.jpg";
import bannerTamilTemple from "@/assets/banner-tamil-temple.jpg";
import bannerKarnatakaHeritage from "@/assets/banner-karnataka-heritage.jpg";
import bannerAndhraSpiritualBanner from "@/assets/banner-andhra-spiritual.jpg";
import bannerKeralaCoastal from "@/assets/banner-kerala-coastal.jpg";
import bannerSouthComplete from "@/assets/banner-south-complete.jpg";

// Honeymoon gallery images
import honeymoonOoty1 from "@/assets/gallery/honeymoon-ooty-1.jpg";
import honeymoonOoty2 from "@/assets/gallery/honeymoon-ooty-2.jpg";
import honeymoonOoty3 from "@/assets/gallery/honeymoon-ooty-3.jpg";
import honeymoonOoty4 from "@/assets/gallery/honeymoon-ooty-4.jpg";
import honeymoonCoorg1 from "@/assets/gallery/honeymoon-coorg-1.jpg";
import honeymoonCoorg2 from "@/assets/gallery/honeymoon-coorg-2.jpg";
import honeymoonCoorg3 from "@/assets/gallery/honeymoon-coorg-3.jpg";
import honeymoonCoorg4 from "@/assets/gallery/honeymoon-coorg-4.jpg";
import honeymoonKerala1 from "@/assets/gallery/honeymoon-kerala-1.jpg";
import honeymoonKerala2 from "@/assets/gallery/honeymoon-kerala-2.jpg";
import honeymoonKerala3 from "@/assets/gallery/honeymoon-kerala-3.jpg";
import honeymoonKerala4 from "@/assets/gallery/honeymoon-kerala-4.jpg";
import honeymoonSouth1 from "@/assets/gallery/honeymoon-south-1.jpg";
import honeymoonSouth2 from "@/assets/gallery/honeymoon-south-2.jpg";
import honeymoonSouth3 from "@/assets/gallery/honeymoon-south-3.jpg";
import honeymoonSouth4 from "@/assets/gallery/honeymoon-south-4.jpg";
import honeymoonBudget1 from "@/assets/gallery/honeymoon-budget-1.jpg";
import honeymoonBudget2 from "@/assets/gallery/honeymoon-budget-2.jpg";
import honeymoonBudget3 from "@/assets/gallery/honeymoon-budget-3.jpg";
import honeymoonBudget4 from "@/assets/gallery/honeymoon-budget-4.jpg";

// Gallery images mapping - 4 images per package
const packageGallery: Record<string, string[]> = {
  // Ooty Tour Packages
  "ooty": [ootyDelight1, ootyDelight2, ootyDelight3, ootyDelight4],
  "coonoor": [coonoor1, coonoor2, coonoor3, coonoor4],
  "pykara": [pykara1, pykara2, pykara3, pykara4],
  "avalanche": [trekAvalanche1, trekAvalanche2, trekAvalanche3, trekAvalanche4],
  "kodanadu": [kodanadu1, kodanadu2, kodanadu3, kodanadu4],
  "birdwatch-virgin-earth-ooty": [birdwatch1, birdwatch2, birdwatch3, birdwatch4],
  // Pickup & Drop - reuse scenic images
  "goa-carnival": [ootyDelight1, coonoor1, pykara1, kodanadu1],
  "andaman-paradise": [coonoor1, ootyDelight1, pykara1, kodanadu1],
  "kerala-backwaters": [kerala1, kerala2, kerala3, kerala4],
  // South Serenity Tours
  "kerala-backwaters-bliss": [kerala1, kerala2, kerala3, kerala4],
  "tamil-nadu-temple-trail": [temple1, temple2, temple3, temple4],
  "karnataka-heritage": [karnataka1, karnataka2, karnataka3, karnataka4],
  "andhra-spiritual-journey": [andhra1, andhra2, andhra3, andhra4],
  "kerala-coastal-paradise": [keralaCoastal1, keralaCoastal2, keralaCoastal3, keralaCoastal4],
  "south-temple": [southIndia1, southIndia2, southIndia3, southIndia4],
  // Adventure
  "ladakh-expedition": [trekDoddabetta1, trekDoddabetta2, trekDoddabetta3, trekDoddabetta4],
  "rishikesh-thrill": [trekMukurthi1, trekMukurthi2, trekMukurthi3, trekMukurthi4],
  "spiti-valley": [trekAvalanche1, trekAvalanche2, trekAvalanche3, trekAvalanche4],
  // Honeymoon
  "ooty-honeymoon-package": [honeymoonOoty1, honeymoonOoty2, honeymoonOoty3, honeymoonOoty4],
  "coorg-ooty-trips": [honeymoonCoorg1, honeymoonCoorg2, honeymoonCoorg3, honeymoonCoorg4],
  "kerala-honeymoon-trips": [honeymoonKerala1, honeymoonKerala2, honeymoonKerala3, honeymoonKerala4],
  "south-india-tour": [honeymoonSouth1, honeymoonSouth2, honeymoonSouth3, honeymoonSouth4],
  "budget-honeymoon-package": [honeymoonBudget1, honeymoonBudget2, honeymoonBudget3, honeymoonBudget4],
};

const categoryBanners: Record<string, string> = {
  "ooty-tour-packages": bannerHillstations,
  "ooty-cabs-pick-up-drop": bannerPickup,
  "south-serenity-tours": bannerSouth,
  "ooty-toy-train-ride": bannerToytrain,
  "hotels": bannerAdventure,
  "honeymoon-packages": bannerHoneymoon,
};

// Package-specific banners (override category banners)
const packageBanners: Record<string, string> = {
  // Ooty Tour Packages
  "ooty": bannerOotyDelight,
  "coonoor": bannerCoonoor,
  "pykara": bannerPykara,
  "avalanche": bannerAvalanche,
  "kodanadu": bannerKodanadu,
  "birdwatch-virgin-earth-ooty": bannerBirdwatch,
  // South Serenity Tours
  "kerala-backwaters-bliss": bannerKeralaBackwaters,
  "tamil-nadu-temple-trail": bannerTamilTemple,
  "karnataka-heritage": bannerKarnatakaHeritage,
  "andhra-spiritual-journey": bannerAndhraSpiritualBanner,
  "kerala-coastal-paradise": bannerKeralaCoastal,
  "south-temple": bannerSouthComplete,
};

const TourDetailPage = () => {
  const { categoryId, packageId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const category = categories.find((c) => c.id === categoryId);
  const pkg = category?.packages.find((p) => p.id === packageId);
  const phoneNumber = "917639919694";
  const whatsappMessage = encodeURIComponent(`Hi Raghul, I'm interested in the ${pkg?.name || 'tour package'}. Please share more details.`);

  useEffect(() => {
    // Only scroll to top if not coming back from somewhere
    if (!location.state?.fromPackage) {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  if (!category || !pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour package not found</h1>
          <Link to="/"><Button>Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const galleryImages = packageGallery[pkg.id] || [bannerHillstations, bannerPickup, bannerSouth, bannerAdventure];
  // Use package-specific banner if available, otherwise fall back to category banner
  const bannerImage = packageBanners[pkg.id] || categoryBanners[category.id] || bannerHillstations;

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img src={bannerImage} alt={pkg.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          {pkg.price && (
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-lg font-bold mb-4">
              {pkg.price}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-3">{pkg.name}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">{pkg.description}</p>
          {pkg.duration && <p className="text-primary-foreground/80 mt-2">Duration: {pkg.duration}</p>}
        </div>
      </section>

      {/* Gallery Section - 4 images side by side */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            Tour <span className="text-gradient-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            ✨ These images are thoughtfully crafted using AI, inspired by the real beauty of each destination.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl group">
                <img 
                  src={img} 
                  alt={`${pkg.name} gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places Covered Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
            Places <span className="text-gradient-primary">Covered</span>
          </h2>
          <div className="bg-card rounded-2xl p-6 border border-border">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {pkg.locationsList.map((location, idx) => (
                <li key={idx} className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm md:text-base">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Ready to Book This Tour?
              </h3>
              <p className="text-muted-foreground">Contact us now to reserve your spot and start your adventure</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <a href={`tel:+${phoneNumber}`} className="flex-1">
                <Button size="xl" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="xl" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg py-6">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetailPage;