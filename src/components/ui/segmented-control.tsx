
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SegmentedControlProps {
  options: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const SegmentedControl = ({ 
  options, 
  value, 
  onValueChange, 
  className 
}: SegmentedControlProps) => {
  return (
    <div className={cn(
      "relative flex items-center bg-gray-50 p-1 rounded-xl border border-gray-200/50 shadow-sm backdrop-blur-sm w-full",
      className
    )}>
      {/* Background indicator */}
      <motion.div
        className="absolute bg-white rounded-lg shadow-md border border-gray-200/30"
        layoutId="segmented-indicator"
        style={{
          left: `${(options.findIndex(opt => opt.value === value) * 100) / options.length}%`,
          width: `${100 / options.length}%`,
          height: 'calc(100% - 8px)',
          top: '4px',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(
            "relative flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium transition-all duration-200 z-10 rounded-lg flex-1 whitespace-nowrap",
            value === option.value
              ? "text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-800"
          )}
        >
          {option.icon && (
            <span className={cn(
              "transition-colors duration-200 flex-shrink-0",
              value === option.value ? "text-blue-600" : "text-gray-500"
            )}>
              {option.icon}
            </span>
          )}
          <span className="truncate">{option.label}</span>
        </button>
      ))}
    </div>
  );
};
