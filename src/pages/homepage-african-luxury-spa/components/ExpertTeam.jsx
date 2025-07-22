import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ExpertTeam = () => {
  const therapists = [
    {
      id: 1,
      name: "Amara Wanjiku",
      title: "Senior African Beauty Specialist",
      specialization: "Traditional Shea Butter Rituals",
      experience: "12 years",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg",
      certifications: ["International Spa Therapy", "African Traditional Medicine", "Aromatherapy"],
      culturalBackground: "Born in Nakuru, Amara learned traditional beauty practices from her grandmother who was a renowned healer in the Kikuyu community.",
      languages: ["English", "Swahili", "Kikuyu"],
      signature: "Shea Butter & Baobab Renewal",
      philosophy: `"Beauty is not just about appearance—it's about connecting with your ancestral wisdom and embracing your natural radiance."`,
      achievements: ["Kenya Spa Excellence Award 2023", "Traditional Healing Certification", "Client Satisfaction 98%"],
      availability: "Mon-Fri, 9AM-6PM"
    },
    {
      id: 2,
      name: "Zara Muthoni",
      title: "Cultural Wellness Expert",
      specialization: "Baobab Oil Treatments",
      experience: "8 years",
      image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg",
      certifications: ["Holistic Therapy", "African Botanical Medicine", "Reflexology"],
      culturalBackground: "From Mombasa, Zara combines coastal Swahili beauty traditions with modern wellness techniques for transformative experiences.",
      languages: ["English", "Swahili", "Arabic"],
      signature: "Coastal Baobab Renewal",
      philosophy: `"Every treatment is a journey back to your roots, celebrating the beauty wisdom of our ancestors."`,
      achievements: ["Rising Star Therapist 2022", "Botanical Medicine Expert", "Client Retention 95%"],
      availability: "Tue-Sat, 10AM-7PM"
    },
    {
      id: 3,
      name: "Kesi Achieng",
      title: "Master Body Therapist",
      specialization: "Coffee Body Treatments",
      experience: "15 years",
      image: "https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg",
      certifications: ["Advanced Body Therapy", "Sports Massage", "Lymphatic Drainage"],
      culturalBackground: "Hailing from Kisumu, Kesi specializes in Luo traditional healing methods combined with modern body therapy techniques.",
      languages: ["English", "Swahili", "Luo"],
      signature: "Kenyan Coffee Energizer",
      philosophy: `"The body holds stories of strength and resilience. My role is to help you reconnect with that power."`,
      achievements: ["Master Therapist Certification", "Body Therapy Innovation Award", "15 Years Excellence"],
      availability: "Mon-Thu, 8AM-5PM"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-accent text-lg text-secondary">Wataalamu Wetu</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-2">
              Meet Our Expert Therapists
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our certified African beauty professionals combine ancestral wisdom with international training to deliver transformative wellness experiences.
          </p>
        </div>

        {/* Therapists Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="group bg-background rounded-xl overflow-hidden cultural-shadow hover:shadow-cultural transition-cultural">
              {/* Therapist Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={therapist.image}
                  alt={`${therapist.name} - Expert African beauty therapist at Serenity Spa Kenya`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-cultural"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {therapist.experience}
                  </div>
                </div>

                {/* Availability */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="font-body text-xs text-primary">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Therapist Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-bold text-primary mb-1">{therapist.name}</h3>
                  <p className="font-body text-sm text-secondary font-medium">{therapist.title}</p>
                  <p className="font-accent text-sm text-text-secondary italic">{therapist.specialization}</p>
                </div>

                {/* Philosophy */}
                <div className="mb-4">
                  <p className="font-body text-sm text-text-secondary italic leading-relaxed">
                    {therapist.philosophy}
                  </p>
                </div>

                {/* Cultural Background */}
                <div className="mb-4">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Cultural Heritage:</h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {therapist.culturalBackground}
                  </p>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.certifications.map((cert, index) => (
                      <span key={index} className="bg-surface/20 text-surface px-2 py-1 rounded-md text-xs">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Languages:</h4>
                  <p className="font-body text-sm text-text-secondary">
                    {therapist.languages.join(", ")}
                  </p>
                </div>

                {/* Signature Treatment */}
                <div className="mb-6">
                  <h4 className="font-body text-sm font-semibold text-primary mb-2">Signature Treatment:</h4>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <p className="font-body text-sm text-accent font-medium">{therapist.signature}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link to="/expert-team-showcase" className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="User"
                      iconPosition="left"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      View Profile
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

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-accent" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">15+</div>
            <p className="font-body text-sm text-text-secondary">Years Combined Experience</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-secondary" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">500+</div>
            <p className="font-body text-sm text-text-secondary">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={24} className="text-success" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">98%</div>
            <p className="font-body text-sm text-text-secondary">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-surface/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={24} className="text-surface" />
            </div>
            <div className="font-heading text-3xl font-bold text-primary mb-2">3</div>
            <p className="font-body text-sm text-text-secondary">Cultural Traditions</p>
          </div>
        </div>

        {/* Meet All Team CTA */}
        <div className="text-center">
          <Link to="/expert-team-showcase">
            <Button
              variant="outline"
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground premium-hover"
            >
              Meet Our Complete Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;