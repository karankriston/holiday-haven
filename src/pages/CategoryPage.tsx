import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import images
import ootyTourImg from "@/assets/ooty-tour.jpg";
import pickupDropImg from "@/assets/pickup-drop.jpg";
import southSerenityImg from "@/assets/south-serenity.jpg";
import toyTrainImg from "@/assets/toy-train.jpg";
import treksAdventureImg from "@/assets/treks-adventure.jpg";
import honeymoonImg from "@/assets/honeymoon.jpg";

// Package images
import ootyImg from "@/assets/ooty.jpg";
import coonoorImg from "@/assets/coonoor.jpg";
import pykaraImg from "@/assets/pykara.jpg";
import avalancheImg from "@/assets/avalanche.jpg";
import kodanadImg from "@/assets/kodanadu.jpg";

const categoryBanners: Record<string, string> = {
  "hill-stations": ootyTourImg,
  "beaches": pickupDropImg,
  "heritage": southSerenityImg,
  "wildlife": toyTrainImg,
  "adventure": treksAdventureImg,
  "pilgrimage": honeymoonImg,
};

const packageImages: Record<string, string> = {
  "ooty-delight": ootyImg,
  "kodaikanal-escape": coonoorImg,
  "munnar-magic": pykaraImg,
  "coorg-adventure": avalancheImg,
  "shimla-manali": kodanadImg,
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const phoneNumber = "918667820589";
  const whatsappMessage = encodeURIComponent("Hi Raghul, Your packages look interesting—I'm excited to know more about them.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const bannerImage = categoryBanners[category.id] || ootyTourImg;

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
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
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Available <span className="text-gradient-primary">Tour Packages</span>
            </h2>
            <p className="text-muted-foreground">
              Choose from our carefully curated {category.name.toLowerCase()} experiences
            </p>
          </div>

          <div className="space-y-6">
            {category.packages.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/category/${categoryId}/book/${pkg.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border flex flex-col md:flex-row cursor-pointer block"
              >
                {/* Image - Horizontal */}
                <div className="relative w-full md:w-[400px] h-56 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={packageImages[pkg.id] || bannerImage}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
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

                  <div className="pt-4 border-t border-border">
                    <Button variant="default" size="lg" className="w-full group/btn">
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
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
              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" size="lg">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat with us now
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
