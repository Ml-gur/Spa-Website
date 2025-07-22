import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TraditionalMeetsModern = () => {
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    {
      id: 0,
      title: 'Skin Cleansing Rituals',
      traditional: {
        title: 'Ancient Black Soap Ceremony',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
        description: 'Traditional handmade black soap crafted from plantain skins, palm kernel oil, and cocoa pods. Used in communal cleansing ceremonies with chanted blessings.',
        process: [
          'Soap aged for 6 months using ancestral methods',
          'Applied with natural loofah in circular motions',
          'Accompanied by traditional songs and prayers',
          'Rinsed with blessed water from sacred springs'
        ],
        benefits: ['Natural antibacterial properties', 'Gentle exfoliation', 'Spiritual cleansing', 'Community bonding']
      },
      modern: {
        title: 'Purifying Black Soap Facial',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
        description: 'Clinical adaptation using authentic black soap with modern extraction techniques. Enhanced with complementary botanicals and performed in sterile spa environment.',
        process: [
          'pH-balanced formulation for sensitive skin',
          'Steam preparation to open pores',
          'Professional massage techniques',
          'Followed by targeted serums and moisturizers'
        ],
        benefits: ['Scientifically proven efficacy', 'Customized for skin type', 'Hygienic application', 'Measurable results']
      },
      fusion: {
        title: 'Heritage Purification Ritual',
        description: 'Combines traditional black soap ceremony with modern spa techniques, honoring cultural significance while ensuring optimal results.',
        features: ['Authentic ingredients with quality testing', 'Traditional chants with aromatherapy', 'Sacred water blessing with mineral enhancement', 'Community spirit in private luxury setting']
      }
    },
    {
      id: 1,
      title: 'Anti-Aging Treatments',
      traditional: {
        title: 'Royal Shea Butter Anointing',
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400',
        description: 'Queens and elder women used pure shea butter in moonlight ceremonies, believing lunar energy enhanced its anti-aging properties.',
        process: [
          'Shea butter blessed under full moon',
          'Applied by elder women with wisdom prayers',
          'Massaged using ancient pressure points',
          'Left overnight for maximum absorption'
        ],
        benefits: ['Deep moisturization', 'Natural sun protection', 'Spiritual blessing', 'Generational wisdom transfer']
      },
      modern: {
        title: 'Advanced Shea Rejuvenation',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
        description: 'Scientifically formulated shea butter treatment with added peptides, vitamins, and controlled delivery systems for enhanced penetration.',
        process: [
          'Micro-encapsulated shea for deeper penetration',
          'LED light therapy for collagen stimulation',
          'Ultrasonic massage for better absorption',
          'Climate-controlled environment for stability'
        ],
        benefits: ['Clinically proven anti-aging', 'Targeted wrinkle reduction', 'Measurable improvement', 'Consistent results']
      },
      fusion: {
        title: 'Moonlight Renewal Ceremony',
        description: 'Honors traditional lunar timing while incorporating modern anti-aging science, creating a powerful treatment that respects both heritage and efficacy.',
        features: ['Moon phase scheduling with clinical timing', 'Elder blessing with professional expertise', 'Ancient pressure points with modern massage', 'Overnight treatment with controlled environment']
      }
    },
    {
      id: 2,
      title: 'Healing Oil Treatments',
      traditional: {
        title: 'Sacred Marula Oil Blessing',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400',
        description: 'Marula oil extracted during harvest ceremonies, with each drop blessed by traditional healers for protection and healing.',
        process: [
          'Oil extracted during ceremonial harvest',
          'Blessed by traditional healers',
          'Applied with healing chants',
          'Massaged along energy meridians'
        ],
        benefits: ['Spiritual protection', 'Emotional healing', 'Community connection', 'Ancestral wisdom']
      },
      modern: {
        title: 'Therapeutic Marula Treatment',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
        description: 'Cold-pressed marula oil with verified antioxidant levels, applied using evidence-based massage techniques for optimal therapeutic benefit.',
        process: [
          'Cold-pressed extraction for purity',
          'Antioxidant testing for potency',
          'Therapeutic massage techniques',
          'Customized application for skin needs'
        ],
        benefits: ['Verified antioxidant content', 'Anti-inflammatory properties', 'Skin barrier repair', 'UV protection']
      },
      fusion: {
        title: 'Blessed Healing Elixir',
        description: 'Combines ceremonial blessing with scientific extraction, creating a treatment that honors spiritual significance while delivering proven therapeutic benefits.',
        features: ['Ceremonial harvest with quality control', 'Healer blessing with lab verification', 'Energy meridian massage with therapeutic techniques', 'Spiritual protection with measurable healing']
      }
    }
  ];

  const currentComparison = comparisons[activeComparison];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="font-heading text-3xl font-bold text-primary mb-4">
          Traditional Meets Modern
        </h3>
        <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
          Discover how ancient African beauty wisdom is respectfully adapted for contemporary wellness needs while maintaining cultural authenticity
        </p>
      </div>

      {/* Comparison Selector */}
      <div className="flex flex-col sm:flex-row gap-2 p-2 bg-muted rounded-lg">
        {comparisons.map((comparison, index) => (
          <button
            key={comparison.id}
            onClick={() => setActiveComparison(index)}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-cultural ${
              activeComparison === index
                ? 'bg-accent text-accent-foreground shadow-md'
                : 'text-text-secondary hover:text-primary hover:bg-background'
            }`}
          >
            {comparison.title}
          </button>
        ))}
      </div>

      {/* Comparison Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traditional Approach */}
        <div className="bg-card rounded-xl overflow-hidden cultural-shadow">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={currentComparison.traditional.image}
              alt={currentComparison.traditional.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Crown" size={20} />
                <span className="font-body text-sm font-medium">Traditional Wisdom</span>
              </div>
              <h4 className="font-heading text-xl font-bold">
                {currentComparison.traditional.title}
              </h4>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="font-body text-text-secondary">
              {currentComparison.traditional.description}
            </p>

            <div>
              <h5 className="font-body font-semibold text-primary mb-3 flex items-center gap-2">
                <Icon name="Scroll" size={16} />
                Traditional Process
              </h5>
              <ul className="space-y-2">
                {currentComparison.traditional.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="font-body text-sm text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-body font-semibold text-primary mb-3">Traditional Benefits</h5>
              <div className="flex flex-wrap gap-2">
                {currentComparison.traditional.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modern Approach */}
        <div className="bg-card rounded-xl overflow-hidden cultural-shadow">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={currentComparison.modern.image}
              alt={currentComparison.modern.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Microscope" size={20} />
                <span className="font-body text-sm font-medium">Modern Science</span>
              </div>
              <h4 className="font-heading text-xl font-bold">
                {currentComparison.modern.title}
              </h4>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="font-body text-text-secondary">
              {currentComparison.modern.description}
            </p>

            <div>
              <h5 className="font-body font-semibold text-primary mb-3 flex items-center gap-2">
                <Icon name="Beaker" size={16} />
                Modern Process
              </h5>
              <ul className="space-y-2">
                {currentComparison.modern.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="font-body text-sm text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-body font-semibold text-primary mb-3">Modern Benefits</h5>
              <div className="flex flex-wrap gap-2">
                {currentComparison.modern.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fusion Approach */}
      <div className="bg-gradient-to-r from-accent/5 via-secondary/5 to-surface/5 rounded-xl p-8 border border-accent/20">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Sparkles" size={24} className="text-white" />
          </div>
          <h4 className="font-heading text-2xl font-bold text-primary mb-2">
            {currentComparison.fusion.title}
          </h4>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            {currentComparison.fusion.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentComparison.fusion.features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Star" size={16} className="text-accent" />
              </div>
              <p className="font-body text-sm text-text-secondary">{feature}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-accent to-secondary text-white rounded-lg font-medium hover:shadow-lg transition-cultural premium-hover">
            Experience Our Fusion Treatments
          </button>
        </div>
      </div>

      {/* Educational Note */}
      <div className="bg-surface/10 rounded-lg p-6 border-l-4 border-surface">
        <div className="flex items-start gap-3">
          <Icon name="BookOpen" size={20} className="text-surface mt-1 flex-shrink-0" />
          <div>
            <h5 className="font-body font-semibold text-primary mb-2">Cultural Respect & Authenticity</h5>
            <p className="font-body text-text-secondary text-sm leading-relaxed">
              Our fusion approach is developed in partnership with African cultural experts and traditional healers. 
              We ensure that modern adaptations honor the original cultural significance while making treatments 
              accessible and effective for contemporary wellness needs. Every treatment includes education about 
              its cultural origins and significance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalMeetsModern;