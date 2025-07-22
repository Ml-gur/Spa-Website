import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TransformationGallery = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const transformations = [
    {
      id: 1,
      clientName: "Grace Wanjiru",
      age: 34,
      profession: "Marketing Executive",
      location: "Nairobi",
      beforeImage: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
      afterImage: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg",
      treatment: "Traditional Shea Butter Ritual",
      duration: "3 months",
      sessions: 6,
      testimonial: `"I never believed in the power of traditional African beauty treatments until I experienced Serenity Spa. The shea butter ritual didn't just transform my skin—it reconnected me with my heritage. My grandmother used to tell me stories about the healing power of shea butter, and now I understand why. My skin has never looked better, and I feel more confident in my natural beauty."`,
      results: ["Reduced fine lines", "Improved skin texture", "Natural glow", "Increased confidence"],
      culturalImpact: "Reconnected with ancestral beauty wisdom",
      rating: 5
    },
    {
      id: 2,
      clientName: "Fatuma Hassan",
      age: 28,
      profession: "Teacher",
      location: "Mombasa",
      beforeImage: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg",
      afterImage: "https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg",
      treatment: "Baobab Oil Renewal",
      duration: "2 months",
      sessions: 4,
      testimonial: `"As a teacher, I'm constantly stressed and my skin showed it. The baobab oil renewal treatment was like a spiritual journey. Zara explained how the baobab tree represents resilience and longevity—qualities I needed in my life. After just four sessions, my skin is radiant and I feel emotionally renewed. This isn't just skincare; it's soul care."`,
      results: ["Hydrated skin", "Stress relief", "Emotional wellness", "Radiant complexion"],
      culturalImpact: "Embraced coastal Swahili beauty traditions",
      rating: 5
    },
    {
      id: 3,
      clientName: "Sarah Akinyi",
      age: 42,
      profession: "Business Owner",
      location: "Kisumu",
      beforeImage: "https://images.pexels.com/photos/3762884/pexels-photo-3762884.jpeg",
      afterImage: "https://images.pexels.com/photos/3762889/pexels-photo-3762889.jpeg",
      treatment: "Kenyan Coffee Body Polish",
      duration: "6 weeks",
      sessions: 3,
      testimonial: `"Running my own business left me with little time for self-care. The coffee body polish treatment was perfect—energizing and efficient. Kesi made me understand that self-care isn't selfish; it's necessary. The treatment reminded me of my grandmother's coffee ceremonies, bringing back beautiful memories while giving me the energy boost I needed."`,
      results: ["Smoother skin", "Increased energy", "Better circulation", "Renewed motivation"],
      culturalImpact: "Honored family coffee traditions",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % transformations.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const currentTransformation = transformations[activeTestimonial];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-accent text-lg text-secondary">Mabadiliko ya Uzuri</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">
              Transformation Stories
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real women, real results, real cultural connections. Discover how our treatments transform not just skin, but confidence and cultural pride.
          </p>
        </div>

        {/* Main Transformation Showcase */}
        <div className="bg-card rounded-2xl overflow-hidden cultural-shadow mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Before/After Images */}
            <div className="relative">
              <div className="grid grid-cols-2 h-full">
                {/* Before Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={currentTransformation.beforeImage}
                    alt={`${currentTransformation.clientName} before treatment`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg font-body text-sm font-medium text-primary">
                      Before
                    </span>
                  </div>
                </div>
                
                {/* After Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={currentTransformation.afterImage}
                    alt={`${currentTransformation.clientName} after treatment`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-2 rounded-lg font-body text-sm font-medium">
                      After
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="bg-white/90 backdrop-blur-sm hover:bg-white text-primary w-10 h-10"
                  iconName="ChevronLeft"
                />
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="bg-white/90 backdrop-blur-sm hover:bg-white text-primary w-10 h-10"
                  iconName="ChevronRight"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Client Info */}
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  {currentTransformation.clientName}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                  <span>{currentTransformation.age} years old</span>
                  <span>•</span>
                  <span>{currentTransformation.profession}</span>
                  <span>•</span>
                  <span>{currentTransformation.location}</span>
                </div>
              </div>

              {/* Treatment Details */}
              <div className="mb-6">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <h4 className="font-body text-sm font-semibold text-accent mb-2">Treatment Journey:</h4>
                  <p className="font-body text-sm text-primary mb-2">{currentTransformation.treatment}</p>
                  <div className="flex gap-4 text-xs text-text-secondary">
                    <span>{currentTransformation.duration}</span>
                    <span>•</span>
                    <span>{currentTransformation.sessions} sessions</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(currentTransformation.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                ))}
                <span className="font-body text-sm text-text-secondary ml-2">
                  {currentTransformation.rating}/5 stars
                </span>
              </div>

              {/* Testimonial */}
              <blockquote className="mb-6">
                <p className="font-body text-text-secondary leading-relaxed italic">
                  "{currentTransformation.testimonial}"
                </p>
              </blockquote>

              {/* Results */}
              <div className="mb-6">
                <h4 className="font-body text-sm font-semibold text-primary mb-3">Transformation Results:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentTransformation.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="font-body text-sm text-text-secondary">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Impact */}
              <div className="mb-8">
                <h4 className="font-body text-sm font-semibold text-primary mb-2">Cultural Connection:</h4>
                <p className="font-accent text-sm text-secondary italic">
                  {currentTransformation.culturalImpact}
                </p>
              </div>

              {/* CTA */}
              <Link to="/booking-intelligence-portal">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground premium-hover"
                >
                  Start Your Transformation
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Transformation Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-cultural ${
                index === activeTestimonial ? 'bg-accent' : 'bg-border hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-success" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">98%</div>
            <p className="font-body text-sm text-text-secondary">Visible Results</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={24} className="text-accent" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">95%</div>
            <p className="font-body text-sm text-text-secondary">Increased Confidence</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Repeat" size={24} className="text-secondary" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">92%</div>
            <p className="font-body text-sm text-text-secondary">Return Clients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-surface/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-surface" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">89%</div>
            <p className="font-body text-sm text-text-secondary">Referrals</p>
          </div>
        </div>

        {/* Cultural Pattern Decoration */}
        <div className="flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;