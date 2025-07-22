import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const TherapistManagement = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  const therapists = [
    {
      id: 1,
      name: "Wanjiku Mwangi",
      specialization: "Traditional African Facials",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      status: "active",
      todayBookings: 6,
      rating: 4.9,
      experience: "8 years",
      certifications: ["Certified Esthetician", "Traditional Healing", "Aromatherapy"],
      nextAppointment: "10:30 AM - Shea Butter Facial",
      revenue: 18500,
      availability: "Available"
    },
    {
      id: 2,
      name: "Nyawira Kamau",
      specialization: "Massage Therapy & Body Treatments",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      status: "active",
      todayBookings: 5,
      rating: 4.8,
      experience: "6 years",
      certifications: ["Licensed Massage Therapist", "Hot Stone Therapy", "Reflexology"],
      nextAppointment: "2:00 PM - Baobab Oil Massage",
      revenue: 22000,
      availability: "Busy"
    },
    {
      id: 3,
      name: "Akinyi Otieno",
      specialization: "Holistic Wellness & Detox",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      status: "active",
      todayBookings: 4,
      rating: 4.7,
      experience: "5 years",
      certifications: ["Holistic Therapist", "Detox Specialist", "Nutrition Counseling"],
      nextAppointment: "4:30 PM - Moringa Body Wrap",
      revenue: 16800,
      availability: "Available"
    },
    {
      id: 4,
      name: "Zainab Ali",
      specialization: "Hair & Scalp Treatments",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      status: "break",
      todayBookings: 3,
      rating: 4.6,
      experience: "4 years",
      certifications: ["Hair Specialist", "Scalp Treatment", "Natural Hair Care"],
      nextAppointment: "6:00 PM - Coconut Hair Therapy",
      revenue: 12400,
      availability: "On Break"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success border-success/20';
      case 'busy':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'break':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'offline':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available':
        return 'text-success';
      case 'Busy':
        return 'text-warning';
      case 'On Break':
        return 'text-secondary';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border subtle-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary font-heading">
            Therapist Management
          </h3>
          <p className="text-sm text-text-secondary font-body">
            Monitor team performance and availability
          </p>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          Add Therapist
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {therapists.map((therapist) => (
          <div
            key={therapist.id}
            className="bg-muted/20 rounded-lg p-5 border border-border/50 hover:border-accent/30 transition-cultural cursor-pointer"
            onClick={() => setSelectedTherapist(therapist)}
          >
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Image
                  src={therapist.avatar}
                  alt={therapist.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card ${getStatusColor(therapist.status)}`}></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-primary font-heading truncate">
                    {therapist.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-sm font-medium text-text-primary">
                      {therapist.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary mb-2 font-body">
                  {therapist.specialization}
                </p>
                
                <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
                  <span>{therapist.experience} experience</span>
                  <span className={getAvailabilityColor(therapist.availability)}>
                    {therapist.availability}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-text-secondary">Today's Bookings</p>
                    <p className="font-semibold text-primary font-body">
                      {therapist.todayBookings}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Revenue</p>
                    <p className="font-semibold text-primary font-body">
                      ₹ {therapist.revenue.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-border/30">
                  <p className="text-xs text-text-secondary mb-1">Next Appointment:</p>
                  <p className="text-sm text-primary font-body">
                    {therapist.nextAppointment}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MessageSquare"
                  className="text-text-secondary hover:text-primary"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Calendar"
                  className="text-text-secondary hover:text-primary"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="BarChart3"
                  className="text-text-secondary hover:text-primary"
                />
              </div>
              
              <Button
                variant="outline"
                size="sm"
                iconName="Eye"
                iconPosition="left"
                className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Users"
              iconPosition="left"
              className="text-text-secondary hover:text-primary"
            >
              All Therapists ({therapists.length})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Clock"
              iconPosition="left"
              className="text-text-secondary hover:text-primary"
            >
              Schedule Management
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="border-border text-text-secondary hover:text-primary"
            >
              Export Report
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Settings"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Manage Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistManagement;