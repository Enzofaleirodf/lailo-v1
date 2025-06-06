
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, ArrowDownUp, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MobileFiltersModal } from './MobileFiltersModal';
import { ItemType } from '../../types/search';

interface ActionButtonsBarProps {
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
  onShowSort: () => void;
  itemType: ItemType;
  isHeaderVisible: boolean;
}

export const ActionButtonsBar = ({
  isVertical,
  onToggleLayout,
  onShowSort,
  itemType,
  isHeaderVisible
}: ActionButtonsBarProps) => {
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const handleShowFilters = () => {
    setShowFiltersModal(true);
  };

  const topPosition = isHeaderVisible ? 'top-[126px]' : 'top-0';

  return (
    <>
      <div 
        className={cn(
          "fixed left-0 right-0 z-50 w-full px-4 transition-all duration-300 ease-in-out md:hidden",
          topPosition
        )}
      >
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            <Button
              variant="ghost"
              className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
              onClick={handleShowFilters}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
              onClick={onShowSort}
            >
              <ArrowDownUp className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
              onClick={() => onToggleLayout(!isVertical)}
            >
              {isVertical ? (
                <List className="h-5 w-5" />
              ) : (
                <LayoutGrid className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <MobileFiltersModal 
        isOpen={showFiltersModal} 
        onClose={() => setShowFiltersModal(false)} 
        itemType={itemType} 
      />
    </>
  );
};
