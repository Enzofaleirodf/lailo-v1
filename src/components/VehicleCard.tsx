
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
  
  // Determine color scheme based on vehicle status
  const isJudicial = vehicleData.badges.includes("Judicial");
  const statusTheme = isJudicial 
    ? {
        borderColor: "border-blue-500",
        accentColor: "from-blue-50 to-blue-100",
        badgeColor: "bg-blue-100 text-blue-800",
        priceGradient: "from-blue-600 to-blue-800"
      }
    : {
        borderColor: "border-rose-500", 
        accentColor: "from-rose-50 to-rose-100",
        badgeColor: "bg-rose-100 text-rose-800",
        priceGradient: "from-rose-600 to-rose-800"
      };

  // Parse location for smart display
  const [city, state] = vehicleData.location.split(" - ");

  return (
    <Card 
      className={`
        group relative w-full max-w-none p-4 
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-2xl border-2 ${statusTheme.borderColor}
        shadow-lg hover:shadow-2xl hover:shadow-gray-400/20
        transform transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.02]
        backdrop-blur-sm
        focus-within:ring-4 focus-within:ring-blue-200 focus-within:ring-opacity-50
        ${isHovered ? 'shadow-2xl shadow-gray-400/30' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Veículo ${vehicleData.name}`}
    >
      {/* Premium glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl pointer-events-none" />
      
      <CardContent className="relative p-0 space-y-4">
        <div className="flex gap-4 items-stretch">
          {/* Enhanced Image Container */}
          <div className="relative w-[120px] flex-shrink-0 group/image overflow-hidden rounded-xl">
            <div 
              style={{
                backgroundImage: `url(${vehicleData.image})`
              }} 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110"
            />
            
            {/* Image overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            
            {/* Status indicators */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {parseInt(vehicleData.discount) >= 40 && (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 animate-pulse">
                  <Zap className="w-3 h-3 mr-1" />
                  HOT
                </Badge>
              )}
              {vehicleData.year === "2025" && (
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  NEW
                </Badge>
              )}
            </div>

            {/* Discount badge on image */}
            <div className="absolute bottom-2 right-2">
              <Badge className={`
                bg-gradient-to-r ${statusTheme.priceGradient} text-white 
                font-bold text-sm px-3 py-1 rounded-full
                shadow-lg transform transition-transform duration-300
                ${isHovered ? 'scale-110' : ''}
              `}>
                {vehicleData.discount}
              </Badge>
            </div>
          </div>

          {/* Enhanced Content Container */}
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            {/* Header with enhanced typography */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-gray-900 text-xl md:text-lg leading-tight truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                  {vehicleData.name}
                </h3>
                
                {/* Enhanced interactive favorite button */}
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`
                    p-2 rounded-full transition-all duration-300 
                    ${isFavorited 
                      ? 'bg-red-100 text-red-500 scale-110' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-red-400'
                    }
                    hover:scale-125 focus:ring-4 focus:ring-red-200 focus:outline-none
                    ${isFavorited ? 'animate-bounce' : ''}
                  `}
                  aria-label={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  <Heart className={`w-4 h-4 transition-all duration-300 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Enhanced vehicle details with micro-typography */}
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-medium text-gray-600 text-sm whitespace-nowrap">
                  {vehicleData.color}
                </span>
                <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                <span className="font-medium text-gray-600 text-sm whitespace-nowrap">
                  {vehicleData.year}
                </span>
                <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                
                {/* Smart location display */}
                <div className="flex flex-col leading-none truncate">
                  <span className="font-semibold text-gray-800 text-sm truncate">
                    {city}
                  </span>
                  <span className="font-normal text-gray-500 text-xs">
                    {state}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero price element */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className={`
                  font-black text-transparent bg-clip-text bg-gradient-to-r ${statusTheme.priceGradient}
                  text-2xl md:text-xl leading-none
                  transform transition-all duration-300
                  ${isHovered ? 'scale-105' : ''}
                `}>
                  {vehicleData.price}
                </span>
                <span className="text-xs text-gray-500 font-medium mt-1">
                  Valor do leilão
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced separator with gradient */}
        <div className={`h-px w-full bg-gradient-to-r ${statusTheme.accentColor} transition-all duration-300`} />

        {/* Enhanced bottom section */}
        <div className="flex items-center justify-between">
          {/* Status badges with neumorphism */}
          <div className="flex items-center gap-2">
            <Badge className={`
              ${statusTheme.badgeColor} border-none
              px-3 py-1 rounded-full font-semibold text-xs
              shadow-inner backdrop-blur-sm
              transition-all duration-300 hover:scale-105
            `}>
              <span className="font-bold">{vehicleData.badges[1].charAt(0)}</span>
              <span className="font-light">ª</span>
              <span className="font-semibold"> Praça</span>
            </Badge>

            <Badge className={`
              ${statusTheme.badgeColor} border-none
              px-3 py-1 rounded-full font-semibold text-xs
              shadow-inner backdrop-blur-sm
              transition-all duration-300 hover:scale-105
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
            
            {/* Prominent CTA button */}
            <Button 
              className={`
                bg-gradient-to-r ${statusTheme.priceGradient}
                hover:from-gray-700 hover:to-gray-900
                text-white font-semibold px-4 py-2 rounded-xl
                transform transition-all duration-300
                hover:scale-110 hover:shadow-lg
                focus:ring-4 focus:ring-blue-200 focus:outline-none
                group/cta
              `}
              size="sm"
            >
              <span className="text-xs">Ver Detalhes</span>
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
