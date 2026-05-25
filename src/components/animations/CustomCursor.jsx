import { useEffect, useRef } from 'react'
import { useMousePosition } from '../../hooks'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const mouse = useMousePosition()

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${mouse.x - 16}px, ${mouse.y - 16}px)`
    }
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`
    }
  }, [mouse])

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#DAA520]/30 pointer-events-none z-[9999] transition-transform duration-300 ease-out mix-blend-difference hidden lg:block"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#DAA520] pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden lg:block"
      />
    </>
  )
}

