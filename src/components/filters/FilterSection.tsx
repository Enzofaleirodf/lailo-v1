
import React from 'react';
import { designTokens } from '../../styles/design-tokens';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FilterSection = ({ title, children, className = "" }: FilterSectionProps) => {
  return (
    <div 
      className={`space-y-3 ${className}`}
      style={{ 
        gap: designTokens.spacing.md,
      }}
    >
      <h3 
        className="text-sm font-medium text-gray-900"
        style={{
          fontSize: designTokens.typography.sizes.sm,
          fontWeight: designTokens.typography.weights.medium,
          color: designTokens.colors.text.primary,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
};
