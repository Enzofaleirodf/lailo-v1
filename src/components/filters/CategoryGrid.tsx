
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CategoryGridProps {
  options: CategoryOption[];
  selected: string;
  onSelect: (value: string) => void;
  columns?: number;
}

export const CategoryGrid = ({ 
  options, 
  selected, 
  onSelect, 
  columns = 2 
}: CategoryGridProps) => {
  return (
    <div className={`grid grid-cols-${columns} gap-3`}>
      {options.map((option) => (
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
          {option.icon && <div className="mb-2 flex justify-center">{option.icon}</div>}
          <p className="text-xs">{option.label}</p>
        </button>
      ))}
    </div>
  );
};
