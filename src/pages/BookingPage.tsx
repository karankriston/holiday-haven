import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// Import images
import ootyImg from "@/assets/ooty.jpg";
import coonoorImg from "@/assets/coonoor.jpg";
import pykaraImg from "@/assets/pykara.jpg";
import avalancheImg from "@/assets/avalanche.jpg";
import kodanadImg from "@/assets/kodanadu.jpg";
import ootyTourImg from "@/assets/ooty-tour.jpg";

const packageImages: Record<string, string[]> = {
  "ooty-delight": [ootyImg, coonoorImg, pykaraImg, avalancheImg, kodanadImg],
  "kodaikanal-escape": [coonoorImg, ootyImg, pykaraImg, avalancheImg, kodanadImg],
  "munnar-magic": [pykaraImg, coonoorImg, ootyImg, avalancheImg, kodanadImg],
  "coorg-adventure": [avalancheImg, pykaraImg, coonoorImg, ootyImg, kodanadImg],
  "shimla-manali": [kodanadImg, avalancheImg, pykaraImg, coonoorImg, ootyImg],
};

const BookingPage = () => {
  const { categoryId, packageId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const pkg = category?.packages.find((p) => p.id === packageId);
  const phoneNumber = "917639919694";
  const whatsappMessage = encodeURIComponent(`Hi Raghul, Your packages look interesting—I'm excited to know more about them.`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category || !pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Package not found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = packageImages[pkg.id] || [ootyTourImg, ootyImg, coonoorImg, pykaraImg, avalancheImg];

  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Package Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              {pkg.name}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {pkg.description}
            </p>
          </div>

          {/* 5 Images - with 5th image stretching on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {images.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`${pkg.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* 5th image - stretches on mobile */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg col-span-2 sm:col-span-1">
              <img
                src={images[4]}
                alt={`${pkg.name} - Image 5`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Places Covered */}
          <div className="bg-card rounded-2xl p-6 mb-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Places Covered
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {pkg.locationsList.map((location, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:+${phoneNumber}`} className="w-full sm:w-auto">
              <Button
                variant="default"
                size="xl"
                className="w-full"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="xl"
                className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
