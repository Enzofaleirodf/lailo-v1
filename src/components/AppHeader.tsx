
import { useLocation } from 'react-router-dom'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/utils'

export function AppHeader() {
  const location = useLocation()
  const isBuscador =
    location.pathname === '/buscador/imoveis' || location.pathname === '/buscador/veiculos'

  if (!isBuscador) return null

  const progress = useScrollProgress(60)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-12 bg-primary text-white flex items-center justify-between px-4 transition-all duration-200 md:hidden'
      )}
      style={{
        opacity: 1 - progress,
        transform: `translateY(-${progress * 100}%)`,
        pointerEvents: progress === 1 ? 'none' : 'auto',
      }}
    >
      <span className="font-bold text-sm">LOGO</span>
      <span>☰</span>
    </header>
  )
}
