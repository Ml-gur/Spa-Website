import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MatchingSystem = ({ therapists, onMatchResults }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState({
    treatmentType: '',
    culturalInterest: '',
    personalityType: '',
    experienceLevel: '',
    availability: ''
  });
  const [isMatching, setIsMatching] = useState(false);

  const questions = [
    {
      id: 'treatmentType',
      title: 'What type of treatment are you most interested in?',
      subtitle: 'Help us understand your wellness goals',
      icon: 'Sparkles',
      options: [
        { value: 'relaxation', label: 'Relaxation & Stress Relief', description: 'Unwind and rejuvenate' },
        { value: 'skincare', label: 'Facial & Skincare', description: 'Enhance your natural glow' },
        { value: 'bodywork', label: 'Body Treatments & Massage', description: 'Deep tissue and therapeutic' },
        { value: 'traditional', label: 'Traditional African Rituals', description: 'Cultural wellness experiences' }
      ]
    },
    {
      id: 'culturalInterest',
      title: 'Which African beauty tradition interests you most?',
      subtitle: 'Connect with your preferred cultural heritage',
      icon: 'Globe',
      options: [
        { value: 'ethiopian', label: 'Ethiopian Honey Rituals', description: 'Ancient honey-based treatments' },
        { value: 'moroccan', label: 'Moroccan Argan Traditions', description: 'Luxurious argan oil therapies' },
        { value: 'kenyan', label: 'Kenyan Shea Butter Therapy', description: 'Local shea butter treatments' },
        { value: 'west-african', label: 'West African Black Soap', description: 'Traditional cleansing rituals' }
      ]
    },
    {
      id: 'personalityType',
      title: 'What type of therapist personality do you prefer?',
      subtitle: 'Find someone who matches your communication style',
      icon: 'Heart',
      options: [
        { value: 'nurturing', label: 'Nurturing & Motherly', description: 'Warm, caring, and protective' },
        { value: 'energetic', label: 'Energetic & Motivating', description: 'Uplifting and encouraging' },
        { value: 'calm', label: 'Calm & Meditative', description: 'Peaceful and centered' },
        { value: 'professional', label: 'Professional & Focused', description: 'Efficient and goal-oriented' }
      ]
    },
    {
      id: 'experienceLevel',
      title: 'How much experience would you prefer your therapist to have?',
      subtitle: 'Choose based on your comfort level',
      icon: 'Award',
      options: [
        { value: 'any', label: 'Any Experience Level', description: 'Open to all therapists' },
        { value: '5+', label: '5+ Years Experience', description: 'Established professionals' },
        { value: '10+', label: '10+ Years Experience', description: 'Highly experienced experts' },
        { value: '15+', label: '15+ Years Experience', description: 'Master-level therapists' }
      ]
    },
    {
      id: 'availability',
      title: 'When would you like to book your appointment?',
      subtitle: 'Help us find available therapists',
      icon: 'Calendar',
      options: [
        { value: 'today', label: 'Today', description: 'Same-day availability' },
        { value: 'week', label: 'This Week', description: 'Within 7 days' },
        { value: 'flexible', label: 'Flexible', description: 'Any time that works' },
        { value: 'specific', label: 'Specific Date', description: 'I have a date in mind' }
      ]
    }
  ];

  const handleOptionSelect = (value) => {
    const newPreferences = { ...preferences, [questions[currentStep].id]: value };
    setPreferences(newPreferences);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      handleMatching(newPreferences);
    }
  };

  const handleMatching = async (finalPreferences) => {
    setIsMatching(true);
    
    // Simulate AI matching algorithm
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple matching logic based on preferences
    const matches = therapists.map(therapist => {
      let score = 0;
      
      // Treatment type matching
      if (finalPreferences.treatmentType === 'traditional' && 
          therapist.specializations.some(spec => spec.includes('Traditional'))) {
        score += 30;
      }
      if (finalPreferences.treatmentType === 'skincare' && 
          therapist.specializations.some(spec => spec.includes('Facial'))) {
        score += 30;
      }
      if (finalPreferences.treatmentType === 'bodywork' && 
          therapist.specializations.some(spec => spec.includes('Massage'))) {
        score += 30;
      }
      
      // Cultural interest matching
      if (finalPreferences.culturalInterest === 'ethiopian' && therapist.culturalExpertise.includes('Ethiopian')) {
        score += 25;
      }
      if (finalPreferences.culturalInterest === 'moroccan' && therapist.culturalExpertise.includes('Moroccan')) {
        score += 25;
      }
      if (finalPreferences.culturalInterest === 'kenyan' && therapist.culturalExpertise.includes('Kenyan')) {
        score += 25;
      }
      
      // Experience matching
      const therapistYears = parseInt(therapist.experience);
      if (finalPreferences.experienceLevel === '5+' && therapistYears >= 5) score += 15;
      if (finalPreferences.experienceLevel === '10+' && therapistYears >= 10) score += 15;
      if (finalPreferences.experienceLevel === '15+' && therapistYears >= 15) score += 15;
      
      // Availability matching
      if (finalPreferences.availability === 'today' && therapist.isAvailable) {
        score += 20;
      }
      
      // Base score for rating
      score += therapist.rating * 2;
      
      return { ...therapist, matchScore: score };
    }).sort((a, b) => b.matchScore - a.matchScore);

    setIsMatching(false);
    onMatchResults(matches.slice(0, 3), finalPreferences);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setPreferences({
      treatmentType: '',
      culturalInterest: '',
      personalityType: '',
      experienceLevel: '',
      availability: ''
    });
  };

  if (isMatching) {
    return (
      <div className="bg-card rounded-2xl p-8 cultural-shadow text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Icon name="Sparkles" size={32} className="text-white" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">
          Finding Your Perfect Match
        </h3>
        <p className="font-body text-text-secondary mb-6">
          Our AI is analyzing your preferences to match you with the ideal therapist...
        </p>
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-accent rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="bg-card rounded-2xl p-8 cultural-shadow">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name={currentQuestion.icon} size={24} className="text-white" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">
          Therapist Matching System
        </h3>
        <p className="font-body text-text-secondary">
          Answer a few questions to find your perfect therapist match
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="font-body text-sm text-text-secondary">
            Question {currentStep + 1} of {questions.length}
          </span>
          <span className="font-body text-sm text-accent">
            {Math.round(((currentStep + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h4 className="font-heading text-xl font-bold text-primary mb-2">
          {currentQuestion.title}
        </h4>
        <p className="font-body text-text-secondary">
          {currentQuestion.subtitle}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect(option.value)}
            className="w-full p-4 text-left border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-cultural group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm font-semibold text-primary group-hover:text-accent transition-cultural">
                  {option.label}
                </p>
                <p className="font-body text-xs text-text-secondary">
                  {option.description}
                </p>
              </div>
              <Icon 
                name="ChevronRight" 
                size={20} 
                className="text-text-secondary group-hover:text-accent transition-cultural" 
              />
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="ghost"
          iconName="ChevronLeft"
          iconPosition="left"
          onClick={currentStep > 0 ? handlePrevious : handleReset}
          className="text-text-secondary hover:text-primary"
        >
          {currentStep > 0 ? 'Previous' : 'Start Over'}
        </Button>
        <div className="text-center">
          <p className="font-body text-xs text-text-secondary">
            Skip matching and browse all therapists
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchingSystem;