import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Building2, Zap, Globe, TrendingUp, Users, Award, Layout, Play, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import TestimonialsSection from '../../components/sections/TestimonialsSection'
import PageHero3D from '../../components/three/PageHero3D'

function TypewriterText({ text, delay = 0 }) {
  return (
    <motion.span>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.05, delay: delay + i * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const advantages = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Heavily Regulated',
    desc: 'Authorized and regulated by top-tier financial authorities across 5 continents, ensuring the highest level of security for your funds.',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Institutional Capital',
    desc: 'With over US$ 322 Million in paid-up capital, we provide a foundation of stability and trust for traders worldwide.',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Full ECN Model',
    desc: 'Direct market access with spreads starting from 0.0 pips and ultra-fast execution speeds under 0.1ms.',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1611974714014-483ef0a3699c?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Premium Leverage',
    desc: 'Flexible leverage options up to 500:1, allowing you to maximize your trading potential with institutional conditions.',
    color: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1642790103517-130f14691e84?q=80&w=800&auto=format&fit=crop'
  }
]

export default function WhyUs() {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-12 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070C] via-[#07070C]/80 to-[#07070C] z-10" />
          <PageHero3D mode="torus" color="#3B82F6" />
        </div>

        <div className="section-container relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
              <span className="text-[10px] font-bold text-text-secondary tracking-wide">The EGM Advantage</span>
            </motion.div>
            
            <h1 className="heading-xl text-text-primary mb-8">
              <TypewriterText text="Why" /> <br />
              <span className="text-gradient-blue">
                <TypewriterText text="Eleite Global Markets?" delay={0.3} />
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              Experience a decade of institutional excellence, 
              delivering transparency and performance to the global trading community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Advantages Cards with Images */}
      <section className="py-12 relative">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative h-[400px] rounded-[3rem] overflow-hidden border border-border-subtle"
              >
                {/* Background Image */}
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={item.image} 
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity ${isDark ? 'opacity-40 group-hover:opacity-60' : 'opacity-60 group-hover:opacity-80'}`}
                />
                <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
                  isDark ? 'bg-gradient-to-t from-[#07070C] via-[#07070C]/80 to-transparent' : 'bg-gradient-to-t from-[#F8F9FB] via-[#F8F9FB]/70 to-transparent'
                }`} />
                
                {/* Content */}
                <div className="relative z-20 h-full p-10 flex flex-col justify-end items-start text-left">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-border-subtle backdrop-blur-xl"
                    style={{ backgroundColor: `${item.color}22`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black text-text-primary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-text-secondary max-w-sm leading-relaxed mb-6 transform group-hover:translate-x-2 transition-transform duration-500">
                    {item.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-bold tracking-wide text-primary-blue">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section with Cinematic Reveal */}
      <section className="py-16 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] transition-colors duration-500 ${isDark ? 'bg-[#3B82F6]/5' : 'bg-[#3B82F6]/10'}`} />
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-[10px] font-black text-[#3B82F6] tracking-widest">Trust & Security</span>
              <h2 className="text-4xl md:text-6xl font-black text-text-primary leading-[1.0] tracking-tighter">
                Institutional <br />
                <span className="text-gradient-blue">Safety Protocols</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Your capital is protected by bank-grade security systems and rigorous global compliance standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  'Segregated Client Funds',
                  'Negative Balance Protection',
                  'SSL 256-bit Encryption',
                  'Global Tier-1 Licensing',
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateY: 30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square perspective-1000"
            >
              <div className="w-full h-full rounded-[4rem] border border-border-subtle bg-bg-card p-12 flex flex-col items-center justify-center overflow-hidden backdrop-blur-3xl shadow-[0_0_100px_rgba(59,130,246,0.1)]">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield size={160} className="text-[#3B82F6] drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                </motion.div>
                <div className="mt-12 text-center">
                  <div className="text-3xl font-black text-text-primary mb-2">12+ Years</div>
                  <div className="text-[10px] font-black text-text-muted tracking-wide">Operational Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-12">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-16 rounded-[4rem] bg-gradient-to-b from-[#3B82F6]/5 to-transparent border border-border-subtle backdrop-blur-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3B82F611,transparent_70%)]" />
            <h2 className="text-4xl font-black text-text-primary mb-10 relative z-10">Start Your Institutional Journey Today.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(59,130,246,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-blue group"
              >
                Open Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-outline-blue"
              >
                Contact Desk
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

