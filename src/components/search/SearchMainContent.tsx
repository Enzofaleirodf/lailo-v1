
import React from 'react';
import { SearchResults } from "./SearchResults";
import { SearchPagination } from "./SearchPagination";
import { SearchItem, SearchConfig } from "../../types/search";

interface SearchMainContentProps {
  items: SearchItem[];
  isVertical: boolean;
  config: SearchConfig;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const SearchMainContent = ({
  items,
  isVertical,
  config,
  currentPage,
  totalPages,
  onPageChange
}: SearchMainContentProps) => {
  return (
    <>
      <SearchResults
        items={items}
        isVertical={isVertical}
        config={config}
      />

      <SearchPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};
