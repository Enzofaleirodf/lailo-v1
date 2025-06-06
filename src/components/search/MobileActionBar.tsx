
import React from 'react';
import { ArrowDownUp, SlidersHorizontal, Rows, LayoutGrid } from 'lucide-react';
import { ItemTypeToggle } from './ItemTypeToggle';
import { Button } from '../ui/button';
import { ItemType } from '../../types/search';

interface MobileActionBarProps {
  currentType: ItemType;
  onTypeChange: (type: ItemType) => void;
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
  onShowSort: () => void;
  onShowFilters: () => void;
}

export const MobileActionBar = ({
  currentType,
  onTypeChange,
  isVertical,
  onToggleLayout,
  onShowSort,
  onShowFilters
}: MobileActionBarProps) => {
  return (
    <div className="md:hidden sticky top-[56px] z-30 px-3 py-2 bg-white">
      <div className="bg-white border border-neutral-200 rounded-xl shadow-sm px-3 py-2 flex items-center justify-between gap-2">
        {/* Segmentado Imóveis/Veículos - compacto para mobile */}
        <div className="flex-1 max-w-[140px]">
          <ItemTypeToggle
            currentType={currentType}
            onTypeChange={onTypeChange}
          />
        </div>

        {/* Botões de ação - apenas ícones */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onShowSort}
            className="h-8 w-8 hover:bg-gray-100"
          >
            <ArrowDownUp className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onShowFilters}
            className="h-8 w-8 hover:bg-gray-100"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleLayout(!isVertical)}
            className="h-8 w-8 hover:bg-gray-100"
          >
            {isVertical ? <LayoutGrid className="h-4 w-4" /> : <Rows className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
