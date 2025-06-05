
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Clock, Building2 } from "lucide-react";

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

interface AuctionCardProps {
  auction: AuctionEvent;
}

export const AuctionCard = ({ auction }: AuctionCardProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Remove CEP do endereço
  const formatAddress = (address: string) => {
    return address.replace(/,?\s*CEP:\s*\d{5}-?\d{3}/gi, '').trim();
  };

  const getOriginBadgeColor = (origin: string) => {
    switch (origin.toLowerCase()) {
      case 'judicial':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'extrajudicial':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'particular':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'público':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeBadgeColor = (type: string) => {
    return type.toLowerCase() === 'veículos' 
      ? 'bg-purple-100 text-purple-700 border-purple-200'
      : 'bg-orange-100 text-orange-700 border-orange-200';
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        {/* Desktop Layout */}
        <div className="hidden md:block space-y-3">
          {/* Header com badges no topo direito */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1">
                {auction.title}
              </h3>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{auction.company}</span>
              </div>
            </div>
            
            {/* Badges no topo direito */}
            <div className="flex flex-wrap gap-1.5 flex-shrink-0">
              <Badge className={`text-xs ${getOriginBadgeColor(auction.origin)}`}>
                {auction.origin}
              </Badge>
              {auction.types.map((type, index) => (
                <Badge key={index} className={`text-xs ${getTypeBadgeColor(type)}`}>
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Data, horário e local na mesma linha */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <span className="font-medium">Data:</span>
              <span>{formatDate(auction.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{auction.time}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Local:</span>
              <span className="truncate">{formatAddress(auction.address)}</span>
            </div>
          </div>

          {/* Botão na parte de baixo */}
          <div className="flex justify-end">
            <Button
              size="sm"
              onClick={() => window.open(auction.href, '_blank')}
            >
              Ver lotes
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>

        {/* Mobile Layout - mantém o layout original */}
        <div className="md:hidden space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                {auction.title}
              </h3>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{auction.company}</span>
              </div>
            </div>
            
            <Button
              size="sm"
              onClick={() => window.open(auction.href, '_blank')}
              className="flex-shrink-0"
            >
              <span className="sm:hidden">Ver</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>

          {/* Informações empilhadas no mobile */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-1.5 text-gray-600">
                <span className="font-medium">Data:</span>
                <span>{formatDate(auction.date)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{auction.time}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-1.5 text-gray-600">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium">Local:</span>
                <p className="text-sm">{formatAddress(auction.address)}</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5">
            <Badge className={`text-xs ${getOriginBadgeColor(auction.origin)}`}>
              {auction.origin}
            </Badge>
            {auction.types.map((type, index) => (
              <Badge key={index} className={`text-xs ${getTypeBadgeColor(type)}`}>
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
