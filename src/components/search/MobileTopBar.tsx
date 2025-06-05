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
        
      </div>

      {/* Modal de Filtros */}
      <MobileFiltersModal isOpen={showFiltersModal} onClose={() => setShowFiltersModal(false)} itemType={itemType} />
    </>;
};