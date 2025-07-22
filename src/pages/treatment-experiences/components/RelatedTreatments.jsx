import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const RelatedTreatments = ({ treatments, currentTreatmentId }) => {
  const relatedTreatments = treatments.filter(t => t.id !== currentTreatmentId).slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-lg">Discover More</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
            Related Experiences
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Explore other authentic African wellness treatments that complement your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-card rounded-xl overflow-hidden cultural-shadow hover:transform hover:scale-102 transition-cultural"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={`${treatment.name} treatment experience`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {treatment.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {treatment.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Icon name="Clock" size={14} />
                    <span>{treatment.duration}</span>
                    <span>•</span>
                    <span>From KES {treatment.startingPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="font-body text-sm text-text-primary mb-4 leading-relaxed">
                  {treatment.shortDescription}
                </p>

                <div className="mb-4">
                  <h4 className="font-heading text-sm font-semibold text-primary mb-2">
                    Key Benefits
                  </h4>
                  <div className="space-y-1">
                    {treatment.keyBenefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon name="Check" size={12} className="text-success flex-shrink-0" />
                        <span className="font-body text-xs text-text-primary">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < treatment.rating ? 'text-accent fill-current' : 'text-border'}
                      />
                    ))}
                    <span className="font-body text-xs text-text-secondary ml-1">
                      ({treatment.reviewCount})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={12} className="text-secondary" />
                    <span className="font-body text-xs text-text-secondary">
                      {treatment.popularityLevel}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to={`/treatment-experiences/${treatment.slug}`}>
                    <Button
                      variant="outline"
                      fullWidth
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      View Details
                    </Button>
                  </Link>

                  <Button
                    variant="default"
                    fullWidth
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    Quick Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments */}
        <div className="mt-12 text-center">
          <Link to="/treatment-experiences">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Treatments
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedTreatments;