
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-blue-600" />
          Calendário
        </h3>
      </div>
      
      <div className="p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          className="w-full"
          modifiers={{
            hasEvent: eventDates
          }}
          modifiersClassNames={{
            hasEvent: "bg-blue-50 text-blue-700 font-medium hover:bg-blue-100"
          }}
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
        />
      </div>
      
      <div className="px-4 pb-4 space-y-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-50 rounded border border-blue-200"></div>
          <span>Dias com eventos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded"></div>
          <span>Data selecionada</span>
        </div>
      </div>
    </div>
  );
};
