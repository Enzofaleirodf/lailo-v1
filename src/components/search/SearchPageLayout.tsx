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
  sortOptions
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
  return <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
      {/* Navbar lateral - posicionada dentro do container */}
      <div className="absolute left-0 top-0 h-full w-12 z-50">
        <SessionNavBar />
      </div>
      
      {/* Top bar desktop - posicionada dentro do container */}
      <div className="absolute top-0 left-12 right-0 h-20 z-40">
        <DesktopTopBar title={config.title} isLoading={isLoading} itemType={config.type} onItemTypeChange={handleItemTypeChange} />
      </div>

      {/* Sidebar de filtros - posicionada dentro do container */}
      <div className="absolute left-12 top-20 w-[512px] h-[calc(100vh-5rem)] z-30">
        <DesktopFilterSidebar itemType={config.type} onClearFilters={onClearFilters} />
      </div>

      {/* Conteúdo principal */}
      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:pl-[512px] md:pt-20">
        <div className="min-h-screen bg-white px-4 pb-20 md:px-6 md:pb-6 py-[20px]">
          <div className="w-full">
            <SearchPageHeader title={config.title} isLoading={isLoading} itemType={config.type} onItemTypeChange={handleItemTypeChange} />

            <SearchStatusAndControls totalAuctions={finalResultsCount} totalSites={finalSitesCount} newAuctions={newAuctions} isVertical={isVertical} onToggleLayout={onToggleLayout} sortBy={sortBy} onSortChange={onSortChange} sortOptions={sortOptions} />
            
            <SearchMainContent items={items} isVertical={isVertical} config={config} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        </div>
      </main>
      
      {/* Bottom navigation - posicionada dentro do container */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <BottomNavigation />
      </div>
    </div>;
};