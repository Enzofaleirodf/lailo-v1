
import React from 'react';
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { SearchPageHeader } from "./SearchPageHeader";
import { SearchStatusAndControls } from "./SearchStatusAndControls";
import { SearchMainContent } from "./SearchMainContent";
import { SearchLayout } from "../layout/SearchLayout";
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
    <SearchLayout withTopBar withSidebar>
      {/* Top bar desktop */}
      <div className="absolute top-0 left-0 right-0 h-20 z-40">
        <DesktopTopBar 
          title={config.title} 
          isLoading={isLoading} 
          itemType={config.type} 
          onItemTypeChange={navigateToItemType} 
        />
      </div>

      {/* Sidebar de filtros */}
      <div className="absolute left-0 top-20 w-[512px] h-[calc(100vh-5rem)] z-30">
        <DesktopFilterSidebar itemType={config.type} onClearFilters={onClearFilters} />
      </div>

      {/* Conteúdo principal */}
      <div className="w-full">
        <SearchPageHeader 
          title={config.title} 
          isLoading={isLoading} 
          itemType={config.type} 
          onItemTypeChange={navigateToItemType} 
        />

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
        
        <SearchMainContent 
          items={items} 
          isVertical={isVertical} 
          config={config} 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={onPageChange} 
        />
      </div>
    </SearchLayout>
  );
};
