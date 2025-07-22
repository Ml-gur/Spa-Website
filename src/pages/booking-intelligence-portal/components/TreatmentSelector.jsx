import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TreatmentSelector = ({ onTreatmentSelect, selectedTreatments = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPackages, setShowPackages] = useState(false);

  const treatmentCategories = [
    { value: 'all', label: 'All Treatments' },
    { value: 'facial', label: 'African Facial Rituals' },
    { value: 'body', label: 'Body Wellness' },
    { value: 'heritage', label: 'Heritage Experiences' },
    { value: 'therapeutic', label: 'Therapeutic Treatments' }
  ];

  const treatments = [
    {
      id: 'african-gold-facial',
      name: 'African Gold Radiance Facial',
      category: 'facial',
      duration: 90,
      price: 8500,
      description: `Traditional gold-infused facial using authentic African botanicals\nCombines ancient beauty wisdom with modern luxury techniques\nPerfect for special occasions and deep skin rejuvenation`,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
      benefits: ['Deep hydration', 'Anti-aging', 'Radiant glow'],
      cultural: 'Inspired by ancient Egyptian beauty rituals',
      popular: true
    },
    {
      id: 'baobab-body-wrap',
      name: 'Baobab Tree Body Wrap',
      category: 'body',
      duration: 120,
      price: 7200,
      description: `Full-body treatment using baobab oil and African clay\nDetoxifying and nourishing experience\nLeaves skin silky smooth and deeply moisturized`,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
      benefits: ['Detoxification', 'Deep moisturizing', 'Skin smoothing'],
      cultural: 'Celebrates the sacred baobab tree of Africa'
    },
    {
      id: 'heritage-cleansing',
      name: 'Heritage Cleansing Ritual',
      category: 'heritage',
      duration: 180,
      price: 12000,
      description: `Complete cultural wellness experience\nIncludes traditional cleansing, meditation, and blessing ceremony\nPerfect introduction to African wellness traditions`,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      benefits: ['Spiritual cleansing', 'Cultural connection', 'Deep relaxation'],
      cultural: 'Based on traditional Kenyan purification rituals',
      recommended: 'first-time'
    },
    {
      id: 'therapeutic-massage',
      name: 'Therapeutic African Massage',
      category: 'therapeutic',
      duration: 75,
      price: 6500,
      description: `Deep tissue massage using traditional African techniques\nIncorporates indigenous healing oils and pressure points\nIdeal for stress relief and muscle tension`,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
      benefits: ['Stress relief', 'Muscle relaxation', 'Improved circulation'],
      cultural: 'Traditional healing massage techniques'
    },
    {
      id: 'shea-butter-facial',
      name: 'Pure Shea Butter Facial',
      category: 'facial',
      duration: 60,
      price: 5500,
      description: `Gentle facial treatment using pure African shea butter\nPerfect for sensitive skin and natural hydration\nIncludes facial massage and botanical steam`,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
      benefits: ['Gentle hydration', 'Sensitive skin care', 'Natural healing'],
      cultural: 'Uses traditional West African shea butter'
    },
    {
      id: 'marula-oil-treatment',
      name: 'Marula Oil Hair & Scalp Treatment',
      category: 'therapeutic',
      duration: 45,
      price: 4200,
      description: `Intensive hair and scalp treatment using marula oil\nNourishes and strengthens natural hair texture\nIncludes scalp massage and protective styling tips`,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      benefits: ['Hair strengthening', 'Scalp health', 'Natural shine'],
      cultural: 'Celebrates African hair care traditions'
    }
  ];

  const packages = [
    {
      id: 'heritage-weekend',
      name: 'Heritage Weekend Experience',
      treatments: ['heritage-cleansing', 'african-gold-facial', 'baobab-body-wrap'],
      duration: 480,
      originalPrice: 27700,
      packagePrice: 22000,
      savings: 5700,
      description: `Complete cultural immersion weekend\nIncludes all signature treatments plus cultural education\nPerfect for tourists and cultural enthusiasts`,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
    },
    {
      id: 'tourist-cultural',
      name: 'Tourist Cultural Immersion',
      treatments: ['heritage-cleansing', 'therapeutic-massage', 'shea-butter-facial'],
      duration: 300,
      originalPrice: 24000,
      packagePrice: 19500,
      savings: 4500,
      description: `Perfect introduction to African wellness\nCombines relaxation with cultural learning\nIdeal for visitors to Kenya`,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400'
    }
  ];

  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || treatment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTreatmentSelect = (treatment) => {
    if (onTreatmentSelect) {
      onTreatmentSelect(treatment);
    }
  };

  const handlePackageSelect = (pkg) => {
    if (onTreatmentSelect) {
      onTreatmentSelect(pkg, 'package');
    }
  };

  const isSelected = (id) => selectedTreatments.some(t => t.id === id);

  return (
    <div className="bg-white rounded-xl cultural-shadow border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-secondary p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-xl font-semibold">Select Your Treatments</h3>
            <p className="text-accent-foreground/80">Choose from our authentic African wellness experiences</p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={!showPackages ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPackages(false)}
              className={!showPackages ? "bg-white text-accent" : "border-white text-white hover:bg-white/20"}
            >
              Individual
            </Button>
            <Button
              variant={showPackages ? "default" : "outline"}
              size="sm"
              onClick={() => setShowPackages(true)}
              className={showPackages ? "bg-white text-accent" : "border-white text-white hover:bg-white/20"}
            >
              Packages
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        {!showPackages && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="search"
              placeholder="Search treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Select
              options={treatmentCategories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Select category"
              className="bg-white/20"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {!showPackages ? (
          /* Individual Treatments */
          <div className="space-y-4">
            {filteredTreatments.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <p className="text-text-secondary">No treatments found matching your criteria</p>
              </div>
            ) : (
              filteredTreatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className={`border rounded-lg p-4 transition-cultural cursor-pointer ${
                    isSelected(treatment.id)
                      ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                  }`}
                  onClick={() => handleTreatmentSelect(treatment)}
                >
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={treatment.image}
                        alt={treatment.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-heading font-semibold text-primary">{treatment.name}</h4>
                            {treatment.popular && (
                              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                            {treatment.recommended === 'first-time' && (
                              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                                First-time
                              </span>
                            )}
                          </div>
                          <p className="text-text-secondary text-sm mb-2 whitespace-pre-line">
                            {treatment.description}
                          </p>
                          <p className="text-xs text-accent italic">{treatment.cultural}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-accent text-lg">KES {treatment.price.toLocaleString()}</div>
                          <div className="text-text-secondary text-sm">{treatment.duration} min</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {treatment.benefits.map((benefit, index) => (
                            <span
                              key={index}
                              className="text-xs bg-surface/20 text-surface px-2 py-1 rounded-full"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          {isSelected(treatment.id) && (
                            <Icon name="Check" size={16} className="text-accent" />
                          )}
                          <Icon name="Plus" size={16} className="text-text-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          /* Package Treatments */
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h4 className="font-heading text-lg font-semibold text-primary mb-2">Cultural Experience Packages</h4>
              <p className="text-text-secondary">Save money with our curated treatment combinations</p>
            </div>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="border border-border rounded-lg p-6 hover:border-accent transition-cultural cursor-pointer group"
                onClick={() => handlePackageSelect(pkg)}
              >
                <div className="flex space-x-6">
                  <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-primary group-hover:text-accent transition-cultural">
                          {pkg.name}
                        </h4>
                        <p className="text-text-secondary text-sm mb-2 whitespace-pre-line">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-text-secondary line-through text-sm">
                            KES {pkg.originalPrice.toLocaleString()}
                          </span>
                          <span className="font-semibold text-accent text-xl">
                            KES {pkg.packagePrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-success text-sm font-semibold">
                          Save KES {pkg.savings.toLocaleString()}
                        </div>
                        <div className="text-text-secondary text-sm">{Math.floor(pkg.duration / 60)}h {pkg.duration % 60}m</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary">Included Treatments:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {pkg.treatments.map((treatmentId) => {
                          const treatment = treatments.find(t => t.id === treatmentId);
                          return treatment ? (
                            <div key={treatmentId} className="flex items-center space-x-2 text-sm">
                              <Icon name="Check" size={14} className="text-success" />
                              <span className="text-text-secondary">{treatment.name}</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentSelector;