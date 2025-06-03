
import React from 'react';
import { Home, Car } from 'lucide-react';
import { SimpleToggle } from '../ui/simple-toggle';
import { ItemType } from '../../types/search';

interface ItemTypeToggleProps {
  currentType: ItemType;
  onTypeChange: (type: ItemType) => void;
}

export const ItemTypeToggle = ({ currentType, onTypeChange }: ItemTypeToggleProps) => {
  const options = [
    {
      value: 'property' as const,
      label: 'Imóveis',
      icon: <Home className="w-4 h-4" />
    },
    {
      value: 'vehicle' as const,
      label: 'Veículos',
      icon: <Car className="w-4 h-4" />
    }
  ];

  return (
    <SimpleToggle
      options={options}
      value={currentType}
      onValueChange={onTypeChange as (value: string) => void}
    />
  );
};
