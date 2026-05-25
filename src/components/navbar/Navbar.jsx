import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, TrendingUp, BarChart3, Globe, 
  Monitor, Smartphone, Layers, Gem, Bitcoin, Clock,
  Users, Building2, Phone, Mail, MessageSquare, ShieldCheck, ChevronRight, Zap, ChevronDown,
  Award, BookOpen, Play, Layout
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import logo from '../../assets/Eleite_logo.png'

const navLinks = [
  { id: 'why', label: 'Why EGM', path: '/why-us' },
  { id: 'trading', label: 'Trading', path: '/trading' },
  { id: 'discover', label: 'Discover', path: '/discover' },
  { id: 'markets', label: 'Markets', path: '/markets' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setActiveMega(null)
  }, [location])

  const renderMegaMenu = (id) => {
    switch (id) {
      case 'trading':
        return (
          <div className="grid grid-cols-12 gap-8 p-8 max-w-6xl mx-auto">
            <div className="col-span-7 space-y-6">
              <Link to="/trading" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#DAA520] border border-white/5">
                  <Monitor size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white group-hover/item:text-[#DAA520] transition-colors">Trading Platforms</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-bold text-[#6B6B7B]">MT5</span>
                  </div>
                  <p className="text-sm text-[#A0A0B0] mt-1">Compare MT5, web, and mobile terminals with execution-focused tooling.</p>
                </div>
              </Link>
              <Link to="/trading" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#DAA520] border border-white/5">
                  <Layers size={24} />
                </div>
                <div>
                  <span className="text-lg font-bold text-white group-hover/item:text-[#DAA520] transition-colors text-left block">Account Types</span>
                  <p className="text-sm text-[#A0A0B0] mt-1 text-left">See Standard, Pro, and Prime specs with margin, spreads, and routing highlights.</p>
                </div>
              </Link>
            </div>
            <div className="col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-6 flex flex-col">
              <div className="relative z-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#EF4444]/20 flex items-center justify-center">
                    <ShieldCheck size={16} className="text-[#EF4444]" />
                  </div>
                  <span className="text-sm font-bold text-white">Institutional Grade</span>
                </div>
                <h4 className="text-xl font-black text-white/40 leading-tight">BUILT FOR LOW-LATENCY ROUTING TO GLOBAL EXCHANGES</h4>
              </div>
              
              <div className="absolute inset-0 z-10 opacity-40">
                <img 
                  src="/assets/mt5-terminal.png" 
                  alt="MT5 Trading" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )
      case 'discover':
        return (
          <div className="grid grid-cols-12 gap-8 p-8 max-w-6xl mx-auto">
            <div className="col-span-7 grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="col-span-2 mb-4">
                <h5 className="text-[10px] font-black text-[#6B6B7B] uppercase tracking-[0.2em]">Our Ecosystem</h5>
              </div>
              <Link to="/discover" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                <div className="p-2.5 rounded-xl bg-white/[0.03] text-primary-blue border border-white/5"><Users size={20} /></div>
                <div>
                  <span className="text-sm font-bold text-white group-hover/item:text-[#DAA520] transition-colors block">Copy Trading</span>
                  <p className="text-[11px] text-[#A0A0B0] mt-1">Auto-copy top performers.</p>
                </div>
              </Link>
              <Link to="/discover" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                <div className="p-2.5 rounded-xl bg-white/[0.03] text-primary-blue border border-white/5"><Award size={20} /></div>
                <div>
                  <span className="text-sm font-bold text-white group-hover/item:text-[#DAA520] transition-colors block">Competitions</span>
                  <p className="text-[11px] text-[#A0A0B0] mt-1">Win exclusive prizes.</p>
                </div>
              </Link>
              <Link to="/discover" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                <div className="p-2.5 rounded-xl bg-white/[0.03] text-primary-blue border border-white/5"><BookOpen size={20} /></div>
                <div>
                  <span className="text-sm font-bold text-white group-hover/item:text-[#DAA520] transition-colors block">Learning Center</span>
                  <p className="text-[11px] text-[#A0A0B0] mt-1">From basics to advanced.</p>
                </div>
              </Link>
              <Link to="/discover" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                <div className="p-2.5 rounded-xl bg-white/[0.03] text-primary-blue border border-white/5"><Zap size={20} /></div>
                <div>
                  <span className="text-sm font-bold text-white group-hover/item:text-[#DAA520] transition-colors block">Refer a Friend</span>
                  <p className="text-[11px] text-[#A0A0B0] mt-1">Earn rewards together.</p>
                </div>
              </Link>
            </div>
            <div className="col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-6 flex flex-col">
              <div className="relative z-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#DAA520]/20 flex items-center justify-center">
                    <Users size={16} className="text-[#DAA520]" />
                  </div>
                  <span className="text-sm font-bold text-white">Social Hub</span>
                </div>
                <h4 className="text-xl font-black text-white/40 leading-tight uppercase">Join the global elite trading community</h4>
              </div>
              <div className="absolute inset-0 z-10 opacity-40">
                <img src="/assets/discover-menu.png" alt="Discover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )
      case 'markets':
        return (
          <div className="grid grid-cols-12 gap-8 p-8 max-w-6xl mx-auto">
            <div className="col-span-7 grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp size={20} />, title: 'Forex', badge: '50+ PAIRS', desc: 'Trade majors and crosses.' },
                { icon: <BarChart3 size={20} />, title: 'Indices', badge: 'GLOBAL', desc: 'Major benchmarks CFDs.' },
                { icon: <Gem size={20} />, title: 'Commodities', badge: 'METALS', desc: 'Energies, metals, softs.' },
                { icon: <Bitcoin size={20} />, title: 'Crypto CFDs', badge: '24/7', desc: 'Speculate on digital pairs.' },
              ].map((item, i) => (
                <Link key={i} to="/markets" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] text-primary-blue border border-white/5">{item.icon}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover/item:text-[#DAA520] transition-colors">{item.title}</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-bold text-[#6B6B7B] uppercase tracking-wider">{item.badge}</span>
                    </div>
                    <p className="text-[11px] text-[#A0A0B0] mt-1">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-6 flex flex-col">
              <div className="relative z-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent-emerald/20 flex items-center justify-center">
                    <Globe size={16} className="text-accent-emerald" />
                  </div>
                  <span className="text-sm font-bold text-white">Market Depth</span>
                </div>
                <h4 className="text-xl font-black text-white/40 leading-tight uppercase">Direct access to 1,200+ global symbols</h4>
              </div>
              <div className="absolute inset-0 z-10 opacity-40">
                <img src="/assets/markets-menu.png" alt="Markets" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="grid grid-cols-12 gap-8 p-8 max-w-6xl mx-auto">
            <div className="col-span-7 space-y-4">
              {[
                { icon: <Mail size={20} />, title: 'Contact form', desc: 'Send a structured request — we respond within 12 hours.' },
                { icon: <MessageSquare size={20} />, title: 'FAQ & Help', desc: 'Guides, status, and policy references for existing workflows.' },
                { icon: <Users size={20} />, title: 'Partner Desk', desc: 'Introducing brokers and institutional introductions.' },
              ].map((item, i) => (
                <Link key={i} to="/contact" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors group/item">
                  <div className="p-3 rounded-xl bg-white/[0.03] text-primary-blue border border-white/5">{item.icon}</div>
                  <div>
                    <span className="text-base font-bold text-white group-hover/item:text-[#DAA520] transition-colors">{item.title}</span>
                    <p className="text-sm text-[#A0A0B0] mt-1">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-6 flex flex-col">
              <div className="relative z-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
                    <Phone size={16} className="text-primary-blue" />
                  </div>
                  <span className="text-sm font-bold text-white">Global Desk</span>
                </div>
                <h4 className="text-xl font-black text-white/40 leading-tight uppercase">Multilingual support available 24/5</h4>
              </div>
              <div className="absolute inset-0 z-10 opacity-40">
                <img src="/assets/contact-menu.png" alt="Contact" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        onMouseLeave={() => setActiveMega(null)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center ${
          isScrolled || activeMega
            ? 'bg-bg-primary/80 backdrop-blur-2xl border-b border-border-subtle shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50">
            <img src={logo} alt="Logo" className="w-45 h-24" />
              {/* <span className="text-xl md:text-2xl font-black tracking-tighter">
                <span className="text-text-primary">Suceed</span>
                <span className="text-gradient-blue">Capital</span>
                <span className="text-accent-emerald">FX</span>
              </span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center bg-white/[0.03] border border-white/5 rounded-full px-2 py-1 backdrop-blur-md">
              {navLinks.map((link) => {
                const hasSubmenu = ['trading', 'discover', 'markets', 'contact'].includes(link.id);
                const isActive = activeMega === link.id || (location.pathname === link.path && !activeMega);
                const className = `px-6 h-full flex items-center text-sm font-bold tracking-tight transition-all duration-300 rounded-full cursor-pointer ${
                  isActive ? 'text-text-primary bg-bg-card' : 'text-text-secondary hover:text-text-primary'
                }`;

                return (
                  <div
                    key={link.id}
                    className="relative h-12 flex items-center"
                    onMouseEnter={() => {
                      if (hasSubmenu) {
                        setActiveMega(link.id)
                      } else {
                        setActiveMega(null)
                      }
                    }}
                  >
                    {hasSubmenu ? (
                      <span className={className}>
                        {link.label}
                      </span>
                    ) : (
                      <Link to={link.path} className={className}>
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 z-50">
              
              <Link to="https://crm.tradecapitalmarket.com/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium btn-blue !py-2.5 !px-6 flex items-center gap-2 group"
                >
                  <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-xs font-bold">LOGIN</span>
                </motion.button>
              </Link>

              <a href="https://crm.tradecapitalmarket.com/register">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium btn-outline-blue !py-2.5 !px-6 flex items-center gap-2 group"
                >
                  <span className="text-xs font-bold">SIGN UP</span>
                  <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </a>
              
              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-white"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Container */}
        <AnimatePresence>
          {activeMega && (['why', 'trading', 'discover', 'markets', 'contact'].includes(activeMega)) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 left-0 right-0 bg-bg-secondary/95 backdrop-blur-3xl border-b border-border-subtle overflow-hidden shadow-2xl"
              onMouseEnter={() => setActiveMega(activeMega)}
            >
              <div className="section-container">
                {renderMegaMenu(activeMega)}
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden bg-[#0A0A0F] pt-24 px-4 h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pb-24">
              {navLinks.map((link) => (
                <div key={link.id} className="border-b border-white/[0.03] last:border-0">
                  <button
                    onClick={() => setActiveMega(activeMega === link.id ? null : link.id)}
                    className="w-full flex items-center justify-between py-4 text-xl font-bold text-white hover:text-primary-blue-light transition-colors"
                  >
                    <span>{link.label}</span>
                    {['why', 'trading', 'discover', 'markets', 'contact'].includes(link.id) && (
                      <motion.div
                        animate={{ rotate: activeMega === link.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-[#6B6B7B]" />
                      </motion.div>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeMega === link.id && ['why', 'trading', 'discover', 'markets', 'contact'].includes(link.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pb-6 pl-2">
                          {link.id === 'why' && (
                            <div className="grid grid-cols-1 gap-3">
                              {[
                                { icon: <ShieldCheck size={18} />, title: 'Heavily Regulated' },
                                { icon: <Building2 size={18} />, title: 'US$ 322M Capital' },
                                { icon: <Zap size={18} />, title: 'ECN 0.0 Pips' },
                                { icon: <TrendingUp size={18} />, title: '500:1 Leverage' },
                              ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                  <div className="text-[#DAA520]">{item.icon}</div>
                                  <span className="text-xs font-bold text-white">{item.title}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {link.id === 'trading' && (
                            <>
                              <Link to="/trading" className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                <div className="p-2.5 rounded-xl bg-white/[0.03] text-[#DAA520]"><Monitor size={20} /></div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-white">Trading Platforms</span>
                                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-[8px] font-bold text-[#6B6B7B]">MT5</span>
                                  </div>
                                  <p className="text-[11px] text-[#A0A0B0] mt-1">Compare MT5, web, and mobile terminals with execution-focused tooling.</p>
                                </div>
                              </Link>
                              <Link to="/trading" className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                <div className="p-2.5 rounded-xl bg-white/[0.03] text-[#DAA520]"><Layers size={20} /></div>
                                <div>
                                  <span className="text-sm font-bold text-white">Account Types</span>
                                  <p className="text-[11px] text-[#A0A0B0] mt-1">See Standard, Pro, and Prime specs with margin, spreads, and routing highlights.</p>
                                </div>
                              </Link>
                            </>
                          )}
                          {link.id === 'discover' && (
                            <div className="space-y-6">
                              <div>
                                <h6 className="text-[10px] font-bold text-[#6B6B7B] uppercase mb-3">Our Offering</h6>
                                <div className="grid grid-cols-1 gap-2">
                                  {['Copy Trading', 'Competitions', 'Traders Club', 'Referral'].map((item, i) => (
                                    <Link key={i} to="/discover" className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white font-bold">{item}</Link>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h6 className="text-[10px] font-bold text-[#6B6B7B] uppercase mb-3">Tools & Education</h6>
                                <div className="grid grid-cols-2 gap-2">
                                  {['Learning', 'Live Ed', 'Blog', 'News', 'Tools', 'Calendar'].map((item, i) => (
                                    <Link key={i} to="/discover" className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[10px] text-white font-bold text-center">{item}</Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          {link.id === 'markets' && (
                            <div className="grid grid-cols-1 gap-2">
                              {[
                                { icon: <TrendingUp size={18} />, title: 'Forex', badge: '50+ PAIRS' },
                                { icon: <BarChart3 size={18} />, title: 'Indices', badge: 'GLOBAL' },
                                { icon: <Gem size={18} />, title: 'Commodities', badge: 'METALS' },
                                { icon: <Bitcoin size={18} />, title: 'Crypto CFDs', badge: '24/7' },
                              ].map((item, i) => (
                                <Link key={i} to="/markets" className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                  <div className="text-[#DAA520]">{item.icon}</div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-white">{item.title}</span>
                                    <span className="text-[8px] font-bold text-[#6B6B7B]">{item.badge}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                          {link.id === 'contact' && (
                            <>
                              <Link to="/contact" className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="text-[#DAA520]"><Mail size={18} /></div>
                                <span className="text-xs font-bold text-white">Contact form</span>
                              </Link>
                              <Link to="/contact" className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="text-[#DAA520]"><MessageSquare size={18} /></div>
                                <span className="text-xs font-bold text-white">FAQ & Support</span>
                              </Link>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-8 space-y-4">
                <button className="w-full btn-premium btn-blue py-4 text-xs font-bold">OPEN ACCOUNT</button>
                <button className="w-full btn-premium btn-outline-blue py-4 text-xs font-bold">LOGIN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

