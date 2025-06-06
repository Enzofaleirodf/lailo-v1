
import { useState } from "react"
import {
  ArrowDownUp,
  SlidersHorizontal,
  LayoutGrid,
  Rows,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ItemTypeToggle } from "./ItemTypeToggle"
import { ItemType } from "../../types/search"

interface MobileActionBarProps {
  itemType: ItemType;
  onItemTypeChange: (type: ItemType) => void;
}

export function MobileActionBar({ itemType, onItemTypeChange }: MobileActionBarProps) {
  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal")

  return (
    <div className="w-full bg-white px-3 py-2 flex items-center gap-2 rounded-xl shadow-sm">
      
      {/* Segmentado: Imóveis | Veículos - versão compacta */}
      <div className="flex-shrink-0" style={{ maxWidth: '140px' }}>
        <ItemTypeToggle 
          currentType={itemType}
          onTypeChange={onItemTypeChange}
        />
      </div>

      {/* Botões: Ordenar | Filtrar | Alternar layout */}
      <div className="flex flex-1 justify-end items-center gap-2">
        {/* Ordenar */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          <ArrowDownUp className="h-5 w-5" />
        </Button>

        {/* Filtrar */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Button>

        {/* Alternar layout */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-transparent hover:text-foreground"
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
