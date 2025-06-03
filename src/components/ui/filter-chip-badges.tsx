
import React from 'react';
import { X } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';

interface FilterChipBadgesProps {
  selectedItems: string[];
  onRemoveItem?: (item: string) => void;
}

export const FilterChipBadges = ({ selectedItems, onRemoveItem }: FilterChipBadgesProps) => {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {selectedItems.slice(0, 2).map(item => (
        <div 
          key={item} 
          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium whitespace-nowrap"
          style={{ fontSize: designTokens.typography.sizes.xs }}
        >
          <span className="max-w-[60px] truncate">{item}</span>
          {onRemoveItem && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveItem(item);
              }}
              className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
              aria-label={`Remover ${item}`}
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      ))}
      {selectedItems.length > 2 && (
        <span className="text-blue-700 font-medium text-xs">
          +{selectedItems.length - 2} mais
        </span>
      )}
    </div>
  );
};
