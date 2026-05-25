import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { TrendingUp, BarChart3, Gem, Bitcoin, Globe, Clock, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../cards/GlassCard'
import AnimatedCounter from '../ui/AnimatedCounter'

const FinancialGlobe = lazy(() => import('../three/FinancialGlobe'))

const markets = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Forex',
    count: '50+',
    countEnd: 50,
    suffix: '+',
    label: 'pairs',
    description: 'Trade majors and crosses with tight spreads and transparent routing.',
    color: '#3B82F6',
    hours: '24/5',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Indices',
    count: 'Global',
    countEnd: 20,
    suffix: '+',
    label: 'indices',
    description: 'Major benchmarks and equity index CFDs from one margin wallet.',
    color: '#EF4444',
    hours: 'Venue hours',
  },
  {
    icon: <Gem size={24} />,
    title: 'Commodities & Metals',
    count: 'Metals',
    countEnd: 30,
    suffix: '+',
    label: 'instruments',
    description: 'Energies, metals, and softs — depth suited for tactical sizing.',
    color: '#3B82F6',
    hours: 'Venue hours',
  },
  {
    icon: <Globe size={24} />,
    title: 'All Markets',
    count: '1,200+',
    countEnd: 1200,
    suffix: '+',
    label: 'instruments',
    description: 'Full universe overview — forex, indices, commodities, crypto.',
    color: '#EF4444',
    hours: '24/5',
  },
  {
    icon: <Bitcoin size={24} />,
    title: 'Crypto CFDs',
    count: '24/7',
    countEnd: 40,
    suffix: '+',
    label: 'pairs',
    description: 'Speculate on crypto pairs against fiat — controlled leverage.',
    color: '#60A5FA',
    hours: '24/7',
  },
]

export default function MarketsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, once: true })

  return (
    <section ref={ref} className="premium-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/[0.015] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#EF4444]/[0.015] blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          badge="Markets"
          title='Access <span class="text-gradient-blue">Global Markets</span>'
          subtitle="Trade the world's most liquid markets with institutional-grade execution and competitive pricing."
        />

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {markets.map((market, i) => (
            <GlassCard key={i} delay={i * 0.1} className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: `${market.color}15`, color: market.color }}
                >
                  {market.icon}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                  <Clock size={12} className="text-[#6B6B7B]" />
                  <span className="text-xs text-[#A0A0B0]">{market.hours}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">{market.title}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-gradient-blue font-mono">{market.count}</span>
                <span className="text-xs text-[#6B6B7B]">{market.label}</span>
              </div>
              <p className="body-sm">{market.description}</p>

              {/* Animated chart line */}
              <div className="mt-4 h-12 relative overflow-hidden rounded-lg bg-white/[0.02]">
                <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <motion.path
                    d="M 0 40 Q 20 35 40 30 T 80 25 T 120 15 T 160 20 T 200 10"
                    fill="none"
                    stroke={market.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                  <motion.path
                    d={`M 0 40 Q 20 35 40 30 T 80 25 T 120 15 T 160 20 T 200 10 L 200 50 L 0 50 Z`}
                    fill={`url(#gradient-${i})`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={market.color} stopOpacity="0.15" />
                      <stop offset="100%" stopColor={market.color} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Globe Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-md text-white mb-4"
            >
              Connected to <span className="text-gradient-blue">Global Liquidity</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="body-md mb-8"
            >
              Our infrastructure is co-located with major financial hubs worldwide, 
              ensuring ultra-low latency and direct market access.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Liquidity Providers', value: '25+' },
                { label: 'Data Centers', value: '8' },
                { label: 'Countries Served', value: '150+' },
                { label: 'Uptime', value: '99.99%' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="text-xl font-bold text-gradient-blue font-mono">{stat.value}</div>
                  <div className="text-xs text-[#6B6B7B] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            {inView ? (
              <Suspense fallback={
                <div className="w-full h-[500px] flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <FinancialGlobe />
              </Suspense>
            ) : (
              <div className="w-full h-[500px]" />
            )}
          </div>
        </div>

        {/* Market Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="heading-sm text-white mb-2">Market Hours</h4>
              <p className="body-sm">Trade around the clock across different market sessions.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { market: 'Forex', hours: '24/5', active: true },
                { market: 'Indices', hours: 'Venue hours', active: true },
                { market: 'Crypto CFDs', hours: '24/7', active: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                  <span className="text-sm text-white font-medium">{item.market}</span>
                  <span className="text-xs text-[#6B6B7B]">{item.hours}</span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-premium btn-outline-blue text-xs py-2.5 whitespace-nowrap"
            >
              View Schedule
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

