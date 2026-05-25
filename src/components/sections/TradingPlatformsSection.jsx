import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Globe, TrendingUp, ArrowRight, Check, Zap, BarChart3, Shield } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../cards/GlassCard'

const platforms = [
  {
    id: 'mt5',
    icon: <Monitor size={28} />,
    title: 'Professional Terminal',
    subtitle: 'High-Performance Workspace',
    description: 'Everything you need to analyze, execute, and manage risk — without clutter. Web, desktop, and mobile terminals with advanced charting, algos, and FIX connectivity for eligible accounts.',
    features: [
      'Depth of Market (DOM)',
      'One-click trading',
      'Advanced order types',
      'FIX / API connectivity',
      'MQL5 algorithm support',
      'Custom workspace layouts',
    ],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    id: 'quotes',
    icon: <TrendingUp size={28} />,
    title: 'Real-Time Quotes',
    subtitle: 'Lightning-Fast Data Feeds',
    description: 'Sophisticated charting tools for precise technical analysis. Stay ahead with sub-millisecond price updates and 100+ built-in technical indicators.',
    features: [
      '100+ technical indicators',
      'Multiple chart types & timeframes',
      'Real-time price alerts',
      'High-resolution history',
      'Multi-device synchronization',
      'Custom alert logic',
    ],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
  },
  {
    id: 'analysis',
    icon: <BarChart3 size={28} />,
    title: 'Market Analysis',
    subtitle: 'Institutional-Grade Insights',
    description: 'Keep you ahead with real-time sentiment analysis, economic calendars, and direct news feeds from global exchanges.',
    features: [
      'Global news feeds',
      'Economic calendars',
      'Sentiment analysis tools',
      'Expert market commentary',
      'Risk management calculators',
      'Institutional research access',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

export default function TradingPlatformsSection() {
  const [activePlatform, setActivePlatform] = useState('mt5')
  const active = platforms.find(p => p.id === activePlatform)

  return (
    <section className="premium-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#DAA520]/[0.01] blur-[120px]" />

      <div className="section-container relative z-10">
        <SectionHeading
          badge="Trading Platforms"
          title='Professional Tools for <span class="text-gradient-blue">Serious Traders</span>'
          subtitle="Powerful trading platforms designed for precision and speed."
        />

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((platform) => (
            <motion.button
              key={platform.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActivePlatform(platform.id)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-400 ${
                activePlatform === platform.id
                  ? 'bg-[#DAA520]/15 text-[#DAA520] border border-[#DAA520]/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]'
                  : 'bg-white/[0.03] text-[#A0A0B0] border border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {platform.icon}
              <span>{platform.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Platform Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-[#DAA520]/10 text-[#DAA520]">
                    {active.icon}
                  </div>
                  <div>
                    <h3 className="heading-sm text-white">{active.title}</h3>
                    <p className="text-sm text-[#A0A0B0]">{active.subtitle}</p>
                  </div>
                </div>
                <p className="body-md">{active.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {active.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#DAA520]/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#DAA520]" />
                    </div>
                    <span className="text-sm text-[#A0A0B0]">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-blue group mt-4"
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Visual */}
            <GlassCard tilt hover={false} className="p-0 overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/40 to-transparent" />
                
                {/* Overlay UI Elements */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#DAA520] font-semibold uppercase tracking-wider">Live Trading</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-emerald-400">Active</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <div className="text-xs text-[#6B6B7B]">Balance</div>
                        <div className="text-sm font-bold text-white font-mono">$125,430.00</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#6B6B7B]">P&L</div>
                        <div className="text-sm font-bold text-emerald-400 font-mono">+$2,847.50</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#6B6B7B]">Margin</div>
                        <div className="text-sm font-bold text-white font-mono">32.4%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

