import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SeasonalTraditions = () => {
  const [selectedSeason, setSelectedSeason] = useState('harvest');

  const seasons = [
    {
      id: 'harvest',
      name: 'Harvest Season',
      period: 'October - December',
      icon: 'Wheat',
      color: 'bg-accent',
      description: 'Celebrating the abundance of nature with ingredient-rich treatments',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600',
      traditions: [
        'Shea Nut Gathering Ceremonies',
        'Baobab Fruit Harvest Rituals',
        'Community Blessing Practices'
      ],
      treatments: [
        {
          name: 'Golden Harvest Ritual',
          duration: '120 minutes',
          price: 'KES 15,000',
          description: 'Full-body treatment using freshly harvested shea butter and seasonal botanicals',
          ingredients: ['Fresh Shea Butter', 'Baobab Oil', 'Harvest Herbs']
        },
        {
          name: 'Abundance Body Wrap',
          duration: '90 minutes',
          price: 'KES 12,000',
          description: 'Nourishing wrap with seasonal ingredients to celebrate nature\'s bounty',
          ingredients: ['Marula Oil', 'Seasonal Clays', 'Harvest Spices']
        }
      ],
      culturalContext: `During harvest season, African communities come together to celebrate the year's abundance. Women gather to process shea nuts, sharing stories and traditional beauty secrets. This is when ingredients are at their most potent, making it the perfect time for intensive treatments.`
    },
    {
      id: 'renewal',name: 'Renewal Season',period: 'January - March',icon: 'Sunrise',color: 'bg-secondary',description: 'New beginnings with purifying and rejuvenating treatments',image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
      traditions: [
        'Cleansing Water Ceremonies','New Moon Rituals','Ancestral Blessing Practices'
      ],
      treatments: [
        {
          name: 'New Dawn Detox',duration: '150 minutes',price: 'KES 18,000',description: 'Complete purification ritual with African black soap and healing clays',
          ingredients: ['African Black Soap', 'Red Clay', 'Purifying Herbs']
        },
        {
          name: 'Renewal Facial Journey',duration: '75 minutes',price: 'KES 10,000',description: 'Rejuvenating facial treatment to start the year with radiant skin',
          ingredients: ['Frankincense', 'Myrrh', 'Renewal Botanicals']
        }
      ],
      culturalContext: `The renewal season marks new beginnings in African traditions. Communities perform cleansing rituals to wash away the old year and welcome fresh energy. This is the time for deep purification and setting intentions for the year ahead.`
    },
    {
      id: 'growth',name: 'Growth Season',period: 'April - June',icon: 'Sprout',color: 'bg-surface',description: 'Nurturing treatments that promote growth and vitality',image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
      traditions: [
        'Planting Ceremonies','Growth Blessing Rituals','Youth Initiation Practices'
      ],
      treatments: [
        {
          name: 'Vitality Boost Treatment',duration: '105 minutes',price: 'KES 14,000',description: 'Energizing treatment with growth-promoting African botanicals',
          ingredients: ['Moringa Oil', 'Aloe Vera', 'Growth Herbs']
        },
        {
          name: 'Youth Elixir Facial',duration: '60 minutes',price: 'KES 8,500',description: 'Anti-aging facial inspired by traditional youth preservation rituals',
          ingredients: ['Argan Oil', 'Rose Water', 'Youth Botanicals']
        }
      ],
      culturalContext: `Growth season celebrates the power of new life and expansion. Traditional ceremonies focus on nurturing young plants and blessing new ventures. Beauty treatments during this time emphasize vitality and the promotion of healthy, glowing skin.`
    },
    {
      id: 'wisdom',name: 'Wisdom Season',period: 'July - September',icon: 'Crown',color: 'bg-cta',description: 'Mature treatments honoring ancestral wisdom and deep healing',image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600',
      traditions: [
        'Elder Wisdom Ceremonies','Ancestral Honor Rituals','Traditional Knowledge Sharing'
      ],
      treatments: [
        {
          name: 'Ancestral Wisdom Ritual',duration: '180 minutes',price: 'KES 22,000',description: 'Ultimate healing experience using ancient recipes and techniques',
          ingredients: ['Sacred Oils', 'Ancient Herbs', 'Wisdom Botanicals']
        },
        {
          name: 'Elder\'s Secret Facial',
          duration: '90 minutes',
          price: 'KES 13,000',
          description: 'Time-honored facial treatment with ingredients used by African queens',
          ingredients: ['Royal Jelly', 'Gold Dust', 'Queen\'s Botanicals']
        }
      ],
      culturalContext: `Wisdom season honors the knowledge of elders and the deep traditions passed down through generations. This is when the most sacred beauty rituals are performed, using recipes that have been perfected over centuries by African queens and healers.`
    }
  ];

  const currentSeason = seasons.find(season => season.id === selectedSeason);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="font-heading text-3xl font-bold text-primary mb-4">
          Seasonal Beauty Traditions
        </h3>
        <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
          Experience the rhythm of African seasons through treatments that honor traditional calendars and cultural celebrations
        </p>
      </div>

      {/* Season Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => setSelectedSeason(season.id)}
            className={`p-6 rounded-xl text-center transition-cultural group ${
              selectedSeason === season.id
                ? `${season.color} text-white shadow-lg`
                : 'bg-card hover:bg-muted border border-border'
            }`}
          >
            <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
              selectedSeason === season.id ? 'bg-white/20' : 'bg-accent/10'
            }`}>
              <Icon 
                name={season.icon} 
                size={24} 
                className={selectedSeason === season.id ? 'text-white' : 'text-accent'} 
              />
            </div>
            <h4 className={`font-heading text-lg font-semibold mb-1 ${
              selectedSeason === season.id ? 'text-white' : 'text-primary'
            }`}>
              {season.name}
            </h4>
            <p className={`font-body text-sm ${
              selectedSeason === season.id ? 'text-white/90' : 'text-text-secondary'
            }`}>
              {season.period}
            </p>
          </button>
        ))}
      </div>

      {/* Selected Season Content */}
      {currentSeason && (
        <div className="bg-card rounded-xl overflow-hidden cultural-shadow">
          {/* Hero Image */}
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <Image
              src={currentSeason.image}
              alt={currentSeason.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 ${currentSeason.color} rounded-full flex items-center justify-center`}>
                  <Icon name={currentSeason.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">{currentSeason.name}</h3>
                  <p className="font-body text-sm opacity-90">{currentSeason.period}</p>
                </div>
              </div>
              <p className="font-body text-lg opacity-95 max-w-2xl">
                {currentSeason.description}
              </p>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Cultural Context */}
            <div className="bg-accent/5 rounded-lg p-6">
              <h4 className="font-heading text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={20} />
                Cultural Context
              </h4>
              <p className="font-body text-text-secondary leading-relaxed">
                {currentSeason.culturalContext}
              </p>
            </div>

            {/* Traditional Practices */}
            <div>
              <h4 className="font-heading text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
                Traditional Practices
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSeason.traditions.map((tradition, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Star" size={16} className="text-accent" />
                    </div>
                    <span className="font-body text-sm text-primary font-medium">{tradition}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Treatments */}
            <div>
              <h4 className="font-heading text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Icon name="Leaf" size={20} />
                Seasonal Treatment Packages
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentSeason.treatments.map((treatment, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-cultural">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-heading text-lg font-semibold text-primary mb-1">
                          {treatment.name}
                        </h5>
                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {treatment.duration}
                          </span>
                          <span className="font-semibold text-accent">{treatment.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="font-body text-text-secondary mb-4">
                      {treatment.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h6 className="font-body font-semibold text-primary text-sm">Key Ingredients:</h6>
                      <div className="flex flex-wrap gap-2">
                        {treatment.ingredients.map((ingredient, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking CTA */}
            <div className="text-center pt-6 border-t border-border">
              <p className="font-body text-text-secondary mb-4">
                Experience the magic of {currentSeason.name.toLowerCase()} with our authentic treatments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-cultural premium-hover">
                  Book Seasonal Package
                </button>
                <button className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-cultural">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeasonalTraditions;