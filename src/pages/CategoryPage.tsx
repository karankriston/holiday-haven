import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { categories, trainSchedule } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

// Import banner images
import bannerHillstations from "@/assets/banner-hillstations.jpg";
import bannerPickup from "@/assets/banner-pickup.jpg";
import bannerSouth from "@/assets/banner-south.jpg";
import bannerToytrain from "@/assets/banner-toytrain.jpg";
import bannerAdventure from "@/assets/banner-adventure.jpg";
import bannerHoneymoon from "@/assets/banner-honeymoon.jpg";

// Import Ooty Tour package images
import ootyImg from "@/assets/ooty.jpg";
import coonoorImg from "@/assets/coonoor.jpg";
import pykaraImg from "@/assets/pykara.jpg";
import avalancheImg from "@/assets/avalanche.jpg";
import kodanadImg from "@/assets/kodanadu.jpg";

// Import Pickup & Drop images
import airportPickupImg from "@/assets/airport-pickup.jpg";
import railwayTransferImg from "@/assets/railway-transfer.jpg";
import roundTripImg from "@/assets/round-trip.jpg";
import localSightseeingImg from "@/assets/local-sightseeing.jpg";
import multiDayPackageImg from "@/assets/multi-day-package.jpg";

// Import South Serenity images
import keralaBackwatersImg from "@/assets/kerala-backwaters.jpg";
import templeTrailImg from "@/assets/temple-trail.jpg";
import karnatakaHeritageImg from "@/assets/karnataka-heritage.jpg";
import andhraSpiritualImg from "@/assets/andhra-spiritual.jpg";
import southIndiaCompleteImg from "@/assets/south-india-complete.jpg";

// Import Adventure images
import doddabettaTrekImg from "@/assets/doddabetta-trek.jpg";
import birdwatchImg from "@/assets/birdwatch.jpg";
import mukurthiTrekImg from "@/assets/mukurthi-trek.jpg";
import avalancheTrekImg from "@/assets/avalanche-trek.jpg";
import nightSafariImg from "@/assets/night-safari.jpg";
import multiAdventureImg from "@/assets/multi-adventure.jpg";

// Import Honeymoon images
import romanticOotyImg from "@/assets/romantic-ooty.jpg";
import coorgRomanceImg from "@/assets/coorg-romance.jpg";
import keralaHoneymoonImg from "@/assets/kerala-honeymoon.jpg";
import southHoneymoonImg from "@/assets/south-honeymoon.jpg";
import budgetHoneymoonImg from "@/assets/budget-honeymoon.jpg";

const categoryBanners: Record<string, string> = {
  "hill-stations": bannerHillstations,
  "beaches": bannerPickup,
  "heritage": bannerSouth,
  "wildlife": bannerToytrain,
  "adventure": bannerAdventure,
  "pilgrimage": bannerHoneymoon,
};

