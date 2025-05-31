import { Calendar } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
export const VehicleCard = (): JSX.Element => {
  return <Card className="flex flex-col p-3 bg-white rounded-xl border border-gray-200 shadow-shadows-shadow-xs max-w-sm mx-auto">
      <CardContent className="p-0 space-y-2">
        <div className="flex gap-2.5 items-stretch">
          <div className="w-[88px] h-16 rounded bg-cover bg-center flex-shrink-0" style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1549399686-8b3b4cadb0c6?w=200&h=120&fit=crop&crop=center)"
        }} />

          <div className="flex flex-col gap-3 flex-1">
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <h3 className="font-urbanist font-semibold text-blue-light800 text-sm">
                  Volkswagen T-Cross
                </h3>
              </div>

              <div className="flex items-center gap-[11px]">
                <span className="font-urbanist font-normal text-gray-500 text-xs whitespace-nowrap">
                  Preto
                </span>

                <div className="w-0.5 h-0.5 bg-gray-500 rounded-full" />

                <span className="font-urbanist font-normal text-gray-500 text-xs whitespace-nowrap">
                  2025
                </span>

                <div className="w-0.5 h-0.5 bg-gray-500 rounded-full" />

                <span className="font-urbanist font-normal text-gray-500 text-xs whitespace-nowrap">
                  Brasília - DF
                </span>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex items-center">
                <span className="font-urbanist font-semibold text-black text-base whitespace-nowrap">
                  R$ 78.000
                </span>
              </div>

              <Badge className="bg-blue-light800 text-basewhite px-1 py-0.5 rounded hover:bg-blue-light800/90">
                <span className="font-urbanist font-medium text-xs">
                  50% OFF
                </span>
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="h-px w-full" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-yellow-100 text-gray-900 font-medium text-[10px] px-1 py-0.5 rounded border-none">
              Extrajudicial
            </Badge>

            <Badge variant="outline" className="bg-yellow-100 text-gray-900 font-normal text-[10px] px-1 py-0.5 rounded border-none">
              <span className="font-medium">2</span>
              <span className="font-roboto font-medium">ª</span>
              <span className="font-medium"> Praça</span>
            </Badge>
          </div>

          <div className="flex items-center">
            <Calendar className="w-3 h-3 text-gray-500" />
            <span className="font-urbanist font-medium text-gray-500 text-[10px] px-0.5 py-1">
              15/05 às 10:00
            </span>
          </div>
        </div>
      </CardContent>
    </Card>;
};