
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LayoutToggle } from "../LayoutToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchControlsProps } from "../../types/search";

export const SearchControls = ({
  isVertical,
  onToggleLayout,
  sortBy,
  onSortChange,
  sortOptions,
  resultsText,
}: SearchControlsProps) => {
  const showResultsText = resultsText && resultsText.trim() !== '';

  return (
    <div className="w-full flex items-center justify-between gap-4">
      {showResultsText && (
        <div className="flex-1 text-sm text-gray-600 text-left">
          {resultsText}
        </div>
      )}
      
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-between w-[168px]">
                <span className="text-left">{sortBy}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[168px] bg-white">
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
        
        <LayoutToggle isVertical={isVertical} onToggle={onToggleLayout} />
      </div>
    </div>
  );
};
