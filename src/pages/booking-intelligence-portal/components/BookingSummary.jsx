import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BookingSummary = ({ 
  selectedTreatments = [], 
  selectedTherapist, 
  selectedDateTime, 
  onConfirmBooking,
  onEditStep 
}) => {
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    skinType: '',
    allergies: '',
    previousVisit: false,
    specialRequests: '',
    preferredLanguage: 'english',
    marketingConsent: false
  });
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const genderOptions = [
    { value: '', label: 'Prefer not to say' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' }
  ];

  const skinTypeOptions = [
    { value: '', label: 'Not sure' },
    { value: 'normal', label: 'Normal' },
    { value: 'dry', label: 'Dry' },
    { value: 'oily', label: 'Oily' },
    { value: 'combination', label: 'Combination' },
    { value: 'sensitive', label: 'Sensitive' }
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'swahili', label: 'Swahili' },
    { value: 'both', label: 'Both English & Swahili' }
  ];

  const paymentOptions = [
    { value: 'mpesa', label: 'M-Pesa', icon: 'Smartphone' },
    { value: 'card', label: 'Credit/Debit Card', icon: 'CreditCard' },
    { value: 'cash', label: 'Pay at Spa', icon: 'Banknote' }
  ];

  const calculateTotal = () => {
    return selectedTreatments.reduce((total, treatment) => {
      if (treatment.packagePrice) {
        return total + treatment.packagePrice;
      }
      return total + treatment.price;
    }, 0);
  };

  const calculateSavings = () => {
    return selectedTreatments.reduce((savings, treatment) => {
      if (treatment.savings) {
        return savings + treatment.savings;
      }
      return savings;
    }, 0);
  };

  const getTotalDuration = () => {
    return selectedTreatments.reduce((total, treatment) => {
      return total + treatment.duration;
    }, 0);
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0 && mins > 0) {
      return `${hours}h ${mins}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${mins}m`;
    }
  };

  const handleInputChange = (field, value) => {
    setClientInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const bookingData = {
      treatments: selectedTreatments,
      therapist: selectedTherapist,
      dateTime: selectedDateTime,
      clientInfo,
      paymentMethod,
      total: calculateTotal(),
      bookingId: `SPA${Date.now()}`,
      timestamp: new Date().toISOString()
    };
    
    if (onConfirmBooking) {
      onConfirmBooking(bookingData);
    }
    
    setIsSubmitting(false);
  };

  const isFormValid = () => {
    return clientInfo.firstName && 
           clientInfo.lastName && 
           clientInfo.email && 
           clientInfo.phone &&
           selectedTreatments.length > 0 &&
           selectedTherapist &&
           selectedDateTime;
  };

  const total = calculateTotal();
  const savings = calculateSavings();

  return (
    <div className="bg-white rounded-xl cultural-shadow border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-cta p-6 text-white">
        <h3 className="font-heading text-xl font-semibold mb-2">Booking Summary</h3>
        <p className="text-accent-foreground/80">Review your selection and complete your booking</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Treatment Summary */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading font-semibold text-primary">Selected Treatments</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEditStep && onEditStep('treatments')}
              iconName="Edit"
              className="text-accent hover:text-accent/80"
            >
              Edit
            </Button>
          </div>
          
          <div className="space-y-3">
            {selectedTreatments.map((treatment) => (
              <div key={treatment.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex-1">
                  <h5 className="font-body font-semibold text-primary">{treatment.name}</h5>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary mt-1">
                    <span>{formatDuration(treatment.duration)}</span>
                    {treatment.packagePrice && (
                      <span className="text-success">Package Deal</span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  {treatment.originalPrice && (
                    <div className="text-text-secondary line-through text-sm">
                      KES {treatment.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="font-semibold text-accent">
                    KES {(treatment.packagePrice || treatment.price).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Therapist Summary */}
        {selectedTherapist && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-semibold text-primary">Selected Therapist</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEditStep && onEditStep('therapist')}
                iconName="Edit"
                className="text-accent hover:text-accent/80"
              >
                Edit
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={selectedTherapist.image}
                  alt={selectedTherapist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h5 className="font-body font-semibold text-primary">{selectedTherapist.name}</h5>
                <p className="text-text-secondary text-sm">{selectedTherapist.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Icon name="Star" size={14} className="text-warning fill-current" />
                  <span className="text-sm text-text-secondary">{selectedTherapist.rating} rating</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Date & Time Summary */}
        {selectedDateTime && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-semibold text-primary">Date & Time</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEditStep && onEditStep('datetime')}
                iconName="Edit"
                className="text-accent hover:text-accent/80"
              >
                Edit
              </Button>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-primary">
                    {selectedDateTime.date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {selectedDateTime.date.toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true
                    })} - {selectedDateTime.endTime.toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-accent">{formatDuration(getTotalDuration())}</div>
                  <div className="text-text-secondary text-sm">Total duration</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client Information */}
        <div>
          <h4 className="font-heading font-semibold text-primary mb-4">Your Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="First Name"
              type="text"
              required
              value={clientInfo.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              type="text"
              required
              value={clientInfo.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Enter your last name"
            />
            <Input
              label="Email Address"
              type="email"
              required
              value={clientInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
            />
            <Input
              label="Phone Number"
              type="tel"
              required
              value={clientInfo.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+254 700 000 000"
            />
            <Select
              label="Gender (Optional)"
              options={genderOptions}
              value={clientInfo.gender}
              onChange={(value) => handleInputChange('gender', value)}
            />
            <Input
              label="Age (Optional)"
              type="number"
              value={clientInfo.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              placeholder="25"
              min="16"
              max="100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Select
              label="Skin Type (Optional)"
              options={skinTypeOptions}
              value={clientInfo.skinType}
              onChange={(value) => handleInputChange('skinType', value)}
            />
            <Select
              label="Preferred Language"
              options={languageOptions}
              value={clientInfo.preferredLanguage}
              onChange={(value) => handleInputChange('preferredLanguage', value)}
            />
          </div>

          <div className="space-y-4">
            <Input
              label="Allergies or Sensitivities (Optional)"
              type="text"
              value={clientInfo.allergies}
              onChange={(e) => handleInputChange('allergies', e.target.value)}
              placeholder="Please list any allergies or skin sensitivities"
            />
            <Input
              label="Special Requests (Optional)"
              type="text"
              value={clientInfo.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              placeholder="Any special requests or preferences?"
            />
          </div>

          <div className="mt-4 space-y-3">
            <Checkbox
              label="I have visited Serenity Spa before"
              checked={clientInfo.previousVisit}
              onChange={(e) => handleInputChange('previousVisit', e.target.checked)}
            />
            <Checkbox
              label="I agree to receive marketing communications about special offers and wellness tips"
              checked={clientInfo.marketingConsent}
              onChange={(e) => handleInputChange('marketingConsent', e.target.checked)}
            />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h4 className="font-heading font-semibold text-primary mb-4">Payment Method</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {paymentOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setPaymentMethod(option.value)}
                className={`p-4 rounded-lg border transition-cultural ${
                  paymentMethod === option.value
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={option.icon} size={20} className="text-accent" />
                  <span className="font-medium text-primary">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-muted rounded-lg p-4">
          <h4 className="font-heading font-semibold text-primary mb-3">Price Summary</h4>
          
          <div className="space-y-2">
            {selectedTreatments.map((treatment) => (
              <div key={treatment.id} className="flex justify-between text-sm">
                <span className="text-text-secondary">{treatment.name}</span>
                <span className="text-primary">
                  KES {(treatment.packagePrice || treatment.price).toLocaleString()}
                </span>
              </div>
            ))}
            
            {savings > 0 && (
              <div className="flex justify-between text-sm border-t border-border pt-2">
                <span className="text-success font-semibold">Package Savings</span>
                <span className="text-success font-semibold">-KES {savings.toLocaleString()}</span>
              </div>
            )}
            
            <div className="flex justify-between font-semibold text-lg border-t border-border pt-2">
              <span className="text-primary">Total</span>
              <span className="text-accent">KES {total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Booking Policies */}
        <div className="text-sm text-text-secondary bg-muted/50 rounded-lg p-4">
          <h5 className="font-semibold text-primary mb-2">Booking Policies</h5>
          <ul className="space-y-1 list-disc list-inside">
            <li>Cancellations must be made at least 24 hours in advance</li>
            <li>Late arrivals may result in shortened treatment time</li>
            <li>Please arrive 15 minutes early for your first visit</li>
            <li>Payment is required to confirm your booking</li>
          </ul>
        </div>

        {/* Confirm Button */}
        <Button
          variant="default"
          fullWidth
          onClick={handleSubmit}
          disabled={!isFormValid() || isSubmitting}
          loading={isSubmitting}
          iconName="Check"
          iconPosition="left"
          className="bg-cta hover:bg-cta/90 text-cta-foreground premium-hover"
        >
          {isSubmitting ? 'Processing Booking...' : `Confirm Booking - KES ${total.toLocaleString()}`}
        </Button>
      </div>
    </div>
  );
};

export default BookingSummary;