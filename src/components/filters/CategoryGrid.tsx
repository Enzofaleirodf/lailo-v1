
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Building, TreePine, Factory, Car, Truck, Wrench, Waves, Plane, Bed } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';
import { useIsMobile } from '../../hooks/use-mobile';

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
  responsive?: boolean;
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
  columns = 1,
  responsive = false
}: CategoryGridProps) => {
  const isMobile = useIsMobile();
  
  // Layout responsivo: 2 colunas no mobile, 3 colunas no desktop
  const getGridLayout = () => {
    if (!responsive) return "space-y-2 max-w-md";
    return isMobile ? "grid grid-cols-2 gap-3" : "grid grid-cols-3 gap-4";
  };
  
  return (
    <div 
      className={cn("w-full", getGridLayout())}
      style={{ 
        gap: responsive ? designTokens.spacing.sm : undefined,
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
              "w-full flex items-center gap-3 px-3 py-3 border rounded-lg transition-all duration-200 text-left justify-start min-h-[48px]",
              isSelected
                ? "bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200/50 shadow-sm"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            )}
            style={{
              borderRadius: designTokens.borderRadius.lg,
              fontSize: designTokens.typography.sizes.xs,
              fontWeight: designTokens.typography.weights.medium,
              fontFamily: designTokens.typography.fonts.primary,
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
                "leading-tight flex-1",
                isSelected ? "text-blue-700 font-semibold" : "text-gray-700"
              )}
              style={{
                fontSize: designTokens.typography.sizes.xs,
                fontWeight: isSelected ? designTokens.typography.weights.semibold : designTokens.typography.weights.medium,
                fontFamily: designTokens.typography.fonts.primary,
              }}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
