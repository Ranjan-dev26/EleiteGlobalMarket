import { motion } from 'framer-motion'
import { Users, Building2, Percent, ArrowRight, Gift, TrendingUp, Globe, Shield } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../cards/GlassCard'

const partnerTypes = [
  {
    icon: <Users size={28} />,
    title: 'Introducing Brokers',
    description: 'Earn competitive commissions by referring clients. Get dedicated support, marketing materials, and real-time tracking.',
    features: ['Up to $15/lot rebates', 'Real-time reporting', 'Multi-tier sub-IB system', 'Dedicated IB manager'],
    color: '#DAA520',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Institutional Introductions',
    description: 'Partner with us at an institutional level. Custom liquidity solutions, white-label platforms, and API integration.',
    features: ['Custom liquidity pools', 'White-label solutions', 'FIX API connectivity', 'Dedicated prime services'],
    color: '#EF4444',
  },
]

const commissionTiers = [
  { level: 'Silver', lots: '0 - 100', rebate: '$8/lot', color: '#A0A0B0' },
  { level: 'Gold', lots: '100 - 500', rebate: '$10/lot', color: '#DAA520' },
  { level: 'Platinum', lots: '500 - 2000', rebate: '$12/lot', color: '#EF4444' },
  { level: 'Diamond', lots: '2000+', rebate: '$15/lot', color: '#F4D03F' },
]

export default function PartnersSection() {
  return (
    <section className="premium-section relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />

      <div className="section-container relative z-10">
        <SectionHeading
          badge="Partnership"
          title='Grow With <span class="text-gradient-blue">EleiteGlobalMarket</span>'
          subtitle="Partner with an institutional-grade broker and unlock premium revenue streams."
        />

        {/* Partner Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnerTypes.map((type, i) => (
            <GlassCard key={i} delay={i * 0.15} className="p-8">
              <div
                className="p-4 rounded-2xl inline-block mb-6"
                style={{ background: `${type.color}12`, color: type.color }}
              >
                {type.icon}
              </div>
              <h3 className="heading-sm text-white mb-3">{type.title}</h3>
              <p className="body-md mb-6">{type.description}</p>
              
              <div className="space-y-3 mb-8">
                {type.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: type.color }} />
                    <span className="text-sm text-[#A0A0B0]">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-outline-blue group text-xs"
              >
                Apply Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </GlassCard>
          ))}
        </div>

        {/* Commission Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl mb-12"
        >
          <h3 className="heading-sm text-white mb-8 text-center">Commission Tiers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {commissionTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all"
              >
                <div className="text-sm font-bold mb-2" style={{ color: tier.color }}>{tier.level}</div>
                <div className="text-2xl font-bold text-white font-mono mb-2">{tier.rebate}</div>
                <div className="text-xs text-[#6B6B7B]">{tier.lots} lots/mo</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Referral Flow */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: <Users size={20} />, step: '01', title: 'Register', desc: 'Apply as an IB partner' },
            { icon: <Gift size={20} />, step: '02', title: 'Get Tools', desc: 'Access marketing materials' },
            { icon: <TrendingUp size={20} />, step: '03', title: 'Refer', desc: 'Share with your network' },
            { icon: <Percent size={20} />, step: '04', title: 'Earn', desc: 'Get paid on every trade' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center p-6"
            >
              <div className="text-4xl font-bold text-[#DAA520]/10 mb-3 font-mono">{step.step}</div>
              <div className="w-10 h-10 rounded-xl bg-[#DAA520]/10 text-[#DAA520] flex items-center justify-center mx-auto mb-3">
                {step.icon}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
              <p className="text-xs text-[#6B6B7B]">{step.desc}</p>

              {i < 3 && (
                <div className="hidden md:block absolute top-1/3 -right-2 text-[#DAA520]/20">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

