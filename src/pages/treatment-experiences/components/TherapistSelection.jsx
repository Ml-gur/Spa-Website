import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TherapistSelection = ({ therapists, onSelectTherapist }) => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const handleSelectTherapist = (therapist) => {
    setSelectedTherapist(therapist);
    onSelectTherapist(therapist);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-lg">Expert Care</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
            Meet Your Therapist
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Choose from our certified professionals, each specializing in African beauty traditions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className={`bg-card rounded-xl overflow-hidden cultural-shadow transition-cultural cursor-pointer ${
                selectedTherapist?.id === therapist.id
                  ? 'ring-2 ring-accent transform scale-105'
                  : 'hover:transform hover:scale-102'
              }`}
              onClick={() => handleSelectTherapist(therapist)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={therapist.image}
                  alt={`${therapist.name} - Certified Therapist`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  {therapist.isAvailable ? (
                    <div className="flex items-center gap-2 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm">
                      <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
                      Available Today
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-warning/90 text-warning-foreground px-3 py-1 rounded-full text-sm">
                      <Icon name="Clock" size={12} />
                      Book Ahead
                    </div>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {therapist.name}
                  </h3>
                  <p className="font-accent text-white/90 text-sm">
                    {therapist.title}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="font-body text-sm text-text-secondary">
                      {therapist.experience} years experience
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span className="font-body text-sm text-text-secondary">
                      {therapist.origin}
                    </span>
                  </div>
                </div>

                <p className="font-body text-sm text-text-primary mb-4 leading-relaxed">
                  {therapist.bio}
                </p>

                <div className="mb-4">
                  <h4 className="font-heading text-sm font-semibold text-primary mb-2">
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-surface/20 text-surface text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < therapist.rating ? 'text-accent fill-current' : 'text-border'}
                      />
                    ))}
                    <span className="font-body text-sm text-text-secondary ml-2">
                      ({therapist.reviewCount})
                    </span>
                  </div>

                  {selectedTherapist?.id === therapist.id && (
                    <Icon name="CheckCircle" size={20} className="text-success" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTherapist && (
          <div className="mt-8 text-center">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 max-w-md mx-auto">
              <Icon name="CheckCircle" size={24} className="text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                Therapist Selected
              </h3>
              <p className="font-body text-sm text-text-secondary mb-4">
                You've chosen {selectedTherapist.name} for your treatment experience
              </p>
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Continue to Booking
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TherapistSelection;