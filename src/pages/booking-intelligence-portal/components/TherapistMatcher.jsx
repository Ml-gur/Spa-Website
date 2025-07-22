import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TherapistMatcher = ({ selectedTreatments = [], onTherapistSelect, selectedTherapist }) => {
  const [preferences, setPreferences] = useState({
    gender: '',
    experience: '',
    specialization: '',
    language: '',
    personality: []
  });
  const [showAllTherapists, setShowAllTherapists] = useState(false);

  const therapists = [
    {
      id: 'amara-njeri',
      name: 'Amara Njeri',
      title: 'Senior Cultural Wellness Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      experience: 8,
      gender: 'female',
      languages: ['English', 'Swahili', 'Kikuyu'],
      specializations: ['African Facial Rituals', 'Heritage Experiences', 'Therapeutic Treatments'],
      personality: ['warm', 'spiritual', 'knowledgeable'],
      rating: 4.9,
      reviews: 127,
      bio: `Amara brings deep knowledge of traditional Kenyan beauty practices\nTrained in both modern spa techniques and ancestral healing methods\nSpecializes in creating transformative cultural experiences for clients`,
      certifications: ['International Spa Therapy', 'Traditional African Healing', 'Aromatherapy'],
      availability: 'high',
      cultural_background: 'Born and raised in Nairobi, deeply connected to Kikuyu traditions',
      signature_treatment: 'Heritage Cleansing Ritual'
    },
    {
      id: 'kesi-mwangi',
      name: 'Kesi Mwangi',
      title: 'Master Therapeutic Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      experience: 12,
      gender: 'male',
      languages: ['English', 'Swahili', 'Luo'],
      specializations: ['Therapeutic Treatments', 'Body Wellness', 'Deep Tissue Massage'],
      personality: ['professional', 'focused', 'healing'],
      rating: 4.8,
      reviews: 89,
      bio: `Kesi combines traditional African massage techniques with modern therapy\nExpert in deep tissue work and stress relief treatments\nKnown for his intuitive understanding of body tension patterns`,
      certifications: ['Deep Tissue Massage', 'Sports Therapy', 'Traditional Healing'],
      availability: 'medium',
      cultural_background: 'From Kisumu, brings Lake Victoria healing traditions',
      signature_treatment: 'Therapeutic African Massage'
    },
    {
      id: 'zara-hassan',
      name: 'Zara Hassan',
      title: 'Facial Artistry Expert',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      experience: 6,
      gender: 'female',
      languages: ['English', 'Swahili', 'Arabic'],
      specializations: ['African Facial Rituals', 'Anti-aging Treatments', 'Sensitive Skin Care'],
      personality: ['gentle', 'artistic', 'detail-oriented'],
      rating: 4.9,
      reviews: 156,
      bio: `Zara specializes in facial treatments that celebrate natural beauty\nExpert in working with diverse skin tones and types\nKnown for her gentle touch and artistic approach to skincare`,
      certifications: ['Advanced Facial Therapy', 'Skin Analysis', 'Natural Skincare'],
      availability: 'high',
      cultural_background: 'Coastal heritage brings unique botanical knowledge',
      signature_treatment: 'African Gold Radiance Facial'
    },
    {
      id: 'jengo-kimani',
      name: 'Jengo Kimani',
      title: 'Body Wellness Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      experience: 10,
      gender: 'male',
      languages: ['English', 'Swahili', 'Meru'],
      specializations: ['Body Wellness', 'Detox Treatments', 'Holistic Healing'],
      personality: ['calming', 'wise', 'holistic'],
      rating: 4.7,
      reviews: 98,
      bio: `Jengo focuses on full-body wellness and detoxification treatments\nCombines traditional herbs with modern body therapy techniques\nExcellent for clients seeking comprehensive wellness experiences`,
      certifications: ['Body Therapy', 'Detox Specialist', 'Herbal Medicine'],
      availability: 'medium',
      cultural_background: 'Mount Kenya region, expert in highland healing plants',
      signature_treatment: 'Baobab Tree Body Wrap'
    },
    {
      id: 'asha-wanjiku',
      name: 'Asha Wanjiku',
      title: 'Hair & Scalp Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      experience: 7,
      gender: 'female',
      languages: ['English', 'Swahili', 'Kikuyu'],
      specializations: ['Hair Care', 'Scalp Treatments', 'Natural Hair Styling'],
      personality: ['creative', 'nurturing', 'empowering'],
      rating: 4.8,
      reviews: 134,
      bio: `Asha celebrates the beauty of natural African hair textures\nSpecializes in scalp health and protective styling techniques\nPassionate about empowering clients to embrace their natural beauty`,
      certifications: ['Trichology', 'Natural Hair Care', 'Scalp Therapy'],
      availability: 'high',
      cultural_background: 'Central Kenya, expert in traditional hair care methods',
      signature_treatment: 'Marula Oil Hair & Scalp Treatment'
    }
  ];

  const genderOptions = [
    { value: '', label: 'No preference' },
    { value: 'female', label: 'Female therapist' },
    { value: 'male', label: 'Male therapist' }
  ];

  const experienceOptions = [
    { value: '', label: 'Any experience level' },
    { value: 'junior', label: '3-5 years experience' },
    { value: 'senior', label: '6-10 years experience' },
    { value: 'master', label: '10+ years experience' }
  ];

  const languageOptions = [
    { value: '', label: 'English (default)' },
    { value: 'swahili', label: 'Swahili preferred' },
    { value: 'multilingual', label: 'Multiple languages' }
  ];

  const personalityTraits = [
    { id: 'warm', label: 'Warm & Friendly' },
    { id: 'professional', label: 'Professional & Focused' },
    { id: 'spiritual', label: 'Spiritual & Mindful' },
    { id: 'gentle', label: 'Gentle & Caring' },
    { id: 'energetic', label: 'Energetic & Uplifting' },
    { id: 'calming', label: 'Calming & Peaceful' }
  ];

  const getMatchScore = (therapist) => {
    let score = 0;
    let maxScore = 0;

    // Treatment specialization match
    if (selectedTreatments.length > 0) {
      maxScore += 40;
      const treatmentMatch = selectedTreatments.some(treatment => 
        therapist.specializations.some(spec => 
          treatment.category === 'facial' && spec.includes('Facial') ||
          treatment.category === 'body' && spec.includes('Body') ||
          treatment.category === 'heritage' && spec.includes('Heritage') ||
          treatment.category === 'therapeutic' && spec.includes('Therapeutic')
        )
      );
      if (treatmentMatch) score += 40;
    }

    // Gender preference
    if (preferences.gender) {
      maxScore += 20;
      if (therapist.gender === preferences.gender) score += 20;
    }

    // Experience level
    if (preferences.experience) {
      maxScore += 15;
      const expMatch = 
        (preferences.experience === 'junior' && therapist.experience >= 3 && therapist.experience <= 5) ||
        (preferences.experience === 'senior' && therapist.experience >= 6 && therapist.experience <= 10) ||
        (preferences.experience === 'master' && therapist.experience > 10);
      if (expMatch) score += 15;
    }

    // Language preference
    if (preferences.language) {
      maxScore += 10;
      const langMatch = 
        (preferences.language === 'swahili' && therapist.languages.includes('Swahili')) ||
        (preferences.language === 'multilingual' && therapist.languages.length > 2);
      if (langMatch) score += 10;
    }

    // Personality match
    if (preferences.personality.length > 0) {
      maxScore += 15;
      const personalityMatch = preferences.personality.some(trait => 
        therapist.personality.includes(trait)
      );
      if (personalityMatch) score += 15;
    }

    return maxScore > 0 ? Math.round((score / maxScore) * 100) : 85;
  };

  const filteredTherapists = therapists
    .map(therapist => ({
      ...therapist,
      matchScore: getMatchScore(therapist)
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, showAllTherapists ? therapists.length : 3);

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePersonalityChange = (trait, checked) => {
    setPreferences(prev => ({
      ...prev,
      personality: checked 
        ? [...prev.personality, trait]
        : prev.personality.filter(t => t !== trait)
    }));
  };

  return (
    <div className="bg-white rounded-xl cultural-shadow border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-surface to-secondary p-6 text-white">
        <h3 className="font-heading text-xl font-semibold mb-2">Find Your Perfect Therapist</h3>
        <p className="text-surface-foreground/80">Our AI matching system considers your preferences and treatment needs</p>
      </div>

      {/* Preferences */}
      <div className="p-6 border-b border-border">
        <h4 className="font-heading font-semibold text-primary mb-4">Your Preferences</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Select
            label="Gender Preference"
            options={genderOptions}
            value={preferences.gender}
            onChange={(value) => handlePreferenceChange('gender', value)}
          />
          <Select
            label="Experience Level"
            options={experienceOptions}
            value={preferences.experience}
            onChange={(value) => handlePreferenceChange('experience', value)}
          />
          <Select
            label="Language Preference"
            options={languageOptions}
            value={preferences.language}
            onChange={(value) => handlePreferenceChange('language', value)}
          />
        </div>

        <div>
          <p className="font-body font-semibold text-primary mb-3">Personality Preferences (optional)</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {personalityTraits.map((trait) => (
              <Checkbox
                key={trait.id}
                label={trait.label}
                checked={preferences.personality.includes(trait.id)}
                onChange={(e) => handlePersonalityChange(trait.id, e.target.checked)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Matched Therapists */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-heading font-semibold text-primary">Recommended Therapists</h4>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAllTherapists(!showAllTherapists)}
          >
            {showAllTherapists ? 'Show Top 3' : 'Show All'}
          </Button>
        </div>

        <div className="space-y-6">
          {filteredTherapists.map((therapist) => (
            <div
              key={therapist.id}
              className={`border rounded-lg p-6 transition-cultural cursor-pointer ${
                selectedTherapist?.id === therapist.id
                  ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
              }`}
              onClick={() => onTherapistSelect && onTherapistSelect(therapist)}
            >
              <div className="flex space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h5 className="font-heading font-semibold text-primary">{therapist.name}</h5>
                        <div className="flex items-center space-x-1">
                          <div className={`w-3 h-3 rounded-full ${
                            therapist.matchScore >= 90 ? 'bg-success' :
                            therapist.matchScore >= 70 ? 'bg-warning' : 'bg-accent'
                          }`}></div>
                          <span className="text-sm font-semibold text-accent">
                            {therapist.matchScore}% match
                          </span>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm mb-2">{therapist.title}</p>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary mb-2">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-warning fill-current" />
                          <span>{therapist.rating}</span>
                          <span>({therapist.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Award" size={14} />
                          <span>{therapist.experience} years</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                        therapist.availability === 'high' ? 'bg-success/20 text-success' :
                        therapist.availability === 'medium'? 'bg-warning/20 text-warning' : 'bg-error/20 text-error'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-1 ${
                          therapist.availability === 'high' ? 'bg-success' :
                          therapist.availability === 'medium'? 'bg-warning' : 'bg-error'
                        }`}></div>
                        {therapist.availability === 'high' ? 'Available' :
                         therapist.availability === 'medium' ? 'Limited' : 'Busy'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-3 whitespace-pre-line">
                    {therapist.bio}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {therapist.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {therapist.languages.map((lang, index) => (
                          <span
                            key={index}
                            className="text-xs bg-surface/20 text-surface px-2 py-1 rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-text-secondary">
                      <span className="font-semibold">Signature:</span> {therapist.signature_treatment}
                    </div>
                    <div className="flex items-center space-x-2">
                      {selectedTherapist?.id === therapist.id && (
                        <Icon name="Check" size={16} className="text-accent" />
                      )}
                      <Icon name="ChevronRight" size={16} className="text-text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistMatcher;