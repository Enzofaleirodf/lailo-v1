
import React from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ItemTypeToggle } from './ItemTypeToggle';
import { TopBarFilters } from './TopBarFilters';
import { ItemType } from '../../types/search';

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
    <div className="hidden md:block fixed top-0 right-0 left-12 h-20 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-40 shadow-sm">
      {/* Gradiente sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white to-purple-50/20 pointer-events-none" />
      
      <div className="relative flex items-center justify-between h-full px-8">
        {/* Zona esquerda - Type Toggle */}
        <div className="flex items-center">
          <ItemTypeToggle 
            currentType={itemType} 
            onTypeChange={onItemTypeChange} 
          />
        </div>

        {/* Zona direita - Filtros e Loading */}
        <div className="flex items-center gap-6">
          <TopBarFilters itemType={itemType} />
          
          {isLoading && (
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200/50">
              <LoadingSpinner size="sm" />
              <span className="text-sm text-blue-700 font-medium">Buscando...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
