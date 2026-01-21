import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Booking Process",
      content: [
        "OotyEscapes does not provide online booking or payment through the website.",
        "Customers must contact us directly via phone or WhatsApp to check availability and confirm bookings.",
        "Booking confirmation will be provided only after direct communication with our team."
      ]
    },
    {
      title: "2. Payment Policy",
      content: [
        "All payments are handled offline (cash, UPI, or bank transfer).",
        "Payment terms (advance or full amount) will be informed at the time of booking.",
        "This website does not collect or process any payments."
      ]
    },
    {
      title: "3. Cancellation & Refund Policy",
      content: [
        "Cancellation rules will be clearly informed at the time of booking.",
        "Refunds, if applicable, depend on the time of cancellation and service provider policies.",
        "Last-minute cancellations may not be eligible for any refund."
      ]
    },
    {
      title: "4. Changes to Itinerary",
      content: [
        "The itinerary may be changed due to weather conditions, road conditions, traffic, or other unavoidable situations.",
        "OotyEscapes reserves the right to modify or cancel any part of the tour for safety or operational reasons."
      ]
    },
    {
      title: "5. Pricing & Additional Charges",
      content: [
        "All prices shown on the website are indicative and may vary based on season, availability, or customization.",
        "The package price includes travel within a 10 km radius from our base location.",
        "Additional charges will apply for trips or pickups beyond the 10 km radius.",
        "Entry fees, boating charges, trekking fees, parking fees, or personal expenses are not included unless specifically mentioned."
      ]
    },
    {
      title: "6. Customer Responsibilities",
      content: [
        "Guests must carry valid ID proof during the trip.",
        "OotyEscapes is not responsible for loss of personal belongings.",
        "The customer shall be held liable for any damages to the vehicle's interior sustained during the duration of the trip."
      ]
    },
    {
      title: "7. Health & Safety",
      content: [
        "Guests are responsible for their own health and fitness to travel.",
        "OotyEscapes is not liable for any injury, accident, illness, or loss during the trip."
      ]
    },
    {
      title: "8. Vehicle & Sightseeing",
      content: [
        "Vehicles will be provided as per the selected package and availability.",
        "AC may not work in hill areas.",
        "Sightseeing will be done based on time availability, traffic conditions, weather, and local regulations."
      ]
    },
    {
      title: "9. AI-Generated Images Disclaimer",
      content: [
        "Some of the images displayed on this website are generated using artificial intelligence (AI) by referencing real-world locations. These images are used for illustrative and promotional purposes only.",
        "While we strive to represent destinations as accurately as possible, the actual appearance of the locations may differ.",
        "The AI-generated images should not be considered exact representations of the real places, and the company is not responsible for any differences between the visuals shown on the website and the real-world experience."
      ]
    },
    {
      title: "10. Ooty Toy Train Booking",
      content: [
        "Our app only helps in booking the Ooty Toy Train ride. We are not responsible for train departure or arrival timings, as all schedules are controlled by the railway authorities.",
        "The ticket fare is fixed and managed by the Central Government / Indian Railways, and we have no control over any price changes."
      ]
    },
    {
      title: "11. Force Majeure",
      content: [
        "OotyEscapes is not responsible for delays or cancellations due to natural calamities, landslides, strikes, government restrictions, or any events beyond our control."
      ]
    },
    {
      title: "12. Website Disclaimer",
      content: [
        "This website is for information purposes only.",
        "No bookings or payments are accepted directly through the website.",
        "By contacting OotyEscapes, you agree to these terms and conditions."
      ]
    },
    {
      title: "13. Legal Jurisdiction",
      content: [
        "All disputes shall be subject to Tamil Nadu jurisdiction only."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Welcome to OotyEscapes. By using our website and contacting us for tour bookings, you agree to the following terms and conditions.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            Last updated: January 2026
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
