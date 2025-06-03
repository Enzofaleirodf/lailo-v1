
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
        {/* Botões Filtros e Mais recentes unidos */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onShowFilters}
            className="text-sm font-medium rounded-none border-0 border-r border-gray-300 px-4"
          >
            Filtros
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onShowSort}
            className="text-sm font-medium rounded-none border-0 px-4"
          >
            Mais recentes
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
