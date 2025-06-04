
import React from 'react';

interface DesktopTopBarProps {
  title: string;
  isLoading: boolean;
  itemType: 'property' | 'vehicle';
  onItemTypeChange: (type: 'property' | 'vehicle') => void;
}

export const DesktopTopBar = ({ 
  title, 
  isLoading 
}: DesktopTopBarProps) => {
  return (
    <div className="w-full h-14 bg-white border-b border-gray-200 flex items-center px-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-gray-900">
            {title}
          </h1>
          {isLoading && (
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};
