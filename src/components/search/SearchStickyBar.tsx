
'use client'

import { useState } from 'react'
import {
  Home as HomeIcon,
  Car as CarIcon,
  SlidersHorizontal as SlidersHorizontalIcon,
  ArrowDownUp as ArrowDownUpIcon,
  LayoutGrid as LayoutGridIcon,
  List as ListIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SearchStickyBar() {
  const [current, setCurrent] = useState<'imoveis' | 'veiculos'>('imoveis')
  const [isVertical, setIsVertical] = useState(false)

  return (
    <div className="w-full px-3 md:hidden">
      <div className="sticky top-0 z-50 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        {/* Linha 1 - Segmentado */}
        <div className="grid grid-cols-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrent('imoveis')}
            className={cn(
              'h-10 w-full rounded-none text-gray-700',
              current === 'imoveis' && 'bg-blue-600 text-white hover:bg-blue-700'
            )}
          >
            <HomeIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrent('veiculos')}
            className={cn(
              'h-10 w-full rounded-none text-gray-700',
              current === 'veiculos' && 'bg-blue-600 text-white hover:bg-blue-700'
            )}
          >
            <CarIcon className="h-5 w-5" />
          </Button>
        </div>

        {/* Linha 2 - Ações com dividers */}
        <div className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-200">
          <Button
            variant="ghost"
            className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
            onClick={() => alert('Filtrar')}
          >
            <SlidersHorizontalIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
            onClick={() => alert('Ordenar')}
          >
            <ArrowDownUpIcon className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            className="h-10 w-full rounded-none bg-white text-gray-700 hover:bg-gray-50"
            onClick={() => setIsVertical(!isVertical)}
          >
            {isVertical ? (
              <ListIcon className="h-5 w-5" />
            ) : (
              <LayoutGridIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
