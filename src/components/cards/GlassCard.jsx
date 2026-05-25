import { motion } from 'framer-motion'
import { useTilt } from '../../hooks'

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true, 
  tilt = true, 
  glow = false, 
  delay = 0,
  onClick 
}) {
  const { ref, tilt: tiltValues, handleMouseMove, handleMouseLeave } = useTilt(8)

  return (
    <motion.div
      ref={tilt ? ref : null}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      onMouseMove={tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      onClick={onClick}
      style={tilt ? {
        transform: `perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg)`,
        transformStyle: 'preserve-3d',
      } : {}}
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-gradient-to-br from-white/[0.04] to-white/[0.01]
        backdrop-blur-xl border border-white/[0.06]
        transition-all duration-500 ease-out cursor-pointer
        ${hover ? 'hover:border-[#DAA520]/20 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]' : ''}
        ${glow ? 'shadow-[0_0_30px_rgba(212,175,55,0.06)]' : ''}
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#DAA520]/[0.02] to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

