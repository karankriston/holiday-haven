import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";

// Import all package images for the gallery
import ootyImg from "@/assets/ooty.jpg";
import coonoorImg from "@/assets/coonoor.jpg";
import pykaraImg from "@/assets/pykara.jpg";
import avalancheImg from "@/assets/avalanche.jpg";
import kodanadImg from "@/assets/kodanadu.jpg";
import airportPickupImg from "@/assets/airport-pickup.jpg";
import railwayTransferImg from "@/assets/railway-transfer.jpg";
import roundTripImg from "@/assets/round-trip.jpg";
import localSightseeingImg from "@/assets/local-sightseeing.jpg";
import multiDayPackageImg from "@/assets/multi-day-package.jpg";
import keralaBackwatersImg from "@/assets/kerala-backwaters.jpg";
import templeTrailImg from "@/assets/temple-trail.jpg";
import karnatakaHeritageImg from "@/assets/karnataka-heritage.jpg";
import andhraSpiritualImg from "@/assets/andhra-spiritual.jpg";
import southIndiaCompleteImg from "@/assets/south-india-complete.jpg";
import doddabettaTrekImg from "@/assets/doddabetta-trek.jpg";
import birdwatchImg from "@/assets/birdwatch.jpg";
import mukurthiTrekImg from "@/assets/mukurthi-trek.jpg";
import avalancheTrekImg from "@/assets/avalanche-trek.jpg";
import nightSafariImg from "@/assets/night-safari.jpg";
import multiAdventureImg from "@/assets/multi-adventure.jpg";
import romanticOotyImg from "@/assets/romantic-ooty.jpg";
import coorgRomanceImg from "@/assets/coorg-romance.jpg";
import keralaHoneymoonImg from "@/assets/kerala-honeymoon.jpg";
import southHoneymoonImg from "@/assets/south-honeymoon.jpg";
import budgetHoneymoonImg from "@/assets/budget-honeymoon.jpg";
import bannerHillstations from "@/assets/banner-hillstations.jpg";
import bannerPickup from "@/assets/banner-pickup.jpg";
import bannerSouth from "@/assets/banner-south.jpg";
import bannerToytrain from "@/assets/banner-toytrain.jpg";
import bannerAdventure from "@/assets/banner-adventure.jpg";
import bannerHoneymoon from "@/assets/banner-honeymoon.jpg";

// Gallery images mapping - 4 images per package
const packageGallery: Record<string, string[]> = {
  // Ooty Tour Packages
  "ooty-delight": [ootyImg, coonoorImg, pykaraImg, avalancheImg],
  "kodaikanal-escape": [coonoorImg, ootyImg, kodanadImg, avalancheImg],
  "munnar-magic": [pykaraImg, avalancheImg, ootyImg, kodanadImg],
  "coorg-adventure": [avalancheImg, pykaraImg, coonoorImg, ootyImg],
  "shimla-manali": [kodanadImg, ootyImg, coonoorImg, pykaraImg],
  // Pickup & Drop
  "goa-carnival": [airportPickupImg, railwayTransferImg, roundTripImg, localSightseeingImg],
  "andaman-paradise": [railwayTransferImg, airportPickupImg, multiDayPackageImg, localSightseeingImg],
  "kerala-backwaters": [roundTripImg, localSightseeingImg, airportPickupImg, multiDayPackageImg],
  "pondicherry-bliss": [localSightseeingImg, roundTripImg, railwayTransferImg, airportPickupImg],
  "lakshadweep-dream": [multiDayPackageImg, roundTripImg, airportPickupImg, railwayTransferImg],
  // South Serenity Tours
  "rajasthan-royal": [keralaBackwatersImg, templeTrailImg, karnatakaHeritageImg, andhraSpiritualImg],
  "golden-triangle": [templeTrailImg, keralaBackwatersImg, southIndiaCompleteImg, karnatakaHeritageImg],
  "hampi-heritage": [karnatakaHeritageImg, templeTrailImg, keralaBackwatersImg, andhraSpiritualImg],
  "varanasi-spiritual": [andhraSpiritualImg, karnatakaHeritageImg, southIndiaCompleteImg, templeTrailImg],
  "south-temple": [southIndiaCompleteImg, keralaBackwatersImg, templeTrailImg, andhraSpiritualImg],
  // Adventure
  "ladakh-expedition": [doddabettaTrekImg, mukurthiTrekImg, avalancheTrekImg, nightSafariImg],
  "birdwatch-virgin": [birdwatchImg, doddabettaTrekImg, nightSafariImg, mukurthiTrekImg],
  "rishikesh-thrill": [mukurthiTrekImg, avalancheTrekImg, doddabettaTrekImg, nightSafariImg],
  "spiti-valley": [avalancheTrekImg, mukurthiTrekImg, doddabettaTrekImg, multiAdventureImg],
  "meghalaya-caves": [nightSafariImg, avalancheTrekImg, birdwatchImg, mukurthiTrekImg],
  "sikkim-adventure": [multiAdventureImg, doddabettaTrekImg, nightSafariImg, avalancheTrekImg],
  // Honeymoon
  "char-dham": [romanticOotyImg, coorgRomanceImg, keralaHoneymoonImg, southHoneymoonImg],
  "vaishno-devi": [coorgRomanceImg, romanticOotyImg, budgetHoneymoonImg, keralaHoneymoonImg],
  "tirupati-darshan": [keralaHoneymoonImg, southHoneymoonImg, romanticOotyImg, coorgRomanceImg],
  "amarnath-yatra": [southHoneymoonImg, keralaHoneymoonImg, coorgRomanceImg, budgetHoneymoonImg],
  "south-jyotirlinga": [budgetHoneymoonImg, romanticOotyImg, southHoneymoonImg, coorgRomanceImg],
};

const categoryBanners: Record<string, string> = {
  "hill-stations": bannerHillstations,
  "beaches": bannerPickup,
  "heritage": bannerSouth,
  "wildlife": bannerToytrain,
  "adventure": bannerAdventure,
  "pilgrimage": bannerHoneymoon,
};

const TourDetailPage = () => {
  const { categoryId, packageId } = useParams();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === categoryId);
  const pkg = category?.packages.find((p) => p.id === packageId);
  const phoneNumber = "918667820589";
  const whatsappMessage = encodeURIComponent(`Hi Raghul, I'm interested in the ${pkg?.name || 'tour package'}. Please share more details.`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const bannerImage = categoryBanners[category.id] || bannerHillstations;

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
          <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-lg font-bold">
            {pkg.price}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-3">{pkg.name}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">{pkg.description}</p>
          <p className="text-primary-foreground/80 mt-2">Duration: {pkg.duration}</p>
        </div>
      </section>

      {/* Gallery Section - 4 images side by side */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
            Tour <span className="text-gradient-primary">Gallery</span>
          </h2>
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
                <Button size="xl" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 text-lg py-6">
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
