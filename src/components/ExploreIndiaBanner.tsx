import { Link } from "react-router-dom";
import { MapPin, Home, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  "ECR Beach Resort", "Pondicherry", "Kodaikanal", "Yercaud", "Yelagiri",
  "Kolli Hills", "Valparai", "Megamalai", "Munnar", "Wayanad",
  "Kanthalloor", "Alappuzha", "Thekkady", "Vagamon", "Ooty"
];

const stayOptions = [
  "Mountain & Lake View Villas",
  "Tent & Farm Houses",
  "Beach Resorts",
  "Corporate Events",
  "Birthday Parties",
  "Tour Packages & Family Tours"
];

const ExploreIndiaBanner = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content Section */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Beyond Ooty
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">
                Explore India with{" "}
                <span className="text-gradient-primary">OotyTourPlanners</span>
              </h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl">
                Discover breathtaking destinations across South India. From misty mountains to serene beaches, we curate unforgettable experiences for every traveler.
              </p>

              {/* Destinations */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">
                    Destinations We Cover
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {destinations.slice(0, 8).map((dest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {dest}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium">
                    +{destinations.length - 8} more
                  </span>
                </div>
              </div>

              {/* Stay Options */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-foreground text-sm">
                    Your Perfect Stay Options
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {stayOptions.slice(0, 6).map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="line-clamp-1">{option}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/explore-india">
                <Button size="lg" className="group">
                  Explore All Destinations
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Right Visual Section */}
            <div className="lg:w-80 xl:w-96 relative">
              <div className="bg-gradient-to-br from-primary via-secondary to-accent p-6 sm:p-8 lg:absolute lg:inset-0 flex items-center justify-center rounded-b-3xl lg:rounded-none lg:rounded-r-3xl">
                <div className="flex flex-col items-center justify-center gap-4 text-primary-foreground w-full">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">15+</div>
                    <div className="text-base sm:text-lg font-medium mt-1">Destinations</div>
                  </div>
                  <div className="w-20 h-0.5 bg-primary-foreground/40" />
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">6</div>
                    <div className="text-base sm:text-lg font-medium mt-1">Stay Types</div>
                  </div>
                  <div className="w-20 h-0.5 bg-primary-foreground/40" />
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-medium opacity-90">Customized Tours</div>
                    <div className="text-sm sm:text-base font-medium opacity-90">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreIndiaBanner;
