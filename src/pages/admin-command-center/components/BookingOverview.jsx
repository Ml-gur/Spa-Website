import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BookingOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const bookingData = {
    today: {
      total: 24,
      confirmed: 18,
      pending: 4,
      cancelled: 2,
      revenue: 45000
    },
    week: {
      total: 156,
      confirmed: 132,
      pending: 18,
      cancelled: 6,
      revenue: 285000
    },
    month: {
      total: 642,
      confirmed: 578,
      pending: 42,
      cancelled: 22,
      revenue: 1250000
    }
  };

  const recentBookings = [
    {
      id: 1,
      clientName: "Amara Ochieng",
      treatment: "Shea Butter Radiance Facial",
      therapist: "Wanjiku Mwangi",
      time: "10:30 AM",
      status: "confirmed",
      amount: 3500
    },
    {
      id: 2,
      clientName: "Grace Kimani",
      treatment: "Traditional Honey Glow Treatment",
      therapist: "Nyawira Kamau",
      time: "2:00 PM",
      status: "pending",
      amount: 4200
    },
    {
      id: 3,
      clientName: "Sarah Johnson",
      treatment: "Baobab Oil Massage Therapy",
      therapist: "Akinyi Otieno",
      time: "4:30 PM",
      status: "confirmed",
      amount: 5500
    },
    {
      id: 4,
      clientName: "Fatuma Hassan",
      treatment: "Moringa Detox Body Wrap",
      therapist: "Wanjiku Mwangi",
      time: "6:00 PM",
      status: "cancelled",
      amount: 4800
    }
  ];

  const currentData = bookingData[selectedPeriod];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'cancelled':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return 'CheckCircle';
      case 'pending':
        return 'Clock';
      case 'cancelled':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border subtle-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary font-heading">
            Booking Overview
          </h3>
          <p className="text-sm text-text-secondary font-body">
            Real-time booking management
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          {['today', 'week', 'month'].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className="capitalize"
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Calendar" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Total</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {currentData.total}
          </p>
        </div>

        <div className="bg-success/5 rounded-lg p-4 border border-success/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Confirmed</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {currentData.confirmed}
          </p>
        </div>

        <div className="bg-warning/5 rounded-lg p-4 border border-warning/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning">Pending</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {currentData.pending}
          </p>
        </div>

        <div className="bg-error/5 rounded-lg p-4 border border-error/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="XCircle" size={16} className="text-error" />
            <span className="text-sm font-medium text-error">Cancelled</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {currentData.cancelled}
          </p>
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <h4 className="text-md font-semibold text-primary font-heading mb-4">
          Recent Bookings
        </h4>
        <div className="space-y-3">
          {recentBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-cultural"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full border ${getStatusColor(booking.status)}`}>
                  <Icon name={getStatusIcon(booking.status)} size={16} />
                </div>
                <div>
                  <p className="font-medium text-primary font-body">
                    {booking.clientName}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {booking.treatment}
                  </p>
                  <p className="text-xs text-text-secondary">
                    with {booking.therapist} at {booking.time}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-primary font-body">
                  ₹ {booking.amount.toLocaleString()}
                </p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingOverview;