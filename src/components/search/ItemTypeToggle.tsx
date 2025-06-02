
import React from 'react';
import { Button } from '@/components/ui/button';
import { ItemType } from '../../types/search';

interface ItemTypeToggleProps {
  currentType: ItemType;
  onTypeChange: (type: ItemType) => void;
}

export const ItemTypeToggle = ({ currentType, onTypeChange }: ItemTypeToggleProps) => {
  return (
    <div className="flex items-center bg-gray-100 p-1 rounded-lg">
      <Button
        variant={currentType === 'property' ? 'default' : 'ghost'}
        size="sm"
        className="px-4 py-2 text-sm font-medium rounded-md"
        onClick={() => onTypeChange('property')}
      >
        Imóveis
      </Button>
      <Button
        variant={currentType === 'vehicle' ? 'default' : 'ghost'}
        size="sm"
        className="px-4 py-2 text-sm font-medium rounded-md"
        onClick={() => onTypeChange('vehicle')}
      >
        Veículos
      </Button>
    </div>
  );
};
