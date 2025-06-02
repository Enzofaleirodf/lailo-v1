
import { useState } from 'react';
import { SearchConfig } from '../types/search';

export const useSearchPage = (config: SearchConfig) => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(config.sortOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Mudando para página ${page}`);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    console.log(`Ordenando por: ${sort}`);
  };

  const handleLayoutToggle = (vertical: boolean) => {
    setIsVertical(vertical);
  };

  return {
    isVertical,
    isLoading,
    sortBy,
    currentPage,
    setIsLoading,
    handlePageChange,
    handleSortChange,
    handleLayoutToggle,
  };
};
