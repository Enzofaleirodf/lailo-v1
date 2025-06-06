
import { useEffect, useState } from 'react'

export function useScrollProgress(limit = 60) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const ratio = Math.min(scrollY / limit, 1)
      setProgress(ratio)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [limit])

  return progress
}
