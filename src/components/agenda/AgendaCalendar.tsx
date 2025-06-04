
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { cn } from '@/lib/utils';

interface AgendaCalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
  eventDates?: Date[];
}

export const AgendaCalendar = ({ 
  selectedDate, 
  onDateSelect, 
  eventDates = [] 
}: AgendaCalendarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <CalendarIcon className="w-5 h-5 text-blue-600" />
        Calendário
      </h3>
      
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        className={cn("w-full")}
        modifiers={{
          hasEvent: eventDates
        }}
        modifiersStyles={{
          hasEvent: {
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            fontWeight: 'bold'
          }
        }}
        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
      />
      
      <div className="mt-4 space-y-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-100 rounded border border-blue-300"></div>
          <span>Dias com eventos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded"></div>
          <span>Data selecionada</span>
        </div>
      </div>
    </div>
  );
};
