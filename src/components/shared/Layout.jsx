import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import SmoothScroll from '../animations/SmoothScroll'
import CustomCursor from '../animations/CustomCursor'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-[#0A0A0F]">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10"
      >
        <Outlet />
      </motion.main>
      
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  )
}

