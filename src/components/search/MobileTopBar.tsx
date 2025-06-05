import React, { useState } from 'react';
import { Button } from "../ui/button";
import { FlipHorizontal, FlipVertical } from "lucide-react";
import { MobileFiltersModal } from './MobileFiltersModal';
import { ItemType } from '../../types/search';
interface MobileTopBarProps {
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
  onShowFilters: () => void;
  onShowSort: () => void;
  itemType: ItemType;
}
export const MobileTopBar = ({
  isVertical,
  onToggleLayout,
  onShowFilters,
  onShowSort,
  itemType
}: MobileTopBarProps) => {
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const handleShowFilters = () => {
    setShowFiltersModal(true);
  };
  return <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white md:hidden">
        <div className="flex items-center justify-center px-4 h-14 my-[24px] py-[12px]">
          {/* Botões unidos sem o toggle de tipo */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-md shadow-md">
            <Button variant="ghost" size="sm" onClick={handleShowFilters} className="text-sm font-medium px-4 flex-1" style={{
            borderRadius: '8px 0 0 8px'
          }}>
              Filtros
            </Button>
            
            <Button variant="ghost" size="sm" onClick={onShowSort} className="text-sm font-medium border-0 border-l border-r border-gray-300 px-4 flex-1" style={{
            borderRadius: '0'
          }}>
              Ordenar
            </Button>

            {/* Botões de layout */}
            <Button className="border-0 border-r border-gray-300 h-9 w-10" variant={!isVertical ? "default" : "ghost"} size="icon" onClick={() => onToggleLayout(false)} style={{
            borderRadius: '0'
          }}>
              <FlipHorizontal size={16} strokeWidth={2} />
            </Button>
            
            <Button className="border-0 h-9 w-10" variant={isVertical ? "default" : "ghost"} size="icon" onClick={() => onToggleLayout(true)} style={{
            borderRadius: '0 8px 8px 0'
          }}>
              <FlipVertical size={16} strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de Filtros */}
      <MobileFiltersModal isOpen={showFiltersModal} onClose={() => setShowFiltersModal(false)} itemType={itemType} />
    </>;
};