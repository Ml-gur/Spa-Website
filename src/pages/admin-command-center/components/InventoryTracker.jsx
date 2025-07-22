import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InventoryTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const inventoryItems = [
    {
      id: 1,
      name: "Raw Shea Butter",
      category: "skincare",
      currentStock: 25,
      minStock: 10,
      maxStock: 50,
      unit: "kg",
      supplier: "Ghana Cooperative",
      lastRestocked: "2025-07-15",
      expiryDate: "2026-01-15",
      costPerUnit: 850,
      status: "good",
      usage: "High - Used in 60% of facial treatments"
    },
    {
      id: 2,
      name: "Baobab Oil (Organic)",
      category: "oils",
      currentStock: 8,
      minStock: 15,
      maxStock: 30,
      unit: "liters",
      supplier: "Senegal Naturals",
      lastRestocked: "2025-07-10",
      expiryDate: "2025-12-10",
      costPerUnit: 1200,
      status: "low",
      usage: "High - Primary massage oil"
    },
    {
      id: 3,
      name: "Moringa Powder",
      category: "herbs",
      currentStock: 12,
      minStock: 8,
      maxStock: 25,
      unit: "kg",
      supplier: "Kenya Moringa Farms",
      lastRestocked: "2025-07-18",
      expiryDate: "2025-11-18",
      costPerUnit: 450,
      status: "good",
      usage: "Medium - Body wrap treatments"
    },
    {
      id: 4,
      name: "Wild Honey",
      category: "natural",
      currentStock: 6,
      minStock: 10,
      maxStock: 20,
      unit: "kg",
      supplier: "Maasai Beekeepers",
      lastRestocked: "2025-07-12",
      expiryDate: "2027-07-12",
      costPerUnit: 950,
      status: "low",
      usage: "High - Honey glow treatments"
    },
    {
      id: 5,
      name: "African Black Soap",
      category: "cleansers",
      currentStock: 45,
      minStock: 20,
      maxStock: 60,
      unit: "bars",
      supplier: "Ghana Soap Collective",
      lastRestocked: "2025-07-20",
      expiryDate: "2026-07-20",
      costPerUnit: 85,
      status: "good",
      usage: "Medium - Cleansing treatments"
    },
    {
      id: 6,
      name: "Coconut Oil (Virgin)",
      category: "oils",
      currentStock: 3,
      minStock: 12,
      maxStock: 25,
      unit: "liters",
      supplier: "Coast Coconut Co-op",
      lastRestocked: "2025-07-05",
      expiryDate: "2025-10-05",
      costPerUnit: 680,
      status: "critical",
      usage: "High - Hair and scalp treatments"
    },
    {
      id: 7,
      name: "Frankincense Essential Oil",
      category: "aromatherapy",
      currentStock: 18,
      minStock: 10,
      maxStock: 30,
      unit: "ml",
      supplier: "Somalia Frankincense",
      lastRestocked: "2025-07-16",
      expiryDate: "2026-07-16",
      costPerUnit: 2500,
      status: "good",
      usage: "Low - Luxury aromatherapy sessions"
    },
    {
      id: 8,
      name: "Red Clay (Bentonite)",
      category: "clays",
      currentStock: 22,
      minStock: 15,
      maxStock: 40,
      unit: "kg",
      supplier: "Morocco Clay Mines",
      lastRestocked: "2025-07-14",
      expiryDate: "2028-07-14",
      costPerUnit: 320,
      status: "good",
      usage: "Medium - Detox face masks"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Items', count: inventoryItems.length },
    { id: 'skincare', label: 'Skincare', count: inventoryItems.filter(item => item.category === 'skincare').length },
    { id: 'oils', label: 'Oils', count: inventoryItems.filter(item => item.category === 'oils').length },
    { id: 'herbs', label: 'Herbs', count: inventoryItems.filter(item => item.category === 'herbs').length },
    { id: 'natural', label: 'Natural', count: inventoryItems.filter(item => item.category === 'natural').length },
    { id: 'cleansers', label: 'Cleansers', count: inventoryItems.filter(item => item.category === 'cleansers').length },
    { id: 'aromatherapy', label: 'Aromatherapy', count: inventoryItems.filter(item => item.category === 'aromatherapy').length },
    { id: 'clays', label: 'Clays', count: inventoryItems.filter(item => item.category === 'clays').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? inventoryItems 
    : inventoryItems.filter(item => item.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'good':
        return 'bg-success/10 text-success border-success/20';
      case 'low':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'critical':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'good':
        return 'CheckCircle';
      case 'low':
        return 'AlertTriangle';
      case 'critical':
        return 'AlertCircle';
      default:
        return 'Circle';
    }
  };

  const getStockPercentage = (current, max) => {
    return (current / max) * 100;
  };

  const getStockBarColor = (status) => {
    switch (status) {
      case 'good':
        return 'bg-success';
      case 'low':
        return 'bg-warning';
      case 'critical':
        return 'bg-error';
      default:
        return 'bg-muted';
    }
  };

  const criticalItems = inventoryItems.filter(item => item.status === 'critical').length;
  const lowStockItems = inventoryItems.filter(item => item.status === 'low').length;
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.costPerUnit), 0);

  return (
    <div className="bg-card rounded-lg p-6 border border-border subtle-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary font-heading">
            Inventory Tracker
          </h3>
          <p className="text-sm text-text-secondary font-body">
            African ingredient supply management
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
            className="border-border text-text-secondary hover:text-primary"
          >
            Export
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Plus"
            iconPosition="left"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Add Item
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-error/5 rounded-lg p-4 border border-error/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="AlertCircle" size={16} className="text-error" />
            <span className="text-sm font-medium text-error">Critical</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {criticalItems}
          </p>
        </div>

        <div className="bg-warning/5 rounded-lg p-4 border border-warning/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="AlertTriangle" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning">Low Stock</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {lowStockItems}
          </p>
        </div>

        <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Package" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Total Items</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            {inventoryItems.length}
          </p>
        </div>

        <div className="bg-success/5 rounded-lg p-4 border border-success/10">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="DollarSign" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Total Value</span>
          </div>
          <p className="text-2xl font-bold text-primary font-heading">
            ₹ {(totalValue / 1000).toFixed(0)}K
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={`whitespace-nowrap ${
              selectedCategory === category.id 
                ? 'bg-accent text-accent-foreground' 
                : 'text-text-secondary hover:text-primary'
            }`}
          >
            {category.label} ({category.count})
          </Button>
        ))}
      </div>

      {/* Inventory Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-muted/20 rounded-lg p-5 border border-border/50 hover:border-accent/30 transition-cultural"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-semibold text-primary font-heading">
                    {item.name}
                  </h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                    <Icon name={getStatusIcon(item.status)} size={12} className="mr-1" />
                    {item.status}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary font-body mb-3">
                  {item.usage}
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-text-secondary">Current Stock</p>
                    <p className="font-semibold text-primary font-body">
                      {item.currentStock} {item.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Supplier</p>
                    <p className="font-semibold text-primary font-body">
                      {item.supplier}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Last Restocked</p>
                    <p className="font-semibold text-primary font-body">
                      {item.lastRestocked}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Expires</p>
                    <p className="font-semibold text-primary font-body">
                      {item.expiryDate}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-right ml-6">
                <p className="text-sm text-text-secondary mb-1">Value</p>
                <p className="text-lg font-bold text-primary font-heading">
                  ₹ {(item.currentStock * item.costPerUnit).toLocaleString()}
                </p>
              </div>
            </div>
            
            {/* Stock Level Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-text-secondary mb-1">
                <span>Stock Level</span>
                <span>{Math.round(getStockPercentage(item.currentStock, item.maxStock))}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getStockBarColor(item.status)}`}
                  style={{ width: `${getStockPercentage(item.currentStock, item.maxStock)}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs text-text-secondary mt-1">
                <span>Min: {item.minStock}</span>
                <span>Max: {item.maxStock}</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border/30">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Eye"
                  className="text-text-secondary hover:text-primary"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Edit"
                  className="text-text-secondary hover:text-primary"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="BarChart3"
                  className="text-text-secondary hover:text-primary"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                {item.status !== 'good' && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ShoppingCart"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Reorder
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MoreHorizontal"
                  className="text-text-secondary hover:text-primary"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryTracker;