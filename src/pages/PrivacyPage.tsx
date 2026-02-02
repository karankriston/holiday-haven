import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We may collect the following information when you contact us through our website, phone, or WhatsApp:",
        "Your name",
        "Phone number",
        "Email address (if provided)",
        "Travel details such as trip dates, number of people, and package preferences",
        "We do not collect any payment or card details through this website."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use your information only to:",
        "Respond to your enquiries",
        "Provide tour and travel-related services",
        "Confirm bookings and communicate trip details",
        "Improve our customer service",
        "We do not sell, rent, or share your personal information with third parties for marketing purposes."
      ]
    },
    {
      title: "3. Payment Information",
      content: [
        "OotyEscape does not collect or process any online payments through this website.",
        "All payments are handled offline after direct communication with our team."
      ]
    },
    {
      title: "4. Data Protection",
      content: [
        "We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure.",
        "Your data is accessed only by authorized personnel of OotyEscape."
      ]
    },
    {
      title: "5. Cookies & Website Tracking",
      content: [
        "Our website may use basic cookies to improve user experience.",
        "Cookies do not collect any personally identifiable information."
      ]
    },
    {
      title: "6. Sharing of Information",
      content: [
        "We may share your information only:",
        "When required by law",
        "When necessary to arrange services related to your trip (drivers, local operators, etc.)"
      ]
    },
    {
      title: "7. External Links",
      content: [
        "Our website may contain links to other websites. We are not responsible for the privacy practices or content of those external sites."
      ]
    },
    {
      title: "8. Your Consent",
      content: [
        "By using our website or contacting us, you agree to this Privacy Policy."
      ]
    },
    {
      title: "9. Changes to This Policy",
      content: [
        "OotyEscape may update this Privacy Policy at any time without prior notice. Changes will be updated on this page."
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At OotyEscape, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
          </div>

          {/* Policy Sections */}
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

            {/* Contact Section */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, you can contact us at:
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-foreground">OotyEscape</p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <span>📞 Phone / WhatsApp:</span>
                  <a href="tel:+917639919694" className="text-primary hover:underline">
                    +91 76399 19694
                  </a>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <span>📧 Email:</span>
                  <a href="mailto:ootyescapes@gmail.com" className="text-primary hover:underline">
                    ootyescapes@gmail.com
                  </a>
                </p>
              </div>
            </div>
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

export default PrivacyPage;
