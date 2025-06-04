
import React from 'react';
import { SessionNavBar } from "../SessionNavBar";
import { BottomNavigation } from "../BottomNavigation";
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { SearchPageHeader } from "./SearchPageHeader";
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
  // Usar hook de status se os valores não forem fornecidos
  const statusData = useAuctionStatus(items);
  const finalResultsCount = resultsCount ?? statusData.totalAuctions;
  const finalSitesCount = sitesCount ?? statusData.totalSites;
  const newAuctions = statusData.newAuctions;

  const handleItemTypeChange = (newType: 'property' | 'vehicle') => {
    const newPath = newType === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    window.location.href = newPath;
  };

  const handleShowFilters = () => {
    console.log("Abrir modal de filtros");
  };

  const handleShowSort = () => {
    console.log("Abrir modal de ordenação");
  };

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout - apenas em desktop */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          {/* Navbar lateral - apenas desktop */}
          <div className="absolute left-0 top-0 h-full w-12 z-50">
            <SessionNavBar />
          </div>
          
          {/* Top bar desktop - altura aumentada de 56px para 64px */}
          <div className="absolute top-0 left-12 right-0 h-16 z-40">
            <DesktopTopBar 
              title={config.title} 
              isLoading={isLoading} 
              itemType={config.type} 
              onItemTypeChange={handleItemTypeChange} 
            />
          </div>

          {/* Sidebar de filtros desktop - ajustado para a nova altura */}
          <div className="absolute left-12 top-16 w-[512px] h-[calc(100vh-4rem)] z-30">
            <DesktopFilterSidebar 
              itemType={config.type} 
              onClearFilters={onClearFilters} 
            />
          </div>

          {/* Conteúdo principal desktop - ajustado para a nova altura */}
          <main className="ml-12 pl-[512px] pt-16 min-h-screen bg-white px-6 pb-6">
            <div className="py-[16px] px-[16px]">
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
          </main>
        </div>
      </div>

      {/* Mobile Layout - apenas em mobile */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          {/* Barra superior mobile */}
          <MobileTopBar 
            isVertical={isVertical}
            onToggleLayout={onToggleLayout}
            onShowFilters={handleShowFilters}
            onShowSort={handleShowSort}
            itemType={config.type}
          />
          
          {/* Conteúdo principal mobile - sem o header de toggle */}
          <main className="w-full min-h-screen bg-white px-4 pb-20 pt-14">
            <div className="py-[20px]">
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
          </main>
          
          {/* Bottom navigation mobile */}
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <BottomNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};
