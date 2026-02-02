import { useEffect } from "react";
import { MapPin, Home, Phone, MessageCircle, Mountain, Waves, Building2, Cake, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import exploreIndiaBanner from "@/assets/banner-explore-india.jpg";

const destinations = [
  { name: "ECR Beach Resort", type: "Beach" },
  { name: "Pondicherry", type: "Beach & Heritage" },
  { name: "Kodaikanal", type: "Hill Station" },
  { name: "Yercaud", type: "Hill Station" },
  { name: "Yelagiri", type: "Hill Station" },
  { name: "Kolli Hills", type: "Hill Station" },
  { name: "Valparai", type: "Hill Station" },
  { name: "Megamalai", type: "Hill Station" },
  { name: "Munnar", type: "Hill Station" },
  { name: "Wayanad", type: "Hill Station" },
  { name: "Kanthalloor", type: "Hill Station" },
  { name: "Alappuzha", type: "Backwaters" },
  { name: "Thekkady", type: "Wildlife" },
  { name: "Vagamon", type: "Hill Station" },
  { name: "Ooty", type: "Hill Station" },
];

const stayOptions = [
  {
    title: "Mountain & Lake View Villas",
    description: "Wake up to stunning panoramic views of misty mountains and serene lakes. Perfect for nature lovers and photographers.",
    icon: Mountain,
  },
  {
    title: "Tent & Farm Houses",
    description: "Experience rustic charm with modern comforts. Ideal for those seeking an authentic connection with nature.",
    icon: Home,
  },
  {
    title: "Beach Resorts",
    description: "Relax by the waves in our premium beach properties. Sun, sand, and luxury combined.",
    icon: Waves,
  },
  {
    title: "Corporate Events",
    description: "Host impactful corporate retreats, team outings, and business events in scenic locations.",
    icon: Building2,
  },
  {
    title: "Birthday Parties",
    description: "Celebrate special moments in extraordinary settings. Custom party planning available.",
    icon: Cake,
  },
  {
    title: "Tour Packages & Family Tours",
    description: "Curated itineraries for families of all sizes. Create lasting memories together.",
    icon: Users,
  },
];

const ExploreIndiaPage = () => {
  const phoneNumber = "917639919694";
  const whatsappMessage = encodeURIComponent("Hi Raghul, I'm interested in exploring destinations with OotyEscape. Please share more details.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center mt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src={exploreIndiaBanner} alt="Explore India with OotyEscape" className="w-full h-full object-cover scale-105" />
          {/* Elegant gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6 shadow-xl">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white tracking-wide">15+ Destinations Across South India</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
            <span className="text-white drop-shadow-2xl">Explore India with</span>
            <br className="hidden sm:block" />
            <span className="text-yellow-400 drop-shadow-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent"> OotyEscape</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto font-light tracking-wide">
            Your gateway to South India's most breathtaking destinations
          </p>
          
          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400/80" />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Destinations We <span className="text-gradient-primary">Cover</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Discover our handpicked destinations across South India, each offering unique experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {destinations.map((dest, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
              >
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 line-clamp-1">
                    {dest.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {dest.type}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Options Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Home className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Your Perfect <span className="text-gradient-primary">Stay Options</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              From luxury villas to rustic farm stays, we offer accommodations that match every traveler's dream.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stayOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card overflow-hidden"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground text-base sm:text-lg mb-1.5 sm:mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect getaway. Our travel experts are here to create a customized experience just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 sm:px-8 font-semibold">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:+${phoneNumber}`}>
              <Button size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 sm:px-8 font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                +91 76399 19694
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreIndiaPage;
