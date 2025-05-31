import { Calendar, ArrowUpRight, Heart } from "lucide-react";
import React from "react";
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
  return <Card className="w-full max-w-none p-3 bg-white rounded-xl border border-gray-200 shadow-shadows-shadow-xs py-[12px]">
      <CardContent className="p-0 space-y-2">
        <div className="flex gap-2.5 items-stretch">
          <div style={{
          backgroundImage: `url(${vehicleData.image})`
        }} className="w-[99px] rounded bg-cover bg-center flex-shrink-0" />

          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="font-urbanist font-semibold text-blue-light800 text-sm text-rose-600 truncate">
                  {vehicleData.name}
                </h3>
                <Heart className="w-4 h-4 text-gray-500 flex-shrink-0" />
              </div>

              <div className="flex items-center gap-[8px] overflow-hidden">
                <span className="font-urbanist font-normal text-gray-500 text-xs whitespace-nowrap">
                  {vehicleData.color}
                </span>

                <div className="w-0.5 h-0.5 bg-gray-500 rounded-full flex-shrink-0" />

                <span className="font-urbanist font-normal text-gray-500 text-xs whitespace-nowrap">
                  {vehicleData.year}
                </span>

                <div className="w-0.5 h-0.5 bg-gray-500 rounded-full flex-shrink-0" />

                <span className="font-urbanist font-normal text-gray-500 text-xs whitespace-nowrap truncate">
                  {vehicleData.location}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-urbanist font-semibold text-black text-base whitespace-nowrap leading-none">
                  {vehicleData.price}
                </span>
              </div>

              <Badge className="bg-blue-light800 text-basewhite px-1 py-0 rounded hover:bg-blue-light800/90 bg-rose-600 flex-shrink-0">
                <span className="font-urbanist font-medium text-xs">
                  {vehicleData.discount}
                </span>
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="h-px w-full bg-gray-200" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-gray-900 font-normal text-[10px] px-1 rounded border-none bg-rose-50 py-[2px]">
              <span className="font-urbanist font-medium text-[12px]">{vehicleData.badges[1].charAt(0)}</span>
              <span className="font-roboto font-medium text-[12px]">ª</span>
              <span className="font-urbanist font-medium text-[12px]"> Praça</span>
            </Badge>

            <Badge variant="outline" className="text-gray-900 font-medium text-[10px] px-1 py-0.5 rounded border-none bg-rose-50">
              <span className="font-urbanist text-[12px]">{vehicleData.badges[0]}</span>
            </Badge>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-500" />
            <span className="font-urbanist text-gray-500 text-[12px] px-0.5 py-[2px] font-medium">
              {vehicleData.date}
            </span>
            <Button variant="ghost" size="icon" className="h-5 w-6 hover:bg-gray-100">
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>;
};