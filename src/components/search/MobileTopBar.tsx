
import React from 'react';
import { Button } from "../ui/button";
import { FlipHorizontal, FlipVertical } from "lucide-react";

interface MobileTopBarProps {
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
  onShowFilters: () => void;
  onShowSort: () => void;
}

export const MobileTopBar = ({
  isVertical,
  onToggleLayout,
  onShowFilters,
  onShowSort
}: MobileTopBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 md:hidden">
      <div className="flex items-center justify-center px-4 py-3 h-14">
        {/* Todos os botões unidos em um só componente */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-md">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onShowFilters}
            className="text-sm font-medium px-4 flex-1"
            style={{ borderRadius: '8px 0 0 8px' }}
          >
            Filtros
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onShowSort}
            className="text-sm font-medium border-0 border-l border-r border-gray-300 px-4 flex-1"
            style={{ borderRadius: '0' }}
          >
            Ordenar
          </Button>

          {/* Botões de layout */}
          <Button
            className="border-0 border-r border-gray-300 h-9 w-10"
            variant={!isVertical ? "default" : "ghost"}
            size="icon"
            onClick={() => onToggleLayout(false)}
            style={{ borderRadius: '0' }}
          >
            <FlipHorizontal size={16} strokeWidth={2} />
          </Button>
          
          <Button
            className="border-0 h-9 w-10"
            variant={isVertical ? "default" : "ghost"}
            size="icon"
            onClick={() => onToggleLayout(true)}
            style={{ borderRadius: '0 8px 8px 0' }}
          >
            <FlipVertical size={16} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </div>
  );
};
