import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebVitalsMonitor from "./components/ui/WebVitalsMonitor";
import SEOConfig from "./components/seo/SEOConfig";
import Analytics from "./components/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <SEOConfig />
        <div className="mobile-container no-scroll-x safe-area">
          <WebVitalsMonitor />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Analytics />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Index />} />
              <Route path="/services" element={<Index />} />
              <Route path="/portfolio" element={<Index />} />
              <Route path="/testimonials" element={<Index />} />
              <Route path="/contact" element={<Index />} />
              <Route path="/about" element={<Index />} />
              {/* Alternative SEO-friendly URLs */}
              <Route path="/our-services" element={<Index />} />
              <Route path="/our-work" element={<Index />} />
              <Route path="/client-reviews" element={<Index />} />
              <Route path="/get-quote" element={<Index />} />
              <Route path="/landing-page-services" element={<Index />} />
              <Route path="/web-design-portfolio" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
