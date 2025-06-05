
import React from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';

interface FilterChipButtonProps {
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  isDisabled?: boolean;
  isExpanded: boolean;
  isActive?: boolean;
  ariaLabel?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const FilterChipButton = React.forwardRef<HTMLButtonElement, FilterChipButtonProps>(({
  onClick,
  onKeyDown,
  isDisabled = false,
  isExpanded,
  isActive = false,
  ariaLabel,
  id,
  className,
  children
}, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={isDisabled}
      aria-expanded={isExpanded}
      aria-haspopup="true"
      aria-label={ariaLabel}
      id={id}
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-200 border justify-between h-10 w-full",
        isDisabled 
          ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed" 
          : isActive 
            ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm ring-1 ring-blue-200/50" 
            : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50",
        className
      )}
      style={{
        borderRadius: '1.5rem',
        padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
        height: '40px',
        fontSize: designTokens.typography.sizes.sm,
        fontWeight: designTokens.typography.weights.medium,
        fontFamily: designTokens.typography.fonts.primary,
      }}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {children}
      </div>
      
      <Search 
        className={cn(
          "w-4 h-4 transition-transform duration-200 flex-shrink-0",
          isDisabled && "text-gray-400"
        )} 
      />
    </button>
  );
});

FilterChipButton.displayName = 'FilterChipButton';
