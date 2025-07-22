import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';


const SignatureTreatments = () => {
  const treatments = [
    {
      id: 1,
      name: "Traditional Shea Butter Ritual",
      culturalName: "Mafuta ya Shea",
      duration: "90 minutes",
      price: "KES 8,500",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg",
      description: "Ancient West African beauty secret meets modern luxury. Our signature ritual uses pure, unrefined shea butter sourced directly from women's cooperatives in Ghana.",
      benefits: ["Deep skin nourishment", "Anti-aging properties", "Cultural healing experience"],
      ingredients: ["Raw Shea Butter", "Baobab Oil", "African Potato Extract"],
      culturalStory: `Shea butter has been treasured by African women for over 1,000 years. Known as "women's gold," it represents economic empowerment and beauty wisdom passed down through generations.`,
      isPopular: true
    },
    {
      id: 2,
      name: "Baobab Oil Renewal",
      culturalName: "Mti wa Maisha",
      duration: "75 minutes",
      price: "KES 7,200",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
      description: "Harness the power of Africa's Tree of Life. This rejuvenating treatment uses cold-pressed baobab oil rich in vitamins A, D, E, and F for ultimate skin renewal.",
      benefits: ["Vitamin-rich hydration", "Collagen stimulation", "Radiant glow"],
      ingredients: ["Cold-pressed Baobab Oil", "Marula Oil", "Kalahari Melon Seed Oil"],
      culturalStory: `The baobab tree, revered as the Tree of Life, can live for thousands of years. Its oil has been used by African communities for centuries to heal and protect skin.`,
      isNew: true
    },
    {
      id: 3,
      name: "Kenyan Coffee Body Polish",
      culturalName: "Kahawa ya Mwanga",
      duration: "60 minutes",
      price: "KES 6,800",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg",
      description: "Awaken your skin with premium Kenyan coffee beans. This energizing body treatment combines exfoliation with antioxidant-rich coffee for smooth, glowing skin.",
      benefits: ["Cellulite reduction", "Improved circulation", "Antioxidant protection"],
      ingredients: ["Kenyan AA Coffee Beans", "Coconut Oil", "Brown Sugar", "Vanilla Extract"],
      culturalStory: `Kenya produces some of the world's finest coffee. Our treatment celebrates this heritage while providing caffeine's proven benefits for skin tightening and circulation.`,
      isSignature: true
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-accent text-lg text-secondary">Utamaduni wa Uzuri</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">
              Signature African Treatments
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Each treatment tells a story of African beauty wisdom, combining traditional ingredients with modern luxury techniques for transformative results.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="group relative bg-card rounded-xl overflow-hidden cultural-shadow hover:shadow-cultural transition-cultural">
              {/* Treatment Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={`${treatment.name} - African luxury spa treatment`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-cultural"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {treatment.isPopular && (
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  )}
                  {treatment.isNew && (
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {treatment.isSignature && (
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Signature
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="font-body text-lg font-bold text-primary">{treatment.price}</span>
                  </div>
                </div>
              </div>

              {/* Treatment Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-primary">{treatment.name}</h3>
                    <span className="font-body text-sm text-text-secondary">{treatment.duration}</span>
                  </div>
                  <p className="font-accent text-sm text-secondary italic">{treatment.culturalName}</p>
                </div>

                {/* Description */}
                <p className="font-body text-text-secondary mb-4 leading-relaxed">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {treatment.benefits.map((benefit, index) => (
                      <span key={index} className="bg-surface/20 text-surface px-2 py-1 rounded-md text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cultural Story Preview */}
                <div className="mb-6">
                  <p className="font-body text-sm text-text-secondary italic leading-relaxed">
                    "{treatment.culturalStory.substring(0, 120)}..."
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link to="/treatment-experiences" className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Info"
                      iconPosition="left"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link to="/booking-intelligence-portal">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Calendar"
                      className="bg-cta hover:bg-cta/90 text-cta-foreground"
                    >
                      Book
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments CTA */}
        <div className="text-center">
          <Link to="/treatment-experiences">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground premium-hover"
            >
              Explore All Treatments
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

export default SignatureTreatments;