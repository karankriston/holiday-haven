import { MapPin, Home, Phone, MessageCircle, ArrowLeft, Mountain, Waves, Building2, PartyPopper, Cake, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in exploring destinations with OotyEscapes. Please share more details.");

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Explore India with{" "}
              <span className="text-gradient-primary">OotyEscapes</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your gateway to South India's most breathtaking destinations. From misty hill stations to pristine beaches, we craft journeys that create lifelong memories.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="group">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Destinations We <span className="text-gradient-primary">Cover</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked destinations across South India, each offering unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {destinations.map((dest, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 line-clamp-1">
                    {dest.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
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
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Home className="w-6 h-6 text-accent" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Your Perfect <span className="text-gradient-primary">Stay Options</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From luxury villas to rustic farm stays, we offer accommodations that match every traveler's dream.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stayOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect getaway. Our travel experts are here to create a customized experience just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+919876543210">
              <Button size="lg" variant="heroOutline" className="group border-primary-foreground/50 hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5 mr-2" />
                +91 98765 43210
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
