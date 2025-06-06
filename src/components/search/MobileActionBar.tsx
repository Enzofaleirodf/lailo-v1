
import { useState } from "react"
import {
  ArrowDownUp,
  SlidersHorizontal,
  LayoutGrid,
  Rows,
  Home,
  Car,
} from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"

export function MobileActionBar() {
  const [layout, setLayout] = useState<"horizontal" | "vertical">("horizontal")

  return (
    <div className="w-full bg-white px-3 py-2 flex items-center gap-2 rounded-xl shadow-sm">
      
      {/* Segmentado: Imóveis | Veículos */}
      <ToggleGroup type="single" className="flex gap-0 rounded-md overflow-hidden">
        <ToggleGroupItem
          value="imoveis"
          className="flex items-center gap-1 px-3 py-2 text-sm data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 bg-neutral-100 text-neutral-500"
        >
          <Home className="h-4 w-4" />
          Imóveis
        </ToggleGroupItem>
        <ToggleGroupItem
          value="veiculos"
          className="flex items-center gap-1 px-3 py-2 text-sm data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 bg-neutral-100 text-neutral-500"
        >
          <Car className="h-4 w-4" />
          Veículos
        </ToggleGroupItem>
      </ToggleGroup>

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
