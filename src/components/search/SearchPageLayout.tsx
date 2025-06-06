
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionNavBar } from "../navigation/SessionNavBar";
import { MobileHeader } from "../navigation/MobileHeader";
import { MobileDrawer } from "../navigation/MobileDrawer";
import { MobileActionBar } from "./MobileActionBar";
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { SearchStatusAndControls } from "./SearchStatusAndControls";
import { SearchMainContent } from "./SearchMainContent";
import { useAuctionStatus } from "../../hooks/useAuctionStatus";
import { useScrollProgress } from "../../hooks/useScrollProgress";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const statusData = useAuctionStatus(items);
  const scrollProgress = useScrollProgress(100);
  
  const finalResultsCount = resultsCount ?? statusData.totalAuctions;
  const finalSitesCount = sitesCount ?? statusData.totalSites;
  const newAuctions = statusData.newAuctions;
  
  const handleItemTypeChange = (newType: 'property' | 'vehicle') => {
    const newPath = newType === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    navigate(newPath);
  };

  // Desktop Layout Component
  const DesktopLayout = () => (
    <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
      <div className="absolute left-0 top-0 h-full w-12 z-50">
        <SessionNavBar />
      </div>
      
      <div className="absolute top-0 left-12 right-0 h-20 z-40">
        <DesktopTopBar title={config.title} isLoading={isLoading} itemType={config.type} onItemTypeChange={handleItemTypeChange} />
      </div>

      <div className="absolute left-12 top-20 w-[512px] h-[calc(100vh-5rem)] z-30">
        <DesktopFilterSidebar itemType={config.type} onClearFilters={onClearFilters} />
      </div>

      <main className="ml-12 pl-[512px] pt-20 min-h-screen bg-white pb-6">
        <div className="pl-6 pr-6 py-5">
          <SearchStatusAndControls totalAuctions={finalResultsCount} totalSites={finalSitesCount} newAuctions={newAuctions} isVertical={isVertical} onToggleLayout={onToggleLayout} sortBy={sortBy} onSortChange={onSortChange} sortOptions={sortOptions} />
          
          <SearchMainContent items={items} isVertical={isVertical} config={config} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </main>
    </div>
  );

  // Mobile Layout Component
  const MobileLayout = () => (
    <div className="w-full min-h-screen bg-white">
      <MobileHeader onMenuClick={() => setIsDrawerOpen(true)} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      
      {/* Mobile Action Bar - sempre sticky no topo */}
      <div className="sticky top-0 z-40 bg-white px-3 pt-3">
        <MobileActionBar 
          itemType={config.type}
          onItemTypeChange={handleItemTypeChange}
        />
      </div>
      
      <main className="w-full min-h-screen bg-white px-3 pb-6" style={{ paddingTop: '64px' }}>
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
        
        <div className="mt-4">
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
    </div>
  );

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <DesktopLayout />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <MobileLayout />
      </div>
    </div>
  );
};
