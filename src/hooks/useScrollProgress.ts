
import { useEffect, useState, useRef } from 'react'

export function useScrollProgress(limit = 60) {
  const [progress, setProgress] = useState(0)
  const ticking = useRef(false)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY
      const newProgress = Math.min(scrollY / limit, 1)
      
      // Arredondar para evitar micro-mudanças
      const roundedProgress = Math.round(newProgress * 100) / 100
      
      setProgress(roundedProgress)
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        rafId.current = requestAnimationFrame(updateProgress)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [limit])

  return progress
}
