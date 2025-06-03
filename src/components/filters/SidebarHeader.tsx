
import React from 'react';
import { Button } from '@/components/ui/button';
import { designTokens } from '../../styles/design-tokens';

interface SidebarHeaderProps {
  onClearFilters: () => void;
}

export const SidebarHeader = ({ onClearFilters }: SidebarHeaderProps) => {
  return (
    <div 
      className="flex items-center justify-between mb-6"
      style={{ marginBottom: designTokens.spacing['2xl'] }}
    >
      <h2 
        className="text-lg font-semibold text-gray-900"
        style={{
          fontSize: designTokens.typography.sizes.lg,
          fontWeight: designTokens.typography.weights.semibold,
          color: designTokens.colors.text.primary,
        }}
      >
        Filtros
      </h2>
      <Button 
        variant="ghost" 
        className="text-sm text-gray-500 hover:text-gray-700 p-0 h-auto font-medium transition-colors"
        onClick={onClearFilters}
        style={{
          fontSize: designTokens.typography.sizes.sm,
          fontWeight: designTokens.typography.weights.medium,
        }}
      >
        Resetar filtros
      </Button>
    </div>
  );
};
