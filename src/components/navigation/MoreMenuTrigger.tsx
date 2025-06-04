
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { PopoverTrigger } from "@/components/ui/popover";

interface MoreMenuTriggerProps {
  isMoreMenuActive: boolean;
}

export const MoreMenuTrigger = ({ isMoreMenuActive }: MoreMenuTriggerProps) => {
  return (
    <PopoverTrigger asChild>
      <button
        className={`
          flex flex-col items-center justify-center py-2 transition-colors
          w-full h-full
          ${isMoreMenuActive
            ? 'text-blue-600' 
            : 'text-gray-500 hover:text-gray-700'
          }
        `}
      >
        <MoreHorizontal className="w-5 h-5 mb-1" />
        <span className="text-xs font-medium text-center leading-tight">Mais</span>
      </button>
    </PopoverTrigger>
  );
};
