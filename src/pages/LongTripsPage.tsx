import { useEffect } from "react";
import { Link } from "react-router-dom";
import { longTrips } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

// Import images
import kashmirImg from "@/assets/kashmir.jpg";
import northeastImg from "@/assets/northeast.jpg";
import southindiaImg from "@/assets/southindia.jpg";

const tripImages: Record<string, string> = {
  "kashmir-complete": kashmirImg,
  "northeast-explorer": northeastImg,
  "south-india-grand": southindiaImg,
  "himalayan-odyssey": kashmirImg,
  "coastal-india": southindiaImg,
  "rajasthan-complete": northeastImg,
};

const LongTripsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img
            src={kashmirImg}
            alt="Long Trips"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
            Extended Adventures
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
            Long Trips & Grand Tours
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Immerse yourself in extensive journeys that cover multiple destinations for the ultimate travel experience
          </p>
        </div>
      </section>

      {/* All Long Trips */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            All Long Trip Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {longTrips.map((trip, index) => (
              <div
                key={trip.id}
                className="group card-travel overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tripImages[trip.id] || kashmirImg}
                    alt={trip.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {trip.duration}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-2xl font-bold text-primary-foreground">{trip.price}</span>
                    <span className="text-primary-foreground/80 text-sm"> / person</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {trip.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {trip.description}
                  </p>

                  <Button variant="default" className="w-full group/btn">
                    Explore Tours
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LongTripsPage;
