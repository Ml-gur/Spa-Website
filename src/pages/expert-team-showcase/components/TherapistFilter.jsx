import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TherapistFilter = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  therapistCount 
}) => {
  const specializations = [
    'Traditional African Treatments',
    'Aromatherapy',
    'Deep Tissue Massage',
    'Facial Treatments',
    'Body Wraps',
    'Reflexology',
    'Hot Stone Therapy',
    'Prenatal Massage'
  ];

  const culturalExpertise = [
    'Ethiopian Honey Rituals',
    'Moroccan Argan Traditions',
    'Kenyan Shea Butter Therapy',
    'West African Black Soap',
    'South African Rooibos',
    'Nigerian Palm Oil Treatments'
  ];

  const handleSpecializationToggle = (spec) => {
    const current = filters.specializations || [];
    const updated = current.includes(spec)
      ? current.filter(s => s !== spec)
      : [...current, spec];
    onFilterChange({ ...filters, specializations: updated });
  };

  const handleCulturalExpertiseToggle = (expertise) => {
    const current = filters.culturalExpertise || [];
    const updated = current.includes(expertise)
      ? current.filter(e => e !== expertise)
      : [...current, expertise];
    onFilterChange({ ...filters, culturalExpertise: updated });
  };

  const hasActiveFilters = 
    (filters.specializations?.length > 0) ||
    (filters.culturalExpertise?.length > 0) ||
    filters.availability ||
    filters.experience;

  return (
    <div className="bg-card rounded-xl p-6 cultural-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading text-lg font-bold text-primary">
            Find Your Perfect Therapist
          </h3>
          <p className="font-body text-sm text-text-secondary">
            {therapistCount} expert therapists available
          </p>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-primary"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <h4 className="font-body text-sm font-semibold text-primary mb-3">
          Availability
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filters.availability === 'today' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange({ 
              ...filters, 
              availability: filters.availability === 'today' ? null : 'today' 
            })}
            className={filters.availability === 'today' ?'bg-accent text-accent-foreground' :'border-border text-text-secondary hover:border-accent hover:text-accent'
            }
          >
            Available Today
          </Button>
          <Button
            variant={filters.availability === 'week' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange({ 
              ...filters, 
              availability: filters.availability === 'week' ? null : 'week' 
            })}
            className={filters.availability === 'week' ?'bg-accent text-accent-foreground' :'border-border text-text-secondary hover:border-accent hover:text-accent'
            }
          >
            This Week
          </Button>
        </div>
      </div>

      {/* Experience Filter */}
      <div className="mb-6">
        <h4 className="font-body text-sm font-semibold text-primary mb-3">
          Experience Level
        </h4>
        <div className="flex flex-wrap gap-2">
          {['5+ years', '10+ years', '15+ years'].map((exp) => (
            <Button
              key={exp}
              variant={filters.experience === exp ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterChange({ 
                ...filters, 
                experience: filters.experience === exp ? null : exp 
              })}
              className={filters.experience === exp 
                ? 'bg-accent text-accent-foreground' 
                : 'border-border text-text-secondary hover:border-accent hover:text-accent'
              }
            >
              {exp}
            </Button>
          ))}
        </div>
      </div>

      {/* Specializations Filter */}
      <div className="mb-6">
        <h4 className="font-body text-sm font-semibold text-primary mb-3">
          Treatment Specializations
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {specializations.map((spec) => (
            <label
              key={spec}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filters.specializations?.includes(spec) || false}
                  onChange={() => handleSpecializationToggle(spec)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-cultural ${
                  filters.specializations?.includes(spec)
                    ? 'bg-accent border-accent' :'border-border group-hover:border-accent'
                }`}>
                  {filters.specializations?.includes(spec) && (
                    <Icon name="Check" size={12} className="text-accent-foreground" />
                  )}
                </div>
              </div>
              <span className="font-body text-sm text-text-primary group-hover:text-accent transition-cultural">
                {spec}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Cultural Expertise Filter */}
      <div>
        <h4 className="font-body text-sm font-semibold text-primary mb-3">
          Cultural Expertise
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {culturalExpertise.map((expertise) => (
            <label
              key={expertise}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filters.culturalExpertise?.includes(expertise) || false}
                  onChange={() => handleCulturalExpertiseToggle(expertise)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-cultural ${
                  filters.culturalExpertise?.includes(expertise)
                    ? 'bg-secondary border-secondary' :'border-border group-hover:border-secondary'
                }`}>
                  {filters.culturalExpertise?.includes(expertise) && (
                    <Icon name="Check" size={12} className="text-secondary-foreground" />
                  )}
                </div>
              </div>
              <span className="font-body text-sm text-text-primary group-hover:text-secondary transition-cultural">
                {expertise}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistFilter;