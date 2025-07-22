import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IngredientLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Ingredients', icon: 'Leaf' },
    { id: 'oils', name: 'Sacred Oils', icon: 'Droplets' },
    { id: 'butters', name: 'Natural Butters', icon: 'Circle' },
    { id: 'herbs', name: 'Healing Herbs', icon: 'Flower' },
    { id: 'clays', name: 'Earth Clays', icon: 'Mountain' }
  ];

  const ingredients = [
    {
      id: 1,
      name: 'Shea Butter',
      scientificName: 'Vitellaria paradoxa',
      pronunciation: 'SHEE-ah',
      category: 'butters',
      origin: 'West Africa',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400',
      traditionalUse: `Known as "women's gold" in West Africa, shea butter has been used for over 3,000 years in traditional beauty rituals. Women would gather shea nuts during harvest season, processing them through ancient techniques passed down through generations.`,
      modernBenefits: 'Rich in vitamins A, E, and F, provides deep moisturization, anti-inflammatory properties, and natural sun protection.',
      culturalSignificance: 'Symbol of feminine wisdom and community cooperation in West African societies.',
      sustainability: 'Sourced through fair-trade partnerships with women cooperatives in Ghana and Burkina Faso.',
      treatments: ['Nourishing Body Ritual', 'Royal Shea Facial', 'Healing Hand Treatment']
    },
    {
      id: 2,
      name: 'Marula Oil',
      scientificName: 'Sclerocarya birrea',
      pronunciation: 'mah-ROO-lah',
      category: 'oils',
      origin: 'Southern Africa',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400',
      traditionalUse: `Sacred to the Tsonga people, marula oil was traditionally used by African women to protect their skin from harsh sun and wind. The oil extraction was a ceremonial process performed by elder women.`,
      modernBenefits: 'High in antioxidants and omega fatty acids, provides anti-aging benefits, improves skin elasticity, and offers natural UV protection.',
      culturalSignificance: 'Associated with fertility and protection in Southern African traditions.',
      sustainability: 'Wild-harvested by local communities, supporting conservation of indigenous marula trees.',
      treatments: ['Marula Glow Facial', 'Anti-Aging Elixir Treatment', 'Protective Body Oil Massage']
    },
    {
      id: 3,
      name: 'Baobab Oil',
      scientificName: 'Adansonia digitata',
      pronunciation: 'BAY-oh-bab',
      category: 'oils',
      origin: 'East Africa',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      traditionalUse: `From the "Tree of Life," baobab oil has been used for centuries by East African communities for skin healing and protection. Traditional healers considered it sacred medicine.`,
      modernBenefits: 'Rich in vitamins A, D, E, and K, promotes skin regeneration, reduces inflammation, and provides deep hydration.',
      culturalSignificance: 'Represents longevity and wisdom in African folklore.',
      sustainability: 'Ethically sourced from ancient baobab trees, supporting local communities in Kenya and Tanzania.',
      treatments: ['Tree of Life Facial', 'Regenerating Body Treatment', 'Wisdom Scalp Massage']
    },
    {
      id: 4,
      name: 'African Black Soap',
      scientificName: 'Ose Dudu',
      pronunciation: 'OH-say DOO-doo',
      category: 'herbs',
      origin: 'West Africa',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
      traditionalUse: `Handcrafted by West African women using recipes passed down for over 1,000 years. Made from plantain skins, palm kernel oil, and cocoa pods, it was considered liquid gold.`,
      modernBenefits: 'Natural antibacterial and antifungal properties, gentle exfoliation, balances skin pH, suitable for all skin types.',
      culturalSignificance: 'Symbol of purity and cleansing in Yoruba and Akan traditions.',
      sustainability: 'Made using traditional methods by women cooperatives in Ghana and Nigeria.',
      treatments: ['Purifying Black Soap Ritual', 'Deep Cleansing Facial', 'Traditional Body Cleanse']
    },
    {
      id: 5,
      name: 'Frankincense',
      scientificName: 'Boswellia sacra',
      pronunciation: 'FRANK-in-sense',
      category: 'herbs',
      origin: 'North Africa',
      image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400',
      traditionalUse: `Known as "liquid gold" in ancient Egypt, frankincense was used by Cleopatra and other royalty for skin rejuvenation and spiritual ceremonies.`,
      modernBenefits: 'Powerful anti-aging properties, promotes cellular regeneration, reduces scarring, and provides aromatherapeutic benefits.',
      culturalSignificance: 'Sacred resin used in religious and healing ceremonies across North Africa.',
      sustainability: 'Sustainably harvested from Boswellia trees in Somalia and Oman through traditional methods.',
      treatments: ['Royal Frankincense Facial', 'Sacred Aromatherapy Massage', 'Anti-Aging Elixir Treatment']
    },
    {
      id: 6,
      name: 'Red Clay',
      scientificName: 'Argilla Rubra',
      pronunciation: 'ar-JIL-lah ROO-brah',
      category: 'clays',
      origin: 'Morocco',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      traditionalUse: `Berber women have used red clay from the Atlas Mountains for centuries in purification rituals and skin treatments, believing it connects them to Mother Earth.`,
      modernBenefits: 'Rich in iron oxide, detoxifies skin, improves circulation, gentle exfoliation, and tightens pores.',
      culturalSignificance: 'Represents connection to earth and ancestral wisdom in Berber culture.',
      sustainability: 'Ethically mined from traditional sites in Morocco with respect for local communities.',
      treatments: ['Atlas Mountain Clay Mask', 'Detoxifying Body Wrap', 'Purifying Facial Treatment']
    }
  ];

  const filteredIngredients = ingredients.filter(ingredient => {
    const matchesCategory = selectedCategory === 'all' || ingredient.category === selectedCategory;
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ingredient.origin.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="font-heading text-3xl font-bold text-primary mb-4">
          Sacred Ingredient Library
        </h3>
        <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
          Discover the ancient wisdom and modern science behind Africa's most treasured beauty ingredients
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-cultural"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-cultural ${
                selectedCategory === category.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Icon name={category.icon} size={16} />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIngredients.map((ingredient) => (
          <div key={ingredient.id} className="bg-card rounded-xl overflow-hidden cultural-shadow hover:shadow-lg transition-cultural group">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-cultural"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-heading text-xl font-bold">{ingredient.name}</h4>
                <p className="font-body text-sm opacity-90">
                  {ingredient.pronunciation} • {ingredient.origin}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Scientific Name */}
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Icon name="Microscope" size={16} />
                <span className="font-accent italic">{ingredient.scientificName}</span>
              </div>

              {/* Traditional Use */}
              <div>
                <h5 className="font-body font-semibold text-primary mb-2 flex items-center gap-2">
                  <Icon name="Scroll" size={16} />
                  Traditional Wisdom
                </h5>
                <p className="font-body text-sm text-text-secondary line-clamp-3">
                  {ingredient.traditionalUse}
                </p>
              </div>

              {/* Modern Benefits */}
              <div>
                <h5 className="font-body font-semibold text-primary mb-2 flex items-center gap-2">
                  <Icon name="Sparkles" size={16} />
                  Modern Benefits
                </h5>
                <p className="font-body text-sm text-text-secondary line-clamp-2">
                  {ingredient.modernBenefits}
                </p>
              </div>

              {/* Cultural Significance */}
              <div className="p-3 bg-accent/5 rounded-lg">
                <h5 className="font-body font-semibold text-accent mb-1 flex items-center gap-2">
                  <Icon name="Heart" size={16} />
                  Cultural Significance
                </h5>
                <p className="font-body text-sm text-text-secondary">
                  {ingredient.culturalSignificance}
                </p>
              </div>

              {/* Treatments */}
              <div>
                <h5 className="font-body font-semibold text-primary mb-2">Featured In:</h5>
                <div className="flex flex-wrap gap-1">
                  {ingredient.treatments.slice(0, 2).map((treatment, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                    >
                      {treatment}
                    </span>
                  ))}
                  {ingredient.treatments.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                      +{ingredient.treatments.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Sustainability Badge */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Icon name="Leaf" size={16} className="text-success" />
                <span className="font-body text-xs text-success font-medium">
                  Ethically Sourced
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredIngredients.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-text-secondary mb-4" />
          <h4 className="font-heading text-xl text-primary mb-2">No ingredients found</h4>
          <p className="font-body text-text-secondary">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientLibrary;