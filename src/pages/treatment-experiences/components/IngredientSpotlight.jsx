import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IngredientSpotlight = ({ ingredients }) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-lg">Natural Wellness</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
            Premium African Ingredients
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Discover the powerful botanicals sourced from across Africa for your treatment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden cultural-shadow hover:transform hover:scale-102 transition-cultural"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={ingredient.image}
                  alt={`${ingredient.name} - African botanical ingredient`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <div className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {ingredient.origin}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {ingredient.name}
                  </h3>
                  <p className="font-accent text-white/90 text-sm">
                    {ingredient.scientificName}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                    Traditional Uses
                  </h4>
                  <p className="font-body text-sm text-text-primary leading-relaxed">
                    {ingredient.traditionalUse}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-heading text-sm font-semibold text-primary mb-2">
                    Modern Benefits
                  </h4>
                  <div className="space-y-2">
                    {ingredient.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span className="font-body text-sm text-text-primary">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={14} className="text-secondary" />
                      <span className="font-body text-xs text-text-secondary">
                        Sourced from {ingredient.sourceRegion}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="Leaf" size={14} className="text-surface" />
                      <span className="font-body text-xs text-text-secondary">
                        {ingredient.sustainability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-surface/10 rounded-xl p-8 max-w-4xl mx-auto">
            <Icon name="Leaf" size={32} className="text-surface mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Sustainably Sourced Excellence
            </h3>
            <p className="font-body text-text-primary leading-relaxed mb-6">
              Every ingredient in your treatment is carefully sourced from trusted African suppliers who practice sustainable harvesting methods. We work directly with local communities to ensure fair trade practices while preserving traditional knowledge and supporting economic growth across the continent.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>Certified Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={16} className="text-accent" />
                <span>Fair Trade</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Recycle" size={16} className="text-surface" />
                <span>Sustainable Harvesting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSpotlight;