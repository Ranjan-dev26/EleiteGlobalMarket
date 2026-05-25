import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/shared/Layout'
import LoadingScreen from './components/animations/LoadingScreen'

// Lazy load route pages
const Home = lazy(() => import('./routes/home/Home'))
const Trading = lazy(() => import('./routes/home/Trading'))
const Markets = lazy(() => import('./routes/home/Markets'))
const About = lazy(() => import('./routes/home/About'))
const Contact = lazy(() => import('./routes/home/Contact'))
const WhyUs = lazy(() => import('./routes/home/WhyUs'))
const DiscoverPage = lazy(() => import('./routes/discover/DiscoverPage'))

// Page loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A2D26]">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-[#DAA520] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs text-[#6B6B7B] font-mono">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LoadingScreen />
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="why-us" element={<WhyUs />} />
                <Route path="trading" element={<Trading />} />
                <Route path="markets" element={<Markets />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="discover" element={<DiscoverPage />} />
                <Route path="discover/:slug" element={<DiscoverPage />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

