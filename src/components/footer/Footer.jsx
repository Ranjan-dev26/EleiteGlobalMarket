import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, ArrowUpRight,
  Shield, FileText, AlertTriangle
} from 'lucide-react'
import logo from '../../assets/Eleite_logo.png'

const footerLinks = {
  trading: {
    title: 'Trading',
    links: [
      { label: 'MT5 Platform', href: '/trading' },
      { label: 'MT5 Web Trader', href: '/trading' },
      { label: 'Account Types', href: '/trading' },
      { label: 'Deposit & Withdraw', href: '/trading' },
      { label: 'Trading Tools', href: '/trading' },
    ]
  },
  markets: {
    title: 'Markets',
    links: [
      { label: 'Forex', href: '/markets' },
      { label: 'Indices', href: '/markets' },
      { label: 'Commodities', href: '/markets' },
      { label: 'Crypto CFDs', href: '/markets' },
      { label: 'Market Hours', href: '/markets' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Partners', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'News', href: '/about' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Risk Disclosure', href: '#' },
      { label: 'AML Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ]
  }
}

const XIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const LinkedInIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
const YouTubeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

const socialLinks = [
  { icon: <XIcon />, href: '#', label: 'Twitter' },
  { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
  { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
  { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#070710] border-t border-white/[0.04]">
      {/* Newsletter Section */}
      <div className="section-container py-10 border-b border-white/[0.04]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="heading-md text-white mb-2">Stay Ahead of the Markets</h3>
            <p className="body-md text-[#6B6B7B]">Get institutional insights delivered to your inbox weekly.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-80 px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[#DAA520]/40 transition-colors text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium btn-blue px-6 py-3.5 whitespace-nowrap text-xs"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 group z-50">
          <img src={logo} alt="Logo" className="w-45 h-24" />

            {/* <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-bold">
                <span className="text-white">Suceed</span>
                <span className="text-gradient-blue">Capital</span>
                <span className="text-[#EF4444] font-extrabold">FX</span>
              </span> */}
            </Link>
            <p className="body-sm mb-6 max-w-xs">
              Institutional-grade trading experience for modern global traders. Trade smarter with premium execution.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@EleiteGlobalMarket.com" className="flex items-center gap-2 text-sm text-[#A0A0B0] hover:text-[#DAA520] transition-colors">
                <Mail size={14} />
                support@EleiteGlobalMarket.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-[#A0A0B0] hover:text-[#DAA520] transition-colors">
                <Phone size={14} />
                +1 (234) 567-890
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[#6B6B7B] hover:text-[#DAA520] hover:border-[#DAA520]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#6B6B7B] hover:text-[#DAA520] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Disclaimer */}
      <div className="section-container pb-8">
        <div className="p-6 rounded-2xl bg-[#0D0D18] border border-white/[0.04]">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle size={16} className="text-[#DAA520] mt-0.5 shrink-0" />
            <h5 className="text-xs font-semibold text-[#DAA520] tracking-wide">Risk Disclaimer</h5>
          </div>
          <p className="text-xs text-[#6B6B7B] leading-relaxed">
            Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. 
            The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, 
            you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility 
            exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest 
            money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading 
            and seek advice from an independent financial advisor if you have any doubts. Past performance is not indicative 
            of future results.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-container py-6 border-t border-white/[0.04]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B7B]">
            © {new Date().getFullYear()} EleiteGlobalMarket. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#6B6B7B] hover:text-[#DAA520] transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#6B6B7B] hover:text-[#DAA520] transition-colors">Terms</a>
            <a href="#" className="text-xs text-[#6B6B7B] hover:text-[#DAA520] transition-colors">Cookies</a>
            <a href="#" className="text-xs text-[#6B6B7B] hover:text-[#DAA520] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

