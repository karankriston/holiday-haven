import { useRef } from "react";
import { Car, Users, Bus, ChevronLeft, ChevronRight, Fuel, Sofa, Wind, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import vehicle images
import sedanEtios from "@/assets/vehicles/sedan-etios.jpg";
import sedanDzire from "@/assets/vehicles/sedan-dzire.jpg";
import sedanXcent from "@/assets/vehicles/sedan-xcent.jpg";
import sedanTigor from "@/assets/vehicles/sedan-tigor.jpg";
import sedanI10 from "@/assets/vehicles/sedan-i10.jpg";
import suvInnova from "@/assets/vehicles/suv-innova.jpg";
import suvCrysta from "@/assets/vehicles/suv-crysta.jpg";
import suvErtiga from "@/assets/vehicles/suv-ertiga.jpg";
import suvAlcazar from "@/assets/vehicles/suv-alcazar.jpg";
import tempo9 from "@/assets/vehicles/tempo-9.jpg";
import tempo12 from "@/assets/vehicles/tempo-12.jpg";
import tempo14 from "@/assets/vehicles/tempo-14.jpg";
import tempo16 from "@/assets/vehicles/tempo-16.jpg";
import tempo20 from "@/assets/vehicles/tempo-20.jpg";
import bus21 from "@/assets/vehicles/bus-21.jpg";
import bus25 from "@/assets/vehicles/bus-25.jpg";
import bus40 from "@/assets/vehicles/bus-40.jpg";
import bus49 from "@/assets/vehicles/bus-49.jpg";

interface Vehicle {
  name: string;
  image: string;
  capacity: string;
}

interface VehicleCategory {
  id: string;
  title: string;
  subtitle: string;
  capacity: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  vehicles: Vehicle[];
  gradient: string;
}

const vehicleCategories: VehicleCategory[] = [
  {
    id: "sedans",
    title: "Sedan & Compact Cars",
    subtitle: "1–4 Passengers",
    capacity: "Best for Couples & Small Families",
    description: "Ideal for city tours, airport transfers, and short road trips",
    icon: Car,
    features: ["Comfortable", "Fuel-efficient", "Ideal for city & highway travel"],
    gradient: "from-blue-500 to-cyan-500",
    vehicles: [
      { name: "Toyota Etios", image: sedanEtios, capacity: "4 Seater" },
      { name: "Maruti Swift Dzire", image: sedanDzire, capacity: "4 Seater" },
      { name: "Hyundai Xcent", image: sedanXcent, capacity: "4 Seater" },
      { name: "Tata Tigor", image: sedanTigor, capacity: "4 Seater" },
      { name: "Hyundai Grand i10", image: sedanI10, capacity: "4 Seater" },
    ],
  },
  {
    id: "suvs",
    title: "SUVs & MUVs",
    subtitle: "5–7 Passengers",
    capacity: "Perfect for Family Tours",
    description: "Ideal for hill stations and long-distance South India packages",
    icon: Users,
    features: ["Spacious seating", "Extra luggage capacity", "Best for Ooty, Kodaikanal, Coorg & Munnar"],
    gradient: "from-emerald-500 to-teal-500",
    vehicles: [
      { name: "Toyota Innova", image: suvInnova, capacity: "7 Seater" },
      { name: "Toyota Innova Crysta", image: suvCrysta, capacity: "7 Seater" },
      { name: "Maruti Ertiga", image: suvErtiga, capacity: "7 Seater" },
      { name: "Hyundai Alcazar", image: suvAlcazar, capacity: "7 Seater" },
    ],
  },
  {
    id: "tempo",
    title: "Tempo Travellers",
    subtitle: "8–20 Passengers",
    capacity: "Ideal for Group Tours",
    description: "Perfect for pilgrimages, corporate trips, and customized packages",
    icon: Bus,
    features: ["Push-back seats", "Ample legroom", "AC & Non-AC options available"],
    gradient: "from-orange-500 to-amber-500",
    vehicles: [
      { name: "9 Seater Tempo", image: tempo9, capacity: "9 Seater" },
      { name: "12 Seater Tempo", image: tempo12, capacity: "12 Seater" },
      { name: "14 Seater Tempo", image: tempo14, capacity: "14 Seater" },
      { name: "16 Seater Tempo", image: tempo16, capacity: "16 Seater" },
      { name: "18-20 Seater Tempo", image: tempo20, capacity: "20 Seater" },
    ],
  },
  {
    id: "buses",
    title: "Mini Buses & Coaches",
    subtitle: "20+ Passengers",
    capacity: "Best for Large Groups",
    description: "Perfect for school trips, wedding travel, and pilgrimage tours",
    icon: Bus,
    features: ["Professional drivers", "Ideal for long journeys", "Comfortable group travel"],
    gradient: "from-purple-500 to-pink-500",
    vehicles: [
      { name: "21 Seater Mini Bus", image: bus21, capacity: "21 Seater" },
      { name: "25 Seater Mini Bus", image: bus25, capacity: "25 Seater" },
      { name: "35-40 Seater Coach", image: bus40, capacity: "40 Seater" },
      { name: "45-49 Seater Volvo", image: bus49, capacity: "49 Seater" },
    ],
  },
];

const VehicleScroller = ({ category }: { category: VehicleCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const IconComponent = category.icon;

  return (
    <div className="mb-8 lg:mb-12">
      {/* Category Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className={`text-xs sm:text-sm font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${category.gradient} text-white`}>
                {category.subtitle}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">
                • {category.capacity}
              </span>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-2 self-end sm:self-auto">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Features Row */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
        {category.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
            {idx === 0 && <Sofa className="w-3.5 h-3.5 text-primary" />}
            {idx === 1 && <Fuel className="w-3.5 h-3.5 text-primary" />}
            {idx === 2 && <Wind className="w-3.5 h-3.5 text-primary" />}
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Scrollable Vehicle Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:-mx-0 sm:px-0 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {category.vehicles.map((vehicle, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card overflow-hidden snap-start"
          >
            <div className="relative h-36 sm:h-40 lg:h-44 overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground flex items-center gap-1">
                <Users className="w-3 h-3" />
                {vehicle.capacity}
              </div>
            </div>
            <CardContent className="p-3 sm:p-4">
              <h4 className="font-semibold text-foreground text-sm sm:text-base line-clamp-1">
                {vehicle.name}
              </h4>
              <div className="flex items-center gap-1 mt-1.5 text-xs text-primary">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>Verified & Sanitized</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const FleetServices = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Fleet</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-gradient-primary">Wheels of Wanderlust</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            From intimate journeys to grand expeditions, our diverse fleet ensures every mile is memorable. Choose your perfect travel companion.
          </p>
        </div>

        {/* Vehicle Categories */}
        {vehicleCategories.map((category) => (
          <VehicleScroller key={category.id} category={category} />
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-border/50">
          <p className="text-sm sm:text-base text-muted-foreground mb-3">
            Can't find what you need? We have more options available!
          </p>
          <a
            href="https://wa.me/917639919694?text=Hi%20Raghul%2C%20I%27m%20interested%20in%20booking%20a%20vehicle.%20Please%20share%20available%20options."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FleetServices;
