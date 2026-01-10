import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
            ✨ Your Dream Vacation Awaits
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover India's
            <span className="block text-golden">Hidden Treasures</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From misty hill stations to pristine beaches, ancient temples to thrilling adventures. 
            Create unforgettable memories with our curated travel experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" className="group">
              Explore Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" className="group">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <span className="block text-3xl font-bold text-golden">500+</span>
              <span className="text-primary-foreground/80 text-sm">Happy Travelers</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-golden">50+</span>
              <span className="text-primary-foreground/80 text-sm">Destinations</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-golden">10+</span>
              <span className="text-primary-foreground/80 text-sm">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
