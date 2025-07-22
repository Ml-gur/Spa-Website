import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageAfricanLuxurySpa from "pages/homepage-african-luxury-spa";
import AdminCommandCenter from "pages/admin-command-center";
import TreatmentExperiences from "pages/treatment-experiences";
import CulturalHeritageHub from "pages/cultural-heritage-hub";
import ExpertTeamShowcase from "pages/expert-team-showcase";
import BookingIntelligencePortal from "pages/booking-intelligence-portal";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageAfricanLuxurySpa />} />
        <Route path="/homepage-african-luxury-spa" element={<HomepageAfricanLuxurySpa />} />
        <Route path="/admin-command-center" element={<AdminCommandCenter />} />
        <Route path="/treatment-experiences" element={<TreatmentExperiences />} />
        <Route path="/cultural-heritage-hub" element={<CulturalHeritageHub />} />
        <Route path="/expert-team-showcase" element={<ExpertTeamShowcase />} />
        <Route path="/booking-intelligence-portal" element={<BookingIntelligencePortal />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;