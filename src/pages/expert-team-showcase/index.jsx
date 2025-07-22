import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TherapistCard from './components/TherapistCard';
import TherapistFilter from './components/TherapistFilter';
import TherapistModal from './components/TherapistModal';
import TeamStats from './components/TeamStats';
import MatchingSystem from './components/MatchingSystem';

const ExpertTeamShowcase = () => {
  const [therapists, setTherapists] = useState([]);
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMatching, setShowMatching] = useState(false);
  const [matchResults, setMatchResults] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Mock therapist data
  const mockTherapists = [
    {
      id: 1,
      name: "Amara Okonkwo",
      title: "Senior Cultural Wellness Therapist",
      image: "https://images.unsplash.com/photo-1594824388853-c02120c4b9d8?w=400&h=400&fit=crop&crop=face",
      experience: "12",
      origin: "Lagos, Nigeria",
      culturalExpertise: "West African Black Soap Rituals",
      specializations: [
        "Traditional African Treatments",
        "Aromatherapy",
        "Deep Tissue Massage",
        "Facial Treatments",
        "Body Wraps"
      ],
      philosophy: "Beauty is not just skin deep - it's a reflection of our inner harmony and cultural pride. I believe in honoring the wisdom of our ancestors while embracing modern wellness techniques.",
      rating: 4.9,
      reviewCount: 127,
      startingPrice: 8500,
      isAvailable: true,
      certifications: [
        { name: "International Spa Association Certification", institution: "ISA", year: "2018" },
        { name: "Traditional African Healing Practices", institution: "University of Cape Town", year: "2019" },
        { name: "Aromatherapy Specialist", institution: "NAHA", year: "2020" }
      ],
      culturalBackground: `Born and raised in Lagos, Nigeria, Amara brings authentic West African beauty traditions to modern spa treatments. She learned traditional black soap making from her grandmother and has spent years studying indigenous healing practices across West Africa.`,
      traditionalTechniques: [
        "Ancient black soap preparation",
        "Palm kernel oil massage",
        "Yoruba facial rituals",
        "Traditional body scarification healing"
      ],
      signatureIngredients: [
        "Raw African black soap",
        "Unrefined shea butter",
        "Palm kernel oil",
        "Hibiscus flower extract"
      ],
      coreBeliefs: [
        "Every treatment should honor cultural heritage",
        "Natural ingredients are the foundation of true beauty",
        "Healing happens when mind, body, and spirit align",
        "Traditional wisdom enhances modern techniques"
      ],
      wellnessApproach: [
        "Holistic assessment of client needs",
        "Integration of cultural storytelling",
        "Use of ancestral healing methods",
        "Focus on long-term wellness goals"
      ],
      testimonials: [
        {
          clientName: "Sarah Kimani",
          clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "West African Black Soap Facial",
          date: "December 2024",
          review: "Amara's knowledge of traditional African beauty practices is incredible. She explained the history behind each ingredient and I left feeling not just beautiful, but connected to my heritage."
        },
        {
          clientName: "Grace Mwangi",
          clientImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Traditional Body Wrap",
          date: "November 2024",
          review: "The most authentic spa experience I\'ve ever had. Amara\'s gentle approach and cultural expertise made this more than just a treatment - it was a journey of self-discovery."
        }
      ]
    },
    {
      id: 2,
      name: "Zara Al-Rashid",
      title: "Moroccan Argan Oil Specialist",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      experience: "15",
      origin: "Marrakech, Morocco",
      culturalExpertise: "Moroccan Argan Oil Traditions",
      specializations: [
        "Argan Oil Treatments",
        "Moroccan Hammam",
        "Anti-aging Facials",
        "Hair Treatments",
        "Reflexology"
      ],
      philosophy: "The argan tree is sacred to my people. Its oil carries the essence of the Moroccan desert - resilient, nourishing, and transformative. I bring this ancient wisdom to every treatment.",
      rating: 4.8,
      reviewCount: 98,
      startingPrice: 9200,
      isAvailable: false,
      certifications: [
        { name: "Moroccan Traditional Spa Techniques", institution: "Royal Hammam Institute", year: "2015" },
        { name: "Argan Oil Therapy Certification", institution: "Argan Cooperative Morocco", year: "2017" },
        { name: "Advanced Facial Treatments", institution: "CIDESCO", year: "2021" }
      ],
      culturalBackground: `Zara grew up in the Atlas Mountains of Morocco, where her family has been producing argan oil for generations. She learned the traditional extraction methods from Berber women and understands the cultural significance of this liquid gold.`,
      traditionalTechniques: [
        "Hand-pressed argan oil extraction",
        "Berber facial massage techniques",
        "Traditional hammam rituals",
        "Desert rose exfoliation methods"
      ],
      signatureIngredients: [
        "Pure argan oil",
        "Moroccan clay",
        "Rose water",
        "Atlas mountain herbs"
      ],
      coreBeliefs: [
        "Argan oil is nature\'s perfect moisturizer",
        "Traditional methods preserve ingredient potency",
        "Beauty rituals should be meditative experiences",
        "Cultural authenticity enhances treatment effectiveness"
      ],
      wellnessApproach: [
        "Personalized argan oil blending",
        "Incorporation of Moroccan music and scents",
        "Focus on skin barrier restoration",
        "Education about ingredient origins"
      ],
      testimonials: [
        {
          clientName: "Fatima Hassan",
          clientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Moroccan Argan Oil Facial",
          date: "January 2025",
          review: "Zara\'s expertise with argan oil is unmatched. My skin has never felt so soft and radiant. She taught me so much about Moroccan beauty traditions."
        },
        {
          clientName: "Aisha Mohamed",
          clientImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Traditional Hammam Experience",
          date: "December 2024",
          review: "An authentic Moroccan experience right here in Nairobi. Zara\'s attention to detail and cultural knowledge made this unforgettable."
        }
      ]
    },
    {
      id: 3,
      name: "Desta Haile",
      title: "Ethiopian Honey Ritual Master",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      experience: "10",
      origin: "Addis Ababa, Ethiopia",
      culturalExpertise: "Ethiopian Honey Rituals",
      specializations: [
        "Honey-based Treatments",
        "Ethiopian Coffee Scrubs",
        "Traditional Healing",
        "Prenatal Massage",
        "Hot Stone Therapy"
      ],
      philosophy: "Honey is liquid gold from nature's pharmacy. In Ethiopian culture, honey represents purity, healing, and abundance. I channel this sacred energy into every treatment.",
      rating: 4.9,
      reviewCount: 84,
      startingPrice: 7800,
      isAvailable: true,
      certifications: [
        { name: "Ethiopian Traditional Medicine", institution: "Addis Ababa University", year: "2019" },
        { name: "Apitherapy Specialist", institution: "International Apitherapy Society", year: "2020" },
        { name: "Prenatal Massage Therapy", institution: "AMTA", year: "2022" }
      ],
      culturalBackground: `Desta comes from a long line of Ethiopian honey farmers and traditional healers. She learned the sacred honey rituals from her grandmother, who was a respected healer in their village. Her knowledge of Ethiopian coffee culture adds another dimension to her treatments.`,
      traditionalTechniques: [
        "Sacred honey application rituals",
        "Ethiopian coffee ground exfoliation",
        "Traditional incense ceremonies",
        "Ancestral healing chants"
      ],
      signatureIngredients: [
        "Raw Ethiopian honey",
        "Organic coffee beans",
        "Frankincense oil",
        "Berbere spice extracts"
      ],
      coreBeliefs: [
        "Honey connects us to nature\'s healing power",
        "Coffee awakens both body and spirit",
        "Healing rituals should honor ancestors",
        "Natural ingredients work in harmony"
      ],
      wellnessApproach: [
        "Spiritual preparation before treatments",
        "Use of traditional Ethiopian music",
        "Integration of coffee ceremony elements",
        "Focus on energy balancing"
      ],
      testimonials: [
        {
          clientName: "Meron Tadesse",
          clientImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Ethiopian Honey Facial",
          date: "January 2025",
          review: "Desta's honey treatments are magical. She explained the spiritual significance of each step, and I felt deeply connected to Ethiopian culture. My skin glows!"
        },
        {
          clientName: "Hanan Ali",
          clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Coffee Scrub & Honey Wrap",
          date: "December 2024",
          review: "The combination of coffee and honey was incredible. Desta\'s knowledge of Ethiopian traditions made this so much more than a spa treatment."
        }
      ]
    },
    {
      id: 4,
      name: "Kesi Mwangi",
      title: "Kenyan Shea Butter Therapy Expert",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
      experience: "8",
      origin: "Nairobi, Kenya",
      culturalExpertise: "Kenyan Shea Butter Therapy",
      specializations: [
        "Shea Butter Treatments",
        "Kenyan Tea Therapy",
        "Maasai Healing Rituals",
        "Body Sculpting",
        "Lymphatic Drainage"
      ],
      philosophy: "Shea butter is Africa's gift to the world. As a Kenyan, I'm proud to share our local traditions and show how indigenous ingredients can transform modern wellness.",
      rating: 4.7,
      reviewCount: 76,
      startingPrice: 7200,
      isAvailable: true,
      certifications: [
        { name: "Kenyan Traditional Healing", institution: "University of Nairobi", year: "2020" },
        { name: "Lymphatic Drainage Therapy", institution: "Vodder Institute", year: "2021" },
        { name: "Body Contouring Specialist", institution: "NCEA", year: "2023" }
      ],
      culturalBackground: `Born and raised in Nairobi, Kesi has deep connections to various Kenyan communities. She studied traditional healing practices with Maasai elders and learned shea butter processing from women's cooperatives across Kenya.`,
      traditionalTechniques: [
        "Traditional shea butter processing",
        "Maasai warrior massage techniques",
        "Kenyan tea leaf applications",
        "Kikuyu healing ceremonies"
      ],
      signatureIngredients: [
        "Raw Kenyan shea butter",
        "Purple tea extracts",
        "Baobab oil",
        "Moringa leaf powder"
      ],
      coreBeliefs: [
        "Local ingredients are most powerful for local people",
        "Traditional techniques enhance modern methods",
        "Community healing strengthens individual wellness",
        "Cultural pride enhances treatment effectiveness"
      ],
      wellnessApproach: [
        "Community-centered healing philosophy",
        "Use of local Kenyan music and rhythms",
        "Integration of tea ceremony elements",
        "Focus on cultural connection and pride"
      ],
      testimonials: [
        {
          clientName: "Wanjiku Kamau",
          clientImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Kenyan Shea Butter Body Wrap",
          date: "January 2025",
          review: "Kesi made me feel so proud to be Kenyan. Her knowledge of our local traditions and ingredients is amazing. I left feeling beautiful and culturally connected."
        },
        {
          clientName: "Njeri Wanjiru",
          clientImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face",
          rating: 4,
          treatment: "Purple Tea Facial",
          date: "December 2024",
          review: "I never knew Kenyan purple tea could be used in skincare! Kesi\'s innovative approach to local ingredients is refreshing and effective."
        }
      ]
    },
    {
      id: 5,
      name: "Asha Ochieng",
      title: "Holistic Wellness Coordinator",
      image: "https://images.unsplash.com/photo-1594824388853-c02120c4b9d8?w=400&h=400&fit=crop&crop=face",
      experience: "6",
      origin: "Kisumu, Kenya",
      culturalExpertise: "Luo Traditional Healing",
      specializations: [
        "Holistic Wellness",
        "Energy Healing",
        "Meditation Guidance",
        "Chakra Balancing",
        "Sound Therapy"
      ],
      philosophy: "Wellness is not just about the body - it's about aligning mind, body, and spirit with our cultural roots and natural environment.",
      rating: 4.8,
      reviewCount: 52,
      startingPrice: 6800,
      isAvailable: false,
      certifications: [
        { name: "Holistic Wellness Practitioner", institution: "Institute of Integrative Health", year: "2021" },
        { name: "Sound Therapy Certification", institution: "Sound Healing Academy", year: "2022" },
        { name: "Meditation Teacher Training", institution: "Mindfulness Institute", year: "2023" }
      ],
      culturalBackground: `Asha grew up in Kisumu by Lake Victoria, where she learned traditional Luo healing practices from community elders. Her approach combines ancient wisdom with modern holistic wellness techniques.`,
      traditionalTechniques: [
        "Luo energy cleansing rituals","Lake Victoria water ceremonies","Traditional drumming therapy","Ancestral spirit communication"
      ],
      signatureIngredients: [
        "Lake Victoria clay","Sacred herbs from Nyanza","Blessed oils","Crystal-infused waters"
      ],
      coreBeliefs: [
        "True healing addresses root causes","Cultural connection enhances wellness","Nature provides all healing tools","Community support accelerates healing"
      ],
      wellnessApproach: [
        "Comprehensive wellness assessment","Integration of traditional and modern methods","Focus on long-term lifestyle changes","Emphasis on spiritual and emotional healing"
      ],
      testimonials: [
        {
          clientName: "Akoth Otieno",clientImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",rating: 5,treatment: "Holistic Wellness Session",date: "January 2025",review: "Asha helped me understand the connection between my cultural identity and personal wellness. Her holistic approach transformed not just my body, but my entire outlook on life."
        },
        {
          clientName: "Pendo Nyong'o",
          clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Energy Healing & Meditation",
          date: "December 2024",
          review: "Asha's energy healing session was profound. She helped me reconnect with my Luo heritage while addressing my stress and anxiety. Truly transformative."
        }
      ]
    },
    {
      id: 6,
      name: "Thandiwe Ndovu",title: "South African Rooibos Specialist",image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",experience: "11",origin: "Cape Town, South Africa",culturalExpertise: "South African Rooibos Therapy",
      specializations: [
        "Rooibos Treatments","Anti-aging Facials","Detox Therapies","Skin Rejuvenation","Stress Relief Massage"
      ],
      philosophy: "Rooibos is more than just a tea - it\'s a symbol of South African resilience and natural healing. I bring this powerful antioxidant to skincare with deep cultural respect.",
      rating: 4.9,
      reviewCount: 103,
      startingPrice: 8800,
      isAvailable: true,
      certifications: [
        { name: "South African Traditional Medicine", institution: "University of Cape Town", year: "2017" },
        { name: "Advanced Anti-aging Treatments", institution: "CIDESCO", year: "2019" },
        { name: "Rooibos Therapy Specialist", institution: "Rooibos Council SA", year: "2020" }
      ],
      culturalBackground: `Thandiwe was born in the Western Cape, where rooibos grows naturally. She learned about the plant's healing properties from Khoi-San communities and has dedicated her career to sharing this indigenous knowledge.`,
      traditionalTechniques: [
        "Traditional rooibos preparation",
        "Khoi-San healing methods",
        "Cape Floral Kingdom plant therapy",
        "Ubuntu philosophy integration"
      ],
      signatureIngredients: [
        "Organic rooibos extract",
        "Fynbos essential oils",
        "Kanna plant extracts",
        "Cape aloe vera"
      ],
      coreBeliefs: [
        "Indigenous plants hold powerful healing properties",
        "Ubuntu philosophy enhances treatment connection",
        "Natural antioxidants are the best anti-aging tools",
        "Cultural knowledge should be preserved and shared"
      ],
      wellnessApproach: [
        "Focus on natural antioxidant therapy",
        "Integration of Ubuntu philosophy",
        "Use of indigenous South African plants",
        "Emphasis on skin health and longevity"
      ],
      testimonials: [
        {
          clientName: "Nomsa Dlamini",
          clientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Rooibos Anti-aging Facial",
          date: "January 2025",
          review: "Thandiwe's rooibos treatments are incredible. My skin looks years younger, and I learned so much about South African healing traditions. Ubuntu in action!"
        },
        {
          clientName: "Lerato Mokoena",
          clientImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
          rating: 5,
          treatment: "Detox Rooibos Body Wrap",
          date: "December 2024",
          review: "The most relaxing and effective detox treatment I\'ve ever had. Thandiwe\'s knowledge of rooibos and South African traditions made this special."
        }
      ]
    }
  ];

  useEffect(() => {
    setTherapists(mockTherapists);
    setFilteredTherapists(mockTherapists);
  }, []);

  useEffect(() => {
    let filtered = [...therapists];

    // Apply filters
    if (filters.specializations?.length > 0) {
      filtered = filtered.filter(therapist =>
        filters.specializations.some(spec =>
          therapist.specializations.some(tSpec =>
            tSpec.toLowerCase().includes(spec.toLowerCase())
          )
        )
      );
    }

    if (filters.culturalExpertise?.length > 0) {
      filtered = filtered.filter(therapist =>
        filters.culturalExpertise.some(expertise =>
          therapist.culturalExpertise.toLowerCase().includes(expertise.toLowerCase())
        )
      );
    }

    if (filters.availability === 'today') {
      filtered = filtered.filter(therapist => therapist.isAvailable);
    }

    if (filters.experience) {
      const minYears = parseInt(filters.experience.replace('+', ''));
      filtered = filtered.filter(therapist => parseInt(therapist.experience) >= minYears);
    }

    setFilteredTherapists(filtered);
  }, [filters, therapists]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleTherapistSelect = (therapist) => {
    setSelectedTherapist(therapist);
    setIsModalOpen(true);
  };

  const handleBookConsultation = (therapist) => {
    // Simulate booking consultation
    const message = encodeURIComponent(`Karibu! I'd like to book a consultation with ${therapist.name} at Serenity Spa Kenya. Please help me schedule an appointment.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  const handleWhatsAppBook = (therapist) => {
    console.log('WhatsApp booking for:', therapist.name);
  };

  const handleMatchResults = (matches, preferences) => {
    setMatchResults({ matches, preferences });
    setShowMatching(false);
    setFilteredTherapists(matches);
  };

  const handleShowAllTherapists = () => {
    setMatchResults(null);
    setFilteredTherapists(therapists);
    setFilters({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-background via-muted/30 to-surface/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Users" size={16} />
              <span>Meet Our Expert Team</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Certified African Beauty
              <span className="block text-accent">Professionals</span>
            </h1>
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Connect with our team of certified therapists who blend traditional African wisdom with modern wellness techniques. Each professional brings authentic cultural expertise and international training to create transformative experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Sparkles"
                iconPosition="left"
                onClick={() => setShowMatching(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground premium-hover"
              >
                Find My Perfect Match
              </Button>
              <Link to="/booking-intelligence-portal">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Team Stats */}
          <TeamStats therapists={therapists} />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showMatching ? (
            <div className="max-w-4xl mx-auto">
              <MatchingSystem
                therapists={therapists}
                onMatchResults={handleMatchResults}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <TherapistFilter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    therapistCount={filteredTherapists.length}
                  />
                </div>
              </div>

              {/* Therapists Grid */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-primary">
                      {matchResults ? 'Your Perfect Matches' : 'Our Expert Therapists'}
                    </h2>
                    <p className="font-body text-text-secondary">
                      {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} available
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {matchResults && (
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="RotateCcw"
                        iconPosition="left"
                        onClick={handleShowAllTherapists}
                        className="text-text-secondary hover:text-primary"
                      >
                        Show All
                      </Button>
                    )}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        iconName="Grid3X3"
                        onClick={() => setViewMode('grid')}
                        className={viewMode === 'grid' ? 'bg-accent text-accent-foreground' : ''}
                      />
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        iconName="List"
                        onClick={() => setViewMode('list')}
                        className={viewMode === 'list' ? 'bg-accent text-accent-foreground' : ''}
                      />
                    </div>
                  </div>
                </div>

                {/* Match Results Info */}
                {matchResults && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Sparkles" size={20} className="text-accent" />
                      <h3 className="font-body text-sm font-semibold text-accent">
                        Personalized Matches Based on Your Preferences
                      </h3>
                    </div>
                    <p className="font-body text-sm text-text-secondary">
                      These therapists are specially selected based on your treatment interests, cultural preferences, and availability needs.
                    </p>
                  </div>
                )}

                {/* Therapists List */}
                {filteredTherapists.length > 0 ? (
                  <div className={`grid gap-6 ${
                    viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' :'grid-cols-1'
                  }`}>
                    {filteredTherapists.map((therapist) => (
                      <div key={therapist.id} onClick={() => handleTherapistSelect(therapist)}>
                        <TherapistCard
                          therapist={therapist}
                          onBookConsultation={handleBookConsultation}
                          onWhatsAppBook={handleWhatsAppBook}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      No Therapists Found
                    </h3>
                    <p className="font-body text-text-secondary mb-6">
                      Try adjusting your filters or search criteria to find available therapists.
                    </p>
                    <Button
                      variant="outline"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={handleClearFilters}
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Heart" size={24} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="font-body text-lg text-text-secondary mb-8">
            Book a consultation with one of our expert therapists and discover the perfect treatment for your unique needs and cultural preferences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/booking-intelligence-portal">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground premium-hover"
              >
                Book Your Consultation
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => {
                const message = encodeURIComponent("Karibu! I'd like to learn more about your expert therapists and book a consultation at Serenity Spa Kenya.");
                window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
              }}
              className="border-cta text-cta hover:bg-cta hover:text-cta-foreground"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Therapist Modal */}
      <TherapistModal
        therapist={selectedTherapist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookConsultation={handleBookConsultation}
      />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">Serenity Spa Kenya</h3>
                  <p className="font-accent text-sm text-primary-foreground/80">Where Heritage Meets Luxury</p>
                </div>
              </div>
              <p className="font-body text-primary-foreground/80 mb-4">
                Experience authentic African beauty traditions through our certified therapists who blend cultural wisdom with modern wellness techniques.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/homepage-african-luxury-spa" className="block font-body text-sm text-primary-foreground/80 hover:text-accent transition-cultural">
                  Home
                </Link>
                <Link to="/treatment-experiences" className="block font-body text-sm text-primary-foreground/80 hover:text-accent transition-cultural">
                  Treatments
                </Link>
                <Link to="/cultural-heritage-hub" className="block font-body text-sm text-primary-foreground/80 hover:text-accent transition-cultural">
                  Heritage
                </Link>
                <Link to="/booking-intelligence-portal" className="block font-body text-sm text-primary-foreground/80 hover:text-accent transition-cultural">
                  Book Now
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="font-body text-sm text-primary-foreground/80">
                  Westlands, Nairobi
                </p>
                <p className="font-body text-sm text-primary-foreground/80">
                  +254 700 000 000
                </p>
                <p className="font-body text-sm text-primary-foreground/80">
                  hello@serenityspa.ke
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Serenity Spa Kenya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExpertTeamShowcase;