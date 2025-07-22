import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-african-luxury-spa', label: 'Karibu Home' },
    { name: 'Treatments', path: '/treatment-experiences', label: 'Treatment Experiences' },
    { name: 'Our Team', path: '/expert-team-showcase', label: 'Expert Team' },
    { name: 'Heritage', path: '/cultural-heritage-hub', label: 'Cultural Heritage' },
    { name: 'Book Now', path: '/booking-intelligence-portal', label: 'Book Your Journey' },
    { name: 'Admin', path: '/admin-command-center', label: 'Admin Center' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Karibu! I'd like to book a cultural wellness experience at Serenity Spa Kenya.");
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-cultural border-b border-border">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo Section */}
          <Link to="/homepage-african-luxury-spa" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center cultural-shadow">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21ZM12 8C14.8 8 17 10.2 17 13S14.8 18 12 18S7 15.8 7 13S9.2 8 12 8ZM12 10C10.3 10 9 11.3 9 13S10.3 16 12 16S15 14.7 15 13S13.7 10 12 10Z"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-cultural"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-primary">Serenity Spa</span>
              <span className="font-accent text-xs text-secondary">Kenya</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, -2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-medium transition-cultural hover:text-accent ${
                  isActivePath(item.path)
                    ? 'text-accent border-b-2 border-accent pb-1' :'text-text-primary hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/booking-intelligence-portal">
              <Button
                variant="outline"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Book Journey
              </Button>
            </Link>
            <Button
              variant="default"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppBooking}
              className="bg-cta hover:bg-cta/90 text-cta-foreground premium-hover"
            >
              WhatsApp
            </Button>
            <Link to="/admin-command-center">
              <Button
                variant="ghost"
                size="sm"
                iconName="Settings"
                className="text-text-secondary hover:text-primary"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="lg:hidden"
            iconName={isMobileMenuOpen ? "X" : "Menu"}
          />
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              {/* Karibu Welcome */}
              <div className="text-center py-2 border-b border-border">
                <span className="font-accent text-lg text-secondary">Karibu</span>
                <p className="font-body text-sm text-text-secondary">Welcome to African Luxury</p>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-3">
                {navigationItems.slice(0, -1).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-body text-base transition-cultural ${
                      isActivePath(item.path)
                        ? 'bg-accent/10 text-accent border-l-4 border-accent' :'text-text-primary hover:bg-muted hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    handleWhatsAppBooking();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-cta hover:bg-cta/90 text-cta-foreground"
                >
                  Book via WhatsApp
                </Button>
                <Link to="/admin-command-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Settings"
                    iconPosition="left"
                    className="border-border text-text-secondary hover:text-primary"
                  >
                    Admin Center
                  </Button>
                </Link>
              </div>

              {/* Cultural Pattern Decoration */}
              <div className="flex justify-center pt-4">
                <div className="w-16 h-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Floating Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="default"
          size="icon"
          onClick={handleWhatsAppBooking}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-cultural animate-pulse-gentle"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;