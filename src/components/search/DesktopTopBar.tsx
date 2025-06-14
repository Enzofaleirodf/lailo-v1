import React from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { TopBarFilters } from './TopBarFilters';
import { ItemTypeToggle } from './ItemTypeToggle';
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
  return <div className="hidden md:block h-20 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      {/* Gradiente sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white to-purple-50/20 pointer-events-none" />
      
      <div className="relative flex items-center justify-between h-full py-6 px-[24px]">
        {/* Zona esquerda - Toggle de tipo de item */}
        <div className="flex items-center flex-shrink-0">
          <ItemTypeToggle currentType={itemType} onTypeChange={onItemTypeChange} />
          
          {/* Loading indicator ao lado do toggle */}
          {isLoading && <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200/50 ml-4" style={{
          padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
          borderRadius: designTokens.borderRadius.lg
        }}>
              <LoadingSpinner size="sm" />
              <span className="text-blue-700 font-medium whitespace-nowrap" style={{
            fontSize: designTokens.typography.sizes.sm
          }}>
                Buscando...
              </span>
            </div>}
        </div>

        {/* Zona direita - Filtros sem overflow-hidden */}
        <div className="flex-1 flex justify-end">
          <div className="max-w-full">
            <TopBarFilters itemType={itemType} />
          </div>
        </div>
      </div>
    </div>;
};