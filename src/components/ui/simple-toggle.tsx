
import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleToggleProps {
  options: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const SimpleToggle = ({ 
  options, 
  value, 
  onValueChange, 
  className 
}: SimpleToggleProps) => {
  return (
    <div className={cn(
      "relative flex items-center bg-gray-50 p-1 rounded-xl border border-gray-200/50 shadow-sm",
      className
    )}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(
            "relative flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-lg min-w-[120px]",
            value === option.value
              ? "bg-white text-gray-900 shadow-sm border border-gray-200/30"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-100/50"
          )}
        >
          {option.icon && (
            <span className={cn(
              "transition-colors duration-200",
              value === option.value ? "text-blue-600" : "text-gray-500"
            )}>
              {option.icon}
            </span>
          )}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};
