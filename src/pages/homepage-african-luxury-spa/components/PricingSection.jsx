import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const treatmentPackages = [
    {
      id: 1,
      name: "Karibu Welcome Package",
      culturalName: "Mfumo wa Karibu",
      description: "Perfect introduction to African luxury wellness",
      duration: "2 hours",
      price: "KES 12,500",
      originalPrice: "KES 15,000",
      savings: "KES 2,500",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg",
      includes: [
        "Traditional Shea Butter Ritual (60 min)",
        "Kenyan Coffee Body Polish (30 min)",
        "Cultural Heritage Consultation",
        "Welcome Ceremony with Traditional Tea",
        "Take-home Shea Butter Sample"
      ],
      benefits: ["First-time client discount", "Cultural education", "Personalized treatment plan"],
      isPopular: false,
      isNew: true
    },
    {
      id: 2,
      name: "Heritage Harmony Experience",
      culturalName: "Uzoefu wa Utamaduni",
      description: "Complete African beauty transformation journey",
      duration: "3.5 hours",
      price: "KES 22,800",
      originalPrice: "KES 26,000",
      savings: "KES 3,200",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
      includes: [
        "Traditional Shea Butter Ritual (90 min)",
        "Baobab Oil Renewal Treatment (75 min)",
        "Kenyan Coffee Body Polish (45 min)",
        "African Facial with Indigenous Herbs",
        "Relaxation with Traditional Music",
        "Healthy African-inspired Refreshments"
      ],
      benefits: ["Most comprehensive experience", "Best value package", "Cultural immersion"],
      isPopular: true,
      isNew: false
    },
    {
      id: 3,
      name: "Royal Ancestral Journey",
      culturalName: "Safari ya Kifalme",
      description: "Ultimate luxury African wellness experience",
      duration: "5 hours",
      price: "KES 38,500",
      originalPrice: "KES 45,000",
      savings: "KES 6,500",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg",
      includes: [
        "All Heritage Harmony treatments",
        "Private consultation with Master Therapist",
        "Customized treatment blend creation",
        "Traditional blessing ceremony",
        "Luxury African-inspired lunch",
        "Personal cultural beauty guide",
        "Premium take-home product set"
      ],
      benefits: ["VIP treatment", "Personalized experience", "Exclusive access"],
      isPopular: false,
      isNew: false
    }
  ];

  const paymentMethods = [
    { name: "M-Pesa", icon: "Smartphone", description: "Instant mobile payment" },
    { name: "Visa/Mastercard", icon: "CreditCard", description: "International cards accepted" },
    { name: "Bank Transfer", icon: "Building", description: "Direct bank payment" },
    { name: "Cash", icon: "Banknote", description: "Pay at spa location" }
  ];

  const handleWhatsAppBooking = (packageName) => {
    const message = encodeURIComponent(`Karibu! I'd like to book the ${packageName} at Serenity Spa Kenya.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-accent text-lg text-secondary">Bei za Huduma</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">
              Investment in Your Beauty Journey
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated packages, each designed to honor African beauty traditions while delivering transformative results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {treatmentPackages.map((pkg) => (
            <div key={pkg.id} className={`relative bg-card rounded-2xl overflow-hidden transition-cultural ${pkg.isPopular ? 'ring-2 ring-accent cultural-shadow scale-105' : 'cultural-shadow hover:shadow-cultural'}`}>
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* New Badge */}
              {pkg.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium">
                    New
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="p-8 pb-6">
                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <p className="font-accent text-sm text-secondary italic mb-2">{pkg.culturalName}</p>
                  <p className="font-body text-text-secondary">{pkg.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="font-heading text-4xl font-bold text-primary">{pkg.price}</span>
                    <div className="text-left">
                      <div className="font-body text-sm text-text-secondary line-through">{pkg.originalPrice}</div>
                      <div className="font-body text-xs text-success">Save {pkg.savings}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
                    <Icon name="Clock" size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-body text-sm font-semibold text-primary mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-body text-sm font-semibold text-primary mb-3">Special Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.benefits.map((benefit, index) => (
                      <span key={index} className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link to="/booking-intelligence-portal">
                    <Button
                      variant={pkg.isPopular ? "default" : "outline"}
                      size="lg"
                      iconName="Calendar"
                      iconPosition="left"
                      className={`w-full ${pkg.isPopular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'}`}
                    >
                      Book Online
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => handleWhatsAppBooking(pkg.name)}
                    className="w-full text-success hover:bg-success/10"
                  >
                    WhatsApp Booking
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Flexible Payment Options
            </h3>
            <p className="font-body text-text-secondary">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-surface/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-surface/20 transition-cultural">
                  <Icon name={method.icon} size={24} className="text-surface" />
                </div>
                <h4 className="font-body text-sm font-semibold text-primary mb-1">{method.name}</h4>
                <p className="font-body text-xs text-text-secondary">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-6">
            <Icon name="Gift" size={32} className="text-accent mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              Special Offers & Discounts
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-heading text-lg font-bold">20%</span>
              </div>
              <h4 className="font-body text-sm font-semibold text-primary mb-2">First Visit Discount</h4>
              <p className="font-body text-xs text-text-secondary">New clients save 20% on any package</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-heading text-lg font-bold">3+1</span>
              </div>
              <h4 className="font-body text-sm font-semibold text-primary mb-2">Loyalty Reward</h4>
              <p className="font-body text-xs text-text-secondary">Book 3 sessions, get 1 free</p>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="bg-success text-success-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={20} />
              </div>
              <h4 className="font-body text-sm font-semibold text-primary mb-2">Group Booking</h4>
              <p className="font-body text-xs text-text-secondary">15% off for groups of 3 or more</p>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              Ready to Begin Your Journey?
            </h3>
            <p className="font-body text-text-secondary">
              Book now and experience the transformative power of African beauty traditions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking-intelligence-portal">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-cta hover:bg-cta/90 text-cta-foreground premium-hover min-w-[200px]"
              >
                Book Online Now
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+254700000000')}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground min-w-[200px]"
            >
              Call +254 700 000 000
            </Button>
          </div>
        </div>

        {/* Cultural Pattern Decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;