import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CulturalHeritage = () => {
  const heritageElements = [
    {
      id: 1,
      title: "Ancient Shea Butter Traditions",
      culturalName: "Mafuta ya Shea",
      origin: "West Africa - Ghana & Burkina Faso",
      history: "1000+ years",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
      description: `Known as "women's gold," shea butter has been treasured by African women for over a millennium. Traditionally harvested by women's cooperatives, it represents economic empowerment and beauty wisdom passed down through generations.`,
      benefits: ["Deep moisturization", "Anti-inflammatory", "UV protection", "Anti-aging"],
      culturalSignificance: "Symbol of feminine strength and community cooperation",
      modernApplication: "Premium spa treatments combining traditional extraction with modern purification",
      ritualProcess: "Sacred harvesting during dry season, community processing ceremonies, blessing rituals"
    },
    {
      id: 2,
      title: "Baobab Tree Wisdom",
      culturalName: "Mti wa Maisha",
      origin: "East & Southern Africa",
      history: "2000+ years",
      image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg",
      description: `The baobab, revered as the Tree of Life, can live for thousands of years. Its oil has been used by African communities for centuries to heal and protect skin, representing resilience, longevity, and the connection between earth and sky.`,
      benefits: ["Vitamin-rich hydration", "Collagen stimulation", "Skin repair", "Antioxidant protection"],
      culturalSignificance: "Sacred tree representing ancestral wisdom and eternal life",
      modernApplication: "Cold-pressed oil extraction for premium anti-aging treatments",
      ritualProcess: "Seasonal fruit collection, traditional oil pressing, community sharing ceremonies"
    },
    {
      id: 3,
      title: "Coffee Beauty Rituals",
      culturalName: "Kahawa ya Uzuri",
      origin: "Ethiopian Highlands - Kenya",
      history: "800+ years",
      image: "https://images.pexels.com/photos/4041393/pexels-photo-4041393.jpeg",
      description: `Coffee originated in Ethiopia and spread throughout East Africa. Beyond its energizing properties, coffee has been used in traditional beauty rituals for skin exfoliation and circulation enhancement, celebrating the connection between inner vitality and outer radiance.`,
      benefits: ["Cellulite reduction", "Improved circulation", "Antioxidant protection", "Skin tightening"],
      culturalSignificance: "Symbol of hospitality, community gathering, and shared wisdom",
      modernApplication: "Premium body polishes using single-origin Kenyan AA coffee beans",
      ritualProcess: "Ceremonial coffee preparation, community beauty sharing, blessing of harvest"
    }
  ];

  const ingredients = [
    {
      name: "Marula Oil",
      origin: "Southern Africa",
      benefit: "Anti-aging & hydration",
      icon: "Droplets"
    },
    {
      name: "African Potato",
      origin: "South Africa",
      benefit: "Skin healing & repair",
      icon: "Leaf"
    },
    {
      name: "Kalahari Melon",
      origin: "Botswana",
      benefit: "Deep moisturization",
      icon: "Circle"
    },
    {
      name: "Mongongo Oil",
      origin: "Namibia",
      benefit: "UV protection",
      icon: "Shield"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-accent text-lg text-secondary">Utamaduni wa Afrika</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">
              Our Cultural Heritage
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every treatment at Serenity Spa honors thousands of years of African beauty wisdom, transforming ancient traditions into modern luxury experiences.
          </p>
        </div>

        {/* Heritage Elements */}
        <div className="space-y-16 mb-20">
          {heritageElements.map((element, index) => (
            <div key={element.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-96 rounded-xl overflow-hidden cultural-shadow">
                  <Image
                    src={element.image}
                    alt={`${element.title} - Traditional African beauty ingredient`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  
                  {/* Heritage Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full">
                      <span className="font-body text-sm font-medium">{element.history}</span>
                    </div>
                  </div>

                  {/* Origin */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="font-body text-sm text-primary font-medium">{element.origin}</span>
                    </div>
                  </div>
                </div>

                {/* Cultural Pattern Overlay */}
                <div className="absolute -inset-4 opacity-20 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="mb-6">
                  <h3 className="font-heading text-3xl font-bold text-primary mb-2">{element.title}</h3>
                  <p className="font-accent text-lg text-secondary italic">{element.culturalName}</p>
                </div>

                <p className="font-body text-text-secondary leading-relaxed mb-6">
                  {element.description}
                </p>

                {/* Cultural Significance */}
                <div className="mb-6">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Cultural Significance:</h4>
                  <p className="font-body text-sm text-text-secondary italic">
                    {element.culturalSignificance}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-body text-sm font-semibold text-primary mb-3">Traditional Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {element.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="font-body text-sm text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modern Application */}
                <div className="mb-6">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Modern Application:</h4>
                  <p className="font-body text-sm text-text-secondary">
                    {element.modernApplication}
                  </p>
                </div>

                {/* Ritual Process */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                  <h4 className="font-body text-sm font-semibold text-accent mb-2">Traditional Ritual:</h4>
                  <p className="font-body text-sm text-primary">
                    {element.ritualProcess}
                  </p>
                </div>

                <Link to="/cultural-heritage-hub">
                  <Button
                    variant="outline"
                    iconName="BookOpen"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Learn More About This Tradition
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Ingredients */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-primary mb-4">
              More Sacred Ingredients
            </h3>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              Our treatments incorporate dozens of traditional African botanicals, each with its own cultural story and healing properties.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-surface/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-surface/20 transition-cultural">
                  <Icon name={ingredient.icon} size={24} className="text-surface" />
                </div>
                <h4 className="font-body text-sm font-semibold text-primary mb-1">{ingredient.name}</h4>
                <p className="font-body text-xs text-text-secondary mb-2">{ingredient.origin}</p>
                <p className="font-body text-xs text-accent">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-accent" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">3000+</div>
            <p className="font-body text-sm text-text-secondary">Years of Wisdom</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Leaf" size={24} className="text-secondary" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">50+</div>
            <p className="font-body text-sm text-text-secondary">Sacred Ingredients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Globe" size={24} className="text-success" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">15</div>
            <p className="font-body text-sm text-text-secondary">African Countries</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-surface/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-surface" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">100+</div>
            <p className="font-body text-sm text-text-secondary">Traditional Practices</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/cultural-heritage-hub">
            <Button
              variant="default"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
              className="bg-cta hover:bg-cta/90 text-cta-foreground premium-hover"
            >
              Explore Our Complete Heritage
            </Button>
          </Link>
        </div>

        {/* Cultural Pattern Decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;