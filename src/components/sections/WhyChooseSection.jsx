import { motion } from 'framer-motion'
import { Monitor, Zap, Globe, Shield, BarChart3, Layers } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../cards/GlassCard'

const features = [
  {
    icon: <Monitor size={24} />,
    title: 'Discover Platforms',
    description: 'Analyze, execute, and manage risk without clutter. Web, desktop, and mobile terminals with advanced charting, algos, and FIX connectivity.',
    color: '#DAA520',
  },
  {
    icon: <Zap size={24} />,
    title: 'Execution Quality',
    description: 'Co-located infrastructure with sub-millisecond routing and transparent slippage controls for institutional performance.',
    color: '#EF4444',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Markets',
    description: 'FX majors & minors, indices, metals, energies, and crypto CFDs all from a single institutional margin account.',
    color: '#DAA520',
  },
  {
    icon: <Shield size={24} />,
    title: 'Risk Controls',
    description: 'Negative balance protection, margin alerts, and granular position sizing controls across all your symbols.',
    color: '#EF4444',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Real-Time Quotes',
    description: 'Lightning-fast data feeds and sophisticated charting tools with 100+ indicators for precise technical analysis.',
    color: '#DAA520',
  },
  {
    icon: <Layers size={24} />,
    title: 'Trading Architecture',
    description: 'Precision engineered structures. Select from Standard, Pro, or Prime — all built to an institutional standard.',
    color: '#EF4444',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="premium-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#DAA520]/[0.02] blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#EF4444]/[0.02] blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title='Engineered for <span class="text-gradient-blue">Institutional Performance</span>'
          subtitle="Every element of EleiteGlobalMarket is designed to give you an institutional edge in the global markets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <GlassCard key={i} delay={i * 0.1} glow>
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ 
                  background: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="body-sm">{feature.description}</p>

              {/* Bottom glow line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.color}40, transparent)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

