import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import BookingPage from "./pages/BookingPage";
import LongTripsPage from "./pages/LongTripsPage";
import TourDetailPage from "./pages/TourDetailPage";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

// Scroll restoration component with proper back/forward handling
const ScrollRestoration = () => {
  const { pathname, state, key } = useLocation();
  const navigationType = useNavigationType();

  // Save scroll position before leaving
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll-${key}`, String(window.scrollY));
    };

    // Save on any navigation
    return () => {
      sessionStorage.setItem(`scroll-${key}`, String(window.scrollY));
    };
  }, [key]);

  useLayoutEffect(() => {
    // For back/forward navigation (POP), restore saved position
    if (navigationType === 'POP') {
      const savedPosition = sessionStorage.getItem(`scroll-${key}`);
      if (savedPosition) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
        });
        return;
      }
    }

    // For regular navigation with scrollTo state, scroll to that section
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // For PUSH navigation (new pages), scroll to top
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, key, navigationType, state]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRestoration />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/tour/:packageId" element={<TourDetailPage />} />
          <Route path="/category/:categoryId/book/:packageId" element={<BookingPage />} />
          <Route path="/long-trips" element={<LongTripsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
