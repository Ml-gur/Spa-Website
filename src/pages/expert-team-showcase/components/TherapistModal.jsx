import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TherapistModal = ({ therapist, isOpen, onClose, onBookConsultation }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  if (!isOpen || !therapist) return null;

  const handleWhatsAppBook = () => {
    const message = encodeURIComponent(`Karibu! I'd like to book a consultation with ${therapist.name} at Serenity Spa Kenya. I'm interested in learning more about their ${therapist.culturalExpertise} expertise.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'User' },
    { id: 'expertise', label: 'Cultural Expertise', icon: 'Star' },
    { id: 'testimonials', label: 'Client Stories', icon: 'MessageSquare' },
    { id: 'philosophy', label: 'Philosophy', icon: 'Heart' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden cultural-shadow">
        {/* Header */}
        <div className="relative">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary">
                  {therapist.name}
                </h2>
                <p className="font-accent text-secondary">{therapist.title}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="text-sm text-text-secondary">{therapist.experience} years</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="text-sm text-text-secondary">{therapist.origin}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              iconName="X"
              className="text-text-secondary hover:text-primary"
            />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-body text-sm font-medium transition-cultural ${
                  activeTab === tab.id
                    ? 'text-accent border-b-2 border-accent bg-accent/5' :'text-text-secondary hover:text-accent'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Availability & Booking */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-body text-lg font-semibold text-primary">
                      Availability & Booking
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {therapist.isAvailable ? 'Available for booking today' : 'Book ahead for preferred times'}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    therapist.isAvailable 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-warning text-warning-foreground'
                  }`}>
                    {therapist.isAvailable ? 'Available' : 'Busy'}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => onBookConsultation(therapist)}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={handleWhatsAppBook}
                    className="border-cta text-cta hover:bg-cta hover:text-cta-foreground"
                  >
                    WhatsApp Chat
                  </Button>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="font-body text-lg font-semibold text-primary mb-3">
                  Treatment Specializations
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {therapist.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-surface/10 rounded-lg">
                      <Icon name="CheckCircle" size={16} className="text-surface" />
                      <span className="font-body text-sm text-text-primary">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-body text-lg font-semibold text-primary mb-3">
                  Professional Certifications
                </h3>
                <div className="space-y-2">
                  {therapist.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                      <Icon name="Award" size={20} className="text-accent" />
                      <div>
                        <p className="font-body text-sm font-medium text-primary">{cert.name}</p>
                        <p className="font-body text-xs text-text-secondary">{cert.institution} • {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'expertise' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {therapist.culturalExpertise}
                </h3>
                <p className="font-body text-text-secondary">
                  Specialized knowledge in traditional African beauty practices
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-body text-lg font-semibold text-primary mb-4">
                  Cultural Background & Training
                </h4>
                <p className="font-body text-text-secondary leading-relaxed mb-4">
                  {therapist.culturalBackground}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-body text-sm font-semibold text-primary">Traditional Techniques</h5>
                    {therapist.traditionalTechniques.map((technique, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Leaf" size={16} className="text-surface" />
                        <span className="font-body text-sm text-text-secondary">{technique}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-body text-sm font-semibold text-primary">Signature Ingredients</h5>
                    {therapist.signatureIngredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Flower" size={16} className="text-accent" />
                        <span className="font-body text-sm text-text-secondary">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Client Stories & Testimonials
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className={i < Math.floor(therapist.rating) ? 'text-accent fill-current' : 'text-border'}
                      />
                    ))}
                  </div>
                  <span className="font-body text-lg font-semibold text-primary">
                    {therapist.rating}
                  </span>
                  <span className="font-body text-text-secondary">
                    ({therapist.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {therapist.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border transition-cultural cursor-pointer ${
                      selectedTestimonial === index
                        ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                    }`}
                    onClick={() => setSelectedTestimonial(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h5 className="font-body text-sm font-semibold text-primary">
                            {testimonial.clientName}
                          </h5>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={12}
                                className={i < testimonial.rating ? 'text-accent fill-current' : 'text-border'}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="font-body text-sm text-text-secondary mb-2">
                          {testimonial.treatment} • {testimonial.date}
                        </p>
                        <p className="font-body text-text-primary leading-relaxed">
                          "{testimonial.review}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'philosophy' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-surface to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Treatment Philosophy
                </h3>
                <p className="font-body text-text-secondary">
                  Blending ancient wisdom with modern wellness
                </p>
              </div>

              <div className="bg-gradient-to-br from-surface/10 to-accent/10 rounded-lg p-6">
                <blockquote className="font-accent text-lg text-primary leading-relaxed text-center italic mb-6">
                  "{therapist.philosophy}"
                </blockquote>
                <div className="text-center">
                  <p className="font-body text-sm text-text-secondary">
                    — {therapist.name}, {therapist.title}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-body text-lg font-semibold text-primary">
                    Core Beliefs
                  </h4>
                  {therapist.coreBeliefs.map((belief, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-surface mt-0.5" />
                      <p className="font-body text-sm text-text-secondary">{belief}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-body text-lg font-semibold text-primary">
                    Approach to Wellness
                  </h4>
                  {therapist.wellnessApproach.map((approach, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Leaf" size={20} className="text-accent mt-0.5" />
                      <p className="font-body text-sm text-text-secondary">{approach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-border p-6">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="font-body text-sm text-text-secondary">Starting from</p>
              <p className="font-heading text-2xl font-bold text-accent">
                KES {therapist.startingPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppBook}
                className="border-cta text-cta hover:bg-cta hover:text-cta-foreground"
              >
                WhatsApp Chat
              </Button>
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => onBookConsultation(therapist)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground premium-hover"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistModal;