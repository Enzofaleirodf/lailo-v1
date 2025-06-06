
import React from 'react';
import { Home, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ItemType } from '../../types/search';

interface ItemTypeToggleBarProps {
  currentType: ItemType;
  onTypeChange: (type: ItemType) => void;
  isVisible: boolean;
}

export const ItemTypeToggleBar = ({ 
  currentType, 
  onTypeChange, 
  isVisible 
}: ItemTypeToggleBarProps) => {
  const handleTypeChange = (type: ItemType) => {
    const newPath = type === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    window.location.href = newPath;
  };

  return (
    <div 
      className={cn(
        "fixed top-14 left-0 right-0 z-40 w-full px-4 transition-transform duration-300 ease-in-out md:hidden",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        <div className="grid grid-cols-2">
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
      </div>
    </div>
  );
};
