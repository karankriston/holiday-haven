import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import BookingPage from "./pages/BookingPage";
import LongTripsPage from "./pages/LongTripsPage";
import TourDetailPage from "./pages/TourDetailPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useLayoutEffect(() => {
    // Check for long trips scroll position
    if (pathname === '/') {
      const savedScrollPosition = sessionStorage.getItem('longTripsScrollPosition');
      if (savedScrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPosition));
          sessionStorage.removeItem('longTripsScrollPosition');
        }, 100);
        return;
      }
    }
    
    // If coming back and there's a scrollTo target, scroll to that section
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, 100);
      }
    } else {
      // Scroll to top for all page navigations
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/tour/:packageId" element={<TourDetailPage />} />
          <Route path="/category/:categoryId/book/:packageId" element={<BookingPage />} />
          <Route path="/long-trips" element={<LongTripsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
