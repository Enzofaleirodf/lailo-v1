
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownUp, SlidersHorizontal, LayoutGrid, Rows } from 'lucide-react';
import { ItemTypeToggle } from './ItemTypeToggle';
import { ItemType } from '../../types/search';
import { Button } from '../ui/button';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';

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
  const isVisible = useScrollVisibility({ threshold: 80 });

  const handleTypeChange = (type: ItemType) => {
    onTypeChange(type);
    const newPath = type === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    navigate(newPath);
  };

  return (
    <div 
      className={`
        md:hidden fixed top-[56px] left-0 right-0 w-full z-40 
        bg-white border border-neutral-200 rounded-xl shadow-sm 
        px-3 py-2 mx-3
        transition-all duration-200 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-8 pointer-events-none'
        }
      `}
    >
      <div className="flex justify-between items-center">
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
            className="h-10 w-10 hover:opacity-70"
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
            className="h-10 w-10 hover:opacity-70"
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
            className="h-10 w-10 hover:opacity-70"
          >
            {isVertical ? <LayoutGrid className="h-5 w-5" /> : <Rows className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
