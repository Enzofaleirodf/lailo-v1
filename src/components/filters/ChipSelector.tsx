
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipOption {
  value: string;
  label: string;
}

interface ChipSelectorProps {
  options: ChipOption[];
  selected: string;
  onSelect: (value: string) => void;
}

export const ChipSelector = ({ options, selected, onSelect }: ChipSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={cn(
            "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
            selected === option.value
              ? "bg-blue-50 border-blue-200 text-blue-700"
              : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
