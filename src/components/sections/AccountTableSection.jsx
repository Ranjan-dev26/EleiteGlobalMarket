import { motion } from 'framer-motion'
import { Check, Info, ShieldCheck, Zap, Award } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../cards/GlassCard'

const specs = [
  { label: 'Minimum deposit', standard: '$100', pro: '$2,000', prime: '$25,000' },
  { label: 'Leverage', standard: 'Up to 1:500', pro: 'Up to 1:200', prime: 'Custom' },
  { label: 'Spreads', standard: 'From 1.0 pip', pro: 'From 0.2 pips', prime: 'From 0.0 pips' },
  { label: 'Commission', standard: 'Commission-free FX', pro: 'Raw spreads + low commission', prime: 'Negotiable schedule' },
  { label: 'Execution', standard: 'Secure, low-latency', pro: 'Enhanced routing & depth', prime: 'Dedicated liquidity paths' },
  { label: 'Markets', standard: '1,200+ symbols', pro: 'Same + VPS eligibility', prime: 'Exclusive venues' },
  { label: 'Trading platform', standard: 'MT5, web & mobile', pro: 'Same + priority updates', prime: '+ FIX / API onboarding' },
  { label: 'ECN technology', standard: '-', pro: 'Tier-1 depth aggregation', prime: 'Full ECN stack' },
  { label: 'Support & desk', standard: '24/5 multilingual', pro: 'Priority support line', prime: 'Dedicated relationship coverage' },
]

export default function AccountTableSection() {
  return (
    <section className="premium-section bg-transparent">
      <div className="section-container">
        <SectionHeading
          badge="Trading Architecture"
          title='Precision <span class="text-gradient-blue">Engineered</span>'
          subtitle="Select the optimal structure for your market navigation. Three distinct profiles — Standard, Pro, and Prime — one institutional standard of excellence."
        />

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[800px] bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-8 text-xs font-bold text-text-muted uppercase tracking-widest w-1/4">Specifications</th>
                  <th className="p-8 w-1/4">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-white mb-1">Standard</span>
                      <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Versatile Entry</span>
                    </div>
                  </th>
                  <th className="p-8 w-1/4 bg-primary-blue/[0.03]">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-black text-white">Pro</span>
                        <span className="px-1.5 py-0.5 rounded bg-primary-blue/20 text-[8px] font-bold text-primary-blue uppercase">Popular</span>
                      </div>
                      <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Raw Liquidity</span>
                    </div>
                  </th>
                  <th className="p-8 w-1/4">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-white mb-1">Prime</span>
                      <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Bespoke Access</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={i} className="group border-b border-white/[0.03] last:border-0 hover:bg-white/[0.01] transition-colors">
                    <td className="p-6 pl-8 text-sm font-medium text-text-secondary">{spec.label}</td>
                    <td className="p-6 text-sm font-bold text-white">{spec.standard}</td>
                    <td className="p-6 text-sm font-bold text-white bg-primary-blue/[0.03]">{spec.pro}</td>
                    <td className="p-6 text-sm font-bold text-white">{spec.prime}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-8 pl-8">
                    <div className="flex items-center gap-2 text-[10px] text-text-muted">
                      <Info size={12} />
                      <span>Leverage & spreads vary by jurisdiction</span>
                    </div>
                  </td>
                  <td className="p-8">
                    <button className="btn-premium btn-outline-blue !py-2.5 !px-6 !text-[10px] w-full">BEGIN TRADING</button>
                  </td>
                  <td className="p-8 bg-primary-blue/[0.03]">
                    <button className="btn-premium btn-blue !py-2.5 !px-6 !text-[10px] w-full shadow-lg shadow-primary-blue/20">BEGIN TRADING</button>
                  </td>
                  <td className="p-8">
                    <button className="btn-premium btn-outline-blue !py-2.5 !px-6 !text-[10px] w-full">BEGIN TRADING</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
           <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Negative Balance Protection</div>
                <div className="text-[10px] text-text-muted">Security (T&Cs Apply)</div>
              </div>
           </div>
           <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Sub-millisecond Routing</div>
                <div className="text-[10px] text-text-muted">Co-located Architecture</div>
              </div>
           </div>
           <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-10 h-10 rounded-full bg-accent-emerald/10 flex items-center justify-center text-accent-emerald">
                <Award size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Full ECN Stack</div>
                <div className="text-[10px] text-text-muted">Tier-1 Aggregation</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
