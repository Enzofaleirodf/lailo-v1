
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { formatOptions } from '../../config/filterData';

interface FormatFilterProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const FormatFilter = ({ 
  value = 'leilao', 
  onChange 
}: FormatFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
        Formato:
      </span>
      <Tabs 
        value={value} 
        onValueChange={onChange}
        className="w-auto"
      >
        <TabsList className="h-auto bg-transparent p-0 gap-6">
          {formatOptions.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              className="
                relative h-auto bg-transparent p-0 pb-2 
                text-sm font-medium text-gray-600 
                data-[state=active]:bg-transparent 
                data-[state=active]:text-gray-900
                data-[state=active]:shadow-none
                hover:text-gray-900
                transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
                after:bg-transparent after:transition-colors after:duration-200
                data-[state=active]:after:bg-blue-600
                whitespace-nowrap
              "
            >
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
