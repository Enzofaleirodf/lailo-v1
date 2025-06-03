
import React from 'react';
import { motion } from 'framer-motion';
import { FilterChipFooter } from './filter-chip-footer';
import { designTokens } from '../../styles/design-tokens';

interface FilterChipContentProps {
  children: React.ReactNode | (({ close }: { close: () => void }) => React.ReactNode);
  onClose: () => void;
  hasMultiple: boolean;
  hasSelectedItems: boolean;
  selectedItemsCount: number;
  onClear?: () => void;
  onSelectAll?: () => void;
  id?: string;
}

export const FilterChipContent = ({
  children,
  onClose,
  hasMultiple,
  hasSelectedItems,
  selectedItemsCount,
  onClear,
  onSelectAll,
  id
}: FilterChipContentProps) => {
  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ close: onClose });
    }
    return children;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 z-[9999] bg-white border border-gray-200 rounded-2xl shadow-lg w-[320px] overflow-hidden"
      style={{
        borderRadius: '1.5rem',
        boxShadow: designTokens.shadows.lg,
        marginTop: designTokens.spacing.sm,
      }}
      role="dialog"
      aria-labelledby={id}
    >
      <div className="p-4" style={{ padding: designTokens.spacing.lg }}>
        {renderChildren()}
      </div>
      
      <FilterChipFooter
        hasMultiple={hasMultiple}
        hasSelectedItems={hasSelectedItems}
        selectedItemsCount={selectedItemsCount}
        onClear={onClear}
        onSelectAll={onSelectAll}
        onClose={onClose}
      />
    </motion.div>
  );
};
