import React from 'react';
import Icon from '../../../components/AppIcon';

const BookingProgress = ({ currentStep, completedSteps = [] }) => {
  const steps = [
    {
      id: 'treatments',
      title: 'Select Treatments',
      description: 'Choose your wellness experience',
      icon: 'Sparkles'
    },
    {
      id: 'therapist',
      title: 'Choose Therapist',
      description: 'Find your perfect match',
      icon: 'Users'
    },
    {
      id: 'datetime',
      title: 'Pick Date & Time',
      description: 'Schedule your visit',
      icon: 'Calendar'
    },
    {
      id: 'summary',
      title: 'Review & Book',
      description: 'Confirm your booking',
      icon: 'Check'
    }
  ];

  const getStepStatus = (stepId) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const getStepIndex = (stepId) => {
    return steps.findIndex(step => step.id === stepId);
  };

  const currentStepIndex = getStepIndex(currentStep);

  return (
    <div className="bg-white rounded-xl cultural-shadow border border-border overflow-hidden">
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-primary mb-6 text-center">
          Booking Progress
        </h3>
        
        {/* Desktop Progress */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border z-0">
              <div 
                className="h-full bg-accent transition-all duration-500 ease-out"
                style={{ 
                  width: `${(currentStepIndex / (steps.length - 1)) * 100}%` 
                }}
              ></div>
            </div>
            
            {steps.map((step, index) => {
              const status = getStepStatus(step.id);
              const isClickable = index <= currentStepIndex;
              
              return (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-cultural mb-3 ${
                      status === 'completed'
                        ? 'bg-success text-success-foreground'
                        : status === 'current' ?'bg-accent text-accent-foreground'
                        : isClickable
                        ? 'bg-muted text-text-secondary hover:bg-accent/20 cursor-pointer' :'bg-muted text-text-secondary/50'
                    }`}
                  >
                    {status === 'completed' ? (
                      <Icon name="Check" size={20} />
                    ) : (
                      <Icon name={step.icon} size={20} />
                    )}
                  </div>
                  <div className="text-center max-w-24">
                    <div
                      className={`font-body font-semibold text-sm mb-1 ${
                        status === 'current' ?'text-accent'
                          : status === 'completed' ?'text-success' :'text-text-secondary'
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Progress */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const isClickable = index <= currentStepIndex;
            
            return (
              <div key={step.id} className="flex items-center space-x-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-cultural ${
                    status === 'completed'
                      ? 'bg-success text-success-foreground'
                      : status === 'current' ?'bg-accent text-accent-foreground'
                      : isClickable
                      ? 'bg-muted text-text-secondary' :'bg-muted text-text-secondary/50'
                  }`}
                >
                  {status === 'completed' ? (
                    <Icon name="Check" size={18} />
                  ) : (
                    <Icon name={step.icon} size={18} />
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`font-body font-semibold text-sm mb-1 ${
                      status === 'current' ?'text-accent'
                        : status === 'completed' ?'text-success' :'text-text-secondary'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {step.description}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-border absolute left-5 mt-10"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">
              Step {currentStepIndex + 1} of {steps.length}
            </span>
            <span className="text-accent font-semibold">
              {Math.round(((currentStepIndex + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="mt-2 w-full bg-border rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${((currentStepIndex + 1) / steps.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>

        {/* Cultural Encouragement */}
        <div className="mt-4 text-center">
          <p className="text-sm text-text-secondary italic">
            {currentStep === 'treatments' && "Karibu! Let's find your perfect wellness experience"}
            {currentStep === 'therapist' && "Discover your ideal healing companion"}
            {currentStep === 'datetime' && "Choose the perfect time for your journey"}
            {currentStep === 'summary' && "Almost there! Your transformation awaits"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingProgress;