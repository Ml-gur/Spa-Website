import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Header from '../../components/ui/Header';
import AfricaMap from './components/AfricaMap';
import IngredientLibrary from './components/IngredientLibrary';
import SeasonalTraditions from './components/SeasonalTraditions';
import TraditionalMeetsModern from './components/TraditionalMeetsModern';
import CulturalImpact from './components/CulturalImpact';
import InteractiveQuiz from './components/InteractiveQuiz';

const CulturalHeritageHub = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const navigationSections = [
    { id: 'overview', name: 'Heritage Overview', icon: 'Crown' },
    { id: 'map', name: 'Origins Map', icon: 'Map' },
    { id: 'ingredients', name: 'Ingredient Library', icon: 'Leaf' },
    { id: 'seasons', name: 'Seasonal Traditions', icon: 'Calendar' },
    { id: 'fusion', name: 'Traditional Meets Modern', icon: 'Sparkles' },
    { id: 'impact', name: 'Cultural Impact', icon: 'Heart' },
    { id: 'quiz', name: 'Discovery Quiz', icon: 'HelpCircle' }
  ];

  const heritageStats = [
    { number: '3000+', label: 'Years of Tradition', icon: 'Clock' },
    { number: '50+', label: 'Sacred Ingredients', icon: 'Leaf' },
    { number: '25', label: 'Cultural Practices', icon: 'Star' },
    { number: '12', label: 'African Regions', icon: 'MapPin' }
  ];

  const featuredIngredients = [
    {
      name: 'Shea Butter',
      origin: 'West Africa',
      benefit: 'Deep Moisturization',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300',
      color: 'bg-accent'
    },
    {
      name: 'Marula Oil',
      origin: 'Southern Africa',
      benefit: 'Anti-Aging',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300',
      color: 'bg-secondary'
    },
    {
      name: 'Frankincense',
      origin: 'North Africa',
      benefit: 'Skin Regeneration',
      image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300',
      color: 'bg-surface'
    },
    {
      name: 'African Black Soap',
      origin: 'West Africa',
      benefit: 'Natural Cleansing',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300',
      color: 'bg-cta'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'map':
        return <AfricaMap />;
      case 'ingredients':
        return <IngredientLibrary />;
      case 'seasons':
        return <SeasonalTraditions />;
      case 'fusion':
        return <TraditionalMeetsModern />;
      case 'impact':
        return <CulturalImpact />;
      case 'quiz':
        return <InteractiveQuiz />;
      default:
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden cultural-shadow">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200"
                  alt="African Heritage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
                
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                    <defs>
                      <pattern id="heritage-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3"/>
                        <path d="M10 20 L30 20 M20 10 L20 30" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#heritage-pattern)" className="text-accent"/>
                  </svg>
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                  <div className="max-w-4xl">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Icon name="Crown" size={24} className="text-accent" />
                      </div>
                      <span className="font-accent text-xl">Karibu to Our Heritage</span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                      African Beauty Wisdom
                    </h1>
                    <p className="font-body text-xl lg:text-2xl opacity-95 mb-8 max-w-3xl mx-auto">
                      Discover 3,000 years of beauty traditions that have nourished African queens, 
                      healers, and communities across the continent
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => setActiveSection('map')}
                        className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-cultural premium-hover"
                      >
                        Explore Origins Map
                      </button>
                      <button
                        onClick={() => setActiveSection('quiz')}
                        className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-cultural"
                      >
                        Take Discovery Quiz
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heritage Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {heritageStats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl cultural-shadow hover:shadow-lg transition-cultural">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} size={24} className="text-accent" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-body text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Ingredients Preview */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                  Sacred Ingredients from Across Africa
                </h2>
                <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
                  Each ingredient tells a story of cultural wisdom, traditional healing, and natural beauty
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredIngredients.map((ingredient, index) => (
                  <div key={index} className="group cursor-pointer" onClick={() => setActiveSection('ingredients')}>
                    <div className="relative rounded-xl overflow-hidden cultural-shadow hover:shadow-lg transition-cultural">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={ingredient.image}
                          alt={ingredient.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-cultural"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                        <div className={`absolute top-4 right-4 w-8 h-8 ${ingredient.color} rounded-full flex items-center justify-center`}>
                          <Icon name="Star" size={16} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-heading text-lg font-bold mb-1">{ingredient.name}</h3>
                        <p className="font-body text-sm opacity-90 mb-1">{ingredient.origin}</p>
                        <span className="font-body text-xs bg-white/20 px-2 py-1 rounded-full">
                          {ingredient.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setActiveSection('ingredients')}
                  className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-cultural"
                >
                  Explore Full Ingredient Library
                </button>
              </div>
            </div>

            {/* Cultural Wisdom Quote */}
            <div className="bg-gradient-to-r from-accent/5 via-secondary/5 to-surface/5 rounded-xl p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Quote" size={24} className="text-accent" />
              </div>
              <blockquote className="font-accent text-2xl lg:text-3xl text-primary mb-6 italic">
                "Beauty is not just what you see on the surface, but the wisdom that flows from within, 
                nurtured by the earth and blessed by our ancestors."
              </blockquote>
              <cite className="font-body text-text-secondary">
                — Traditional African Proverb
              </cite>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="p-6 bg-card rounded-xl cultural-shadow hover:shadow-lg transition-cultural cursor-pointer group"
                onClick={() => setActiveSection('seasons')}
              >
                <div className="w-12 h-12 bg-surface/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-surface/30 transition-cultural">
                  <Icon name="Calendar" size={24} className="text-surface" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Seasonal Traditions
                </h3>
                <p className="font-body text-text-secondary mb-4">
                  Discover how African beauty practices align with natural seasons and cultural celebrations
                </p>
                <div className="flex items-center text-surface font-medium">
                  <span>Explore Seasons</span>
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-cultural" />
                </div>
              </div>

              <div 
                className="p-6 bg-card rounded-xl cultural-shadow hover:shadow-lg transition-cultural cursor-pointer group"
                onClick={() => setActiveSection('fusion')}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-cultural">
                  <Icon name="Sparkles" size={24} className="text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Traditional Meets Modern
                </h3>
                <p className="font-body text-text-secondary mb-4">
                  See how ancient wisdom is respectfully adapted for contemporary wellness
                </p>
                <div className="flex items-center text-secondary font-medium">
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-cultural" />
                </div>
              </div>

              <div 
                className="p-6 bg-card rounded-xl cultural-shadow hover:shadow-lg transition-cultural cursor-pointer group"
                onClick={() => setActiveSection('impact')}
              >
                <div className="w-12 h-12 bg-cta/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-cta/30 transition-cultural">
                  <Icon name="Heart" size={24} className="text-cta" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Cultural Impact
                </h3>
                <p className="font-body text-text-secondary mb-4">
                  Learn how we support African communities and preserve cultural heritage
                </p>
                <div className="flex items-center text-cta font-medium">
                  <span>See Impact</span>
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-cultural" />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Navigation Header */}
        <div className="bg-card border-b border-border sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Crown" size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="font-heading text-xl font-bold text-primary">Cultural Heritage Hub</h1>
                  <p className="font-body text-sm text-text-secondary">Discover African Beauty Wisdom</p>
                </div>
              </div>
              
              <Link
                to="/booking-intelligence-portal"
                className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-cultural premium-hover"
              >
                Book Heritage Treatment
              </Link>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex overflow-x-auto py-4 gap-2">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-cultural ${
                    activeSection === section.id
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'text-text-secondary hover:text-primary hover:bg-background'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          {renderContent()}
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 lg:px-8">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
              Experience Authentic African Beauty
            </h2>
            <p className="font-body text-xl opacity-95 mb-8">
              Book a treatment that honors traditional wisdom while delivering modern luxury
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking-intelligence-portal"
                className="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-cultural premium-hover"
              >
                Book Your Cultural Journey
              </Link>
              <Link
                to="/treatment-experiences"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-cultural"
              >
                Explore All Treatments
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Heritage Guide */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
        <div className="bg-card rounded-full p-4 cultural-shadow hover:shadow-lg transition-cultural cursor-pointer group">
          <Icon name="BookOpen" size={24} className="text-accent group-hover:scale-110 transition-cultural" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-cultural pointer-events-none">
            <div className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
              Heritage Guide
            </div>
            <div className="w-2 h-2 bg-primary transform rotate-45 mx-auto -mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalHeritageHub;