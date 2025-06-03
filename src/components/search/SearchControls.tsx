
import { Button } from "@/components/ui/button";
import { LayoutToggle } from "../LayoutToggle";
import { SortSelect } from "@/components/ui/sort-select";
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
          <SortSelect
            value={sortBy}
            onValueChange={onSortChange}
            options={sortOptions}
          />
        </div>
        
        <LayoutToggle isVertical={isVertical} onToggle={onToggleLayout} />
      </div>
    </div>
  );
};
