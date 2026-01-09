import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import LongTrips from "@/components/LongTrips";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-travel.jpg";
import hillStationImg from "@/assets/hill-station.jpg";
import beachImg from "@/assets/beach.jpg";
import heritageImg from "@/assets/heritage.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import adventureImg from "@/assets/adventure.jpg";
import pilgrimageImg from "@/assets/pilgrimage.jpg";
import kashmirImg from "@/assets/kashmir.jpg";
import northeastImg from "@/assets/northeast.jpg";
import southindiaImg from "@/assets/southindia.jpg";

const categoryImages: Record<string, string> = {
  "hill-stations": hillStationImg,
  "beaches": beachImg,
  "heritage": heritageImg,
  "wildlife": wildlifeImg,
  "adventure": adventureImg,
  "pilgrimage": pilgrimageImg,
};

const tripImages: Record<string, string> = {
  "kashmir-complete": kashmirImg,
  "northeast-explorer": northeastImg,
  "south-india-grand": southindiaImg,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
