
import { VehicleCard } from "@/components/VehicleCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Vehicle {
  id: string;
  name: string;
  color: string;
  year: string;
  location: string;
  price: string;
  discount: string;
  badges: string[];
  date: string;
  image: string;
  showNewBadge: boolean;
}

interface VehicleSearchResultsProps {
  vehicles: Vehicle[];
  isVertical: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const VehicleSearchResults = ({ 
  vehicles, 
  isVertical, 
  currentPage, 
  totalPages, 
  onPageChange 
}: VehicleSearchResultsProps) => {
  return (
    <>
      <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
        {vehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} isVertical={isVertical} />
        ))}
      </div>

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
    </>
  );
};
