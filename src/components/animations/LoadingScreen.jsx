import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        const diff = Math.random() * 10 + 2
        return Math.min(prev + diff, 100)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[1000] bg-[#050508] overflow-hidden"
        >
          {/* Space Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            {/* Stars */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: Math.random() }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 border border-[#DAA520]/20 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 border border-[#EF4444]/10 rounded-full"
                />
                <span className="text-4xl md:text-6xl font-bold tracking-tighter text-gradient-blue">
                  <span >Eleite</span>
                  <span >Global</span>
                  <span>Markets</span>
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] uppercase tracking-[0.5em] text-[#DAA520] font-semibold"
              >
                Institutional Excellence
              </motion.div>
            </motion.div>
          </div>

          {/* Footer Loader */}
          <div className="absolute bottom-12 left-0 right-0 px-8 md:px-24 z-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between mb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-[#6B6B7B] uppercase tracking-widest">System Status</span>
                  <span className="text-xs font-mono text-white/80">Synchronizing Global Markets...</span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-mono font-light text-white/90 tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
              
              {/* Progress Bar Container */}
              <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#DAA520] via-[#F4D03F] to-[#EF4444]"
                  style={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
                {/* Glow effect on the tip */}
                <motion.div
                  className="absolute top-0 w-20 h-full bg-white/20 blur-md"
                  style={{ left: `calc(${progress}% - 80px)` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

