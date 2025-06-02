
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';

interface FilterChipProps {
  label: string;
  selectedItems?: string[];
  isActive?: boolean;
  hasMultiple?: boolean;
  children?: React.ReactNode;
  onClear?: () => void;
  onRemoveItem?: (item: string) => void;
  className?: string;
}

export const FilterChip = ({ 
  label, 
  selectedItems = [],
  isActive = false,
  hasMultiple = false,
  children,
  onClear,
  onRemoveItem,
  className 
}: FilterChipProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
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

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={handleToggle}
        className={cn(
          "flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 border w-[280px] justify-between",
          isActive
            ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm",
          className
        )}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="whitespace-nowrap">{label}</span>
          {isActive && (
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          )}
        </div>
        
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200 flex-shrink-0",
          isExpanded && "rotate-180"
        )} />
      </button>

      {/* Selected items as tags below the button */}
      {selectedItems.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {selectedItems.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium"
            >
              <span>{item}</span>
              {onRemoveItem && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveItem(item);
                  }}
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {isExpanded && children && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-lg w-[320px] overflow-hidden"
          >
            <div className="p-4">
              {children}
            </div>
            
            {/* Footer apenas para múltipla seleção */}
            {hasMultiple && (
              <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleClose}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Fechar
                </Button>
                {onClear && (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onClear();
                      handleClose();
                    }}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Limpar
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
