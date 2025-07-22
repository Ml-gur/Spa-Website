import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ClientInsights = () => {
  const [activeTab, setActiveTab] = useState('demographics');

  const demographicsData = [
    { name: 'Local Kenyans', value: 45, color: '#D4AF37' },
    { name: 'International Visitors', value: 30, color: '#8B4513' },
    { name: 'Expats', value: 20, color: '#9CAF88' },
    { name: 'Corporate Clients', value: 5, color: '#C67B5C' }
  ];

  const treatmentPreferences = [
    { treatment: 'Shea Butter Facials', bookings: 156, revenue: 546000 },
    { treatment: 'Baobab Oil Massage', bookings: 134, revenue: 737000 },
    { treatment: 'Traditional Honey Glow', bookings: 98, revenue: 411600 },
    { treatment: 'Moringa Body Wraps', bookings: 87, revenue: 417600 },
    { treatment: 'Coconut Hair Therapy', bookings: 76, revenue: 304000 },
    { treatment: 'African Clay Detox', bookings: 65, revenue: 292500 }
  ];

  const clientSatisfaction = [
    { category: 'Treatment Quality', score: 4.9, feedback: 'Exceptional authentic African treatments' },
    { category: 'Cultural Experience', score: 4.8, feedback: 'Beautiful integration of tradition and luxury' },
    { category: 'Therapist Expertise', score: 4.9, feedback: 'Highly skilled and knowledgeable staff' },
    { category: 'Facility Ambiance', score: 4.7, feedback: 'Serene and culturally immersive environment' },
    { category: 'Value for Money', score: 4.6, feedback: 'Premium experience worth the investment' },
    { category: 'Booking Experience', score: 4.8, feedback: 'Smooth WhatsApp integration and scheduling' }
  ];

  const recentFeedback = [
    {
      id: 1,
      client: "Amara Ochieng",
      rating: 5,
      treatment: "Shea Butter Radiance Facial",
      comment: `The facial was absolutely divine! The use of authentic African ingredients made me feel connected to my heritage while experiencing luxury. Wanjiku's expertise in traditional beauty practices is remarkable.`,
      date: "2025-07-21",
      verified: true
    },
    {
      id: 2,
      client: "Sarah Johnson",
      rating: 5,
      treatment: "Baobab Oil Massage Therapy",
      comment: `As a tourist, this was the highlight of my Nairobi visit. The cultural storytelling during the treatment and the incredible healing properties of baobab oil left me completely rejuvenated.`,
      date: "2025-07-20",
      verified: true
    },
    {
      id: 3,
      client: "Grace Kimani",
      rating: 4,
      treatment: "Traditional Honey Glow Treatment",
      comment: `Beautiful treatment that celebrates our African beauty traditions. The honey sourced locally made my skin glow for days. Only wish the session was longer!`,
      date: "2025-07-19",
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < rating ? "text-warning fill-current" : "text-border"}
      />
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'demographics':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <h4 className="text-md font-semibold text-primary font-heading mb-4">
                  Client Demographics
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={demographicsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {demographicsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--color-card)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '8px',
                          color: 'var(--color-text-primary)'
                        }}
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-4">
                {demographicsData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/50">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium text-primary font-body">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-primary font-heading">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-6">
            <div className="bg-muted/20 rounded-lg p-6 border border-border/50">
              <h4 className="text-md font-semibold text-primary font-heading mb-4">
                Popular Treatments
              </h4>
              <div className="space-y-4">
                {treatmentPreferences.map((treatment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border/30">
                    <div className="flex-1">
                      <h5 className="font-medium text-primary font-body mb-1">
                        {treatment.treatment}
                      </h5>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <span>{treatment.bookings} bookings</span>
                        <span>₹ {treatment.revenue.toLocaleString()} revenue</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-24 bg-border rounded-full h-2 mb-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${(treatment.bookings / 156) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-text-secondary">
                        {Math.round((treatment.bookings / 156) * 100)}% popularity
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'satisfaction':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {clientSatisfaction.map((item, index) => (
                <div key={index} className="bg-muted/20 rounded-lg p-5 border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-medium text-primary font-body">
                      {item.category}
                    </h5>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary font-heading">
                        {item.score}
                      </span>
                      <div className="flex items-center">
                        {renderStars(Math.floor(item.score))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary font-body">
                    {item.feedback}
                  </p>
                  <div className="mt-3">
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-success h-2 rounded-full"
                        style={{ width: `${(item.score / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'feedback':
        return (
          <div className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="bg-muted/20 rounded-lg p-6 border border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h5 className="font-medium text-primary font-body">
                          {feedback.client}
                        </h5>
                        {feedback.verified && (
                          <Icon name="CheckCircle" size={16} className="text-success" />
                        )}
                      </div>
                      <p className="text-sm text-text-secondary">
                        {feedback.treatment}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {renderStars(feedback.rating)}
                    </div>
                    <p className="text-xs text-text-secondary">
                      {feedback.date}
                    </p>
                  </div>
                </div>
                <p className="text-text-primary font-body leading-relaxed">
                  {feedback.comment}
                </p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border subtle-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary font-heading">
            Client Insights
          </h3>
          <p className="text-sm text-text-secondary font-body">
            Understanding client preferences and satisfaction
          </p>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          iconName="Download"
          iconPosition="left"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          Export Report
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 mb-6 bg-muted/30 rounded-lg p-1">
        {[
          { id: 'demographics', label: 'Demographics', icon: 'Users' },
          { id: 'preferences', label: 'Preferences', icon: 'Heart' },
          { id: 'satisfaction', label: 'Satisfaction', icon: 'Star' },
          { id: 'feedback', label: 'Feedback', icon: 'MessageSquare' }
        ].map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            size="sm"
            iconName={tab.icon}
            iconPosition="left"
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? 'bg-accent text-accent-foreground' : 'text-text-secondary hover:text-primary'}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default ClientInsights;