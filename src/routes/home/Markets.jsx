import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart3, Gem, Bitcoin, Globe, Clock, ArrowRight, Search } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/cards/GlassCard'
import FavouritesSection from '../../components/sections/FavouritesSection'

const FinancialGlobe = lazy(() => import('../../components/three/FinancialGlobe'))
const LiveGraphScene = lazy(() => import('../../components/three/LiveGraphScene'))

const marketCategories = [
  {
    icon: <TrendingUp size={28} />,
    title: 'Forex',
    count: '50+',
    description: 'Trade major, minor, and exotic currency pairs with ultra-tight spreads starting from 0.0 pips.',
    hours: '24/5',
    color: '#DAA520',
    pairs: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CHF', 'NZD/USD', 'EUR/GBP', 'GBP/JPY'],
    spreads: 'From 0.0 pips',
    leverage: 'Up to 1:500',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Indices',
    count: '20+',
    description: 'Access major global equity indices including US30, US500, NAS100, UK100, GER40 and more.',
    hours: 'Venue hours',
    color: '#EF4444',
    pairs: ['US30', 'US500', 'NAS100', 'UK100', 'GER40', 'JPN225', 'AUS200', 'FRA40'],
    spreads: 'From 0.4 points',
    leverage: 'Up to 1:200',
  },
  {
    icon: <Gem size={28} />,
    title: 'Commodities & Metals',
    count: '30+',
    description: 'Trade gold, silver, crude oil, natural gas, and soft commodities with competitive conditions.',
    hours: 'Venue hours',
    color: '#F4D03F',
    pairs: ['XAU/USD', 'XAG/USD', 'WTI Oil', 'Brent Oil', 'Natural Gas', 'Copper', 'Platinum', 'Palladium'],
    spreads: 'From 0.1 pips',
    leverage: 'Up to 1:200',
  },
  {
    icon: <Bitcoin size={28} />,
    title: 'Crypto CFDs',
    count: '40+',
    description: 'Speculate on Bitcoin, Ethereum, and 40+ crypto pairs with controlled leverage and 24/7 availability.',
    hours: '24/7',
    color: '#EF4444',
    pairs: ['BTC/USD', 'ETH/USD', 'XRP/USD', 'SOL/USD', 'ADA/USD', 'DOT/USD', 'LINK/USD', 'AVAX/USD'],
    spreads: 'From $1.0',
    leverage: 'Up to 1:20',
  },
]

const allInstruments = [
  { name: 'EUR/USD', type: 'Forex', spread: '0.1', change: '+0.15%', up: true },
  { name: 'GBP/USD', type: 'Forex', spread: '0.3', change: '+0.22%', up: true },
  { name: 'USD/JPY', type: 'Forex', spread: '0.2', change: '-0.08%', up: false },
  { name: 'XAU/USD', type: 'Metal', spread: '0.15', change: '+0.45%', up: true },
  { name: 'US30', type: 'Index', spread: '0.8', change: '+0.34%', up: true },
  { name: 'BTC/USD', type: 'Crypto', spread: '12.0', change: '+1.23%', up: true },
  { name: 'NAS100', type: 'Index', spread: '0.6', change: '+0.56%', up: true },
  { name: 'WTI Oil', type: 'Commodity', spread: '0.03', change: '-0.15%', up: false },
]

const heroAssets = [
  { name: 'EURUSD', desc: 'Euro vs U.S. Dollar', icon: '🇪🇺🇺🇸', change: '+0.15%' },
  { name: 'US500', desc: 'S&P 500 (US500)', icon: '📈', change: '+0.34%' },
  { name: 'GOLD', desc: 'Gold', icon: '🪙', change: '+0.45%' },
  { name: 'COFFEE', desc: 'US Coffee', icon: '☕', change: '-0.12%' },
  { name: 'Apple', desc: 'Apple (AAPL.OQ)', icon: '🍎', change: '+0.82%' },
]

