
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SessionNavBar } from "../SessionNavBar";
import { BottomNavigation } from "../BottomNavigation";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { SearchControls } from "./SearchControls";
import { SearchResults } from "./SearchResults";
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
  resultsCount: number;
  sitesCount: number;
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
  const resultsText = config.resultsText(resultsCount, sitesCount);

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      
      {/* Desktop Top Bar */}
      <div className="hidden md:block fixed top-0 right-0 left-12 h-16 bg-white border-b border-gray-200 z-40">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to={config.backUrl}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">{config.title}</h1>
          </div>
          {isLoading && <LoadingSpinner />}
        </div>
      </div>

      {/* Left Sidebar - Desktop only */}
      <div className="hidden md:block fixed left-12 top-16 w-[448px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
            <Button 
              variant="ghost" 
              className="text-sm text-gray-600 hover:text-gray-800 p-0 h-auto border-0 shadow-none"
              onClick={onClearFilters}
            >
              Apagar filtros
            </Button>
          </div>
        </div>
      </div>

      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:mt-16 md:pl-[448px]">
        <div className="min-h-screen bg-white px-6 py-6 pb-20 md:pb-6">
          <div className="w-full">
            {/* Mobile header - only show on mobile */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to={config.backUrl}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">{config.title}</h1>
              </div>
              {isLoading && <LoadingSpinner />}
            </div>

            <SearchControls
              isVertical={isVertical}
              onToggleLayout={onToggleLayout}
              sortBy={sortBy}
              onSortChange={onSortChange}
              sortOptions={sortOptions}
              resultsText={resultsText}
            />
            
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
