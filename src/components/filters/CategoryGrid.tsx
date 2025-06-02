
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Building, TreePine, Factory, Car, Truck, Wrench, Waves } from 'lucide-react';

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
};

export const CategoryGrid = ({ 
  options, 
  selected, 
  onSelect, 
  columns = 2 
}: CategoryGridProps) => {
  return (
    <div className={`grid grid-cols-${columns} gap-3`}>
      {options.map((option) => {
        const IconComponent = option.icon ? iconMap[option.icon as keyof typeof iconMap] : null;
        
        return (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={cn(
              "p-4 border rounded-lg text-center transition-all duration-200 font-medium",
              selected === option.value
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            )}
          >
            {IconComponent && <div className="mb-2 flex justify-center"><IconComponent className="w-4 h-4" /></div>}
            <p className="text-xs">{option.label}</p>
          </button>
        );
      })}
    </div>
  );
};
