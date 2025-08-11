import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  initializeGoogleAnalytics,
  trackBusinessEvent,
} from "@/utils/analytics";

const Analytics = () => {
  const location = useLocation();

  // Initialize Google Analytics on component mount
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  // Track page views when route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: location.pathname,
        page_title: document.title,
      });

      // Track specific page visit for US market analysis
      trackBusinessEvent("page_visit", {
        page_path: location.pathname,
        page_title: document.title,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      });
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default Analytics;
