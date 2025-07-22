import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Karibu! I'd like to book a cultural wellness experience at Serenity Spa Kenya.");
    window.open(`https://wa.me/254112292847?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
          alt="African woman receiving luxury spa treatment at Serenity Spa Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/30"></div>
      </div>

      {/* Cultural Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Karibu Welcome */}
          <div className="mb-8">
            <span className="font-accent text-2xl lg:text-3xl text-accent block mb-2">Karibu</span>
            <p className="font-body text-lg text-white/90">Welcome to Authentic African Luxury</p>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            Where Heritage
            <span className="block text-accent">Meets Luxury</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the transformative power of authentic African beauty traditions in Kenya's most sophisticated wellness sanctuary.
          </p>

          {/* Cultural Tagline */}
          <div className="mb-12">
            <p className="font-accent text-lg text-accent/90 italic">
              "Celebrating your natural radiance through ancestral wisdom"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/booking-intelligence-portal">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground premium-hover min-w-[200px]"
              >
                Book Your Journey
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppBooking}
              className="border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
            >
              WhatsApp Booking
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-body text-sm">Certified African Beauty Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-body text-sm">Premium Nairobi Location</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-body text-sm">Traditional Ingredients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <span className="font-body text-sm mb-2">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
