import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WhatsAppBookingWidget = ({ onQuickBook }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickBookingOptions = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      subtitle: 'Karibu! Start your journey',
      duration: '30 min',
      price: 'Free',
      message: "Karibu! I\'d like to book a free consultation to discuss my wellness journey at Serenity Spa Kenya."
    },
    {
      id: 'signature',
      title: 'Signature African Facial',
      subtitle: 'Our most popular treatment',
      duration: '90 min',
      price: 'KES 8,500',
      message: "I\'d like to book the Signature African Facial treatment. Please help me find the best time slot."
    },
    {
      id: 'heritage',
      title: 'Heritage Wellness Package',
      subtitle: 'Full cultural experience',
      duration: '3 hours',
      price: 'KES 18,000',
      message: "I\'m interested in the Heritage Wellness Package. Could you help me schedule this cultural experience?"
    }
  ];

  const handleWhatsAppBooking = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254700000000?text=${encodedMessage}`, '_blank');
    if (onQuickBook) onQuickBook();
  };

  const handleGeneralBooking = () => {
    const message = "Karibu! I'd like to explore booking options at Serenity Spa Kenya. Could you help me find the perfect treatment?";
    handleWhatsAppBooking(message);
  };

  return (
    <div className="bg-white rounded-xl cultural-shadow border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={24} />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">WhatsApp Booking</h3>
              <p className="text-green-100 text-sm">Instant response • Available 24/7</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white hover:bg-white/20"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          />
        </div>
      </div>

      {/* Quick Booking Options */}
      <div className="p-6">
        <div className="mb-6">
          <h4 className="font-heading text-lg font-semibold text-primary mb-2">Quick Book Popular Treatments</h4>
          <p className="text-text-secondary text-sm">Start a WhatsApp conversation with pre-filled treatment details</p>
        </div>

        <div className="space-y-3 mb-6">
          {quickBookingOptions.map((option) => (
            <div
              key={option.id}
              className="border border-border rounded-lg p-4 hover:border-accent transition-cultural cursor-pointer group"
              onClick={() => handleWhatsAppBooking(option.message)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className="font-body font-semibold text-primary group-hover:text-accent transition-cultural">
                      {option.title}
                    </h5>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {option.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-2">{option.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-accent">{option.price}</span>
                    <div className="flex items-center text-green-600 text-sm">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      <span>Book via WhatsApp</span>
                    </div>
                  </div>
                </div>
                <Icon name="ChevronRight" size={20} className="text-text-secondary group-hover:text-accent transition-cultural" />
              </div>
            </div>
          ))}
        </div>

        {/* General Booking Button */}
        <Button
          variant="default"
          fullWidth
          onClick={handleGeneralBooking}
          iconName="MessageCircle"
          iconPosition="left"
          className="bg-green-500 hover:bg-green-600 text-white premium-hover"
        >
          Start WhatsApp Conversation
        </Button>

        {/* Expanded Features */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <Icon name="Clock" size={20} className="text-accent mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary">Instant Response</p>
                <p className="text-xs text-text-secondary">AI-powered booking</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <Icon name="Globe" size={20} className="text-accent mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary">Multi-language</p>
                <p className="text-xs text-text-secondary">English & Swahili</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppBookingWidget;