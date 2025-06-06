
import React from 'react';
import { SearchStatus } from "./SearchStatus";
import { SearchControls } from "./SearchControls";
import { SearchControlsProps } from "../../types/search";

interface SearchStatusAndControlsProps extends Omit<SearchControlsProps, 'resultsText'> {
  totalAuctions: number;
  totalSites: number;
  newAuctions: number;
  showControls?: boolean;
  statusClassName?: string;
  controlsClassName?: string;
  className?: string;
}

export const SearchStatusAndControls = ({
  totalAuctions,
  totalSites,
  newAuctions,
  isVertical,
  onToggleLayout,
  sortBy,
  onSortChange,
  sortOptions,
  showControls = true,
  statusClassName = "",
  controlsClassName = "hidden md:flex items-center gap-4",
  className = "flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between"
}: SearchStatusAndControlsProps) => {
  return (
    <div className={className}>
      <SearchStatus
        totalAuctions={totalAuctions}
        totalSites={totalSites}
        newAuctions={newAuctions}
        className={statusClassName}
      />
      
      {/* Desktop controls - só ordenação e layout */}
      {showControls && (
        <div className={controlsClassName}>
          <SearchControls
            isVertical={isVertical}
            onToggleLayout={onToggleLayout}
            sortBy={sortBy}
            onSortChange={onSortChange}
            sortOptions={sortOptions}
            resultsText=""
          />
        </div>
      )}
    </div>
  );
};
