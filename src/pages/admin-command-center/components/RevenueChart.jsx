import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
  const revenueData = [
    { month: 'Jan', revenue: 120000, bookings: 85 },
    { month: 'Feb', revenue: 135000, bookings: 92 },
    { month: 'Mar', revenue: 148000, bookings: 98 },
    { month: 'Apr', revenue: 162000, bookings: 105 },
    { month: 'May', revenue: 175000, bookings: 112 },
    { month: 'Jun', revenue: 189000, bookings: 125 },
    { month: 'Jul', revenue: 195000, bookings: 130 }
  ];

  const formatCurrency = (value) => `₹ ${(value / 1000).toFixed(0)}K`;

  return (
    <div className="bg-card rounded-lg p-6 border border-border subtle-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary font-heading">
            Revenue Analytics
          </h3>
          <p className="text-sm text-text-secondary font-body">
            Monthly performance overview
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="text-sm text-text-secondary">Revenue</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span className="text-sm text-text-secondary">Bookings</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="month" 
              stroke="var(--color-text-secondary)"
              fontSize={12}
            />
            <YAxis 
              stroke="var(--color-text-secondary)"
              fontSize={12}
              tickFormatter={formatCurrency}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                color: 'var(--color-text-primary)'
              }}
              formatter={(value, name) => [
                name === 'revenue' ? formatCurrency(value) : value,
                name === 'revenue' ? 'Revenue' : 'Bookings'
              ]}
            />
            <Bar 
              dataKey="revenue" 
              fill="var(--color-accent)" 
              radius={[4, 4, 0, 0]}
              name="revenue"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;