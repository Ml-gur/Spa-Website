import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TreatmentHero = ({ treatment, onBookNow }) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={treatment.heroImage}
          alt={`${treatment.name} treatment at Serenity Spa Kenya`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-accent text-sm rounded-full">
                {treatment.category}
              </span>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {treatment.name}
            </h1>
            
            <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
              {treatment.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={onBookNow}
                className="bg-accent hover:bg-accent/90 text-accent-foreground premium-hover"
              >
                Book This Experience
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                WhatsApp Inquiry
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="font-body text-sm">Duration:</span>
                <span className="font-accent text-lg">{treatment.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body text-sm">From:</span>
                <span className="font-accent text-lg">KES {treatment.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentHero;