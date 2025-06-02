import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { useContainerWidth } from '@/hooks/useContainerWidth';

interface FilterChipProps {
  label: string;
  selectedItems?: string[];
  selectedValue?: string; // Para seleção única (formato)
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
}

type TagSize = 'large' | 'normal' | 'small';

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
  className
}: FilterChipProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagSize, setTagSize] = useState<TagSize>('normal');
  const containerRef = useRef<HTMLDivElement>(null);
  const { containerRef: tagsContainerRef, width: containerWidth } = useContainerWidth();

  const handleToggle = () => {
    if (!isDisabled) {
      setIsExpanded(!isExpanded);
    }
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

  // Calcular tamanho das tags dinamicamente
  useEffect(() => {
    if (!hasMultiple || selectedItems.length === 0) {
      setTagSize('normal');
      return;
    }

    const itemCount = selectedItems.length;
    
    if (itemCount === 1) {
      setTagSize('large');
      return;
    }

    // Estimar largura necessária para tags normais
    const averageTagWidth = 60; // largura média estimada para tag normal
    const gapWidth = 4; // gap entre tags
    const totalEstimatedWidth = (averageTagWidth * itemCount) + (gapWidth * (itemCount - 1));
    const availableWidth = containerWidth - 32; // descontar padding

    if (totalEstimatedWidth > availableWidth && itemCount > 2) {
      setTagSize('small');
    } else {
      setTagSize('normal');
    }
  }, [selectedItems, containerWidth, hasMultiple]);

  const getTagClasses = (size: TagSize) => {
    const baseClasses = "inline-flex items-center gap-1 bg-blue-100 text-blue-800 rounded font-medium whitespace-nowrap transition-all duration-200";
    
    switch (size) {
      case 'large':
        return `${baseClasses} px-3 py-1.5 text-sm mr-1`;
      case 'small':
        return `${baseClasses} px-0.5 py-0.5 text-[9px] max-w-[45px] mr-0.5`;
      default:
        return `${baseClasses} px-1 py-0.5 text-[10px] mr-0.5`;
    }
  };

  const displayText = () => {
    if (selectedValue) {
      // Seleção única - mostrar valor selecionado
      return selectedValue;
    }
    if (hasMultiple && selectedItems.length > 0) {
      // Múltipla seleção - mostrar tags no placeholder
      return (
        <div ref={tagsContainerRef} className="flex items-center gap-0.5 flex-wrap">
          {selectedItems.map(item => (
            <div key={item} className={getTagClasses(tagSize)}>
              <span className={tagSize === 'small' ? 'truncate' : ''}>{item}</span>
              {onRemoveItem && (
                <button 
                  onClick={e => {
                    e.stopPropagation();
                    onRemoveItem(item);
                  }} 
                  className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <X className={tagSize === 'large' ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'} />
                </button>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Padrão - mostrar apenas label
    return label;
  };

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({
        close: handleClose
      });
    }
    return children;
  };

  const hasSelectedItems = hasMultiple && selectedItems.length > 0;

  return (
    <div className="relative" ref={containerRef}>
      <button 
        onClick={handleToggle} 
        disabled={isDisabled} 
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border justify-between min-h-[48px]",
          isDisabled 
            ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" 
            : isActive 
              ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm" 
              : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm",
          className
        )}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {displayText()}
        </div>
        
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200 flex-shrink-0",
          isExpanded && "rotate-180",
          isDisabled && "text-gray-400"
        )} />
      </button>

      <AnimatePresence>
        {isExpanded && children && !isDisabled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-lg w-[320px] overflow-hidden"
          >
            <div className="p-4">
              {renderChildren()}
            </div>
            
            {/* Footer apenas para múltipla seleção */}
            {hasMultiple && (
              <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 border-t border-gray-100">
                {/* Botão à esquerda */}
                {hasSelectedItems ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => { onClear?.(); }} 
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Limpar
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => { onSelectAll?.(); }} 
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Marcar todos
                  </Button>
                )}
                
                {/* Botão à direita */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
