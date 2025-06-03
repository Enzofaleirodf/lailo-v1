
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface SortButtonProps {
  sortBy: string;
  sortOptions: string[];
  onSortChange: (sort: string) => void;
}

export const SortButton = ({ sortBy, sortOptions, onSortChange }: SortButtonProps) => {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Ordenar por:</span>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="justify-between w-[180px] flex-shrink-0 h-[48px]"
            >
              <span className="text-left truncate">{sortBy}</span>
              <ChevronDown className="h-4 w-4 ml-2 flex-shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start" 
            className="w-[180px] bg-white z-[9999]"
            sideOffset={8}
          >
            {sortOptions.map(option => (
              <DropdownMenuItem 
                key={option} 
                onClick={() => onSortChange(option)} 
                className="cursor-pointer"
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
