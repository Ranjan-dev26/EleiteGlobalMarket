import { Suspense, lazy, useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Shield, Zap, Globe } from 'lucide-react'
import { useMousePosition, useInView } from '../../hooks'
import AnimatedCounter from '../ui/AnimatedCounter'
import MarketTicker from '../ui/MarketTicker'

import { useTheme } from '../../context/ThemeContext'

const HeroScene = lazy(() => import('../three/HeroScene'))

const stats = [
  { end: 50, suffix: '+', label: 'Currency Pairs' },
  { end: 1200, suffix: '+', label: 'Instruments' },
  { end: 0.1, suffix: 'ms', label: 'Execution Speed', decimals: 1 },
  { end: 24, suffix: '/5', label: 'Trading Hours' },
]

const slides = [
  { 
    line1: 'The Execution Edge', 
    line2: 'Serious Traders Choose.', 
    subheadline: 'Tight variable spreads on majors, transparent depth, and a platform tuned for repeat fills — not excuses.' 
  },
  { 
    line1: 'Institutional Depth', 
    line2: 'Without Compromise.', 
    subheadline: 'Access global liquidity pools with sub-millisecond execution and bank-grade security protocols.' 
  },
  { 
    line1: 'Institutional Risk', 
    line2: 'Grade Risk Controls.', 
    subheadline: 'Margin alerts, hedging workflows, and financing transparency — disciplined sizing across FX & CFDs.' 
  },
  { 
    line1: 'Professional Grade', 
    line2: 'Trading Technology.', 
    subheadline: 'A platform engineered for precision, speed, and reliability in every market condition.' 
  },
]

function DynamicTypewriter({ sequences, delay = 0, onIndexChange }) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(50)

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = sequences[index % sequences.length]
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1))
        setTypingSpeed(25) // Faster deletion for 144Hz feel
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1))
        setTypingSpeed(45) // Faster typing for 144Hz feel
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2500)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        const nextIndex = index + 1
        setIndex(nextIndex)
        if (onIndexChange) onIndexChange(nextIndex)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index, sequences, typingSpeed, onIndexChange])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[4px] h-[1.1em] bg-primary-blue ml-2 align-middle shadow-[0_0_15px_rgba(59,130,246,0.8)]"
      />
    </span>
  )
}

export default function HeroSection() {
  const { isDark } = useTheme()
  const [ref, isInView] = useInView({ once: true })
  const [index, setIndex] = useState(0)

  const line1Sequences = slides.map(s => s.line1)
  const line2Sequences = slides.map(s => s.line2)
  const currentSlide = index % slides.length

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent transition-colors duration-500">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video Background */}
        <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
          isDark 
            ? 'bg-gradient-to-b from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]' 
            : 'bg-gradient-to-b from-[#F8F9FB] via-[#F8F9FB]/60 to-[#F8F9FB]'
        }`} />
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isDark ? 0.15 : 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
          >
            <source src="https://cdn.coverr.co/videos/coverr-stock-market-data-on-screen-7731/1080p.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className={`absolute w-[800px] h-[800px] rounded-full blur-[150px] bg-primary-blue transition-opacity ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
          style={{ left: '10%', top: '10%' }}
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-primary-red transition-opacity ${isDark ? 'opacity-[0.02]' : 'opacity-[0.04]'}`}
          style={{ right: '10%', bottom: '10%' }}
        />
      </div>

      {/* 3D Scene */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 1 : 0.7 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 z-[5]"
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 section-container pt-32 pb-8 flex items-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse shadow-[0_0_10px_#EF4444]" />
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em]">Institutional Trading Platform</span>
          </motion.div>

          {/* Dynamic Headline */}
          <div className="relative min-h-[120px] md:min-h-[160px] mb-6 flex flex-col justify-center">
            <h1 className="text-4xl md:text-7xl font-black text-text-primary tracking-tighter leading-[1] uppercase max-w-4xl mx-auto">
              <DynamicTypewriter sequences={line1Sequences} onIndexChange={setIndex} />
            </h1>
          </div>

          {/* Subheadline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {slides[currentSlide].subheadline}
            </motion.p>
          </AnimatePresence>

          {/* Quick Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12"
          >
            {[
              { icon: <Zap size={16} className="text-primary-blue" />, text: '0.0 Pips' },
              { icon: <Shield size={16} className="text-primary-blue" />, text: 'Regulated' },
              { icon: <TrendingUp size={16} className="text-primary-blue" />, text: '1:500 Leverage' },
              { icon: <Globe size={16} className="text-primary-blue" />, text: '100+ Countries' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-premium btn-blue min-w-[200px] !py-3 !text-sm">
              Start Trading Now
              <ArrowRight size={18} />
            </button>
            <button className="btn-premium btn-outline-blue min-w-[200px] !py-3 !text-sm">
              Watch Platform Demo
              <Play size={18} fill="currentColor" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 w-full border-t border-border-subtle bg-bg-primary/50 backdrop-blur-md">
        <div className="section-container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-text-primary mb-1">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Ticker */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="relative z-30 mt-auto border-t border-border-subtle bg-bg-secondary/50 backdrop-blur-md"
      >
        <MarketTicker />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

