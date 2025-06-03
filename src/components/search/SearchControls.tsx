
import { LayoutToggle } from "../LayoutToggle";
import { SortButton } from "./SortButton";
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
    <div className="w-full flex items-center justify-between gap-4 flex-shrink-0">
      {showResultsText && (
        <div className="flex-1 text-sm text-gray-600 text-left min-w-0">
          {resultsText}
        </div>
      )}
      
      <div className="flex items-center gap-4 flex-shrink-0">
        <SortButton 
          sortBy={sortBy}
          sortOptions={sortOptions}
          onSortChange={onSortChange}
        />
        <LayoutToggle isVertical={isVertical} onToggle={onToggleLayout} />
      </div>
    </div>
  );
};
