import { motion } from 'framer-motion'
import HeroSection from '../../components/hero/HeroSection'
import WhyChooseSection from '../../components/sections/WhyChooseSection'
import TradingPlatformsSection from '../../components/sections/TradingPlatformsSection'
import EcosystemSection from '../../components/sections/EcosystemSection'
import MarketsSection from '../../components/sections/MarketsSection'
import PartnersSection from '../../components/sections/PartnersSection'
import TestimonialsSection from '../../components/sections/TestimonialsSection'
import FAQSection from '../../components/sections/FAQSection'
import FavouritesSection from '../../components/sections/FavouritesSection'
import AccountTableSection from '../../components/sections/AccountTableSection'
import Global3DBackground from '../../components/three/Global3DBackground'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Global3DBackground />
      <HeroSection />
      <FavouritesSection />
      <WhyChooseSection />
      <TradingPlatformsSection />
      <AccountTableSection />
      <EcosystemSection />
      <MarketsSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
    </motion.div>
  )
}

