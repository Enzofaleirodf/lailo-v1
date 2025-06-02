
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterChipProps {
  label: string;
  value?: string | string[];
  isActive?: boolean;
  hasMultiple?: boolean;
  children?: React.ReactNode;
  onClear?: () => void;
  className?: string;
}

export const FilterChip = ({ 
  label, 
  value, 
  isActive = false,
  hasMultiple = false,
  children,
  onClear,
  className 
}: FilterChipProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDisplayValue = () => {
    if (!value) return null;
    if (Array.isArray(value)) {
      return value.length > 0 ? `${value.length} selecionados` : null;
    }
    return value;
  };

  const displayValue = getDisplayValue();

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border",
          isActive
            ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm",
          className
        )}
      >
        <span>{label}</span>
        {displayValue && (
          <span className={cn(
            "px-2 py-0.5 rounded-md text-xs font-semibold",
            isActive ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"
          )}>
            {displayValue}
          </span>
        )}
        {isActive && onClear ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="ml-1 p-0.5 rounded-full hover:bg-blue-100 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        ) : (
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isExpanded && "rotate-180"
          )} />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && children && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[200px] p-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
