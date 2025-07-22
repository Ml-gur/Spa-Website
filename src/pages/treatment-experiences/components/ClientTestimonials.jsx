import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClientTestimonials = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-lg">Client Stories</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
            Transformation Journeys
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Real stories of cultural pride and empowerment through authentic African wellness
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-xl p-8 cultural-shadow">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-accent fill-current"
                  />
                ))}
              </div>

              <blockquote className="font-body text-lg text-text-primary leading-relaxed mb-6 italic">
                "{currentClient.testimonial}"
              </blockquote>

              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {currentClient.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  <span>{currentClient.location}</span>
                  <span>•</span>
                  <span>{currentClient.treatmentDate}</span>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-4 mb-6">
                <h4 className="font-heading text-sm font-semibold text-primary mb-2">
                  Treatment Experience
                </h4>
                <p className="font-body text-sm text-text-primary">
                  {currentClient.treatmentExperience}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span className="font-body text-sm text-text-secondary">
                    {currentClient.treatmentType}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="User" size={16} className="text-secondary" />
                  <span className="font-body text-sm text-text-secondary">
                    Therapist: {currentClient.therapist}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="sm"
                iconName="ChevronLeft"
                onClick={prevTestimonial}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              />

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-cultural ${
                      index === currentTestimonial
                        ? 'bg-accent' :'bg-border hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                iconName="ChevronRight"
                onClick={nextTestimonial}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              />
            </div>
          </div>

          {/* Before/After Images */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="font-body text-sm text-text-secondary">Before</span>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={currentClient.beforeImage}
                      alt="Before treatment"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="font-body text-sm text-text-secondary">After</span>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={currentClient.afterImage}
                      alt="After treatment"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-success/90 text-success-foreground px-2 py-1 rounded-full text-xs">
                        ✨ Transformed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Metrics */}
              <div className="mt-6 bg-surface/10 rounded-lg p-4">
                <h4 className="font-heading text-sm font-semibold text-primary mb-3">
                  Transformation Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {currentClient.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="font-heading text-lg font-bold text-accent">
                        {result.value}
                      </div>
                      <div className="font-body text-xs text-text-secondary">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-8">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have discovered the power of authentic African wellness traditions
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground premium-hover"
            >
              Book Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;