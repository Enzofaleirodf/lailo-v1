
import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AuctionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  status: string;
}

interface AgendaCalendarProps {
  auctions: AuctionEvent[];
}

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export const AgendaCalendar = ({ auctions }: AgendaCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Obter primeiro e último dia do mês
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

  const renderCalendarDays = () => {
    const days = [];
    
    // Dias vazios no início
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="h-20"></div>);
    }
    
    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const dayAuctions = auctionsByDate[day.toString()] || [];
      const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
      
      days.push(
        <div
          key={day}
          className={`h-20 border border-gray-100 p-1 ${isToday ? 'bg-blue-50 border-blue-200' : ''}`}
        >
          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          {dayAuctions.slice(0, 2).map((auction, index) => (
            <div
              key={auction.id}
              className="text-xs bg-blue-100 text-blue-800 rounded px-1 py-0.5 mb-0.5 truncate"
              title={auction.title}
            >
              {auction.time} - {auction.type}
            </div>
          ))}
          {dayAuctions.length > 2 && (
            <div className="text-xs text-gray-500">
              +{dayAuctions.length - 2} mais
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <Card>
      <CardContent className="p-6">
        {/* Header do calendário */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              {MONTHS[currentMonth]} {currentYear}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('prev')}
              className="h-8 w-8"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('next')}
              className="h-8 w-8"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Grid do calendário */}
        <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
          {/* Cabeçalho dos dias da semana */}
          {WEEKDAYS.map(weekday => (
            <div
              key={weekday}
              className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200"
            >
              {weekday}
            </div>
          ))}
          
          {/* Dias do mês */}
          {renderCalendarDays()}
        </div>

        {/* Legenda */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-100 rounded"></div>
            <span>Leilões programados</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded"></div>
            <span>Hoje</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
