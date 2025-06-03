
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Building, TreePine, Factory, Car, Truck, Wrench, Waves, Plane, Bed } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';

interface CategoryOption {
  value: string;
  label: string;
  icon?: string;
}

interface CategoryGridProps {
  options: CategoryOption[];
  selected: string;
  onSelect: (value: string) => void;
  columns?: number;
}

const iconMap = {
  'home': Home,
  'building': Building,
  'tree-pine': TreePine,
  'factory': Factory,
  'car': Car,
  'truck': Truck,
  'wrench': Wrench,
  'waves': Waves,
  'plane': Plane,
  'bed': Bed,
};

export const CategoryGrid = ({ 
  options, 
  selected, 
  onSelect, 
  columns = 3 
}: CategoryGridProps) => {
  return (
    <div 
      className="grid gap-3"
      style={{ 
        gap: designTokens.spacing.md,
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      }}
    >
      {options.map((option) => {
        const IconComponent = option.icon ? iconMap[option.icon as keyof typeof iconMap] : null;
        const isSelected = selected === option.value;
        
        return (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={cn(
              "flex items-center gap-2 px-3 py-3 border rounded-lg transition-all duration-200 font-medium text-left justify-start min-h-[48px]",
              isSelected
                ? "bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200/50 shadow-sm"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            )}
            style={{
              borderRadius: designTokens.borderRadius.lg,
              fontWeight: designTokens.typography.weights.medium,
            }}
          >
            {IconComponent && (
              <IconComponent 
                className={cn(
                  "w-4 h-4 flex-shrink-0",
                  isSelected ? "text-blue-600" : "text-gray-500"
                )} 
              />
            )}
            <span 
              className={cn(
                "text-sm leading-tight",
                isSelected ? "text-blue-700 font-semibold" : "text-gray-700"
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
