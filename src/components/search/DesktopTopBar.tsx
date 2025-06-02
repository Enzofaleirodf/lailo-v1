
import React from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ItemTypeToggle } from './ItemTypeToggle';
import { TopBarFilters } from './TopBarFilters';
import { ItemType } from '../../types/search';
import { designTokens } from '../../styles/design-tokens';

interface DesktopTopBarProps {
  title: string;
  isLoading: boolean;
  itemType: ItemType;
  onItemTypeChange: (type: ItemType) => void;
}

export const DesktopTopBar = ({
  title,
  isLoading,
  itemType,
  onItemTypeChange
}: DesktopTopBarProps) => {
  return (
    <div className="hidden md:block fixed top-0 right-0 left-12 h-20 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-40 shadow-sm overflow-visible">
      {/* Gradiente sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white to-purple-50/20 pointer-events-none" />
      
      <div className="relative flex items-center justify-between h-full px-6 overflow-visible">
        {/* Zona esquerda - Type Toggle */}
        <div className="flex items-center flex-shrink-0">
          <ItemTypeToggle 
            currentType={itemType} 
            onTypeChange={onItemTypeChange} 
          />
          
          {isLoading && (
            <div 
              className="flex items-center gap-2 ml-4 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200/50"
              style={{
                marginLeft: designTokens.spacing.lg,
                padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                borderRadius: designTokens.borderRadius.lg,
              }}
            >
              <LoadingSpinner size="sm" />
              <span 
                className="text-blue-700 font-medium whitespace-nowrap"
                style={{ fontSize: designTokens.typography.sizes.sm }}
              >
                Buscando...
              </span>
            </div>
          )}
        </div>

        {/* Zona direita - Filtros com overflow visible */}
        <div className="flex-1 flex justify-end overflow-visible">
          <div className="overflow-visible">
            <TopBarFilters itemType={itemType} />
          </div>
        </div>
      </div>
    </div>
  );
};
