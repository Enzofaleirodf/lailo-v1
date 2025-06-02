
import { Button } from "@/components/ui/button";

interface VehicleSearchSidebarProps {
  onClearFilters: () => void;
}

export const VehicleSearchSidebar = ({ onClearFilters }: VehicleSearchSidebarProps) => {
  return (
    <div className="hidden md:block fixed left-12 top-16 w-[448px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30">
      <div className="px-6 py-4">
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
  );
};
