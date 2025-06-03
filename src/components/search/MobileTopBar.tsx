
import React from 'react';
import { Button } from "../ui/button";
import { LayoutToggle } from "../LayoutToggle";

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
      <div className="flex items-center justify-between px-4 py-3 h-14">
        {/* Botões Filtrar e Ordenar à esquerda - sem gaps */}
        <div className="flex items-center -space-x-px">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onShowFilters}
            className="text-sm font-medium rounded-none border-r-0"
          >
            Filtrar
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={onShowSort}
            className="text-sm font-medium rounded-none"
          >
            Ordenar
          </Button>
        </div>
        
        {/* Botão de alternar layout à direita */}
        <LayoutToggle 
          isVertical={isVertical} 
          onToggle={onToggleLayout} 
        />
      </div>
    </div>
  );
};
