import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import WhatsAppBookingWidget from './components/WhatsAppBookingWidget';
import TreatmentSelector from './components/TreatmentSelector';
import TherapistMatcher from './components/TherapistMatcher';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import BookingSummary from './components/BookingSummary';
import BookingProgress from './components/BookingProgress';

const BookingIntelligencePortal = () => {
  const [currentStep, setCurrentStep] = useState('treatments');
  const [completedSteps, setCompletedSteps] = useState([]);
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleTreatmentSelect = (treatment, type = 'individual') => {
    if (type === 'package') {
      setSelectedTreatments([treatment]);
    } else {
      const exists = selectedTreatments.find(t => t.id === treatment.id);
      if (exists) {
        setSelectedTreatments(prev => prev.filter(t => t.id !== treatment.id));
      } else {
        setSelectedTreatments(prev => [...prev, treatment]);
      }
    }
  };

  const handleTherapistSelect = (therapist) => {
    setSelectedTherapist(therapist);
  };

  const handleTimeSelect = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const handleStepComplete = (step) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps(prev => [...prev, step]);
    }
  };

  const handleNextStep = () => {
    handleStepComplete(currentStep);
    
    switch (currentStep) {
      case 'treatments': setCurrentStep('therapist');
        break;
      case 'therapist': setCurrentStep('datetime');
        break;
      case 'datetime': setCurrentStep('summary');
        break;
      default:
        break;
    }
  };

  const handlePreviousStep = () => {
    switch (currentStep) {
      case 'therapist': setCurrentStep('treatments');
        break;
      case 'datetime': setCurrentStep('therapist');
        break;
      case 'summary': setCurrentStep('datetime');
        break;
      default:
        break;
    }
  };

  const handleEditStep = (step) => {
    setCurrentStep(step);
  };

  const handleConfirmBooking = (booking) => {
    setBookingData(booking);
    setBookingConfirmed(true);
  };

  const handleQuickBook = () => {
    // Quick book action handled by WhatsApp widget
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'treatments':
        return selectedTreatments.length > 0;
      case 'therapist':
        return selectedTherapist !== null;
      case 'datetime':
        return selectedDateTime !== null;
      case 'summary':
        return true;
      default:
        return false;
    }
  };

  if (bookingConfirmed && bookingData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={40} className="text-success-foreground" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-primary mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-text-secondary text-lg">
                Asante sana! Your wellness journey is scheduled.
              </p>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-xl cultural-shadow border border-border p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                    Booking Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Booking ID:</span>
                      <span className="font-semibold text-primary">{bookingData.bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Date:</span>
                      <span className="font-semibold text-primary">
                        {bookingData.dateTime.date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Time:</span>
                      <span className="font-semibold text-primary">
                        {bookingData.dateTime.date.toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                          hour12: true
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Therapist:</span>
                      <span className="font-semibold text-primary">{bookingData.therapist.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Total:</span>
                      <span className="font-semibold text-accent text-lg">
                        KES {bookingData.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                    Your Treatments
                  </h3>
                  <div className="space-y-2">
                    {bookingData.treatments.map((treatment) => (
                      <div key={treatment.id} className="flex justify-between">
                        <span className="text-text-secondary">{treatment.name}</span>
                        <span className="text-primary">
                          {Math.floor(treatment.duration / 60)}h {treatment.duration % 60}m
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                What's Next?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MessageCircle" size={20} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">WhatsApp Confirmation</h4>
                    <p className="text-text-secondary text-sm">
                      You'll receive a WhatsApp message with your booking details
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={20} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Email Reminder</h4>
                    <p className="text-text-secondary text-sm">
                      Check your email for preparation instructions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Arrive Early</h4>
                    <p className="text-text-secondary text-sm">
                      Please arrive 15 minutes before your appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={() => {
                  setBookingConfirmed(false);
                  setBookingData(null);
                  setCurrentStep('treatments');
                  setCompletedSteps([]);
                  setSelectedTreatments([]);
                  setSelectedTherapist(null);
                  setSelectedDateTime(null);
                }}
                iconName="Plus"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90"
              >
                Book Another Treatment
              </Button>
              <Link to="/homepage-african-luxury-spa">
                <Button variant="outline" iconName="Home" iconPosition="left">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Booking Intelligence Portal
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Experience our AI-powered booking system that learns your preferences and creates 
                the perfect wellness journey tailored to your needs.
              </p>
            </div>
            
            {/* Cultural Welcome */}
            <div className="text-center">
              <p className="font-accent text-2xl text-accent-foreground/80 mb-2">Karibu</p>
              <p className="text-primary-foreground/70">
                Welcome to a smarter way to book your African luxury spa experience
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Progress Tracker */}
              <BookingProgress 
                currentStep={currentStep}
                completedSteps={completedSteps}
              />

              {/* WhatsApp Quick Booking */}
              <WhatsAppBookingWidget onQuickBook={handleQuickBook} />

              {/* Help & Support */}
              <div className="bg-white rounded-xl cultural-shadow border border-border p-6">
                <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                  Need Help?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Icon name="Phone" size={16} className="text-accent" />
                    <span className="text-text-secondary">+254 700 000 000</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Icon name="Mail" size={16} className="text-accent" />
                    <span className="text-text-secondary">book@serenityspa.ke</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="text-text-secondary">Westlands, Nairobi</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  className="mt-4"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Live Chat Support
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Step Content */}
                {currentStep === 'treatments' && (
                  <TreatmentSelector
                    onTreatmentSelect={handleTreatmentSelect}
                    selectedTreatments={selectedTreatments}
                  />
                )}

                {currentStep === 'therapist' && (
                  <TherapistMatcher
                    selectedTreatments={selectedTreatments}
                    onTherapistSelect={handleTherapistSelect}
                    selectedTherapist={selectedTherapist}
                  />
                )}

                {currentStep === 'datetime' && (
                  <AvailabilityCalendar
                    selectedTherapist={selectedTherapist}
                    selectedTreatments={selectedTreatments}
                    onTimeSelect={handleTimeSelect}
                    selectedDateTime={selectedDateTime}
                  />
                )}

                {currentStep === 'summary' && (
                  <BookingSummary
                    selectedTreatments={selectedTreatments}
                    selectedTherapist={selectedTherapist}
                    selectedDateTime={selectedDateTime}
                    onConfirmBooking={handleConfirmBooking}
                    onEditStep={handleEditStep}
                  />
                )}

                {/* Navigation */}
                {currentStep !== 'summary' && (
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePreviousStep}
                      disabled={currentStep === 'treatments'}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="default"
                      onClick={handleNextStep}
                      disabled={!canProceed()}
                      iconName="ChevronRight"
                      iconPosition="right"
                      className="bg-accent hover:bg-accent/90"
                    >
                      {currentStep === 'datetime' ? 'Review Booking' : 'Continue'}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Pattern Footer */}
        <div className="bg-muted py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-full opacity-60"></div>
            </div>
            <p className="text-text-secondary text-sm">
              Experience the wisdom of African wellness traditions with modern luxury
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingIntelligencePortal;