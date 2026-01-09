import { Button } from "@/components/ui/button";
import { longTrips } from "@/data/categories";
import { Clock, MapPin, ArrowRight } from "lucide-react";

interface LongTripsProps {
  tripImages: Record<string, string>;
}

const LongTrips = ({ tripImages }: LongTripsProps) => {
  return (
    <section id="long-trips" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            Extended Adventures
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Long Trips & <span className="text-gradient-primary">Grand Tours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in extensive journeys that cover multiple destinations for the ultimate travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {longTrips.map((trip, index) => (
            <div
              key={trip.id}
              className="group card-travel overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tripImages[trip.id]}
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
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2">
                Ready for Your Next Adventure?
              </h3>
              <p className="text-primary-foreground/90">
                Get personalized trip recommendations based on your preferences
              </p>
            </div>
            <Button variant="heroOutline" size="xl" className="shrink-0">
              Plan My Trip
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongTrips;
