import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Monitor, Globe, Smartphone, ArrowRight, Check, Zap, BarChart3, 
  Shield, Cpu, LineChart, Settings, Lock, Download
} from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/cards/GlassCard'
import PageHero3D from '../../components/three/PageHero3D'

const platforms = [
  {
    id: 'mt5-desktop',
    icon: <Monitor size={28} />,
    title: 'MT5 Desktop',
    subtitle: 'Professional Trading Terminal',
    description: 'The most powerful version of MetaTrader 5 with full functionality. Advanced charting, algorithmic trading, and professional-grade tools.',
    features: [
      { icon: <LineChart size={14} />, text: '80+ technical indicators & analytical objects' },
      { icon: <Cpu size={14} />, text: 'Algorithmic trading with MQL5 IDE' },
      { icon: <BarChart3 size={14} />, text: 'Depth of Market (Level II)' },
      { icon: <Settings size={14} />, text: 'Custom indicators, scripts & EAs' },
      { icon: <Zap size={14} />, text: 'One-click & keyboard trading' },
      { icon: <Shield size={14} />, text: '128-bit encryption' },
    ],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    platforms: ['Windows', 'macOS'],
  },
  {
    id: 'mt5-web',
    icon: <Globe size={28} />,
    title: 'MT5 Web Trader',
    subtitle: 'Browser-Based Trading',
    description: 'Trade directly from your browser with full MT5 functionality. No installation required — access your account from any device.',
    features: [
      { icon: <Globe size={14} />, text: 'Trade from any browser, any device' },
      { icon: <LineChart size={14} />, text: 'Full charting & analysis tools' },
      { icon: <Zap size={14} />, text: 'Real-time quotes & execution' },
      { icon: <Lock size={14} />, text: 'Secure SSL connection' },
      { icon: <Settings size={14} />, text: 'Synchronized with desktop & mobile' },
      { icon: <Shield size={14} />, text: 'No download required' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    platforms: ['Chrome', 'Firefox', 'Safari', 'Edge'],
  },
  {
    id: 'mt5-mobile',
    icon: <Smartphone size={28} />,
    title: 'MT5 Mobile',
    subtitle: 'Trade On The Go',
    description: 'Never miss a trade opportunity. Full-featured mobile trading app for iOS and Android with push notifications.',
    features: [
      { icon: <Smartphone size={14} />, text: 'Native iOS & Android apps' },
      { icon: <LineChart size={14} />, text: '30+ technical indicators' },
      { icon: <Zap size={14} />, text: 'Push notification alerts' },
      { icon: <Settings size={14} />, text: 'Full order management' },
      { icon: <Shield size={14} />, text: 'Biometric authentication' },
      { icon: <Download size={14} />, text: 'Free download' },
    ],
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
    platforms: ['iOS', 'Android'],
  },
]

const accountTypes = [
  {
    name: 'Standard',
    popular: false,
    features: {
      'Minimum Deposit': '$100',
      'Spreads From': '1.2 pips',
      'Commission': 'None',
      'Leverage Up To': '1:500',
      'Minimum Lot': '0.01',
      'Execution': 'Market',
      'Stop Out Level': '30%',
      'Swap-Free': 'Available',
    },
    color: '#A0A0B0',
  },
  {
    name: 'Pro',
    popular: true,
    features: {
      'Minimum Deposit': '$1,000',
      'Spreads From': '0.4 pips',
      'Commission': '$3.50/lot',
      'Leverage Up To': '1:500',
      'Minimum Lot': '0.01',
      'Execution': 'Market',
      'Stop Out Level': '30%',
      'Swap-Free': 'Available',
    },
    color: '#DAA520',
  },
  {
    name: 'Prime',
    popular: false,
    features: {
      'Minimum Deposit': '$10,000',
      'Spreads From': '0.0 pips',
      'Commission': '$2.50/lot',
      'Leverage Up To': '1:500',
      'Minimum Lot': '0.01',
      'Execution': 'Market',
      'Stop Out Level': '20%',
      'Swap-Free': 'Available',
    },
    color: '#EF4444',
  },
]

export default function Trading() {
  const [activePlatform, setActivePlatform] = useState('mt5-desktop')
  const active = platforms.find(p => p.id === activePlatform)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070C] via-[#07070C]/80 to-[#07070C] z-10" />
          <PageHero3D mode="wireframe" color="#DAA520" />
        </div>
        
        <div className="section-container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520] animate-pulse shadow-[0_0_10px_#DAA520]" />
              <span className="text-[10px] font-black text-[#DAA520] uppercase tracking-[0.3em]">Trading Platforms</span>
            </motion.div>
            <h1 className="heading-xl text-text-primary mb-8 tracking-tighter">
              Professional <br />
              <span className="text-gradient-blue">Trading Ecosystem</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Institutional-grade technology designed for precision execution and deep market insight. 
              Trade the world with the world's most advanced tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="premium-section">
        <div className="section-container">
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

          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#DAA520]/10 text-[#DAA520]">{active.icon}</div>
                  <div>
                    <h2 className="heading-sm text-white">{active.title}</h2>
                    <p className="text-sm text-[#A0A0B0]">{active.subtitle}</p>
                  </div>
                </div>
                <p className="body-md mb-8">{active.description}</p>

                <div className="space-y-4 mb-8">
                  {active.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#DAA520]/10 flex items-center justify-center text-[#DAA520]">
                        {feature.icon}
                      </div>
                      <span className="text-sm text-[#A0A0B0]">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs text-[#6B6B7B]">Available on:</span>
                  {active.platforms.map((p, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-[#A0A0B0] border border-white/[0.06]">
                      {p}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button whileHover={{ scale: 1.05 }} className="btn-premium btn-blue text-xs">
                    Download Now <Download size={14} />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} className="btn-premium btn-outline-blue text-xs">
                    Learn More
                  </motion.button>
                </div>
              </div>

              <GlassCard tilt hover={false} className="p-0 overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full aspect-[16/10] object-cover opacity-60 rounded-xl"
                  loading="lazy"
                />
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Account Types */}
      <section className="premium-section">
        <div className="section-container">
          <SectionHeading
            badge="Account Types"
            title='Choose Your <span class="text-gradient-blue">Trading Edge</span>'
            subtitle="Three account types engineered for different trading styles and experience levels."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {accountTypes.map((account, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                  account.popular ? 'border-[#DAA520]/30 shadow-[0_0_40px_rgba(212,175,55,0.1)]' : ''
                }`}
              >
                {account.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DAA520] via-[#F4D03F] to-[#DAA520]" />
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">{account.name}</h3>
                    {account.popular && (
                      <span className="px-3 py-1 rounded-full bg-[#DAA520]/15 text-[#DAA520] text-xs font-semibold">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
                    {Object.entries(account.features).map(([key, value], j) => (
                      <div key={j} className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                        <span className="text-xs text-[#6B6B7B]">{key}</span>
                        <span className="text-sm font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full btn-premium text-xs py-3 ${
                      account.popular ? 'btn-blue' : 'btn-outline-blue'
                    }`}
                  >
                    Open {account.name} Account
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

