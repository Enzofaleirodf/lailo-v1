
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { designTokens } from '../../styles/design-tokens';

interface FilterPopoverProps {
  label: string;
  selectedItems?: string[];
  selectedValue?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  hasMultiple?: boolean;
  children?: React.ReactNode | (({
    close
  }: {
    close: () => void;
  }) => React.ReactNode);
  onClear?: () => void;
  onRemoveItem?: (item: string) => void;
  onSelectAll?: () => void;
  className?: string;
  'aria-label'?: string;
  id?: string;
}

export const FilterPopover = ({
  label,
  selectedItems = [],
  selectedValue,
  isActive = false,
  isDisabled = false,
  hasMultiple = false,
  children,
  onClear,
  onRemoveItem,
  onSelectAll,
  className,
  'aria-label': ariaLabel,
  id
}: FilterPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const displayText = () => {
    if (selectedValue) {
      return selectedValue;
    }
    if (hasMultiple && selectedItems.length > 0) {
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
    }

    return label;
  };

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ close: handleClose });
    }
    return children;
  };

  const hasSelectedItems = hasMultiple && selectedItems.length > 0;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={isDisabled}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={ariaLabel || `Filtro ${label}`}
          id={id}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border justify-between min-h-[48px] w-full",
            isDisabled 
              ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" 
              : isActive 
                ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm ring-1 ring-blue-200/50" 
                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50",
            className
          )}
          style={{
            borderRadius: designTokens.borderRadius.xl,
            padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`,
          }}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {displayText()}
          </div>
          
          <ChevronDown 
            className={cn(
              "w-4 h-4 transition-transform duration-200 flex-shrink-0",
              isOpen && "rotate-180",
              isDisabled && "text-gray-400"
            )} 
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent 
        className="w-[320px] p-0 z-[9999]" 
        align="start"
        style={{
          borderRadius: designTokens.borderRadius.xl,
          boxShadow: designTokens.shadows.lg,
        }}
      >
        <div className="p-4" style={{ padding: designTokens.spacing.lg }}>
          {renderChildren()}
        </div>
        
        {/* Footer para múltipla seleção */}
        {hasMultiple && (
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
                Limpar ({selectedItems.length})
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
              onClick={handleClose} 
              className="text-gray-600 hover:text-gray-800 border-gray-300"
            >
              Aplicar
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
