import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      id: 0,
      question: "What is your primary skin concern?",
      type: "single",
      options: [
        { id: 'dryness', text: 'Dryness and dehydration', ingredient: 'Shea Butter' },
        { id: 'aging', text: 'Fine lines and aging', ingredient: 'Frankincense' },
        { id: 'acne', text: 'Acne and blemishes', ingredient: 'African Black Soap' },
        { id: 'sensitivity', text: 'Sensitivity and irritation', ingredient: 'Marula Oil' },
        { id: 'dullness', text: 'Dullness and uneven tone', ingredient: 'Baobab Oil' }
      ]
    },
    {
      id: 1,
      question: "Which African region\'s beauty traditions interest you most?",
      type: "single",
      options: [
        { id: 'west', text: 'West Africa - Shea butter and black soap traditions', region: 'West Africa' },
        { id: 'east', text: 'East Africa - Frankincense and myrrh rituals', region: 'East Africa' },
        { id: 'south', text: 'Southern Africa - Marula oil and healing practices', region: 'Southern Africa' },
        { id: 'north', text: 'North Africa - Argan oil and rose water ceremonies', region: 'North Africa' }
      ]
    },
    {
      id: 2,
      question: "What type of beauty experience appeals to you?",
      type: "single",
      options: [
        { id: 'spiritual', text: 'Spiritual and ceremonial rituals', experience: 'Traditional Ceremony' },
        { id: 'scientific', text: 'Science-backed modern treatments', experience: 'Modern Spa' },
        { id: 'fusion', text: 'Blend of traditional wisdom and modern techniques', experience: 'Fusion Experience' },
        { id: 'educational', text: 'Learning about cultural heritage', experience: 'Educational Journey' }
      ]
    },
    {
      id: 3,
      question: "Which natural ingredients have you used before?",
      type: "multiple",
      options: [
        { id: 'shea', text: 'Shea Butter', knowledge: 'experienced' },
        { id: 'argan', text: 'Argan Oil', knowledge: 'experienced' },
        { id: 'marula', text: 'Marula Oil', knowledge: 'experienced' },
        { id: 'frankincense', text: 'Frankincense', knowledge: 'experienced' },
        { id: 'none', text: 'None of these', knowledge: 'beginner' }
      ]
    },
    {
      id: 4,
      question: "How important is cultural authenticity to you?",
      type: "single",
      options: [
        { id: 'very', text: 'Very important - I want authentic traditional experiences', authenticity: 'high' },
        { id: 'somewhat', text: 'Somewhat important - I appreciate cultural context', authenticity: 'medium' },
        { id: 'not', text: 'Not important - I focus on results', authenticity: 'low' }
      ]
    }
  ];

  const handleAnswer = (questionId, optionId, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(optionId)
        ? currentAnswers.filter(id => id !== optionId)
        : [...currentAnswers, optionId];
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      setAnswers({ ...answers, [questionId]: optionId });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const getRecommendations = () => {
    const recommendations = {
      ingredients: [],
      treatments: [],
      approach: '',
      region: ''
    };

    // Analyze answers to provide recommendations
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions[parseInt(questionId)];
      
      if (Array.isArray(answer)) {
        answer.forEach(optionId => {
          const option = question.options.find(opt => opt.id === optionId);
          if (option?.ingredient) recommendations.ingredients.push(option.ingredient);
        });
      } else {
        const option = question.options.find(opt => opt.id === answer);
        if (option?.ingredient) recommendations.ingredients.push(option.ingredient);
        if (option?.region) recommendations.region = option.region;
        if (option?.experience) recommendations.approach = option.experience;
      }
    });

    // Remove duplicates
    recommendations.ingredients = [...new Set(recommendations.ingredients)];

    // Add treatment recommendations based on ingredients
    if (recommendations.ingredients.includes('Shea Butter')) {
      recommendations.treatments.push('Golden Harvest Ritual');
    }
    if (recommendations.ingredients.includes('Frankincense')) {
      recommendations.treatments.push('Royal Frankincense Facial');
    }
    if (recommendations.ingredients.includes('African Black Soap')) {
      recommendations.treatments.push('Purifying Black Soap Ritual');
    }
    if (recommendations.ingredients.includes('Marula Oil')) {
      recommendations.treatments.push('Marula Glow Facial');
    }
    if (recommendations.ingredients.includes('Baobab Oil')) {
      recommendations.treatments.push('Tree of Life Facial');
    }

    return recommendations;
  };

  if (!quizStarted) {
    return (
      <div className="bg-card rounded-xl p-8 text-center cultural-shadow">
        <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="HelpCircle" size={32} className="text-white" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-4">
          Discover Your Perfect African Beauty Journey
        </h3>
        <p className="font-body text-text-secondary mb-6 max-w-2xl mx-auto">
          Take our interactive quiz to discover which traditional African ingredients and treatments 
          are perfect for your skin type and beauty goals. Learn about cultural heritage while 
          finding your ideal wellness experience.
        </p>
        <button
          onClick={() => setQuizStarted(true)}
          className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-cultural premium-hover"
        >
          Start Your Discovery Journey
        </button>
      </div>
    );
  }

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="bg-card rounded-xl overflow-hidden cultural-shadow">
        <div className="bg-gradient-to-r from-accent to-secondary p-8 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Sparkles" size={24} />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-2">
            Your Personalized Beauty Journey
          </h3>
          <p className="opacity-90">
            Based on your answers, here are our recommendations for you
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Recommended Ingredients */}
          <div>
            <h4 className="font-heading text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Icon name="Leaf" size={20} />
              Your Perfect Ingredients
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.ingredients.map((ingredient, index) => (
                <div key={index} className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="Star" size={16} className="text-accent" />
                    </div>
                    <div>
                      <h5 className="font-body font-semibold text-primary">{ingredient}</h5>
                      <p className="font-body text-xs text-text-secondary">Perfect for your needs</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Treatments */}
          {recommendations.treatments.length > 0 && (
            <div>
              <h4 className="font-heading text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
                Recommended Treatments
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.treatments.map((treatment, index) => (
                  <div key={index} className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <h5 className="font-body font-semibold text-primary mb-2">{treatment}</h5>
                    <p className="font-body text-sm text-text-secondary">
                      Specially selected based on your preferences and skin needs
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Region */}
          {recommendations.region && (
            <div className="p-6 bg-surface/5 rounded-lg border border-surface/20">
              <h4 className="font-heading text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                Your Cultural Connection
              </h4>
              <p className="font-body text-text-secondary">
                You have a special affinity for <strong>{recommendations.region}</strong> beauty traditions. 
                Explore treatments inspired by this rich cultural heritage.
              </p>
            </div>
          )}

          {/* Approach Recommendation */}
          {recommendations.approach && (
            <div className="p-6 bg-cta/5 rounded-lg border border-cta/20">
              <h4 className="font-heading text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Your Ideal Experience
              </h4>
              <p className="font-body text-text-secondary">
                Based on your preferences, we recommend a <strong>{recommendations.approach}</strong> approach 
                to your beauty and wellness journey.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-cultural premium-hover">
              Book Recommended Treatment
            </button>
            <button
              onClick={resetQuiz}
              className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-cultural"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isMultiple = question.type === 'multiple';
  const currentAnswer = answers[currentQuestion];
  const hasAnswer = isMultiple ? currentAnswer?.length > 0 : currentAnswer;

  return (
    <div className="bg-card rounded-xl overflow-hidden cultural-shadow">
      {/* Progress Bar */}
      <div className="h-2 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-500"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="p-8">
        {/* Question Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-body text-sm text-text-secondary">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <h3 className="font-heading text-xl lg:text-2xl font-semibold text-primary">
            {question.question}
          </h3>
          {isMultiple && (
            <p className="font-body text-sm text-text-secondary mt-2">
              Select all that apply
            </p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option) => {
            const isSelected = isMultiple 
              ? currentAnswer?.includes(option.id)
              : currentAnswer === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentQuestion, option.id, isMultiple)}
                className={`w-full p-4 text-left rounded-lg border transition-cultural ${
                  isSelected
                    ? 'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50 hover:bg-accent/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-accent bg-accent' : 'border-border'
                  }`}>
                    {isSelected && <Icon name="Check" size={12} className="text-white" />}
                  </div>
                  <span className="font-body">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-cultural ${
              currentQuestion === 0
                ? 'text-text-secondary cursor-not-allowed' :'text-accent hover:bg-accent/10'
            }`}
          >
            <Icon name="ChevronLeft" size={16} />
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={!hasAnswer}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-cultural ${
              !hasAnswer
                ? 'bg-muted text-text-secondary cursor-not-allowed' :'bg-accent text-accent-foreground hover:bg-accent/90 premium-hover'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuiz;