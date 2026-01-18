import { useEffect } from "react";
import { longTrips } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

import longTripsBanner from "@/assets/long-trips-banner.jpg";
import ootyBangaloreImg from "@/assets/ooty-bangalore.jpg";
import ootyKeralaImg from "@/assets/ooty-kerala.jpg";
import ootyCoimbatoreImg from "@/assets/ooty-coimbatore.jpg";
import ootyMysoreImg from "@/assets/ooty-mysore.jpg";
import ootyMettupalayamImg from "@/assets/ooty-mettupalayam.jpg";
import ootyChennaiImg from "@/assets/ooty-chennai.jpg";

const tripImages: Record<string, string> = {
  "kashmir-complete": ootyBangaloreImg,
  "northeast-explorer": ootyKeralaImg,
  "south-india-grand": ootyCoimbatoreImg,
  "ooty-mysore": ootyMysoreImg,
  "ooty-mettupalayam": ootyMettupalayamImg,
  "ooty-chennai": ootyChennaiImg,
};

const LongTripsPage = () => {
  const phoneNumber = "918667820589";
  const whatsappMessage = encodeURIComponent("Hi Raghul, Your packages look interesting—I'm excited to know more about them.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img src={longTripsBanner} alt="Long Trips" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">Long Trips & Grand Tours</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">Immerse yourself in extensive journeys that cover multiple destinations for the ultimate travel experience</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">All Long Trip Packages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {longTrips.map((trip, index) => (
              <div key={trip.id} className="group card-travel overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={tripImages[trip.id] || ootyBangaloreImg} alt={trip.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">{trip.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{trip.description}</p>
                  <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      Chat with us
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2">Ready for Your Next Adventure?</h3>
                <p className="text-primary-foreground/90">We provide customizing according to your convenience for long rides</p>
              </div>
              <a href={`tel:+${phoneNumber}`}>
                <Button variant="heroOutline" size="xl" className="shrink-0">
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

export default LongTripsPage;
