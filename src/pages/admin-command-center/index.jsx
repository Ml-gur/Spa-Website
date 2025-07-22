import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DashboardStats from './components/DashboardStats';
import RevenueChart from './components/RevenueChart';
import BookingOverview from './components/BookingOverview';
import TherapistManagement from './components/TherapistManagement';
import ClientInsights from './components/ClientInsights';
import InventoryTracker from './components/InventoryTracker';

const AdminCommandCenter = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'critical',
      title: 'Low Stock Alert',
      message: 'Coconut Oil inventory is critically low (3L remaining)',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'booking',
      title: 'New Booking',
      message: 'Amara Ochieng booked Shea Butter Facial for tomorrow',
      time: '12 minutes ago',
      read: false
    },
    {
      id: 3,
      type: 'revenue',
      title: 'Daily Target Achieved',
      message: 'Today\'s revenue target of ₹40,000 has been exceeded',
      time: '1 hour ago',
      read: true
    }
  ]);

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'BarChart3' },
    { id: 'bookings', label: 'Booking Management', icon: 'Calendar' },
    { id: 'therapists', label: 'Therapist Management', icon: 'Users' },
    { id: 'clients', label: 'Client Insights', icon: 'UserCheck' },
    { id: 'inventory', label: 'Inventory Tracker', icon: 'Package' },
    { id: 'analytics', label: 'Revenue Analytics', icon: 'TrendingUp' },
    { id: 'settings', label: 'System Settings', icon: 'Settings' }
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Add New Booking',
      description: 'Schedule appointment for walk-in client',
      icon: 'Plus',
      color: 'accent',
      action: () => console.log('Add booking')
    },
    {
      id: 2,
      title: 'Send WhatsApp Reminder',
      description: 'Bulk reminders for tomorrow\'s appointments',
      icon: 'MessageCircle',
      color: 'success',
      action: () => console.log('Send reminders')
    },
    {
      id: 3,
      title: 'Generate Report',
      description: 'Weekly performance and revenue report',
      icon: 'FileText',
      color: 'secondary',
      action: () => console.log('Generate report')
    },
    {
      id: 4,
      title: 'Inventory Alert',
      description: 'Review and reorder low stock items',
      icon: 'AlertTriangle',
      color: 'warning',
      action: () => setActiveSection('inventory')
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'critical':
        return 'AlertCircle';
      case 'booking':
        return 'Calendar';
      case 'revenue':
        return 'TrendingUp';
      default:
        return 'Bell';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'critical':
        return 'text-error';
      case 'booking':
        return 'text-accent';
      case 'revenue':
        return 'text-success';
      default:
        return 'text-text-secondary';
    }
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <RevenueChart />
              <BookingOverview />
            </div>
          </div>
        );
      case 'bookings':
        return <BookingOverview />;
      case 'therapists':
        return <TherapistManagement />;
      case 'clients':
        return <ClientInsights />;
      case 'inventory':
        return <InventoryTracker />;
      case 'analytics':
        return <RevenueChart />;
      default:
        return (
          <div className="bg-card rounded-lg p-8 border border-border subtle-shadow text-center">
            <Icon name="Settings" size={48} className="text-text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-primary font-heading mb-2">
              {sidebarItems.find(item => item.id === activeSection)?.label}
            </h3>
            <p className="text-text-secondary font-body">
              This section is under development. Coming soon with advanced features.
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Command Center - Serenity Spa Kenya</title>
        <meta name="description" content="Comprehensive business management dashboard for Serenity Spa Kenya with analytics, booking management, and operational control." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border sticky top-16 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary font-heading">
                  Admin Command Center
                </h1>
                <p className="text-text-secondary font-body">
                  Comprehensive business management dashboard
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Bell"
                    className="text-text-secondary hover:text-primary"
                  />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-error rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    </div>
                  )}
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary font-body">
                      Admin User
                    </p>
                    <p className="text-xs text-text-secondary">
                      System Administrator
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-card border-r border-border min-h-screen">
            <div className="p-6">
              {/* Quick Actions */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-primary font-heading mb-4 uppercase tracking-wide">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="p-3 bg-muted/20 rounded-lg border border-border/50 hover:border-accent/30 transition-cultural text-left group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-${action.color}/10 text-${action.color} group-hover:bg-${action.color}/20`}>
                        <Icon name={action.icon} size={16} />
                      </div>
                      <h4 className="text-sm font-medium text-primary font-body mb-1">
                        {action.title}
                      </h4>
                      <p className="text-xs text-text-secondary">
                        {action.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-primary font-heading mb-4 uppercase tracking-wide">
                  Navigation
                </h3>
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-cultural text-left ${
                        activeSection === item.id
                          ? 'bg-accent/10 text-accent border border-accent/20' :'text-text-secondary hover:text-primary hover:bg-muted/30'
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="font-medium font-body">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Recent Notifications */}
              <div>
                <h3 className="text-sm font-semibold text-primary font-heading mb-4 uppercase tracking-wide">
                  Recent Notifications
                </h3>
                <div className="space-y-3">
                  {notifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border transition-cultural ${
                        notification.read
                          ? 'bg-muted/20 border-border/50' :'bg-accent/5 border-accent/20'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon
                          name={getNotificationIcon(notification.type)}
                          size={16}
                          className={getNotificationColor(notification.type)}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-primary font-body mb-1">
                            {notification.title}
                          </h4>
                          <p className="text-xs text-text-secondary mb-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {renderMainContent()}
          </div>
        </div>

        {/* Cultural Pattern Decoration */}
        <div className="fixed bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tl from-accent via-secondary to-accent rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default AdminCommandCenter;