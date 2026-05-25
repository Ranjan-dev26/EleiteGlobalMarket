import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const nodeTypes = [
  { label: 'Banks', color: '#3B82F6' },
  { label: 'Hedge Funds', color: '#8B5CF6' },
  { label: 'Prime Brokers', color: '#3B82F6' },
  { label: 'Family Offices', color: '#F97316' },
  { label: 'Government', color: '#10B981' },
  { label: 'Asset Managers', color: '#EC4899' },
  { label: 'Brokers', color: '#6366F1' },
]

export default function EcosystemSection() {
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nodes = useRef(
    (() => {
      const items = []
      const innerCount = isMobile ? 5 : 8
      const outerCount = isMobile ? 7 : 12

      // Inner ring
      for (let i = 0; i < innerCount; i++) {
        const angle = (i / innerCount) * Math.PI * 2
        items.push({
          id: `inner-${i}`,
          type: nodeTypes[i % nodeTypes.length],
          radius: isMobile ? 120 : 180,
          angle,
          size: isMobile ? 45 : 60,
        })
      }
      // Outer ring
      if (!isMobile) {
        for (let i = 0; i < outerCount; i++) {
          const angle = (i / outerCount) * Math.PI * 2 + 0.3
          items.push({
            id: `outer-${i}`,
            type: nodeTypes[(i + 3) % nodeTypes.length],
            radius: 320,
            angle,
            size: 50,
          })
        }
      }
      return items
    })()
  ).current

  return (
    <section className="premium-section relative overflow-hidden transition-colors duration-500">
      <div className="section-container relative z-10">
        <SectionHeading
          badge="Universal Connectivity"
          title='Institutional Bridge <span class="text-gradient-blue">& Retail Access</span>'
          subtitle="Succeed FX bridges the gap between institutional liquidity and retail trading. Connect seamlessly with MT5, secure your assets with USDT, and trade global markets 24/5."
        />

        <div className="relative h-[450px] md:h-[800px] w-full flex items-center justify-center perspective-1000">
          {/* Background Glow */}
          <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-primary-blue/5 blur-[120px]" />

          {/* Lines and Particles */}
          <svg 
            viewBox="-500 -500 1000 1000"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            {nodes.map((node) => {
              const x = Math.cos(node.angle) * node.radius
              const y = Math.sin(node.angle) * node.radius
              return (
                <g key={`group-${node.id}`}>
                  <motion.path
                    d={`M 0 0 L ${x} ${y}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    stroke={node.type.color}
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  {!isMobile && !shouldReduceMotion && (
                    <motion.circle
                      r="2"
                      fill={node.type.color}
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      style={{ 
                        offsetPath: `path('M 0 0 L ${x} ${y}')`,
                      }}
                    />
                  )}
                </g>
              )
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const x = Math.cos(node.angle) * node.radius
            const y = Math.sin(node.angle) * node.radius
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 100, 
                  delay: Math.random() * 0.4 
                }}
                className="absolute will-change-transform"
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                <motion.div
                  animate={!shouldReduceMotion ? { 
                    y: [0, -5, 0],
                    scale: [1, 1.03, 1]
                  } : {}}
                  transition={{ 
                    duration: 4 + Math.random() * 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="flex flex-col items-center justify-center rounded-full shadow-lg border border-border-subtle backdrop-blur-sm"
                  style={{ 
                    width: node.size, 
                    height: node.size,
                    background: `radial-gradient(circle at 30% 30%, ${node.type.color}66, ${node.type.color}11)`,
                  }}
                >
                  <span className="text-[7px] md:text-[10px] font-bold text-white text-center leading-tight px-1">
                    {node.type.label}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <motion.div
              animate={!shouldReduceMotion ? { 
                scale: [1, 1.02, 1],
              } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-28 h-28 md:w-48 md:h-48 rounded-full flex items-center justify-center border-2 border-primary-blue/40 bg-bg-card relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-blue-low),transparent_70%)]" />
              <div className="text-center z-10">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-6xl font-black text-gradient-blue tracking-tighter"
                >
                  EGM
                </motion.div>
                <div className="text-[7px] md:text-[10px] font-bold text-primary-blue uppercase tracking-[0.3em] mt-1">
                  Exchange
                </div>
              </div>
              
              {!isMobile && !shouldReduceMotion && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 border border-dashed border-primary-blue/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-dotted border-accent-emerald/10 rounded-full"
                  />
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

