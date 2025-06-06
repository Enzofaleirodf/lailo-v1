
import React, { useState } from 'react';
import { Home, Car, SlidersHorizontal, ArrowDownUp, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ItemType } from '../../types/search';
import { MobileFiltersModal } from './MobileFiltersModal';

interface SearchStickyBarProps {
  currentType: ItemType;
  onTypeChange: (type: ItemType) => void;
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
  onShowSort: () => void;
  isHeaderVisible: boolean;
}

export const SearchStickyBar = ({
  currentType,
  onTypeChange,
  isVertical,
  onToggleLayout,
  onShowSort,
  isHeaderVisible
}: SearchStickyBarProps) => {
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const handleTypeChange = (type: ItemType) => {
    const newPath = type === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    window.location.href = newPath;
  };

  const handleShowFilters = () => {
    setShowFiltersModal(true);
  };

  // Calcular posição baseada na visibilidade do header
  const topPosition = isHeaderVisible ? 'top-14' : 'top-0';

  return (
    <>
      <div 
        className={cn(
          "fixed left-0 right-0 z-40 w-full px-4 transition-all duration-300 ease-in-out md:hidden",
          topPosition
        )}
      >
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
          {/* Primeira linha - Alternância Imóveis/Veículos */}
          <div 
            className={cn(
              "grid grid-cols-2 transition-transform duration-300 ease-in-out",
              !isHeaderVisible && "-translate-y-full opacity-0"
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleTypeChange('property')}
              className={cn(
                'h-10 w-full rounded-none text-gray-700',
                currentType === 'property' && 'bg-blue-600 text-white hover:bg-blue-700'
              )}
            >
              <Home className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleTypeChange('vehicle')}
              className={cn(
                'h-10 w-full rounded-none text-gray-700',
                currentType === 'vehicle' && 'bg-blue-600 text-white hover:bg-blue-700'
              )}
            >
              <Car className="h-5 w-5" />
            </Button>
          </div>

          {/* Segunda linha - Ações (sempre visível) */}
          <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-200">
            <Button
              variant="ghost"
              className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
              onClick={handleShowFilters}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
              onClick={onShowSort}
            >
              <ArrowDownUp className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
              onClick={() => onToggleLayout(!isVertical)}
            >
              {isVertical ? (
                <List className="h-5 w-5" />
              ) : (
                <LayoutGrid className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <MobileFiltersModal 
        isOpen={showFiltersModal} 
        onClose={() => setShowFiltersModal(false)} 
        itemType={currentType} 
      />
    </>
  );
};
