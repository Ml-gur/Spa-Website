import React from 'react';

import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LocationSection = () => {
  const locationFeatures = [
    {
      icon: "MapPin",
      title: "Prime Nairobi Location",
      description: "Located in the heart of Westlands, easily accessible from all parts of the city"
    },
    {
      icon: "Car",
      title: "Free Parking",
      description: "Complimentary secure parking for all our valued clients"
    },
    {
      icon: "Clock",
      title: "Flexible Hours",
      description: "Open 7 days a week with extended evening hours for your convenience"
    },
    {
      icon: "Shield",
      title: "Safe Environment",
      description: "24/7 security and sanitized facilities following international standards"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" }
  ];

  const nearbyLandmarks = [
    "Sarit Centre - 5 minutes walk",
    "Westgate Shopping Mall - 10 minutes drive",
    "UN Headquarters - 15 minutes drive",
    "Jomo Kenyatta Airport - 45 minutes drive"
  ];

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-accent text-lg text-secondary">Mahali Petu</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">
              Visit Our Nairobi Sanctuary
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our luxurious spa sanctuary in the heart of Nairobi, where modern comfort meets traditional African hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden cultural-shadow">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Serenity Spa Kenya Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=-1.2634,36.8084&z=15&output=embed"
                className="border-0"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="font-body text-sm font-medium text-primary">Serenity Spa Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Features */}
            <div className="grid grid-cols-2 gap-4">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-primary mb-1">{feature.title}</h4>
                    <p className="font-body text-xs text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Address</h3>
              <div className="bg-background rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-body text-primary font-medium mb-2">Serenity Spa Kenya</p>
                    <p className="font-body text-text-secondary">
                      Westlands Square, 3rd Floor<br />
                      Ring Road Parklands<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <div>
                    <p className="font-body text-primary font-medium">+254 700 000 000</p>
                    <p className="font-body text-xs text-text-secondary">WhatsApp & Calls</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <div>
                    <p className="font-body text-primary font-medium">karibu@serenityspa.ke</p>
                    <p className="font-body text-xs text-text-secondary">Email inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Operating Hours</h3>
              <div className="bg-background rounded-lg p-6">
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-body text-primary font-medium">{schedule.day}</span>
                      <span className="font-body text-text-secondary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-success" />
                    <span className="font-body text-sm text-success font-medium">Open Now</span>
                  </div>
                  <p className="font-body text-xs text-text-secondary mt-1">
                    Extended hours available for special bookings
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Nearby Landmarks</h3>
              <div className="bg-background rounded-lg p-6">
                <ul className="space-y-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="Navigation" size={16} className="text-accent" />
                      <span className="font-body text-text-secondary">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                variant="default"
                size="lg"
                iconName="Navigation"
                iconPosition="left"
                onClick={() => window.open('https://maps.google.com?q=-1.2634,36.8084', '_blank')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Get Directions
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+254700000000')}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    const message = encodeURIComponent("Karibu! I'd like to visit Serenity Spa Kenya. Can you provide directions?");
                    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
                  }}
                  className="border-success text-success hover:bg-success hover:text-success-foreground"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Icon name="Car" size={32} className="text-accent mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              How to Reach Us
            </h3>
            <p className="font-body text-text-secondary">
              Multiple convenient transportation options to our spa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Car" size={24} className="text-accent" />
              </div>
              <h4 className="font-body text-sm font-semibold text-primary mb-2">Private Car</h4>
              <p className="font-body text-xs text-text-secondary">
                Free secure parking available. GPS coordinates: -1.2634, 36.8084
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Bus" size={24} className="text-secondary" />
              </div>
              <h4 className="font-body text-sm font-semibold text-primary mb-2">Public Transport</h4>
              <p className="font-body text-xs text-text-secondary">
                Matatu routes 46, 100, 102. Alight at Westlands roundabout
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={24} className="text-success" />
              </div>
              <h4 className="font-body text-sm font-semibold text-primary mb-2">Ride Hailing</h4>
              <p className="font-body text-xs text-text-secondary">
                Uber, Bolt, Little Cab available. Search "Westlands Square"
              </p>
            </div>
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

export default LocationSection;