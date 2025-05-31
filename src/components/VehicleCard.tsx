import { Calendar, ArrowUpRight } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
export const VehicleCard = (): JSX.Element => {
  return <Card className="flex flex-col p-3 bg-white rounded-xl border border-gray-200 shadow-shadows-shadow-xs max-w-sm mx-auto">
      <CardContent className="p-0 space-y-2">
        <div className="flex gap-2.5 items-stretch">
          <div style={{
          backgroundImage: "url(/lovable-uploads/9b0b7577-0ba8-4200-abdf-15cdf93a0ba4.png)"
        }} className="w-[88px] rounded bg-cover bg-center flex-shrink-0" />

          <div className="flex flex-col gap-3 flex-1">
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <h3 className="font-urbanist font-semibold text-blue-light800 text-sm text-rose-600">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-urbanist font-semibold text-black text-base whitespace-nowrap leading-none">
                  R$ 78.000
                </span>
              </div>

              <Badge className="bg-blue-light800 text-basewhite px-1 py-0 rounded hover:bg-blue-light800/90 bg-rose-600">
                <span className="font-urbanist font-medium text-xs">
                  50% OFF
                </span>
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="h-px w-full" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-gray-900 font-medium text-[10px] px-1 py-0.5 rounded border-none bg-rose-50">
              <span className="font-urbanist text-[12px]">Extrajudicial</span>
            </Badge>

            <Badge variant="outline" className="text-gray-900 font-normal text-[10px] px-1 rounded border-none bg-rose-50 py-[2px]">
              <span className="font-urbanist font-medium text-[12px]">2</span>
              <span className="font-roboto font-medium text-[12px]">ª</span>
              <span className="font-urbanist font-medium text-[12px]"> Praça</span>
            </Badge>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-500" />
            <span className="font-urbanist text-gray-500 text-[12px] px-0.5 py-[2px] font-medium">
              15/05 às 10:00
            </span>
            <Button variant="ghost" size="icon" className="h-5 w-6 hover:bg-gray-100">
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>;
};