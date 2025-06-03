
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
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="justify-between min-w-[160px]">
            <span className="text-left">{sortBy}</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-[160px] bg-white z-50">
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
  );
};
