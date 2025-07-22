import React from 'react';
import Icon from '../../../components/AppIcon';

const DashboardStats = () => {
  const stats = [
    {
      id: 1,
      title: "Today\'s Bookings",
      value: "24",
      change: "+12%",
      changeType: "positive",
      icon: "Calendar",
      color: "accent"
    },
    {
      id: 2,
      title: "Revenue (KES)",
      value: "₹ 145,000",
      change: "+8.5%",
      changeType: "positive",
      icon: "TrendingUp",
      color: "success"
    },
    {
      id: 3,
      title: "Active Therapists",
      value: "12",
      change: "100%",
      changeType: "neutral",
      icon: "Users",
      color: "secondary"
    },
    {
      id: 4,
      title: "Client Satisfaction",
      value: "4.9",
      change: "+0.2",
      changeType: "positive",
      icon: "Star",
      color: "warning"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: "bg-accent/10 text-accent border-accent/20",
      success: "bg-success/10 text-success border-success/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20",
      warning: "bg-warning/10 text-warning border-warning/20"
    };
    return colorMap[color] || colorMap.accent;
  };

  const getChangeColor = (type) => {
    if (type === "positive") return "text-success";
    if (type === "negative") return "text-error";
    return "text-text-secondary";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-card rounded-lg p-6 border border-border subtle-shadow transition-cultural hover:cultural-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg border ${getColorClasses(stat.color)}`}>
              <Icon name={stat.icon} size={24} />
            </div>
            <div className={`text-sm font-medium ${getChangeColor(stat.changeType)}`}>
              {stat.change}
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-primary font-heading">
              {stat.value}
            </h3>
            <p className="text-sm text-text-secondary font-body">
              {stat.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;