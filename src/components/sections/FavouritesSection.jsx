import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const favourites = [
  {
    title: 'Trade with our best spreads',
    desc: 'Trade Gold with 1.6 pips spreads and reduce costs on other popular instruments with the Ultra Low account.',
    link: 'Start trading',
    image: '/assets/spreads.png',
    size: 'wide',
    bg: 'bg-gradient-to-r from-[#1a1a25] to-[#252535]',
  },
  {
    title: '100% Bonus',
    desc: 'Use our funds to trade more, reduce your risk, and boost your returns. Get a 100% Bonus up to $100',
    link: 'Claim your bonus',
    image: '/assets/bonus.png',
    size: 'narrow',
    bg: 'bg-[#1D4ED8]',
  },
  {
    title: 'EGM Competitions',
    desc: 'Trade your way to the top and win your share of $100,000+ in withdrawable cash prizes.',
    link: 'Join now',
    image: '/assets/competitions.png',
    size: 'narrow',
    bg: 'bg-[#0A0A0F]',
  },
  {
    title: 'EGM Copy trading',
    desc: 'Join 700,000+ traders who copy winning trading strategies or share your trades and earn commissions.',
    link: 'Start copy trading',
    image: '/assets/copytrading.png',
    size: 'wide',
    bg: 'bg-[#1D4ED8]',
  },
]

export default function FavouritesSection() {
  return (
    <section className="premium-section bg-transparent overflow-hidden">
      <div className="section-container">
        <SectionHeading
          title='Discover our traders&apos; <span class="text-gradient-blue">favourites</span>'
          subtitle="Explore some of our must-have products that keep everyone trading with us time and again."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favourites.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group rounded-[2rem] overflow-hidden ${
                item.size === 'wide' ? 'md:col-span-2' : 'md:col-span-1'
              } ${item.bg} min-h-[420px] md:h-[400px] border border-white/[0.05] flex flex-col`}
            >
              {/* Content */}
              <div className={`relative z-30 p-6 md:p-10 h-full flex flex-col justify-between ${
                item.size === 'wide' ? 'max-w-[80%] md:max-w-[60%]' : 'max-w-full'
              }`}>
                <div className="space-y-4">
                  <h3 className={`font-black text-white leading-[1.1] tracking-tight drop-shadow-lg ${
                    item.size === 'wide' ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-white/90 leading-relaxed drop-shadow-md ${
                    item.size === 'wide' ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                  }`}>
                    {item.desc}
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 font-bold text-white group/btn bg-gradient-to-r from-primary-blue to-primary-blue-light rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.5)] w-fit transition-all duration-300 ${
                    item.size === 'wide' ? 'px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base' : 'px-4 py-2 text-xs md:text-sm'
                  }`}
                >
                  {item.link}
                  <ArrowUpRight size={item.size === 'wide' ? 20 : 16} className="group-hover/btn:rotate-45 transition-transform" />
                </motion.button>
              </div>

              {/* Image */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Advanced Overlay for readability */}
              <div className={`absolute inset-0 z-20 pointer-events-none bg-gradient-to-r ${
                item.size === 'wide' 
                  ? 'from-black/90 via-black/60 to-transparent' 
                  : 'from-black/85 via-black/40 to-transparent'
              }`} />
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
