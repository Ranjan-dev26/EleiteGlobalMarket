import { motion } from 'framer-motion'
import { 
  Target, Eye, Heart, Shield, Award, Users, Globe, 
  Building2, Clock, ArrowRight, CheckCircle, Zap
} from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/cards/GlassCard'
import AnimatedCounter from '../../components/ui/AnimatedCounter'
import PageHero3D from '../../components/three/PageHero3D'

const timeline = [
  { year: '2018', title: 'Founded', description: 'EleiteGlobalMarket was established with a vision to democratize institutional trading.' },
  { year: '2019', title: 'First 10,000 Clients', description: 'Rapid growth as traders discovered our premium execution and tight spreads.' },
  { year: '2020', title: 'Global Expansion', description: 'Expanded operations to 50+ countries with localized support and infrastructure.' },
  { year: '2021', title: 'MT5 Integration', description: 'Launched MetaTrader 5 with custom institutional-grade plugins and tools.' },
  { year: '2022', title: '100K Milestone', description: 'Surpassed 100,000 active traders with $50B+ monthly trading volume.' },
  { year: '2023', title: 'Crypto CFDs Launch', description: 'Introduced 40+ crypto CFD pairs with 24/7 trading availability.' },
  { year: '2024', title: 'AI-Powered Analytics', description: 'Integrated AI-driven market analysis and risk management tools.' },
  { year: '2025', title: 'New Era', description: 'Redefining what a modern institutional broker can be, with cutting-edge technology.' },
]

const values = [
  {
    icon: <Shield size={24} />,
    title: 'Trust & Security',
    description: 'Client funds are held in segregated tier-1 bank accounts. We maintain the highest standards of regulatory compliance.',
    color: '#3B82F6',
  },
  {
    icon: <Eye size={24} />,
    title: 'Full Transparency',
    description: 'No hidden fees, no dealing desk manipulation. Every execution is logged and available for your review.',
    color: '#EF4444',
  },
  {
    icon: <Zap size={24} />,
    title: 'Innovation',
    description: 'Continuously pushing the boundaries of trading technology with AI analytics, ultra-low latency, and smart routing.',
    color: '#3B82F6',
  },
  {
    icon: <Heart size={24} />,
    title: 'Client-Centric',
    description: 'Every decision we make puts our clients first. From 24/7 support to personalized account management.',
    color: '#EF4444',
  },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070C] via-[#07070C]/80 to-[#07070C] z-10" />
          <PageHero3D mode="distort" color="#3B82F6" />
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
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_10px_#3B82F6]" />
              <span className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.3em]">Our Story</span>
            </motion.div>
            <h1 className="heading-xl text-text-primary mb-8 tracking-tighter">
              Redefining <br />
              <span className="text-gradient-blue">Global Finance</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Building the future of institutional-grade trading, making it accessible 
              to every trader worldwide through cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="premium-section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <GlassCard delay={0} className="p-8">
              <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] inline-block mb-4">
                <Target size={28} />
              </div>
              <h3 className="heading-sm text-white mb-4">Our Mission</h3>
              <p className="body-md">
                To empower every trader with institutional-grade tools, execution, and market access. 
                We believe that professional trading capabilities should not be limited to hedge funds 
                and banks — they should be available to anyone with the ambition to trade the global markets.
              </p>
            </GlassCard>

            <GlassCard delay={0.15} className="p-8">
              <div className="p-3 rounded-xl bg-[#EF4444]/10 text-[#EF4444] inline-block mb-4">
                <Eye size={28} />
              </div>
              <h3 className="heading-sm text-white mb-4">Our Vision</h3>
              <p className="body-md">
                To be the world's most trusted and innovative trading partner. We envision a future 
                where every trader — from retail to institutional — has equal access to the deepest 
                liquidity pools, fastest execution, and most transparent pricing in the industry.
              </p>
            </GlassCard>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <AnimatedCounter end={150} suffix="+" label="Countries Served" />
            <AnimatedCounter end={100} suffix="K+" label="Active Traders" />
            <AnimatedCounter end={50} suffix="B+" label="Monthly Volume" prefix="$" />
            <AnimatedCounter end={24} suffix="/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="premium-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0D18] to-[#0A0A0F]" />
        
        <div className="section-container relative z-10">
          <SectionHeading
            badge="Our Journey"
            title='From Vision to <span class="text-gradient-blue">Global Impact</span>'
            subtitle="A timeline of milestones that shaped EleiteGlobalMarket."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#3B82F6]/40 via-[#EF4444]/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(212,175,55,0.4)] z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="text-sm font-bold text-[#3B82F6] font-mono mb-1">{item.year}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="body-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="premium-section">
        <div className="section-container">
          <SectionHeading
            badge="Our Values"
            title='What Drives <span class="text-gradient-blue">EleiteGlobalMarket</span>'
            subtitle="The principles that guide everything we do."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-8">
                <div className="p-3 rounded-xl inline-block mb-4" style={{ background: `${value.color}12`, color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="body-sm">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="premium-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-2xl text-center"
          >
            <div className="p-4 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] inline-block mb-6">
              <Building2 size={32} />
            </div>
            <h3 className="heading-md text-white mb-4">Institutional-Grade Infrastructure</h3>
            <p className="body-lg max-w-2xl mx-auto mb-8">
              Our trading infrastructure is built on enterprise-grade technology, co-located with 
              tier-1 liquidity providers in Equinix data centers worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <Zap size={20} />, label: 'Sub-ms Execution' },
                { icon: <Shield size={20} />, label: 'Bank-Grade Security' },
                { icon: <Globe size={20} />, label: 'Global Connectivity' },
                { icon: <Clock size={20} />, label: '99.99% Uptime' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02]"
                >
                  <div className="text-[#3B82F6]">{item.icon}</div>
                  <span className="text-xs text-[#A0A0B0]">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

