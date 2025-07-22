import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalImpact = () => {
  const [activeTab, setActiveTab] = useState('community');

  const impactAreas = [
    {
      id: 'community',
      name: 'Community Support',
      icon: 'Users',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      id: 'preservation',
      name: 'Cultural Preservation',
      icon: 'Shield',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      icon: 'Leaf',
      color: 'text-surface',
      bgColor: 'bg-surface/10'
    },
    {
      id: 'education',
      name: 'Education',
      icon: 'BookOpen',
      color: 'text-cta',
      bgColor: 'bg-cta/10'
    }
  ];

  const impactData = {
    community: {
      title: 'Empowering African Communities',
      description: 'Supporting local communities through fair trade partnerships and economic empowerment programs',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
      stats: [
        { number: '150+', label: 'Women Employed', icon: 'Users' },
        { number: '12', label: 'Communities Supported', icon: 'MapPin' },
        { number: 'KES 2.5M', label: 'Annual Community Investment', icon: 'TrendingUp' },
        { number: '95%', label: 'Fair Trade Sourcing', icon: 'Handshake' }
      ],
      initiatives: [
        {
          title: 'Women\'s Cooperative Program',
          description: 'Direct partnerships with women\'s cooperatives in Ghana, Burkina Faso, and Kenya for shea butter and ingredient sourcing.',
          impact: 'Provides stable income for 150+ women and their families',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400'
        },
        {
          title: 'Skills Development Initiative',
          description: 'Training programs in sustainable harvesting, quality control, and business management for local communities.',
          impact: 'Trained 200+ community members in sustainable practices',
          image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400'
        },
        {
          title: 'Healthcare Support Program',
          description: 'Mobile health clinics and wellness programs for remote communities involved in ingredient sourcing.',
          impact: 'Served 500+ families with healthcare access',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400'
        }
      ]
    },
    preservation: {
      title: 'Preserving Cultural Heritage',
      description: 'Documenting and preserving traditional beauty practices and indigenous knowledge for future generations',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      stats: [
        { number: '50+', label: 'Traditional Recipes Documented', icon: 'Scroll' },
        { number: '25', label: 'Elder Healers Interviewed', icon: 'Crown' },
        { number: '8', label: 'Cultural Partnerships', icon: 'Handshake' },
        { number: '100%', label: 'Authentic Practices', icon: 'Shield' }
      ],
      initiatives: [
        {
          title: 'Elder Wisdom Documentation',
          description: 'Recording traditional beauty recipes and practices from elder healers and community leaders across Africa.',
          impact: 'Preserved 50+ traditional recipes and their cultural significance',
          image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400'
        },
        {
          title: 'Cultural Heritage Museum',
          description: 'Digital archive showcasing the history and evolution of African beauty traditions and their global influence.',
          impact: 'Created comprehensive database of African beauty heritage',
          image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400'
        },
        {
          title: 'Traditional Healer Partnerships',
          description: 'Collaborative relationships with traditional healers to ensure authentic adaptation of ancient practices.',
          impact: 'Established partnerships with 25 traditional healers',
          image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400'
        }
      ]
    },
    sustainability: {
      title: 'Environmental Stewardship',
      description: 'Promoting sustainable harvesting practices and environmental conservation in ingredient sourcing regions',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
      stats: [
        { number: '1000+', label: 'Trees Protected', icon: 'TreePine' },
        { number: '75%', label: 'Renewable Energy Use', icon: 'Zap' },
        { number: '0', label: 'Waste to Landfill', icon: 'Recycle' },
        { number: '50+', label: 'Species Conserved', icon: 'Leaf' }
      ],
      initiatives: [
        {
          title: 'Reforestation Program',
          description: 'Planting native trees and protecting existing forests in ingredient sourcing areas to maintain biodiversity.',
          impact: 'Protected 1000+ trees and planted 500 new indigenous trees',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400'
        },
        {
          title: 'Sustainable Harvesting Training',
          description: 'Teaching communities sustainable harvesting techniques that preserve plant populations for future generations.',
          impact: 'Trained 300+ harvesters in sustainable practices',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400'
        },
        {
          title: 'Zero Waste Initiative',
          description: 'Comprehensive recycling and composting program that eliminates waste and creates value from byproducts.',
          impact: 'Achieved 100% waste diversion from landfills',
          image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400'
        }
      ]
    },
    education: {
      title: 'Knowledge Sharing & Education',
      description: 'Educating the world about African beauty traditions and their scientific benefits through various platforms',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
      stats: [
        { number: '10K+', label: 'Students Reached', icon: 'GraduationCap' },
        { number: '25', label: 'Educational Programs', icon: 'BookOpen' },
        { number: '5', label: 'University Partnerships', icon: 'School' },
        { number: '100+', label: 'Research Papers', icon: 'FileText' }
      ],
      initiatives: [
        {
          title: 'African Beauty Studies Program',
          description: 'University partnerships offering courses on traditional African beauty practices and their modern applications.',
          impact: 'Educated 10,000+ students about African beauty heritage',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400'
        },
        {
          title: 'Research & Development Center',
          description: 'Scientific research facility studying the efficacy of traditional ingredients and developing new applications.',
          impact: 'Published 100+ research papers on African beauty ingredients',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400'
        },
        {
          title: 'Cultural Exchange Program',
          description: 'International exchange programs bringing together beauty professionals to learn about African traditions.',
          impact: 'Facilitated cultural exchange for 500+ beauty professionals',
          image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400'
        }
      ]
    }
  };

  const currentData = impactData[activeTab];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="font-heading text-3xl font-bold text-primary mb-4">
          Our Cultural Impact
        </h3>
        <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
          Discover how Serenity Spa Kenya supports African communities, preserves cultural heritage, and promotes sustainable practices
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {impactAreas.map((area) => (
          <button
            key={area.id}
            onClick={() => setActiveTab(area.id)}
            className={`p-4 rounded-xl text-center transition-cultural ${
              activeTab === area.id
                ? `${area.bgColor} ${area.color} shadow-lg`
                : 'bg-card hover:bg-muted border border-border'
            }`}
          >
            <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
              activeTab === area.id ? 'bg-white/20' : 'bg-muted'
            }`}>
              <Icon 
                name={area.icon} 
                size={24} 
                className={activeTab === area.id ? area.color : 'text-text-secondary'} 
              />
            </div>
            <h4 className={`font-body font-semibold text-sm ${
              activeTab === area.id ? area.color : 'text-primary'
            }`}>
              {area.name}
            </h4>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-card rounded-xl overflow-hidden cultural-shadow">
        {/* Hero Section */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <Image
            src={currentData.image}
            alt={currentData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-2">
              {currentData.title}
            </h3>
            <p className="font-body text-lg opacity-95 max-w-2xl">
              {currentData.description}
            </p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Impact Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {currentData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} className="text-accent" />
                </div>
                <div className="font-heading text-2xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-primary mb-6 text-center">
              Key Initiatives
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {currentData.initiatives.map((initiative, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-cultural">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h5 className="font-heading text-lg font-semibold text-primary">
                      {initiative.title}
                    </h5>
                    
                    <p className="font-body text-sm text-text-secondary">
                      {initiative.description}
                    </p>
                    
                    <div className="p-3 bg-accent/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Target" size={16} className="text-accent" />
                        <span className="font-body font-semibold text-accent text-sm">Impact</span>
                      </div>
                      <p className="font-body text-sm text-text-secondary">
                        {initiative.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 border-t border-border">
            <h4 className="font-heading text-xl font-semibold text-primary mb-4">
              Join Our Mission
            </h4>
            <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
              Every treatment you book contributes to our cultural preservation and community support efforts. 
              Be part of a movement that celebrates African beauty while making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-cultural premium-hover">
                Book a Treatment
              </button>
              <button className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-cultural">
                Learn More About Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Logos */}
      <div className="bg-muted rounded-lg p-8">
        <h4 className="font-heading text-xl font-semibold text-primary text-center mb-6">
          Our Trusted Partners
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {[
            'African Development Bank',
            'Fair Trade Foundation',
            'UNESCO Cultural Heritage',
            'Kenya Wildlife Service'
          ].map((partner, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <span className="font-body text-sm text-text-secondary">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalImpact;