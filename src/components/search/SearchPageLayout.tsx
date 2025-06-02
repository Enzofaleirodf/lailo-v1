
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionNavBar } from "../SessionNavBar";
import { BottomNavigation } from "../BottomNavigation";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { SearchControls } from "./SearchControls";
import { SearchResults } from "./SearchResults";
import { SearchStatus } from "./SearchStatus";
import { DesktopTopBar } from "./DesktopTopBar";
import { DesktopFilterSidebar } from "./DesktopFilterSidebar";
import { ItemTypeToggle } from "./ItemTypeToggle";
import { useAuctionStatus } from "../../hooks/useAuctionStatus";
import { SearchConfig, SearchItem, SearchControlsProps } from "../../types/search";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
      
      {/* Desktop Top Bar */}
      <DesktopTopBar
        title={config.title}
        backUrl={config.backUrl}
        isLoading={isLoading}
        itemType={config.type}
        onItemTypeChange={handleItemTypeChange}
      />

      {/* Desktop Filter Sidebar */}
      <DesktopFilterSidebar
        itemType={config.type}
        onClearFilters={onClearFilters}
      />

      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:mt-16 md:pl-[448px]">
        <div className="min-h-screen bg-white px-4 py-4 pb-20 md:px-6 md:py-6 md:pb-6">
          <div className="w-full">
            {/* Mobile/Tablet header */}
            <div className="flex flex-col gap-4 mb-6 md:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={config.backUrl}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Voltar
                    </Link>
                  </Button>
                  <h1 className="text-xl font-bold text-gray-900">{config.title}</h1>
                </div>
                {isLoading && <LoadingSpinner />}
              </div>
              
              {/* Mobile Type Toggle */}
              <div className="flex justify-center">
                <ItemTypeToggle 
                  currentType={config.type}
                  onTypeChange={handleItemTypeChange}
                />
              </div>
            </div>

            {/* Status e Controles */}
            <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between">
              <SearchStatus
                totalAuctions={finalResultsCount}
                totalSites={finalSitesCount}
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
              <div className="hidden md:flex items-center gap-4">
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
            
            <SearchResults
              items={items}
              isVertical={isVertical}
              config={config}
            />

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) onPageChange(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink 
                          href="#" 
                          isActive={currentPage === pageNum}
                          onClick={(e) => {
                            e.preventDefault();
                            onPageChange(pageNum);
                          }}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  {totalPages > 5 && (
                    <>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink 
                          href="#" 
                          isActive={currentPage === totalPages}
                          onClick={(e) => {
                            e.preventDefault();
                            onPageChange(totalPages);
                          }}
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    </>
                  )}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) onPageChange(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};
