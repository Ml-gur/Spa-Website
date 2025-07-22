import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AfricaMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: 'west-africa',
      name: 'West Africa',
      position: { top: '45%', left: '25%' },
      ingredients: ['Shea Butter', 'Black Soap', 'Baobab Oil'],
      traditions: 'Ancient beauty rituals passed down through generations',
      color: 'bg-accent'
    },
    {
      id: 'east-africa',
      name: 'East Africa',
      position: { top: '40%', left: '55%' },
      ingredients: ['Marula Oil', 'Frankincense', 'Myrrh'],
      traditions: 'Sacred aromatherapy and healing practices',
      color: 'bg-secondary'
    },
    {
      id: 'southern-africa',
      name: 'Southern Africa',
      position: { top: '70%', left: '45%' },
      ingredients: ['Rooibos', 'Kanna', 'Buchu'],
      traditions: 'Traditional healing and skin purification rituals',
      color: 'bg-surface'
    },
    {
      id: 'north-africa',
      name: 'North Africa',
      position: { top: '25%', left: '40%' },
      ingredients: ['Argan Oil', 'Rose Water', 'Henna'],
      traditions: 'Ancient Egyptian beauty secrets and Berber wisdom',
      color: 'bg-cta'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-background to-muted rounded-xl p-8 cultural-shadow">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">
          African Beauty Origins
        </h3>
        <p className="font-body text-text-secondary">
          Discover the rich heritage behind our premium ingredients
        </p>
      </div>

      {/* Interactive Africa Map */}
      <div className="relative mx-auto max-w-2xl">
        {/* Simplified Africa Continent Shape */}
        <div className="relative w-full h-96 bg-gradient-to-b from-primary/10 to-primary/20 rounded-3xl overflow-hidden">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
              <defs>
                <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#african-pattern)"/>
            </svg>
          </div>

          {/* Interactive Region Markers */}
          {regions.map((region) => (
            <div
              key={region.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={region.position}
              onClick={() => setSelectedRegion(region)}
            >
              <div className={`w-6 h-6 ${region.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-cultural animate-pulse`}>
                <Icon name="MapPin" size={14} className="text-white" />
              </div>
              
              {/* Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-cultural pointer-events-none">
                <div className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                  {region.name}
                </div>
                <div className="w-2 h-2 bg-primary transform rotate-45 mx-auto -mt-1"></div>
              </div>
            </div>
          ))}

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-accent/30">
            <Icon name="Sun" size={32} />
          </div>
          <div className="absolute bottom-4 left-4 text-secondary/30">
            <Icon name="Leaf" size={28} />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {regions.map((region) => (
            <div
              key={region.id}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-cultural"
              onClick={() => setSelectedRegion(region)}
            >
              <div className={`w-3 h-3 ${region.color} rounded-full`}></div>
              <span className="font-body text-sm text-text-secondary">{region.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Region Details */}
      {selectedRegion && (
        <div className="mt-8 p-6 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading text-xl font-semibold text-primary">
              {selectedRegion.name}
            </h4>
            <button
              onClick={() => setSelectedRegion(null)}
              className="text-text-secondary hover:text-primary transition-cultural"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          <p className="font-body text-text-secondary mb-4">
            {selectedRegion.traditions}
          </p>
          
          <div>
            <h5 className="font-body font-semibold text-primary mb-2">Key Ingredients:</h5>
            <div className="flex flex-wrap gap-2">
              {selectedRegion.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfricaMap;