import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import TreatmentHero from './components/TreatmentHero';
import CulturalStory from './components/CulturalStory';
import TreatmentProcess from './components/TreatmentProcess';
import TherapistSelection from './components/TherapistSelection';
import IngredientSpotlight from './components/IngredientSpotlight';
import ClientTestimonials from './components/ClientTestimonials';
import BookingSection from './components/BookingSection';
import RelatedTreatments from './components/RelatedTreatments';

const TreatmentExperiences = () => {
  const { treatmentSlug } = useParams();
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock treatment data
  const treatmentData = {
    id: 1,
    name: "Shea Butter Ritual",
    slug: "shea-butter-ritual",
    category: "Cultural Heritage",
    duration: "90 minutes",
    price: 8500,
    heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    heroDescription: "Experience the ancient West African tradition of shea butter healing, where generations of wisdom meet modern luxury in a transformative wellness journey that celebrates your natural radiance.",
    packages: [
      {
        name: "Essential Ritual",
        price: 8500,
        duration: "90 minutes",
        sessions: "Single session",
        description: "Complete shea butter treatment with traditional preparation methods and modern application techniques.",
        includes: [
          "Full body shea butter application",
          "Traditional preparation ceremony",
          "Aromatherapy enhancement",
          "Post-treatment hydration ritual",
          "Take-home shea butter sample"
        ]
      },
      {
        name: "Heritage Journey",
        price: 15000,
        originalPrice: 17000,
        duration: "2.5 hours",
        sessions: "Extended experience",
        popular: true,
        description: "Immersive cultural experience including storytelling, traditional music, and comprehensive shea butter wellness treatment.",
        includes: [
          "Everything in Essential Ritual",
          "Cultural storytelling session",
          "Traditional music accompaniment",
          "Herbal tea ceremony",
          "Premium shea butter gift set",
          "Cultural heritage booklet"
        ],
        bonus: "Complimentary 30-minute consultation with cultural wellness expert"
      },
      {
        name: "Royal Treatment",
        price: 25000,
        duration: "Half day",
        sessions: "4-hour experience",
        description: "Ultimate luxury experience with private therapist, customized treatments, and exclusive cultural immersion.",
        includes: [
          "Everything in Heritage Journey",
          "Private treatment suite",
          "Dedicated therapist for full session",
          "Customized shea butter blend",
          "Gourmet African-inspired meal",
          "Professional photography session",
          "Luxury gift hamper"
        ],
        bonus: "Complimentary follow-up treatment within 30 days"
      }
    ]
  };

  const culturalStory = {
    title: "The Sacred Tradition of Shea Butter",
    introduction: "For over 3,000 years, the women of West Africa have perfected the art of shea butter creation, transforming the nuts of the sacred karite tree into liquid gold that heals, protects, and beautifies. This ancient wisdom, passed down through generations of mothers to daughters, represents more than skincare—it embodies community, tradition, and the celebration of natural beauty.",
    origins: "In the villages of Ghana, Burkina Faso, and Mali, the shea tree is revered as the 'Tree of Life.' Women gather beneath its branches to share stories while hand-processing the nuts using traditional methods unchanged for millennia. The process itself is a meditation, a celebration of feminine wisdom, and a connection to ancestral knowledge.",
    modernApplication: "At Serenity Spa Kenya, we honor this sacred tradition by sourcing our shea butter directly from women's cooperatives in West Africa, ensuring fair trade practices while preserving authentic preparation methods. Our therapists have trained with traditional healers to understand not just the application, but the spiritual significance of this transformative ritual.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Traditional African woman preparing shea butter using ancestral methods"
  };

  const treatmentProcess = {
    steps: [
      {
        title: "Cultural Welcome",
        duration: "10 minutes",
        icon: "Heart",
        description: "Begin your journey with a traditional Karibu welcome ceremony, including herbal tea and cultural storytelling that connects you to the ancient origins of shea butter healing.",
        highlights: ["Herbal tea ceremony", "Cultural storytelling", "Intention setting"],
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        imageCaption: "Traditional welcome ceremony with herbal tea and cultural elements"
      },
      {
        title: "Preparation Ritual",
        duration: "15 minutes",
        icon: "Droplets",
        description: "Watch as your therapist prepares fresh shea butter using traditional methods, warming and infusing it with carefully selected African botanicals for your unique skin needs.",
        highlights: ["Fresh shea butter preparation", "Botanical infusion", "Skin assessment"],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        imageCaption: "Therapist preparing fresh shea butter with traditional methods"
      },
      {
        title: "Sacred Application",
        duration: "45 minutes",
        icon: "Sparkles",
        description: "Experience the transformative power of warm shea butter as it\'s applied using ancient massage techniques that promote deep relaxation and cellular renewal.",
        highlights: ["Traditional massage techniques", "Deep tissue nourishment", "Chakra alignment"],
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        imageCaption: "Therapeutic shea butter application using traditional massage techniques"
      },
      {
        title: "Integration & Reflection",
        duration: "20 minutes",
        icon: "Sun",
        description: "Allow the shea butter to fully absorb while you rest in our tranquil space, accompanied by traditional African music and aromatherapy that enhances the healing process.",
        highlights: ["Deep absorption time", "Traditional music", "Aromatherapy enhancement"],
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        imageCaption: "Peaceful integration time with traditional music and aromatherapy"
      }
    ]
  };

  const therapists = [
    {
      id: 1,
      name: "Amara Okonkwo",
      title: "Senior Cultural Wellness Therapist",
      experience: 8,
      origin: "Lagos, Nigeria",
      bio: "Trained in traditional West African healing methods and certified in modern spa therapy. Amara specializes in shea butter rituals and has worked with traditional healers across Ghana and Burkina Faso.",
      specializations: ["Shea Butter Rituals", "Traditional Massage", "Cultural Healing", "Aromatherapy"],
      rating: 5,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1594824388853-e0c5c4b9e4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      isAvailable: true
    },
    {
      id: 2,
      name: "Kesi Mwangi",
      title: "Heritage Spa Specialist",
      experience: 6,
      origin: "Nairobi, Kenya",
      bio: "Expert in East African wellness traditions with specialized training in West African shea butter preparation. Kesi brings a unique blend of regional knowledge to every treatment.",
      specializations: ["Cross-Cultural Healing", "Botanical Therapy", "Wellness Consultation", "Traditional Rituals"],
      rating: 5,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      isAvailable: false
    },
    {
      id: 3,
      name: "Fatima Al-Rashid",
      title: "Master Shea Butter Artisan",
      experience: 12,
      origin: "Accra, Ghana",
      bio: "Third-generation shea butter artisan who learned traditional preparation methods from her grandmother. Fatima is our most experienced therapist in authentic West African techniques.",
      specializations: ["Traditional Shea Preparation", "Ancestral Techniques", "Cultural Education", "Master-level Therapy"],
      rating: 5,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      isAvailable: true
    }
  ];

  const ingredients = [
    {
      name: "Raw Shea Butter",
      scientificName: "Vitellaria paradoxa",
      origin: "West Africa",
      sourceRegion: "Ghana & Burkina Faso",
      sustainability: "Fair Trade",
      traditionalUse: "Used for centuries by West African women to protect and heal skin, especially during harsh weather conditions. Traditionally prepared by hand using methods passed down through generations.",
      benefits: [
        "Deep moisturization and skin barrier repair",
        "Anti-inflammatory properties reduce irritation",
        "Rich in vitamins A, E, and F for skin renewal",
        "Natural sun protection (SPF 3-4)",
        "Promotes collagen production"
      ],
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Baobab Oil",
      scientificName: "Adansonia digitata",
      origin: "East Africa",
      sourceRegion: "Kenya & Tanzania",
      sustainability: "Sustainably Harvested",
      traditionalUse: "Known as the 'Tree of Life,' baobab oil has been used by African communities for skin healing and protection. The oil is extracted from seeds of the ancient baobab tree.",
      benefits: [
        "Rapid skin absorption without greasiness",
        "High in omega fatty acids",
        "Antioxidant protection against aging",
        "Soothes sensitive and irritated skin",
        "Improves skin elasticity"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Marula Oil",
      scientificName: "Sclerocarya birrea",
      origin: "Southern Africa",
      sourceRegion: "South Africa & Botswana",
      sustainability: "Community Sourced",
      traditionalUse: "Sacred to many African cultures, marula oil has been used for centuries in traditional ceremonies and daily skincare routines by women across Southern Africa.",
      benefits: [
        "Lightweight yet deeply nourishing",
        "High antioxidant content",
        "Anti-aging and skin firming properties",
        "Suitable for all skin types",
        "Natural antimicrobial properties"
      ],
      image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Grace Wanjiku",
      location: "Nairobi, Kenya",
      treatmentDate: "December 2024",
      treatmentType: "Heritage Journey Package",
      therapist: "Amara Okonkwo",
      testimonial: "This wasn't just a spa treatment—it was a journey back to my roots. Learning about the sacred tradition of shea butter while experiencing its transformative power on my skin was deeply moving. Amara's knowledge of West African traditions made me feel connected to a heritage I never knew I had. My skin has never felt so nourished, and my spirit feels renewed.",
      treatmentExperience: "The cultural storytelling session was incredibly enlightening, and the traditional music created such a peaceful atmosphere. The shea butter preparation ceremony was like watching art being created.",
      beforeImage: "https://images.unsplash.com/photo-1594824388853-e0c5c4b9e4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: [
        { value: "95%", metric: "Skin Hydration" },
        { value: "48hrs", metric: "Glow Duration" },
        { value: "100%", metric: "Satisfaction" },
        { value: "3x", metric: "Smoother Skin" }
      ]
    },
    {
      name: "Sarah Mitchell",
      location: "London, UK (Visiting)",
      treatmentDate: "November 2024",
      treatmentType: "Royal Treatment Package",
      therapist: "Fatima Al-Rashid",
      testimonial: "As a tourist, I was looking for an authentic African experience, and this exceeded all expectations. Fatima's expertise and the cultural depth of the treatment made me understand why shea butter is called 'women's gold.' The private suite experience was luxurious, and I learned so much about African beauty traditions. I've already booked my next visit to Kenya just to come back here!",
      treatmentExperience: "The half-day experience felt like a cultural immersion program combined with the most luxurious spa treatment I've ever had. The photography session captured beautiful moments I'll treasure forever.",
      beforeImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      afterImage: "https://images.unsplash.com/photo-1594824388853-e0c5c4b9e4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      results: [
        { value: "90%", metric: "Skin Softness" },
        { value: "72hrs", metric: "Lasting Glow" },
        { value: "100%", metric: "Would Recommend" },
        { value: "5★", metric: "Overall Rating" }
      ]
    }
  ];

  const allTreatments = [
    {
      id: 1,
      name: "Shea Butter Ritual",
      slug: "shea-butter-ritual",
      category: "Cultural Heritage",
      duration: "90 minutes",
      startingPrice: 8500,
      shortDescription: "Ancient West African healing tradition using pure shea butter and traditional preparation methods.",
      keyBenefits: ["Deep skin nourishment", "Cultural connection", "Stress relief", "Natural healing"],
      rating: 5,
      reviewCount: 89,
      popularityLevel: "Most Popular",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Baobab Tree Therapy",
      slug: "baobab-tree-therapy",
      category: "Tree of Life",
      duration: "75 minutes",
      startingPrice: 7500,
      shortDescription: "Rejuvenating treatment using oil from the sacred baobab tree, known as the Tree of Life.",
      keyBenefits: ["Anti-aging properties", "Skin elasticity", "Deep hydration", "Antioxidant protection"],
      rating: 5,
      reviewCount: 67,
      popularityLevel: "Trending",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Marula Sacred Ceremony",
      slug: "marula-sacred-ceremony",
      category: "Southern Heritage",
      duration: "2 hours",
      startingPrice: 12000,
      shortDescription: "Traditional Southern African ceremony using sacred marula oil for spiritual and physical renewal.",
      keyBenefits: ["Spiritual connection", "Skin firming", "Cultural immersion", "Holistic healing"],
      rating: 5,
      reviewCount: 45,
      popularityLevel: "Exclusive",
      image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const handleBookNow = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTherapist = (therapist) => {
    setSelectedTherapist(therapist);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <TreatmentHero 
          treatment={treatmentData} 
          onBookNow={handleBookNow}
        />
        
        <CulturalStory story={culturalStory} />
        
        <TreatmentProcess process={treatmentProcess} />
        
        <TherapistSelection 
          therapists={therapists}
          onSelectTherapist={handleSelectTherapist}
        />
        
        <IngredientSpotlight ingredients={ingredients} />
        
        <ClientTestimonials testimonials={testimonials} />
        
        <div id="booking-section">
          <BookingSection 
            treatment={treatmentData}
            selectedTherapist={selectedTherapist}
          />
        </div>
        
        <RelatedTreatments 
          treatments={allTreatments}
          currentTreatmentId={treatmentData.id}
        />
      </main>
    </div>
  );
};

export default TreatmentExperiences;