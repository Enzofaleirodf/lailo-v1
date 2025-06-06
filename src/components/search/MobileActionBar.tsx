
import { useState } from "react"
import {
  ArrowDownUp,
  SlidersHorizontal,
  LayoutGrid,
  Rows,
  Home,
  Car,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ItemType } from "../../types/search"
import { cn } from "@/lib/utils"

interface MobileActionBarProps {
  itemType: ItemType;
  onItemTypeChange: (type: ItemType) => void;
  className?: string;
}

export function MobileActionBar({ itemType, onItemTypeChange, className }: MobileActionBarProps) {
  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal")

  return (
    <div className={cn("w-full max-w-full bg-white px-4 py-2 flex items-center gap-2 rounded-xl border border-gray-200 shadow-md", className)}>
      
      {/* Segmentado: Imóveis | Veículos - versão mobile compacta */}
      <div className="flex bg-gray-100 rounded-lg p-1 flex-shrink-0">
        <button
          onClick={() => onItemTypeChange('property')}
          className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
            itemType === 'property' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Home className="h-4 w-4" />
          Imóveis
        </button>
        <button
          onClick={() => onItemTypeChange('vehicle')}
          className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
            itemType === 'vehicle' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Car className="h-4 w-4" />
          Veículos
        </button>
      </div>

      {/* Botões: Ordenar | Filtrar | Alternar layout */}
      <div className="flex flex-1 justify-end items-center gap-2 min-w-0">
        {/* Ordenar */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-transparent hover:text-foreground flex-shrink-0"
        >
          <ArrowDownUp className="h-5 w-5" />
        </Button>

        {/* Filtrar */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-transparent hover:text-foreground flex-shrink-0"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Button>

        {/* Alternar layout */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-transparent hover:text-foreground flex-shrink-0"
          onClick={() =>
            setLayout(layout === "horizontal" ? "vertical" : "horizontal")
          }
        >
          {layout === "horizontal" ? (
            <LayoutGrid className="h-5 w-5" />
          ) : (
            <Rows className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  )
}
