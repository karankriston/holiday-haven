import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ExploreIndiaBanner from "@/components/ExploreIndiaBanner";
import LongTrips from "@/components/LongTrips";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-travel-new.jpg";
import ootyTourImg from "@/assets/ooty-tour.jpg";
import pickupDropImg from "@/assets/pickup-drop.jpg";
import southSerenityImg from "@/assets/south-serenity.jpg";
import toyTrainImg from "@/assets/toy-train-enhanced.jpg";
import hotelBookingsImg from "@/assets/hotel-bookings.jpg";
import honeymoonImg from "@/assets/honeymoon.jpg";
import ootyBangaloreImg from "@/assets/ooty-bangalore.jpg";
import ootyKeralaImg from "@/assets/ooty-kerala.jpg";
import ootyCoimbatoreImg from "@/assets/ooty-coimbatore.jpg";

const categoryImages: Record<string, string> = {
  "ooty-tour-packages": ootyTourImg,
  "ooty-cabs-pick-up-drop": pickupDropImg,
  "south-serenity-tours": southSerenityImg,
  "ooty-toy-train-ride": toyTrainImg,
  "hotels": hotelBookingsImg,
  "honeymoon-packages": honeymoonImg,
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
      <ExploreIndiaBanner />
      <LongTrips tripImages={tripImages} />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
