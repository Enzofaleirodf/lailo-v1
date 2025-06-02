
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';

interface FilterChipProps {
  label: string;
  value?: string | string[];
  isActive?: boolean;
  hasMultiple?: boolean;
  autoClose?: boolean;
  children?: React.ReactNode;
  onClear?: () => void;
  onApply?: () => void;
  className?: string;
}

export const FilterChip = ({ 
  label, 
  value, 
  isActive = false,
  hasMultiple = false,
  autoClose = false,
  children,
  onClear,
  onApply,
  className 
}: FilterChipProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleApply = () => {
    if (onApply) onApply();
    setIsExpanded(false);
  };

  // Auto-close apenas para single selects e com delay maior
  React.useEffect(() => {
    if (autoClose && !hasMultiple && value && isExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 800); // Aumentado de 150ms para 800ms
      return () => clearTimeout(timer);
    }
  }, [value, autoClose, hasMultiple, isExpanded]);

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={cn(
          "flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 border justify-between",
          // Largura fixa para evitar movimento
          "w-[180px]",
          isActive
            ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <span>{label}</span>
          {/* Indicador simples para filtros ativos */}
          {isActive && (
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          )}
        </div>
        
        <div className="flex items-center gap-1">
          {isActive && onClear && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="p-1 rounded-full hover:bg-blue-100 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isExpanded && "rotate-180"
          )} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && children && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-lg min-w-[320px] overflow-hidden"
          >
            <div className="p-4">
              {children}
            </div>
            
            {/* Footer com botões para filtros múltiplos */}
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
                <Button 
                  size="sm"
                  onClick={handleApply}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Aplicar
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
