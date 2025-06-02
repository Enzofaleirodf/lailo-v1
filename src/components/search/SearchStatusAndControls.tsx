
import React from 'react';
import { SearchStatus } from "./SearchStatus";
import { SearchControls } from "./SearchControls";
import { SearchControlsProps } from "../../types/search";

interface SearchStatusAndControlsProps extends Omit<SearchControlsProps, 'resultsText'> {
  totalAuctions: number;
  totalSites: number;
  newAuctions: number;
}

export const SearchStatusAndControls = ({
  totalAuctions,
  totalSites,
  newAuctions,
  isVertical,
  onToggleLayout,
  sortBy,
  onSortChange,
  sortOptions
}: SearchStatusAndControlsProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between overflow-visible">
      <SearchStatus
        totalAuctions={totalAuctions}
        totalSites={totalSites}
        newAuctions={newAuctions}
        className="text-xs md:text-sm"
      />
      
      <div className="md:hidden">
        <SearchControls
          isVertical={isVertical}
          onToggleLayout={onToggleLayout}
          sortBy={sortBy}
          onSortChange={onSortChange}
          sortOptions={sortOptions}
          resultsText=""
        />
      </div>
      
      {/* Desktop controls - só ordenação e layout */}
      <div className="hidden md:flex items-center gap-4 overflow-visible">
        <SearchControls
          isVertical={isVertical}
          onToggleLayout={onToggleLayout}
          sortBy={sortBy}
          onSortChange={onSortChange}
          sortOptions={sortOptions}
          resultsText=""
        />
      </div>
    </div>
  );
};
