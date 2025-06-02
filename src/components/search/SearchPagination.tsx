
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const SearchPagination = ({
  currentPage,
  totalPages,
  onPageChange
}: SearchPaginationProps) => {
  // Para mobile, mostrar apenas 3 páginas no máximo
  const isMobile = window.innerWidth < 768;
  const maxVisiblePages = isMobile ? 3 : 5;
  
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const showStartEllipsis = visiblePages[0] > 2;
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages - 1;

  return (
    <div className="mt-6 md:mt-8 flex justify-center">
      <Pagination>
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
              className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""} text-xs md:text-sm px-2 md:px-3`}
            />
          </PaginationItem>
          
          {/* Primeira página se não estiver visível */}
          {showStartEllipsis && (
            <>
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(1);
                  }}
                  className="text-xs md:text-sm w-8 h-8 md:w-10 md:h-10"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="w-8 h-8 md:w-10 md:h-10" />
              </PaginationItem>
            </>
          )}
          
          {/* Páginas visíveis */}
          {visiblePages.map((pageNum) => (
            <PaginationItem key={pageNum}>
              <PaginationLink 
                href="#" 
                isActive={currentPage === pageNum}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(pageNum);
                }}
                className="text-xs md:text-sm w-8 h-8 md:w-10 md:h-10"
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          {/* Última página se não estiver visível */}
          {showEndEllipsis && (
            <>
              <PaginationItem>
                <PaginationEllipsis className="w-8 h-8 md:w-10 md:h-10" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(totalPages);
                  }}
                  className="text-xs md:text-sm w-8 h-8 md:w-10 md:h-10"
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
              className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : ""} text-xs md:text-sm px-2 md:px-3`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
