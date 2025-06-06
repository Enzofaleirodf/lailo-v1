
import { useEffect, useState, useRef } from 'react'

export function useScrollProgress(limit = 60) {
  const [progress, setProgress] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY
      const ratio = Math.min(scrollY / limit, 1)
      setProgress(ratio)
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateProgress)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [limit])

  return progress
}
