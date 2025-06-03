
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
        <Button 
          variant="outline" 
          size="sm"
          onClick={onShowFilters}
          className="text-sm font-medium"
        >
          Filtrar
        </Button>
        
        <LayoutToggle 
          isVertical={isVertical} 
          onToggle={onToggleLayout} 
        />
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={onShowSort}
          className="text-sm font-medium"
        >
          Ordenar
        </Button>
      </div>
    </div>
  );
};
