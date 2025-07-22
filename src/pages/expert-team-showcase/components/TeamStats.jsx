import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamStats = ({ therapists }) => {
  const totalExperience = therapists.reduce((sum, therapist) => sum + parseInt(therapist.experience), 0);
  const averageRating = therapists.reduce((sum, therapist) => sum + therapist.rating, 0) / therapists.length;
  const totalReviews = therapists.reduce((sum, therapist) => sum + therapist.reviewCount, 0);
  const availableToday = therapists.filter(therapist => therapist.isAvailable).length;
  const uniqueSpecializations = [...new Set(therapists.flatMap(t => t.specializations))].length;
  const culturalExpertiseCount = [...new Set(therapists.map(t => t.culturalExpertise))].length;

  const stats = [
    {
      icon: 'Users',
      value: therapists.length,
      label: 'Expert Therapists',
      description: 'Certified professionals',
      color: 'text-accent'
    },
    {
      icon: 'Clock',
      value: `${totalExperience}+`,
      label: 'Years Combined Experience',
      description: 'Collective expertise',
      color: 'text-secondary'
    },
    {
      icon: 'Star',
      value: averageRating.toFixed(1),
      label: 'Average Rating',
      description: `From ${totalReviews.toLocaleString()} reviews`,
      color: 'text-accent'
    },
    {
      icon: 'Calendar',
      value: availableToday,
      label: 'Available Today',
      description: 'Ready to serve you',
      color: 'text-success'
    },
    {
      icon: 'Award',
      value: uniqueSpecializations,
      label: 'Treatment Specializations',
      description: 'Diverse expertise',
      color: 'text-surface'
    },
    {
      icon: 'Globe',
      value: culturalExpertiseCount,
      label: 'Cultural Traditions',
      description: 'African beauty heritage',
      color: 'text-secondary'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl p-8 cultural-shadow">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-bold text-primary mb-2">
          Our Expert Team
        </h2>
        <p className="font-body text-text-secondary max-w-2xl mx-auto">
          Meet our certified African beauty professionals who blend traditional wisdom with modern wellness techniques to create transformative experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-cultural"
          >
            <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center mx-auto mb-4 cultural-shadow group-hover:shadow-cultural">
              <Icon
                name={stat.icon}
                size={24}
                className={`${stat.color} group-hover:scale-110 transition-cultural`}
              />
            </div>
            <div className="space-y-1">
              <p className="font-heading text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="font-body text-sm font-semibold text-text-primary">
                {stat.label}
              </p>
              <p className="font-body text-xs text-text-secondary">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Pattern Decoration */}
      <div className="flex justify-center mt-8">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default TeamStats;