const packageImages: Record<string, string> = {
  // Ooty Tour Packages
  "ooty-delight": ootyImg,
  "kodaikanal-escape": coonoorImg,
  "munnar-magic": pykaraImg,
  "coorg-adventure": avalancheImg,
  "shimla-manali": kodanadImg,
  // Pickup & Drop
  "goa-carnival": airportPickupImg,
  "andaman-paradise": railwayTransferImg,
  "kerala-backwaters": roundTripImg,
  "pondicherry-bliss": localSightseeingImg,
  "lakshadweep-dream": multiDayPackageImg,
  // South Serenity Tours
  "rajasthan-royal": keralaBackwatersImg,
  "golden-triangle": templeTrailImg,
  "hampi-heritage": karnatakaHeritageImg,
  "varanasi-spiritual": andhraSpiritualImg,
  "south-temple": southIndiaCompleteImg,
  // Adventure
  "ladakh-expedition": doddabettaTrekImg,
  "birdwatch-virgin": birdwatchImg,
  "rishikesh-thrill": mukurthiTrekImg,
  "spiti-valley": avalancheTrekImg,
  "meghalaya-caves": nightSafariImg,
  "sikkim-adventure": multiAdventureImg,
  // Honeymoon
  "char-dham": romanticOotyImg,
  "vaishno-devi": coorgRomanceImg,
  "tirupati-darshan": keralaHoneymoonImg,
  "amarnath-yatra": southHoneymoonImg,
  "south-jyotirlinga": budgetHoneymoonImg,
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === categoryId);
  const phoneNumber = "918667820589";
  const whatsappMessage = encodeURIComponent("Hi Raghul, Your packages look interesting—I'm excited to know more about them.");

  useEffect(() => {
    // Check if we should restore scroll position
    const savedPosition = sessionStorage.getItem(`scroll-${categoryId}`);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem(`scroll-${categoryId}`);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/"><Button>Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const bannerImage = categoryBanners[category.id] || bannerHillstations;
  const isToyTrain = category.id === "wildlife";
  const isPickupDrop = category.id === "beaches";

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img src={bannerImage} alt={category.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-4xl mb-3">{category.icon}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-3">{category.name}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">{category.description}</p>
        </div>
      </section>

      {/* Toy Train Schedule Section */}
      {isToyTrain && (
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Nilgiri Mountain Railway <span className="text-gradient-primary">Timings & Fare</span>
              </h2>
              <p className="text-muted-foreground">UNESCO World Heritage Toy Train Schedule</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Mettupalayam to Ooty */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Mettupalayam → Ooty</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="text-left py-2 text-muted-foreground">Train</th><th className="text-left py-2 text-muted-foreground">Dep</th><th className="text-left py-2 text-muted-foreground">Arr</th><th className="text-left py-2 text-muted-foreground">Duration</th></tr></thead>
                    <tbody>
                      {trainSchedule.mettupalayamToOoty.map((train, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-3"><span className="text-primary font-medium">{train.trainNo}</span><br/><span className="text-xs text-muted-foreground">{train.name}</span></td>
                          <td className="py-3 font-medium">{train.departure}</td>
                          <td className="py-3 font-medium">{train.arrival}</td>
                          <td className="py-3 text-muted-foreground">{train.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ooty to Mettupalayam */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Ooty → Mettupalayam</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="text-left py-2 text-muted-foreground">Train</th><th className="text-left py-2 text-muted-foreground">Dep</th><th className="text-left py-2 text-muted-foreground">Arr</th><th className="text-left py-2 text-muted-foreground">Duration</th></tr></thead>
                    <tbody>
                      {trainSchedule.ootyToMettupalayam.map((train, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-3"><span className="text-primary font-medium">{train.trainNo}</span><br/><span className="text-xs text-muted-foreground">{train.name}</span></td>
                          <td className="py-3 font-medium">{train.departure}</td>
                          <td className="py-3 font-medium">{train.arrival}</td>
                          <td className="py-3 text-muted-foreground">{train.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Coonoor to Ooty */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Coonoor → Ooty</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="text-left py-2 text-muted-foreground">Train</th><th className="text-left py-2 text-muted-foreground">Dep</th><th className="text-left py-2 text-muted-foreground">Arr</th><th className="text-left py-2 text-muted-foreground">Duration</th></tr></thead>
                    <tbody>
                      {trainSchedule.coonoorToOoty.map((train, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-3"><span className="text-primary font-medium">{train.trainNo}</span><br/><span className="text-xs text-muted-foreground">{train.name}</span></td>
                          <td className="py-3 font-medium">{train.departure}</td>
                          <td className="py-3 font-medium">{train.arrival}</td>
                          <td className="py-3 text-muted-foreground">{train.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ooty to Coonoor */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Ooty → Coonoor</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-border"><th className="text-left py-2 text-muted-foreground">Train</th><th className="text-left py-2 text-muted-foreground">Dep</th><th className="text-left py-2 text-muted-foreground">Arr</th><th className="text-left py-2 text-muted-foreground">Duration</th></tr></thead>
                    <tbody>
                      {trainSchedule.ootyToCoonoor.map((train, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-3"><span className="text-primary font-medium">{train.trainNo}</span><br/><span className="text-xs text-muted-foreground">{train.name}</span></td>
                          <td className="py-3 font-medium">{train.departure}</td>
                          <td className="py-3 font-medium">{train.arrival}</td>
                          <td className="py-3 text-muted-foreground">{train.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Ticket Fare */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">Ticket Fare</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-card rounded-xl p-4"><p className="font-semibold text-foreground">Mettupalayam – Ooty</p><p className="text-primary">First Class: ₹{trainSchedule.ticketFare.mettupalayamToOoty.firstClass}</p><p className="text-muted-foreground">Second Class: ₹{trainSchedule.ticketFare.mettupalayamToOoty.secondClass}</p></div>
                <div className="bg-card rounded-xl p-4"><p className="font-semibold text-foreground">Mettupalayam – Coonoor</p><p className="text-primary">First Class: ₹{trainSchedule.ticketFare.mettupalayamToCoonoor.firstClass}</p><p className="text-muted-foreground">Second Class: ₹{trainSchedule.ticketFare.mettupalayamToCoonoor.secondClass}</p></div>
                <div className="bg-card rounded-xl p-4"><p className="font-semibold text-foreground">Coonoor – Ooty</p><p className="text-primary">First Class: ₹{trainSchedule.ticketFare.coonoorToOoty.firstClass}</p><p className="text-muted-foreground">Second Class: ₹{trainSchedule.ticketFare.coonoorToOoty.secondClass}</p></div>
              </div>
            </div>

            {/* Call to Book */}
            <div className="text-center">
              <a href={`tel:+${phoneNumber}`}>
                <Button size="xl" className="px-10">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us to Book
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Tour Packages - Only for non-toy-train categories */}
      {!isToyTrain && category.packages.length > 0 && (
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Available <span className="text-gradient-primary">{isPickupDrop ? 'Packages' : 'Tour Packages'}</span>
              </h2>
              <p className="text-muted-foreground">
                Choose from our carefully curated {category.name.toLowerCase()}
                {isPickupDrop && <span className="block text-sm text-amber-600 mt-1">* Additional charges may apply based on pickup location</span>}
              </p>
            </div>

            <div className="space-y-6">
              {category.packages.map((pkg) => (
                <div key={pkg.id} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border flex flex-col md:flex-row">
                  <div className="relative w-full md:w-[400px] h-56 md:h-auto shrink-0 overflow-hidden">
                    <img src={packageImages[pkg.id] || bannerImage} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold">{pkg.price}</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">{isPickupDrop ? 'Pickup Spots:' : 'Places Covered:'}</h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1.5">
                          {pkg.locationsList.map((location, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{location}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* CTA Buttons - Similar to reference image */}
                    <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                      <a href={`tel:+${phoneNumber}`} className="flex-1">
                        <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                      {isPickupDrop ? (
                        <a 
                          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi Raghul, I'm interested in the ${pkg.name} package. Please share more details.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp
                          </Button>
                        </a>
                      ) : (
                        <Link 
                          to={`/category/${category.id}/tour/${pkg.id}`}
                          className="flex-1"
                          onClick={() => {
                            sessionStorage.setItem(`scroll-${categoryId}`, window.scrollY.toString());
                          }}
                        >
                          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Explore Tour
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
            <div className="relative z-10 p-8 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground mb-3">Can't Find What You're Looking For?</h3>
              <p className="text-primary-foreground/90 mb-5 max-w-2xl mx-auto">Let us create a customized package tailored to your preferences and budget</p>
              <a href={`tel:+${phoneNumber}`}>
                <Button variant="heroOutline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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

export default CategoryPage;
