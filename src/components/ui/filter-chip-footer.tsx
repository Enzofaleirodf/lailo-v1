
import React from 'react';
import { Button } from './button';
import { designTokens } from '../../styles/design-tokens';

interface FilterChipFooterProps {
  hasMultiple: boolean;
  hasSelectedItems: boolean;
  selectedItemsCount: number;
  onClear?: () => void;
  onSelectAll?: () => void;
  onClose: () => void;
}

export const FilterChipFooter = ({
  hasMultiple,
  hasSelectedItems,
  selectedItemsCount,
  onClear,
  onSelectAll,
  onClose
}: FilterChipFooterProps) => {
  if (!hasMultiple) return null;

  return (
    <div 
      className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 border-t border-gray-100"
      style={{ padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}` }}
    >
      {hasSelectedItems ? (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => {
            onClear?.();
          }} 
          className="text-gray-600 hover:text-gray-800"
        >
          Limpar ({selectedItemsCount})
        </Button>
      ) : (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => {
            onSelectAll?.();
          }} 
          className="text-gray-600 hover:text-gray-800"
        >
          Marcar todos
        </Button>
      )}
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onClose} 
        className="text-gray-600 hover:text-gray-800 border-gray-300"
      >
        Aplicar
      </Button>
    </div>
  );
};
