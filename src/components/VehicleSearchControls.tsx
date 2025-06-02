
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LayoutToggle } from "@/components/LayoutToggle";

interface VehicleSearchControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  isVertical: boolean;
  setIsVertical: (value: boolean) => void;
}

export const VehicleSearchControls = ({ 
  sortBy, 
  setSortBy, 
  isVertical, 
  setIsVertical 
}: VehicleSearchControlsProps) => {
  const sortOptions = ["Mais recentes", "Menor preço", "Maior preço", "Maior desconto", "Mais próximos"];

  return (
    <div className="w-full flex items-center justify-between gap-4 mb-4">
      <div className="flex-1 text-sm text-gray-600 text-left">
        Encontramos <span className="font-semibold">4.164</span> leilões em <span className="font-semibold">131</span> sites
      </div>
      
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Ordenar por:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="justify-between min-w-[140px]">
                <span className="text-left">{sortBy}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[140px] bg-white">
              {sortOptions.map(option => (
                <DropdownMenuItem key={option} onClick={() => setSortBy(option)} className="cursor-pointer">
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
      </div>
    </div>
  );
};
