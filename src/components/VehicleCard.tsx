import { Calendar, ArrowUpRight, Heart, Star, Zap } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface VehicleData {
  name: string;
  color: string;
  year: string;
  location: string;
  price: string;
  discount: string;
  badges: string[];
  date: string;
  image: string;
}

interface VehicleCardProps {
  vehicle?: VehicleData;
}

export const VehicleCard = ({
  vehicle
}: VehicleCardProps): JSX.Element => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const defaultVehicle: VehicleData = {
    name: "Volkswagen T-Cross",
    color: "Preto",
    year: "2025",
    location: "Brasília - DF",
    price: "R$ 78.000",
    discount: "50% OFF",
    badges: ["Extrajudicial", "2ª Praça"],
    date: "15/05 às 10:00",
    image: "/lovable-uploads/9b0b7577-0ba8-4200-abdf-15cdf93a0ba4.png"
  };

  const vehicleData = vehicle || defaultVehicle;
  
  // Use apenas tema azul
  const statusTheme = {
    borderColor: "border-blue-500",
    accentColor: "from-blue-50 to-blue-100",
    badgeColor: "bg-blue-100 text-blue-800",
    priceGradient: "from-blue-600 to-blue-800"
  };

  return (
    <Card 
      className={`
        group relative w-full max-w-none p-4 
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-2xl border-2 ${statusTheme.borderColor}
        shadow-lg
        backdrop-blur-sm
        focus-within:ring-4 focus-within:ring-blue-200 focus-within:ring-opacity-50
      `}
      role="article"
      aria-label={`Veículo ${vehicleData.name}`}
    >
      {/* Premium glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl pointer-events-none" />
      
      <CardContent className="relative p-0 space-y-4">
        <div className="flex gap-4 items-stretch">
          {/* Enhanced Image Container */}
          <div className="relative w-[120px] h-[120px] flex-shrink-0 group/image overflow-hidden rounded-xl">
            <div 
              style={{
                backgroundImage: `url(${vehicleData.image})`
              }} 
              className="w-full h-full bg-cover bg-center"
            />
            
            {/* Image overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Enhanced Content Container */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            {/* Header with enhanced typography */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-gray-900 text-xl md:text-lg leading-tight truncate">
                  {vehicleData.name}
                </h3>
              </div>

              {/* Enhanced vehicle details with micro-typography */}
              <div className="flex items-center gap-2 overflow-hidden" style={{ marginTop: '2px' }}>
                <span className="font-medium text-gray-600 text-sm whitespace-nowrap">
                  {vehicleData.color}
                </span>
                <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                <span className="font-medium text-gray-600 text-sm whitespace-nowrap">
                  {vehicleData.year}
                </span>
                <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                
                {/* Location display - cidade e estado na mesma linha */}
                <span className="font-medium text-gray-600 text-sm truncate">
                  {vehicleData.location}
                </span>
              </div>
            </div>

            {/* Hero price element with discount badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="flex flex-col">
                  <span className={`
                    font-black text-transparent bg-clip-text bg-gradient-to-r ${statusTheme.priceGradient}
                    text-2xl md:text-xl leading-none
                  `}>
                    {vehicleData.price}
                  </span>
                  <span className="text-xs text-gray-500 font-medium mt-1">
                    Lance atual
                  </span>
                </div>
                
                {/* Discount badge moved next to price */}
                <Badge className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-xs px-2 py-0.5 rounded-full shadow-lg ml-1">
                  {vehicleData.discount}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced separator with gradient */}
        <div className={`h-px w-full bg-gradient-to-r ${statusTheme.accentColor}`} />

        {/* Enhanced bottom section */}
        <div className="flex items-center justify-between">
          {/* Status badges with neumorphism */}
          <div className="flex items-center gap-2">
            <Badge className={`
              ${statusTheme.badgeColor} border-none
              px-3 py-1 rounded-full font-semibold text-xs
              shadow-inner backdrop-blur-sm
            `}>
              <span className="font-bold">{vehicleData.badges[1].charAt(0)}</span>
              <span className="font-light">ª</span>
              <span className="font-semibold"> Praça</span>
            </Badge>

            <Badge className={`
              ${statusTheme.badgeColor} border-none
              px-3 py-1 rounded-full font-semibold text-xs
              shadow-inner backdrop-blur-sm
            `}>
              {vehicleData.badges[0]}
            </Badge>
          </div>

          {/* Enhanced CTA section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="font-medium text-sm">
                {vehicleData.date}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
