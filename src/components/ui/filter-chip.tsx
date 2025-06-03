
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { designTokens } from '../../styles/design-tokens';

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
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  // Inicializar portal root
  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  // Calcular posição do dropdown
  const calculatePosition = () => {
    if (!triggerRef.current) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    let top = rect.bottom + 8;
    let left = rect.left;
    const width = Math.max(320, rect.width); // Mínimo 320px ou largura do trigger
    
    // Se sair pela direita, alinhar à direita
    if (left + width > viewportWidth) {
      left = rect.right - width;
    }
    
    // Se sair por baixo, posicionar acima
    if (top + 400 > viewportHeight) {
      top = rect.top - 400 - 8;
    }
    
    // Garantir que não saia da tela
    left = Math.max(8, Math.min(left, viewportWidth - width - 8));
    top = Math.max(8, top);
    
    setPosition({ top, left, width });
  };

  // Recalcular posição quando expandir
  useEffect(() => {
    if (isExpanded) {
      // Usar setTimeout para garantir que o DOM foi atualizado
      const timer = setTimeout(() => {
        calculatePosition();
      }, 0);
      
      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isExpanded]);

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

  const dropdownContent = isExpanded && children && !isDisabled && portalRoot ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-[9999]"
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
          maxHeight: 400,
          borderRadius: designTokens.borderRadius.xl,
          boxShadow: designTokens.shadows.lg,
        }}
        role="dialog"
        aria-labelledby={id}
      >
        <div className="p-4 overflow-y-auto" style={{ 
          padding: designTokens.spacing.lg,
          maxHeight: 300
        }}>
          {renderChildren()}
        </div>
        
        {/* Footer para múltipla seleção com melhor UX */}
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
      </motion.div>
    </AnimatePresence>
  ) : null;

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={triggerRef}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        aria-expanded={isExpanded}
        aria-haspopup="true"
        aria-label={ariaLabel || `Filtro ${label}`}
        id={id}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border justify-between min-h-[48px] min-w-[140px] whitespace-nowrap",
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
            isExpanded && "rotate-180",
            isDisabled && "text-gray-400"
          )} 
        />
      </button>

      {/* Render dropdown usando Portal */}
      {portalRoot && createPortal(dropdownContent, portalRoot)}
    </div>
  );
};
