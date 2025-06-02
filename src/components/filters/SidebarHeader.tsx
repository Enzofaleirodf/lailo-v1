
import React from 'react';
import { Button } from '@/components/ui/button';

interface SidebarHeaderProps {
  onClearFilters: () => void;
}

export const SidebarHeader = ({ onClearFilters }: SidebarHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
      <Button 
        variant="ghost" 
        className="text-sm text-gray-600 hover:text-gray-800 p-0 h-auto font-normal"
        onClick={onClearFilters}
      >
        Resetar filtros
      </Button>
    </div>
  );
};
