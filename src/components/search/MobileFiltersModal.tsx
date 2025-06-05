
import React from 'react';
import { FilterModal } from '../filters/FilterModal';
import { ItemType } from '../../types/search';

interface MobileFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemType: ItemType;
}

export const MobileFiltersModal = ({
  isOpen,
  onClose,
  itemType
}: MobileFiltersModalProps) => {
  const handleClearFilters = () => {
    console.log('MobileFiltersModal - Limpando filtros');
    // Aqui você pode implementar a lógica específica de limpeza para busca
  };

  const handleApplyFilters = () => {
    console.log("Aplicar filtros");
  };

  return (
    <FilterModal
      isOpen={isOpen}
      onClose={onClose}
      itemType={itemType}
      onApplyFilters={handleApplyFilters}
      onClearFilters={handleClearFilters}
    />
  );
};
