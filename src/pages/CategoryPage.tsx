import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Star, ArrowRight } from "lucide-react";

// Import images
import hillStationImg from "@/assets/hill-station.jpg";
import beachImg from "@/assets/beach.jpg";
import heritageImg from "@/assets/heritage.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import adventureImg from "@/assets/adventure.jpg";
import pilgrimageImg from "@/assets/pilgrimage.jpg";

// Package images
import ootyImg from "@/assets/ooty.jpg";
import kodaikanalImg from "@/assets/kodaikanal.jpg";
import munnarImg from "@/assets/munnar.jpg";
import coorgImg from "@/assets/coorg.jpg";
import shimlaImg from "@/assets/shimla.jpg";

const categoryBanners: Record<string, string> = {
  "hill-stations": hillStationImg,
  "beaches": beachImg,
  "heritage": heritageImg,
  "wildlife": wildlifeImg,
  "adventure": adventureImg,
  "pilgrimage": pilgrimageImg,
};

const packageImages: Record<string, string> = {
  "ooty-delight": ootyImg,
  "kodaikanal-escape": kodaikanalImg,
  "munnar-magic": munnarImg,
  "coorg-adventure": coorgImg,
  "shimla-manali": shimlaImg,
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const bannerImage = categoryBanners[category.id] || hillStationImg;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-4xl mb-3">{category.icon}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-3">
            {category.name}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Available <span className="text-gradient-primary">Tour Packages</span>
            </h2>
            <p className="text-muted-foreground">
              Choose from our carefully curated {category.name.toLowerCase()} experiences
            </p>
          </div>

          <div className="space-y-6">
            {category.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border flex flex-col md:flex-row"
              >
                {/* Image - Horizontal */}
                <div className="relative w-full md:w-[400px] h-56 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={packageImages[pkg.id] || bannerImage}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">(4.8)</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {pkg.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {pkg.description}
                    </p>

                    {/* Locations - Vertical List */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Places Covered:</h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1.5">
                        {pkg.locationsList.map((location, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {location}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                    <Button variant="default" size="sm" className="group/btn">
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
            <div className="relative z-10 p-8 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground mb-3">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-primary-foreground/90 mb-5 max-w-2xl mx-auto">
                Let us create a customized package tailored to your preferences and budget
              </p>
              <Button variant="heroOutline" size="lg">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;