
import React from 'react';
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { SearchPageHeader } from "./SearchPageHeader";
import { SearchStatusAndControls } from "./SearchStatusAndControls";
import { SearchMainContent } from "./SearchMainContent";
import { useAuctionStatus } from "../../hooks/useAuctionStatus";
import { useSmartNavigation } from "../../hooks/useSmartNavigation";
import { SearchConfig, SearchItem, SearchControlsProps } from "../../types/search";

interface SearchPageLayoutProps extends Omit<SearchControlsProps, 'resultsText'> {
  config: SearchConfig;
  items: SearchItem[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onClearFilters: () => void;
  resultsCount?: number;
  sitesCount?: number;
}

export const SearchPageLayout = ({
  config,
  items,
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
  onClearFilters,
  resultsCount,
  sitesCount,
  isVertical,
  onToggleLayout,
  sortBy,
  onSortChange,
  sortOptions
}: SearchPageLayoutProps) => {
  const statusData = useAuctionStatus(items);
  const finalResultsCount = resultsCount ?? statusData.totalAuctions;
  const finalSitesCount = sitesCount ?? statusData.totalSites;
  const newAuctions = statusData.newAuctions;
  
  const { navigateToItemType } = useSmartNavigation();

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop: Top bar fixa */}
      <div className="hidden md:block fixed top-0 left-12 right-0 h-20 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm z-40">
        <DesktopTopBar 
          title={config.title} 
          isLoading={isLoading} 
          itemType={config.type} 
          onItemTypeChange={navigateToItemType} 
        />
      </div>

      {/* Desktop: Sidebar de filtros fixa */}
      <div className="hidden md:block fixed left-12 top-20 w-[448px] h-[calc(100vh-5rem)] bg-white border-r border-gray-200 z-30">
        <DesktopFilterSidebar itemType={config.type} onClearFilters={onClearFilters} />
      </div>

      {/* Conteúdo principal */}
      <div className="md:ml-[448px] md:pt-20 min-h-screen">
        <div className="px-4 py-4 md:px-6 md:py-6 pb-20 md:pb-6">
          {/* Mobile: Header */}
          <div className="md:hidden">
            <SearchPageHeader 
              title={config.title} 
              isLoading={isLoading} 
              itemType={config.type} 
              onItemTypeChange={navigateToItemType} 
            />
          </div>

          {/* Status e controles */}
          <SearchStatusAndControls 
            totalAuctions={finalResultsCount} 
            totalSites={finalSitesCount} 
            newAuctions={newAuctions} 
            isVertical={isVertical} 
            onToggleLayout={onToggleLayout} 
            sortBy={sortBy} 
            onSortChange={onSortChange} 
            sortOptions={sortOptions} 
          />
          
          {/* Conteúdo principal */}
          <SearchMainContent 
            items={items} 
            isVertical={isVertical} 
            config={config} 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={onPageChange} 
          />
        </div>
      </div>
    </div>
  );
};