export default function Markets() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-[#07070C]" />}>
            <LiveGraphScene />
          </Suspense>
        </div>
        
        <div className="section-container relative z-20 pt-20 h-full flex flex-col justify-between">
          <div /> {/* Spacer */}
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-bold text-text-secondary mb-3"
            >
              Trusted by over <span className="text-text-primary">20 Million Traders</span>
            </motion.p>
            
            <h1 className="text-4xl md:text-7xl font-black text-text-primary mb-6 tracking-tighter leading-[1.0]">
              The Most Awarded Broker <br />
              <span className="text-gradient-blue italic">for a Reason</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Unlock the lowest gold spreads in the market with institutional execution.
            </p>

            <div className="flex flex-col items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-blue shadow-[0_0_50px_rgba(59,130,246,0.2)]"
              >
                Trade with Ultra Low spreads
              </motion.button>
              
              <div className="space-y-1">
                <p className="text-xs font-bold text-text-muted">Spreads as low as 1.6 pips on Gold</p>
                <p className="text-sm font-black text-text-primary">Easy Access to 1,400+ Global Assets</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Asset Grid */}
          <div className="pb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {heroAssets.map((asset, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 hover:bg-white/[0.05] transition-colors group cursor-pointer"
                >
                  <div className="text-2xl">{asset.icon}</div>
                  <div className="text-left">
                    <h4 className="text-sm font-black text-text-primary group-hover:text-primary-blue transition-colors">{asset.name}</h4>
                    <p className="text-[10px] text-text-muted truncate">{asset.desc}</p>
                  </div>
                  <div className={`ml-auto text-[10px] font-bold ${asset.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {asset.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Favourites Section */}
      <FavouritesSection />

      {/* Market Categories */}
      <section className="premium-section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {marketCategories.map((market, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl" style={{ background: `${market.color}15`, color: market.color }}>
                    {market.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#6B6B7B]" />
                    <span className="text-xs text-[#A0A0B0]">{market.hours}</span>
                  </div>
                </div>

                <h3 className="heading-sm text-white mb-2">{market.title}</h3>
                <p className="body-sm mb-6">{market.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-white/[0.02]">
                    <div className="text-lg font-bold text-gradient-blue font-mono">{market.count}</div>
                    <div className="text-xs text-[#6B6B7B]">Instruments</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02]">
                    <div className="text-sm font-bold text-white">{market.spreads}</div>
                    <div className="text-xs text-[#6B6B7B]">Spreads</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02]">
                    <div className="text-sm font-bold text-white">{market.leverage}</div>
                    <div className="text-xs text-[#6B6B7B]">Leverage</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {market.pairs.map((pair, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-xs text-[#A0A0B0] border border-white/[0.04]">
                      {pair}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments Table */}
      <section className="premium-section">
        <div className="section-container">
          <SectionHeading
            badge="Instruments"
            title='Popular <span class="text-gradient-blue">Instruments</span>'
            subtitle="Explore our most traded instruments with real-time spreads."
          />

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-white/[0.04] text-xs text-[#6B6B7B] font-semibold tracking-wide">
              <span>Instrument</span>
              <span>Type</span>
              <span>Spread</span>
              <span>Change</span>
              <span className="text-right">Action</span>
            </div>
            {allInstruments.map((instrument, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-5 gap-4 p-4 border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors items-center"
              >
                <span className="text-sm font-semibold text-white">{instrument.name}</span>
                <span className="text-xs text-[#A0A0B0]">{instrument.type}</span>
                <span className="text-sm font-mono text-[#A0A0B0]">{instrument.spread}</span>
                <span className={`text-sm font-mono font-semibold ${instrument.up ? 'text-emerald-400' : 'text-red-400'}`}>
                  {instrument.change}
                </span>
                <div className="text-right">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 rounded-lg bg-[#DAA520]/10 text-[#DAA520] text-xs font-semibold hover:bg-[#DAA520]/20 transition-colors"
                  >
                    Trade
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Globe */}
      <section className="premium-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Global Reach"
                title='Connected to <span class="text-gradient-blue">Every Market</span>'
                subtitle="Our infrastructure spans major financial centers worldwide."
                center={false}
              />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Financial Hubs', value: '12' },
                  { label: 'Liquidity Sources', value: '25+' },
                  { label: 'Avg. Execution', value: '<0.1ms' },
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
            <Suspense fallback={<div className="w-full h-[500px]" />}>
              <FinancialGlobe />
            </Suspense>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

