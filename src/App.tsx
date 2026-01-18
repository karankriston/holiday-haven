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
    // Save footer navigation state and previous path for back navigation
    if (state?.fromFooter) {
      sessionStorage.setItem('returnToFooter', 'true');
      sessionStorage.setItem('returnToPath', sessionStorage.getItem('currentPath') || '/');
    }
    
    // Save current path for return navigation
    sessionStorage.setItem('currentPath', pathname);

    // Check if returning from footer link (works for all pages)
    const returnToFooter = sessionStorage.getItem('returnToFooter');
    const isTermsOrPrivacy = pathname === '/terms' || pathname === '/privacy';
    
    if (returnToFooter && !isTermsOrPrivacy) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'instant'
        });
        sessionStorage.removeItem('returnToFooter');
        sessionStorage.removeItem('returnToPath');
      }, 100);
      return;
    }

    // Check if returning to home page
    if (pathname === '/') {
      // Check for long trips scroll position
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
    } else if (!returnToFooter) {
      // Only scroll to top for new navigations (not returning from footer links)
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
