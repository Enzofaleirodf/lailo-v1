
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AuctionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  company: string;
  origin: string;
  types: string[];
  href: string;
}

interface CompactCalendarProps {
  auctions: AuctionEvent[];
  onDateSelect: (date: string, auctions: AuctionEvent[]) => void;
}

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export const CompactCalendar = ({ auctions, onDateSelect }: CompactCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Agrupar leilões por data
  const auctionsByDate = useMemo(() => {
    const grouped: Record<string, AuctionEvent[]> = {};
    auctions.forEach(auction => {
      const date = new Date(auction.date);
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        const day = date.getDate().toString();
        if (!grouped[day]) grouped[day] = [];
        grouped[day].push(auction);
      }
    });
    return grouped;
  }, [auctions, currentMonth, currentYear]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleDayClick = (day: number) => {
    const dayAuctions = auctionsByDate[day.toString()] || [];
    if (dayAuctions.length > 0) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      onDateSelect(dateStr, dayAuctions);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Dias vazios no início
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 md:h-10"></div>);
    }
    
    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const dayAuctions = auctionsByDate[day.toString()] || [];
      const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
      const hasAuctions = dayAuctions.length > 0;
      
      days.push(
        <button
          key={day}
          onClick={() => handleDayClick(day)}
          className={`
            h-8 md:h-10 rounded-lg text-sm font-medium transition-all relative
            ${isToday ? 'bg-blue-100 text-blue-600 border border-blue-200' : ''}
            ${hasAuctions ? 'bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer' : 'text-gray-700 hover:bg-gray-50'}
            ${!hasAuctions ? 'cursor-default' : ''}
          `}
        >
          {day}
          {hasAuctions && (
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
          )}
        </button>
      );
    }
    
    return days;
  };

  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        {/* Header do calendário */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
            <h2 className="text-base md:text-lg font-semibold text-gray-900">
              {MONTHS[currentMonth]} {currentYear}
            </h2>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('prev')}
              className="h-7 w-7 md:h-8 md:w-8"
            >
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('next')}
              className="h-7 w-7 md:h-8 md:w-8"
            >
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            </Button>
          </div>
        </div>

        {/* Grid do calendário */}
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {/* Cabeçalho dos dias da semana */}
          {WEEKDAYS.map(weekday => (
            <div
              key={weekday}
              className="h-6 md:h-8 flex items-center justify-center text-xs md:text-sm font-medium text-gray-500"
            >
              {weekday}
            </div>
          ))}
          
          {/* Dias do mês */}
          {renderCalendarDays()}
        </div>

        {/* Legenda */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Leilões presenciais</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Hoje</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
