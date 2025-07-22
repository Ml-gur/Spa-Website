import React from 'react';
import Image from '../../../components/AppImage';

const CulturalStory = ({ story }) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="font-accent text-secondary text-lg">Cultural Heritage</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2">
                {story.title}
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="font-body text-lg text-text-primary leading-relaxed">
                {story.introduction}
              </p>
              
              <div className="bg-surface/10 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  Traditional Origins
                </h3>
                <p className="font-body text-text-primary leading-relaxed">
                  {story.origins}
                </p>
              </div>
              
              <p className="font-body text-text-primary leading-relaxed">
                {story.modernApplication}
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                <span className="font-accent text-secondary italic">
                  "Where tradition becomes transformation"
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl cultural-shadow">
              <Image
                src={story.image}
                alt={story.imageAlt}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalStory;