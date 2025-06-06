
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
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function SearchStickyBar() {
  const [current, setCurrent] = useState<'imoveis' | 'veiculos'>('imoveis')
  const [isVertical, setIsVertical] = useState(false)
  const { isTypeToggleVisible, shouldHideElements } = useScrollDirection()

  return (
    <div className="w-full px-3 md:hidden">
      {/* Container para o toggle de tipos - some com scroll */}
      <div 
        className={`fixed left-3 right-3 z-40 transition-transform duration-300 ease-out ${
          isTypeToggleVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: '72px' }} // 56px (header) + 16px (gap)
      >
        <div className="overflow-hidden rounded-t-lg border border-gray-200 bg-gray-100">
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
        </div>
      </div>

      {/* Container para os botões de ação - sempre visível quando necessário */}
      <div 
        className={`fixed left-3 right-3 z-40 transition-all duration-300 ease-out ${
          shouldHideElements ? 'top-0' : 'top-[112px]' // 72px + 40px (altura do toggle)
        }`}
      >
        <div className={`overflow-hidden border border-gray-200 bg-gray-100 ${
          shouldHideElements ? 'rounded-lg' : 'rounded-b-lg border-t-0'
        }`}>
          <div className="grid grid-cols-3 divide-x divide-gray-200">
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
    </div>
  )
}
