
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FilterChipButton } from './filter-chip-button';
import { FilterChipContent } from './filter-chip-content';
import { FilterChipBadges } from './filter-chip-badges';

interface FilterChipProps {
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

export const FilterChip = ({
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
}: FilterChipProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    if (!isDisabled) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    triggerRef.current?.focus();
  };

  // Enhanced keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const displayText = () => {
    if (selectedValue) {
      return selectedValue;
    }
    if (hasMultiple && selectedItems.length > 0) {
      return (
        <FilterChipBadges 
          selectedItems={selectedItems}
          onRemoveItem={onRemoveItem}
        />
      );
    }

    return label;
  };

  const hasSelectedItems = hasMultiple && selectedItems.length > 0;

  return (
    <div className="relative" ref={containerRef}>
      <FilterChipButton
        ref={triggerRef}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        isDisabled={isDisabled}
        isExpanded={isExpanded}
        isActive={isActive}
        ariaLabel={ariaLabel || `Filtro ${label}`}
        id={id}
        className={className}
      >
        {displayText()}
      </FilterChipButton>

      <AnimatePresence>
        {isExpanded && children && !isDisabled && (
          <FilterChipContent
            onClose={handleClose}
            hasMultiple={hasMultiple}
            hasSelectedItems={hasSelectedItems}
            selectedItemsCount={selectedItems.length}
            onClear={onClear}
            onSelectAll={onSelectAll}
            id={id}
          >
            {children}
          </FilterChipContent>
        )}
      </AnimatePresence>
    </div>
  );
};
