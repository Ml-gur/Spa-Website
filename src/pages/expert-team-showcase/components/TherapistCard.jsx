import React, { useState } from 'react';

import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TherapistCard = ({ therapist, onBookConsultation, onWhatsAppBook }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWhatsAppBook = () => {
    const message = encodeURIComponent(`Karibu! I'd like to book a session with ${therapist.name} at Serenity Spa Kenya.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
    onWhatsAppBook?.(therapist);
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden cultural-shadow hover:shadow-cultural transition-cultural group">
      {/* Therapist Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={therapist.image}
          alt={`${therapist.name} - Expert Therapist at Serenity Spa Kenya`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-cultural"></div>
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            therapist.isAvailable 
              ? 'bg-success text-success-foreground' 
              : 'bg-warning text-warning-foreground'
          }`}>
            {therapist.isAvailable ? 'Available Today' : 'Book Ahead'}
          </div>
        </div>

        {/* Cultural Expertise Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            {therapist.culturalExpertise}
          </div>
        </div>
      </div>

      {/* Therapist Information */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-heading text-xl font-bold text-primary mb-1">
            {therapist.name}
          </h3>
          <p className="font-accent text-secondary text-sm mb-2">
            {therapist.title}
          </p>
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={16} className="text-accent" />
              <span>{therapist.experience} years</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={16} className="text-accent" />
              <span>{therapist.origin}</span>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-4">
          <h4 className="font-body text-sm font-semibold text-primary mb-2">Specializations</h4>
          <div className="flex flex-wrap gap-2">
            {therapist.specializations.slice(0, 3).map((spec, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-surface/20 text-surface-foreground text-xs rounded-md"
              >
                {spec}
              </span>
            ))}
            {therapist.specializations.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{therapist.specializations.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Philosophy Preview */}
        <div className="mb-4">
          <p className="font-body text-sm text-text-secondary line-clamp-2">
            "{therapist.philosophy}"
          </p>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(therapist.rating) ? 'text-accent fill-current' : 'text-border'}
                />
              ))}
            </div>
            <span className="font-body text-sm text-text-secondary">
              {therapist.rating} ({therapist.reviewCount} reviews)
            </span>
          </div>
          <div className="text-right">
            <p className="font-body text-xs text-text-secondary">Starting from</p>
            <p className="font-heading text-lg font-bold text-accent">
              KES {therapist.startingPrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => onBookConsultation(therapist)}
            className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Book Session
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={handleWhatsAppBook}
            className="flex-1 bg-cta hover:bg-cta/90 text-cta-foreground"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;