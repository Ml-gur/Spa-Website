import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TreatmentProcess = ({ process }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-accent text-secondary text-lg">Your Journey</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
            Treatment Experience
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Discover what awaits you during your transformative cultural wellness journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Process Steps */}
          <div className="space-y-6">
            {process.steps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-cultural ${
                  activeStep === index
                    ? 'bg-accent/10 border-2 border-accent' :'bg-card hover:bg-accent/5 border border-border'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeStep === index
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-surface text-surface-foreground'
                  }`}>
                    <Icon name={step.icon} size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-lg font-semibold text-primary">
                        {step.title}
                      </h3>
                      <span className="text-sm text-text-secondary">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="font-body text-text-primary leading-relaxed">
                      {step.description}
                    </p>
                    
                    {step.highlights && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-surface/20 text-surface text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative overflow-hidden rounded-xl cultural-shadow">
                <Image
                  src={process.steps[activeStep].image}
                  alt={`${process.steps[activeStep].title} process`}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/95 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                      Step {activeStep + 1}: {process.steps[activeStep].title}
                    </h4>
                    <p className="font-body text-sm text-text-secondary">
                      {process.steps[activeStep].imageCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;