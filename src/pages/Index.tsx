import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import LongTrips from "@/components/LongTrips";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-travel.jpg";
import ootyTourImg from "@/assets/ooty-tour.jpg";
import pickupDropImg from "@/assets/pickup-drop.jpg";
import southSerenityImg from "@/assets/south-serenity.jpg";
import toyTrainImg from "@/assets/toy-train.jpg";
import treksAdventureImg from "@/assets/treks-adventure.jpg";
import honeymoonImg from "@/assets/honeymoon.jpg";
import ootyBangaloreImg from "@/assets/ooty-bangalore.jpg";
import ootyKeralaImg from "@/assets/ooty-kerala.jpg";
import ootyCoimbatoreImg from "@/assets/ooty-coimbatore.jpg";

const categoryImages: Record<string, string> = {
  "hill-stations": ootyTourImg,
  "beaches": pickupDropImg,
  "heritage": southSerenityImg,
  "wildlife": toyTrainImg,
  "adventure": treksAdventureImg,
  "pilgrimage": honeymoonImg,
};

const tripImages: Record<string, string> = {
  "kashmir-complete": ootyBangaloreImg,
  "northeast-explorer": ootyKeralaImg,
  "south-india-grand": ootyCoimbatoreImg,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-page-enter">
      <Navbar />
      <Hero heroImage={heroImage} />
      <Categories categoryImages={categoryImages} />
      <LongTrips tripImages={tripImages} />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
