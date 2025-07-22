import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SignatureTreatments from './components/SignatureTreatments';
import ExpertTeam from './components/ExpertTeam';
import TransformationGallery from './components/TransformationGallery';
import CulturalHeritage from './components/CulturalHeritage';
import PricingSection from './components/PricingSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

const HomepageAfricanLuxurySpa = () => {
  return (
    <>
      <Helmet>
        <title>Serenity Spa Kenya - Where Heritage Meets Luxury | African Beauty & Wellness</title>
        <meta name="description" content="Experience authentic African beauty traditions at Kenya's premier luxury spa. Traditional shea butter rituals, baobab oil treatments, and coffee body polish in Nairobi's most sophisticated wellness sanctuary." />
        <meta name="keywords" content="African spa Nairobi, luxury wellness Kenya, traditional beauty treatments, shea butter ritual, baobab oil, Kenyan coffee polish, cultural heritage spa" />
        <meta property="og:title" content="Serenity Spa Kenya - Where Heritage Meets Luxury" />
        <meta property="og:description" content="Discover transformative African beauty traditions in Kenya's most sophisticated wellness sanctuary. Book your cultural wellness journey today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://serenityspa.ke/homepage-african-luxury-spa" />
        <link rel="canonical" href="https://serenityspa.ke/homepage-african-luxury-spa" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section - Immersive full-screen experience */}
          <HeroSection />
          
          {/* Signature Treatments - Three-column showcase */}
          <SignatureTreatments />
          
          {/* Expert Team - Certified African beauty professionals */}
          <ExpertTeam />
          
          {/* Transformation Gallery - Before/after with testimonials */}
          <TransformationGallery />
          
          {/* Cultural Heritage - African beauty wisdom */}
          <CulturalHeritage />
          
          {/* Pricing Section - Kenyan Shillings with M-Pesa */}
          <PricingSection />
          
          {/* Location Section - Nairobi location with map */}
          <LocationSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomepageAfricanLuxurySpa;