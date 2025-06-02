
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Building, TreePine, Factory, Car, Truck, Wrench, Waves, Plane, Bed } from 'lucide-react';

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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {options.map((option) => {
        const IconComponent = option.icon ? iconMap[option.icon as keyof typeof iconMap] : null;
        
        return (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={cn(
              "flex items-center gap-2 px-2 py-3 border rounded-lg transition-all duration-200 font-medium text-left justify-start",
              selected === option.value
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            )}
          >
            {IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" />}
            <span className="text-xs">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};
