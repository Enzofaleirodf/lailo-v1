
import React from 'react';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export interface AgendaEvent {
  id: number;
  auctioneerName: string;
  website: string;
  logo: string;
  date: string;
  time: string;
  address: string;
  city: string;
  state: string;
  websiteUrl: string;
}

interface EventCardProps {
  event: AgendaEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Informações principais */}
        <div className="flex-1">
          <div className="flex items-start gap-4">
            {/* Logo do leiloeiro */}
            <div className="flex-shrink-0">
              <img
                src={event.logo}
                alt={`Logo ${event.auctioneerName}`}
                className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            
            {/* Detalhes do evento */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 mb-1">
                {event.auctioneerName}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {event.website}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{event.date} às {event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{event.address}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-1">
                {event.city} - {event.state}
              </p>
            </div>
          </div>
        </div>

        {/* Botão de ação */}
        <div className="flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(event.websiteUrl, '_blank')}
            className="w-full sm:w-auto"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visitar Site
          </Button>
        </div>
      </div>
    </div>
  );
};
