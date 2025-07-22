import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AvailabilityCalendar = ({ selectedTherapist, selectedTreatments = [], onTimeSelect, selectedDateTime }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('week'); // 'week' or 'month'

  // Mock availability data
  const generateAvailability = (date) => {
    const slots = [];
    const startHour = 9;
    const endHour = 18;
    const slotDuration = 30; // minutes
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += slotDuration) {
        const slotTime = new Date(date);
        slotTime.setHours(hour, minute, 0, 0);
        
        // Mock availability logic
        const isAvailable = Math.random() > 0.3; // 70% availability
        const isPopular = Math.random() > 0.8; // 20% popular slots
        
        slots.push({
          time: slotTime,
          available: isAvailable,
          popular: isPopular,
          therapistAvailable: selectedTherapist ? Math.random() > 0.2 : true
        });
      }
    }
    return slots;
  };

  const getTotalDuration = () => {
    return selectedTreatments.reduce((total, treatment) => {
      if (treatment.treatments) {
        // Package
        return total + treatment.duration;
      }
      return total + treatment.duration;
    }, 0);
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0 && mins > 0) {
      return `${hours}h ${mins}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${mins}m`;
    }
  };

  const getWeekDates = (date) => {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const getMonthDates = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());
    
    const dates = [];
    const current = new Date(startDate);
    
    while (current <= lastDay || dates.length < 42) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return dates;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSameMonth = (date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else {
      newDate.setMonth(currentDate.getMonth() + direction);
    }
    setCurrentDate(newDate);
  };

  const handleDateSelect = (date) => {
    if (isPast(date)) return;
    setSelectedDate(date);
  };

  const handleTimeSelect = (slot) => {
    if (!slot.available || !slot.therapistAvailable) return;
    
    const endTime = new Date(slot.time);
    endTime.setMinutes(slot.time.getMinutes() + getTotalDuration());
    
    if (onTimeSelect) {
      onTimeSelect({
        date: slot.time,
        endTime: endTime,
        duration: getTotalDuration()
      });
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const weekDates = viewMode === 'week' ? getWeekDates(currentDate) : [];
  const monthDates = viewMode === 'month' ? getMonthDates(currentDate) : [];
  const displayDate = selectedDate || (weekDates.length > 0 ? weekDates[0] : new Date());
  const timeSlots = generateAvailability(displayDate);

  return (
    <div className="bg-white rounded-xl cultural-shadow border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-xl font-semibold">Select Date & Time</h3>
            <p className="text-primary-foreground/80">
              {selectedTreatments.length > 0 && (
                <>Total duration: {formatDuration(getTotalDuration())}</>
              )}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'week' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('week')}
              className={viewMode === 'week' ? "bg-white text-primary" : "border-white text-white hover:bg-white/20"}
            >
              Week
            </Button>
            <Button
              variant={viewMode === 'month' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('month')}
              className={viewMode === 'month' ? "bg-white text-primary" : "border-white text-white hover:bg-white/20"}
            >
              Month
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateDate(-1)}
            iconName="ChevronLeft"
            className="text-white hover:bg-white/20"
          />
          <h4 className="font-heading text-lg font-semibold">
            {currentDate.toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric',
              ...(viewMode === 'week' && { day: 'numeric' })
            })}
          </h4>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateDate(1)}
            iconName="ChevronRight"
            className="text-white hover:bg-white/20"
          />
        </div>
      </div>

      <div className="p-6">
        {/* Calendar Grid */}
        {viewMode === 'week' ? (
          <div className="grid grid-cols-7 gap-2 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-text-secondary py-2">
                {day}
              </div>
            ))}
            {weekDates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isPast(date)}
                className={`p-3 rounded-lg text-center transition-cultural ${
                  isPast(date)
                    ? 'text-text-secondary/50 cursor-not-allowed'
                    : selectedDate?.toDateString() === date.toDateString()
                    ? 'bg-accent text-accent-foreground'
                    : isToday(date)
                    ? 'bg-accent/20 text-accent border border-accent' :'hover:bg-muted text-text-primary'
                }`}
              >
                <div className="font-semibold">{date.getDate()}</div>
                <div className="text-xs">
                  {date.toLocaleDateString('en-US', { month: 'short' })}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-1 mb-6">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-text-secondary py-2">
                {day}
              </div>
            ))}
            {monthDates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isPast(date)}
                className={`p-2 text-center transition-cultural ${
                  isPast(date)
                    ? 'text-text-secondary/50 cursor-not-allowed'
                    : selectedDate?.toDateString() === date.toDateString()
                    ? 'bg-accent text-accent-foreground rounded-lg'
                    : isToday(date)
                    ? 'bg-accent/20 text-accent border border-accent rounded-lg'
                    : !isSameMonth(date)
                    ? 'text-text-secondary/50' :'hover:bg-muted text-text-primary rounded-lg'
                }`}
              >
                {date.getDate()}
              </button>
            ))}
          </div>
        )}

        {/* Time Slots */}
        {(selectedDate || viewMode === 'week') && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-semibold text-primary">
                Available Times - {displayDate.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </h4>
              {selectedTherapist && (
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span>Available with {selectedTherapist.name}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-64 overflow-y-auto">
              {timeSlots.map((slot, index) => {
                const isSelected = selectedDateTime && 
                  slot.time.getTime() === selectedDateTime.date.getTime();
                const canBook = slot.available && slot.therapistAvailable;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleTimeSelect(slot)}
                    disabled={!canBook}
                    className={`p-3 rounded-lg text-sm font-medium transition-cultural ${
                      isSelected
                        ? 'bg-accent text-accent-foreground'
                        : !canBook
                        ? 'bg-muted text-text-secondary/50 cursor-not-allowed'
                        : slot.popular
                        ? 'bg-warning/20 text-warning border border-warning hover:bg-warning hover:text-warning-foreground'
                        : 'bg-muted hover:bg-accent/20 hover:text-accent text-text-primary'
                    }`}
                  >
                    <div>{formatTime(slot.time)}</div>
                    {slot.popular && (
                      <div className="text-xs mt-1">Popular</div>
                    )}
                    {!slot.therapistAvailable && selectedTherapist && (
                      <div className="text-xs mt-1">Therapist busy</div>
                    )}
                  </button>
                );
              })}
            </div>

            {timeSlots.filter(slot => slot.available && slot.therapistAvailable).length === 0 && (
              <div className="text-center py-8">
                <Icon name="Calendar" size={48} className="text-text-secondary mx-auto mb-4" />
                <p className="text-text-secondary">No available slots for this date</p>
                <p className="text-text-secondary text-sm">Please select a different date</p>
              </div>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-accent"></div>
              <span className="text-text-secondary">Selected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-warning/20 border border-warning"></div>
              <span className="text-text-secondary">Popular time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-muted"></div>
              <span className="text-text-secondary">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-text-secondary/20"></div>
              <span className="text-text-secondary">Unavailable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;