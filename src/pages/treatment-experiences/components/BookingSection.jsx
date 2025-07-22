import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const BookingSection = ({ treatment, selectedTherapist }) => {
  const [selectedPackage, setSelectedPackage] = useState(treatment.packages[0]);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Karibu! I'd like to book the ${treatment.name} treatment.\n\nPackage: ${selectedPackage.name}\nPrice: KES ${selectedPackage.price.toLocaleString()}\nTherapist: ${selectedTherapist ? selectedTherapist.name : 'Any available'}\n\nPlease confirm availability and provide booking details.`
    );
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  const handleMpesaPayment = () => {
    // Mock M-Pesa integration
    alert('M-Pesa payment integration would be implemented here. For demo purposes, please use WhatsApp booking.');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-lg">Book Your Journey</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
            Choose Your Experience
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Select your preferred package and secure your transformative cultural wellness experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Package Selection */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {treatment.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-6 cursor-pointer transition-cultural ${
                    selectedPackage.name === pkg.name
                      ? 'ring-2 ring-accent transform scale-105 cultural-shadow'
                      : 'hover:transform hover:scale-102 warm-shadow'
                  }`}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {pkg.name}
                    </h3>
                    {pkg.popular && (
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl font-bold text-accent">
                        KES {pkg.price.toLocaleString()}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-text-secondary line-through">
                          KES {pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-text-secondary">
                      {pkg.duration} • {pkg.sessions}
                    </p>
                  </div>

                  <p className="font-body text-sm text-text-primary mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span className="font-body text-sm text-text-primary">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {pkg.bonus && (
                    <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Gift" size={14} className="text-success" />
                        <span className="font-body text-sm font-semibold text-success">
                          Bonus Included
                        </span>
                      </div>
                      <p className="font-body text-xs text-text-primary">
                        {pkg.bonus}
                      </p>
                    </div>
                  )}

                  {selectedPackage.name === pkg.name && (
                    <div className="mt-4 flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} className="text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 cultural-shadow sticky top-8">
              <h3 className="font-heading text-xl font-bold text-primary mb-6">
                Booking Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <span className="font-body text-sm text-text-secondary">Treatment</span>
                  <span className="font-body text-sm font-medium text-primary text-right">
                    {treatment.name}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="font-body text-sm text-text-secondary">Package</span>
                  <span className="font-body text-sm font-medium text-primary text-right">
                    {selectedPackage.name}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="font-body text-sm text-text-secondary">Duration</span>
                  <span className="font-body text-sm font-medium text-primary">
                    {selectedPackage.duration}
                  </span>
                </div>

                {selectedTherapist && (
                  <div className="flex justify-between items-start">
                    <span className="font-body text-sm text-text-secondary">Therapist</span>
                    <span className="font-body text-sm font-medium text-primary text-right">
                      {selectedTherapist.name}
                    </span>
                  </div>
                )}

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-lg font-semibold text-primary">Total</span>
                    <span className="font-heading text-xl font-bold text-accent">
                      KES {selectedPackage.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={handleWhatsAppBooking}
                  className="bg-green-500 hover:bg-green-600 text-white premium-hover"
                >
                  Book via WhatsApp
                </Button>

                <Link to="/booking-intelligence-portal">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Advanced Booking
                  </Button>
                </Link>

                <Button
                  variant="secondary"
                  fullWidth
                  iconName="Smartphone"
                  iconPosition="left"
                  onClick={handleMpesaPayment}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Pay with M-Pesa
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="font-body text-sm text-text-secondary">
                    Secure booking & payment
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="RefreshCw" size={16} className="text-accent" />
                  <span className="font-body text-sm text-text-secondary">
                    Free rescheduling up to 24h
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={16} className="text-secondary" />
                  <span className="font-body text-sm text-text-secondary">
                    Certified therapists only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="font-body text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="font-body text-sm">Licensed Spa</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-secondary" />
              <span className="font-body text-sm">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} className="text-accent" />
              <span className="font-body text-sm">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;