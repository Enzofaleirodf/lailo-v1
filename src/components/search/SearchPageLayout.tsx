
import React from 'react';
import { SessionNavBar } from "../SessionNavBar";
import { BottomNavigation } from "../BottomNavigation";
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { SearchPageHeader } from "./SearchPageHeader";
import { SearchStatusAndControls } from "./SearchStatusAndControls";
import { SearchMainContent } from "./SearchMainContent";
import { useAuctionStatus } from "../../hooks/useAuctionStatus";
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
  sortOptions,
}: SearchPageLayoutProps) => {
  // Usar hook de status se os valores não forem fornecidos
  const statusData = useAuctionStatus(items);
  const finalResultsCount = resultsCount ?? statusData.totalAuctions;
  const finalSitesCount = sitesCount ?? statusData.totalSites;
  const newAuctions = statusData.newAuctions;

  const handleItemTypeChange = (newType: 'property' | 'vehicle') => {
    const newPath = newType === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    window.location.href = newPath;
  };

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      
      <DesktopTopBar
        title={config.title}
        isLoading={isLoading}
        itemType={config.type}
        onItemTypeChange={handleItemTypeChange}
      />

      <DesktopFilterSidebar
        itemType={config.type}
        onClearFilters={onClearFilters}
      />

      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:mt-16 md:pl-[512px]">
        <div className="min-h-screen bg-white px-3 py-3 pb-20 md:px-6 md:py-6 md:pb-6">
          <div className="w-full">
            <SearchPageHeader
              title={config.title}
              isLoading={isLoading}
              itemType={config.type}
              onItemTypeChange={handleItemTypeChange}
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
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};
