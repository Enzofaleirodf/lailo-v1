
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionNavBar } from "../navigation/SessionNavBar";
import { MobileNavigation } from "../navigation/MobileNavigation";
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { SearchStatusAndControls } from "./SearchStatusAndControls";
import { SearchMainContent } from "./SearchMainContent";
import { MobileTopBar } from "./MobileTopBar";
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
  const navigate = useNavigate();
  const statusData = useAuctionStatus(items);
  const finalResultsCount = resultsCount ?? statusData.totalAuctions;
  const finalSitesCount = sitesCount ?? statusData.totalSites;
  const newAuctions = statusData.newAuctions;
  const handleItemTypeChange = (newType: 'property' | 'vehicle') => {
    const newPath = newType === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    navigate(newPath);
  };
  const handleShowFilters = () => {
    console.log("Abrir modal de filtros");
  };
  const handleShowSort = () => {
    console.log("Abrir modal de ordenação");
  };

  // Desktop Layout Component
  const DesktopLayout = () => <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
      <div className="absolute left-0 top-0 h-full w-12 z-50">
        <SessionNavBar />
      </div>
      
      <div className="absolute top-0 left-12 right-0 h-20 z-40">
        <DesktopTopBar title={config.title} isLoading={isLoading} itemType={config.type} onItemTypeChange={handleItemTypeChange} />
      </div>

      <div className="absolute left-12 top-20 w-[488px] h-[calc(100vh-5rem)] z-30">
        <DesktopFilterSidebar itemType={config.type} onClearFilters={onClearFilters} />
      </div>

      <main className="ml-12 pl-[488px] pt-20 min-h-screen bg-white px-6 pb-6">
        <div className="px-6 py-5">
          <SearchStatusAndControls totalAuctions={finalResultsCount} totalSites={finalSitesCount} newAuctions={newAuctions} isVertical={isVertical} onToggleLayout={onToggleLayout} sortBy={sortBy} onSortChange={onSortChange} sortOptions={sortOptions} />
          
          <SearchMainContent items={items} isVertical={isVertical} config={config} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </main>
    </div>;

  // Mobile Layout Component
  const MobileLayout = () => (
    <div className="w-full min-h-screen bg-white">
      <MobileTopBar 
        isVertical={isVertical} 
        onToggleLayout={onToggleLayout} 
        onShowFilters={handleShowFilters} 
        onShowSort={handleShowSort} 
        itemType={config.type} 
      />
      
      <main className="w-full min-h-screen bg-white px-3 pb-20 pt-20 py-0">
        <div className="py-5">
          <SearchStatusAndControls 
            totalAuctions={finalResultsCount} 
            totalSites={finalSitesCount} 
            newAuctions={newAuctions} 
            isVertical={isVertical} 
            onToggleLayout={onToggleLayout} 
            sortBy={sortBy} 
            onSortChange={onSortChange} 
            sortOptions={sortOptions} 
            showControls={false} 
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
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <MobileNavigation />
      </div>
    </div>
  );

  return <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <DesktopLayout />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <MobileLayout />
      </div>
    </div>;
};
