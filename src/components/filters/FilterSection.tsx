
import React from 'react';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FilterSection = ({ title, children, className = "" }: FilterSectionProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      {children}
    </div>
  );
};
