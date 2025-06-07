
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownUp, SlidersHorizontal, LayoutGrid, Rows } from 'lucide-react';
import { ItemTypeToggle } from './ItemTypeToggle';
import { ItemType } from '../../types/search';
import { Button } from '../ui/button';

interface MobileActionBarProps {
  currentType: ItemType;
  onTypeChange: (type: ItemType) => void;
  onShowSort: () => void;
  onShowFilters: () => void;
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
}

export const MobileActionBar = ({
  currentType,
  onTypeChange,
  onShowSort,
  onShowFilters,
  isVertical,
  onToggleLayout
}: MobileActionBarProps) => {
  const navigate = useNavigate();

  const handleTypeChange = (type: ItemType) => {
    onTypeChange(type);
    const newPath = type === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    navigate(newPath);
  };

  return (
    <div className="md:hidden sticky top-0 z-30 bg-white border border-neutral-300 rounded-lg shadow-sm px-3 py-1 mt-3 mb-2">
      <div className="flex justify-between items-center h-12">
        {/* Segmented Button - Imóveis/Veículos */}
        <div className="flex-1">
          <ItemTypeToggle 
            currentType={currentType} 
            onTypeChange={handleTypeChange}
          />
        </div>

        {/* Botão Ordenar */}
        <div className="flex-1 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onShowSort}
            className="h-8 w-8 hover:opacity-70"
          >
            <ArrowDownUp className="h-5 w-5" />
          </Button>
        </div>

        {/* Botão Filtrar */}
        <div className="flex-1 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onShowFilters}
            className="h-8 w-8 hover:opacity-70"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>

        {/* Botão Alternar Layout */}
        <div className="flex-1 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleLayout(!isVertical)}
            className="h-8 w-8 hover:opacity-70"
          >
            {isVertical ? <LayoutGrid className="h-5 w-5" /> : <Rows className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
