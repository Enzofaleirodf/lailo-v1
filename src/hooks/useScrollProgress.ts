
import { useEffect, useState } from "react"

export function useScrollProgress(limit = 60) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      const ratio = Math.min(scrollY / limit, 1)
      setProgress(ratio)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [limit])

  return progress
}
