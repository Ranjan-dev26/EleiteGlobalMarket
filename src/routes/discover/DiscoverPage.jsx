import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, Target, Shield, TrendingUp, DollarSign, Trophy, Award, 
  Globe, Gem, Zap, BookOpen, Play, MessageSquare, BarChart3, Clock, 
  Layout, Search, CheckCircle2, ArrowRight, Sparkles, LineChart,
  UserPlus, BarChart2, PenTool, Tv, Video, Newspaper, Calendar,
  Calculator, Percent
} from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import PageHero3D from '../../components/three/PageHero3D'

function TypewriterText({ text, delay = 0 }) {
  return (
    <motion.span>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.04, delay: delay + i * 0.025 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

const pages = {
  'copy-trading': {
    badge: 'Social Trading',
    title: 'EGM Copy',
    titleGold: 'Trading',
    subtitle: 'Automatically replicate the strategies of top-performing traders in real-time with full risk control.',
    color: '#3B82F6',
    icon: <Users size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-stock-market-data-on-screen-7731/1080p.mp4',
    '3dMode': 'distort',
    features: [
      { icon: <Target size={24} />, title: 'Smart Matching', desc: 'AI-powered algorithm connects you with traders matching your risk profile.' },
      { icon: <Shield size={24} />, title: 'Risk Management', desc: 'Set stop-loss, max drawdown, and position limits per copied trader.' },
      { icon: <TrendingUp size={24} />, title: 'Real-Time Sync', desc: 'Trades are mirrored instantly with zero latency across all instruments.' },
      { icon: <DollarSign size={24} />, title: 'Zero Extra Fees', desc: 'No subscription costs. Only standard spreads apply to copied trades.' },
    ],
    stats: [
      { value: '10,000+', label: 'Active Strategies' },
      { value: '94%', label: 'Uptime SLA' },
      { value: '<50ms', label: 'Copy Latency' },
      { value: '$2.1B', label: 'Volume Copied' },
    ]
  },
  'competitions': {
    badge: 'Compete & Win',
    title: 'Trading',
    titleGold: 'Competitions',
    subtitle: 'Test your skills against thousands of traders and win cash prizes, funded accounts, and luxury rewards.',
    color: '#EF4444',
    icon: <Trophy size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-with-stock-charts-5765/1080p.mp4',
    '3dMode': 'wireframe',
    features: [
      { icon: <Trophy size={24} />, title: 'Weekly Challenges', desc: 'Fresh competitions every week with varying rules and prize pools.' },
      { icon: <Award size={24} />, title: 'Demo & Live', desc: 'Compete risk-free on demo or go all-in on live account contests.' },
      { icon: <Globe size={24} />, title: 'Global Leaderboard', desc: 'Real-time rankings with transparent P&L tracking for all participants.' },
      { icon: <DollarSign size={24} />, title: 'Huge Prizes', desc: 'Prize pools up to $100,000 with instant withdrawal of winnings.' },
    ],
    stats: [
      { value: '$5M+', label: 'Total Prizes Awarded' },
      { value: '50K+', label: 'Participants' },
      { value: '200+', label: 'Contests Run' },
      { value: '24/7', label: 'Live Rankings' },
    ]
  },
  'traders-club': {
    badge: 'Elite Community',
    title: 'EGM Traders',
    titleGold: 'Club',
    subtitle: 'Join an exclusive community of high-net-worth traders with VIP research, priority support, and institutional networking.',
    color: '#8B5CF6',
    icon: <Sparkles size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-high-tech-data-center-server-racks-and-flashing-lights-5272/1080p.mp4',
    '3dMode': 'torus',
    features: [
      { icon: <Sparkles size={24} />, title: 'VIP Events', desc: 'Exclusive webinars, meetups, and annual summit with industry leaders.' },
      { icon: <LineChart size={24} />, title: 'Pro Research', desc: 'Institutional-grade market analysis and daily trade ideas from analysts.' },
      { icon: <Shield size={24} />, title: 'Priority Support', desc: 'Dedicated account manager and 24/7 priority customer service.' },
      { icon: <Users size={24} />, title: 'Networking', desc: 'Connect with fund managers, prop traders, and institutional desks.' },
    ],
    stats: [
      { value: '5,000+', label: 'VIP Members' },
      { value: '50+', label: 'Annual Events' },
      { value: '99.9%', label: 'Satisfaction' },
      { value: '$50M+', label: 'Member Volume' },
    ]
  },
  'referral': {
    badge: 'Earn Together',
    title: 'Refer a',
    titleGold: 'Friend',
    subtitle: 'Share the EGM experience and earn generous commissions for every successful referral you make.',
    color: '#3B82F6',
    icon: <UserPlus size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-stock-market-data-on-screen-7731/1080p.mp4',
    '3dMode': 'wireframe',
    features: [
      { icon: <DollarSign size={24} />, title: 'High Commissions', desc: 'Earn up to $500 per qualified referral with no earning cap.' },
      { icon: <BarChart2 size={24} />, title: 'Live Dashboard', desc: 'Track clicks, signups, and payouts in real-time from your portal.' },
      { icon: <PenTool size={24} />, title: 'Marketing Kit', desc: 'Professional banners, landing pages, and tracking links provided.' },
      { icon: <Zap size={24} />, title: 'Instant Payouts', desc: 'Withdraw your commissions anytime with zero processing delay.' },
    ],
    stats: [
      { value: '$10M+', label: 'Commissions Paid' },
      { value: '25K+', label: 'Active Referrers' },
      { value: '$500', label: 'Max Per Referral' },
      { value: '24h', label: 'Payout Speed' },
    ]
  },
  'learning': {
    badge: 'Education Hub',
    title: 'Learning',
    titleGold: 'Center',
    subtitle: 'Master the markets with structured courses from beginner fundamentals to advanced quantitative strategies.',
    color: '#3B82F6',
    icon: <BookOpen size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-with-stock-charts-5765/1080p.mp4',
    '3dMode': 'torus',
    features: [
      { icon: <BookOpen size={24} />, title: 'Structured Courses', desc: 'Progressive curriculum from forex basics to advanced derivatives.' },
      { icon: <Tv size={24} />, title: 'Video Library', desc: '500+ professionally produced tutorial videos with subtitles.' },
      { icon: <Award size={24} />, title: 'Certificates', desc: 'Earn recognized completion certificates for each course module.' },
      { icon: <Target size={24} />, title: 'Quizzes & Tests', desc: 'Validate your knowledge with interactive assessments.' },
    ],
    stats: [
      { value: '500+', label: 'Video Lessons' },
      { value: '50+', label: 'Course Modules' },
      { value: '100K+', label: 'Graduates' },
      { value: '4.9★', label: 'Avg Rating' },
    ]
  },
  'live': {
    badge: 'Live Streams',
    title: 'Live',
    titleGold: 'Education',
    subtitle: 'Join expert-led webinars and live trading sessions to sharpen your skills in real market conditions.',
    color: '#EF4444',
    icon: <Video size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-high-tech-data-center-server-racks-and-flashing-lights-5272/1080p.mp4',
    '3dMode': 'distort',
    features: [
      { icon: <Video size={24} />, title: 'Daily Webinars', desc: 'Live market analysis sessions every trading day at 8AM GMT.' },
      { icon: <Users size={24} />, title: 'Interactive Q&A', desc: 'Ask questions directly to professional analysts during sessions.' },
      { icon: <Clock size={24} />, title: 'On-Demand Replays', desc: 'Missed a session? Watch recordings anytime from the archive.' },
      { icon: <Globe size={24} />, title: 'Multi-Language', desc: 'Sessions available in English, Arabic, Spanish, and Mandarin.' },
    ],
    stats: [
      { value: '1,000+', label: 'Sessions Held' },
      { value: '50K+', label: 'Live Viewers' },
      { value: '15+', label: 'Expert Analysts' },
      { value: '8', label: 'Languages' },
    ]
  },
  'blog': {
    badge: 'Market Insights',
    title: 'EGM',
    titleGold: 'Blog',
    subtitle: 'Stay ahead with daily market commentary, trade ideas, and exclusive industry analysis from our research desk.',
    color: '#F59E0B',
    icon: <Newspaper size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-stock-market-data-on-screen-7731/1080p.mp4',
    '3dMode': 'wireframe',
    features: [
      { icon: <Newspaper size={24} />, title: 'Daily Updates', desc: 'Fresh market analysis published every trading day before market open.' },
      { icon: <TrendingUp size={24} />, title: 'Trade Ideas', desc: 'Actionable setups with entry, stop-loss, and take-profit levels.' },
      { icon: <Globe size={24} />, title: 'Macro Analysis', desc: 'Deep dives into central bank policy, geopolitics, and macro trends.' },
      { icon: <PenTool size={24} />, title: 'Expert Authors', desc: 'Content written by CFA-qualified analysts with 10+ years experience.' },
    ],
    stats: [
      { value: '2,000+', label: 'Articles Published' },
      { value: '500K+', label: 'Monthly Readers' },
      { value: '15', label: 'Expert Writers' },
      { value: 'Daily', label: 'Update Frequency' },
    ]
  },
  'news': {
    badge: 'Market Intelligence',
    title: 'News &',
    titleGold: 'Analysis',
    subtitle: 'Real-time market news, institutional research, and AI-powered sentiment analysis at your fingertips.',
    color: '#06B6D4',
    icon: <Newspaper size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-with-stock-charts-5765/1080p.mp4',
    '3dMode': 'distort',
    features: [
      { icon: <Zap size={24} />, title: 'Real-Time Feed', desc: 'Breaking news delivered in milliseconds from global wire services.' },
      { icon: <LineChart size={24} />, title: 'Sentiment Tracker', desc: 'AI-powered market sentiment gauges across major currency pairs.' },
      { icon: <BarChart2 size={24} />, title: 'Technical Levels', desc: 'Auto-calculated support, resistance, and pivot points updated live.' },
      { icon: <Calendar size={24} />, title: 'Event Alerts', desc: 'Push notifications for high-impact economic releases and speeches.' },
    ],
    stats: [
      { value: '10K+', label: 'Daily Headlines' },
      { value: '<1s', label: 'Delivery Speed' },
      { value: '50+', label: 'News Sources' },
      { value: '24/7', label: 'Coverage' },
    ]
  },
  'tools': {
    badge: 'Pro Suite',
    title: 'Analytical',
    titleGold: 'Tools',
    subtitle: 'Professional-grade charting, pattern recognition, and quantitative analysis tools built for serious traders.',
    color: '#8B5CF6',
    icon: <BarChart2 size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-high-tech-data-center-server-racks-and-flashing-lights-5272/1080p.mp4',
    '3dMode': 'torus',
    features: [
      { icon: <LineChart size={24} />, title: 'Advanced Charts', desc: '100+ technical indicators with multi-timeframe analysis capability.' },
      { icon: <Target size={24} />, title: 'Pattern Scanner', desc: 'AI-powered detection of 35+ chart patterns across all instruments.' },
      { icon: <BarChart2 size={24} />, title: 'Market Depth', desc: 'Level 2 order book data with real-time bid/ask visualization.' },
      { icon: <Zap size={24} />, title: 'Algo Builder', desc: 'Visual strategy builder for automated trading without coding.' },
    ],
    stats: [
      { value: '100+', label: 'Indicators' },
      { value: '35+', label: 'Pattern Types' },
      { value: 'L2', label: 'Market Depth' },
      { value: '0ms', label: 'Data Latency' },
    ]
  },
  'calendar': {
    badge: 'Event Tracker',
    title: 'Economic',
    titleGold: 'Calendar',
    subtitle: 'Never miss a market-moving event with our comprehensive, real-time economic calendar and alert system.',
    color: '#10B981',
    icon: <Calendar size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-stock-market-data-on-screen-7731/1080p.mp4',
    '3dMode': 'wireframe',
    features: [
      { icon: <Calendar size={24} />, title: 'Global Coverage', desc: 'Events from 40+ countries including GDP, CPI, NFP, and rate decisions.' },
      { icon: <Clock size={24} />, title: 'Real-Time Updates', desc: 'Actual vs forecast figures updated instantly as data is released.' },
      { icon: <Zap size={24} />, title: 'Impact Filter', desc: 'Filter by impact level — low, medium, or high — to focus on what matters.' },
      { icon: <TrendingUp size={24} />, title: 'Historical Data', desc: '10 years of historical event data with market reaction analysis.' },
    ],
    stats: [
      { value: '40+', label: 'Countries' },
      { value: '500+', label: 'Monthly Events' },
      { value: '10yr', label: 'History Depth' },
      { value: 'Real-Time', label: 'Data Feed' },
    ]
  },
  'calculators': {
    badge: 'Risk Management',
    title: 'Forex',
    titleGold: 'Calculators',
    subtitle: 'Precision tools for pip value, margin requirements, position sizing, and profit/loss calculations.',
    color: '#F59E0B',
    icon: <Calculator size={40} />,
    video: 'https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-with-stock-charts-5765/1080p.mp4',
    '3dMode': 'distort',
    features: [
      { icon: <Calculator size={24} />, title: 'Pip Calculator', desc: 'Instantly calculate pip values for any pair in your account currency.' },
      { icon: <Percent size={24} />, title: 'Margin Calculator', desc: 'Determine exact margin requirements before opening a position.' },
      { icon: <Target size={24} />, title: 'Position Sizer', desc: 'Risk-based position sizing aligned with your trading plan rules.' },
      { icon: <DollarSign size={24} />, title: 'P&L Calculator', desc: 'Project potential profit and loss scenarios before executing.' },
    ],
    stats: [
      { value: '6', label: 'Calculator Types' },
      { value: '50+', label: 'Currency Pairs' },
      { value: '100%', label: 'Accuracy' },
      { value: 'Free', label: 'Access' },
    ]
  },
}

const defaultPage = pages['copy-trading']

export default function DiscoverPage() {
  const { slug } = useParams()
  const { isDark } = useTheme()
  const page = pages[slug] || defaultPage

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20 overflow-hidden transition-colors duration-500">

      {/* Section 1: Cinematic Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
            isDark 
              ? 'bg-gradient-to-b from-[#07070C] via-[#07070C]/50 to-[#07070C]' 
              : 'bg-gradient-to-b from-[#F8F9FB] via-[#F8F9FB]/40 to-[#F8F9FB]'
          }`} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <PageHero3D mode={page['3dMode']} color={page.color} />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-10 z-[5]"
          style={{ backgroundColor: page.color, top: '10%', left: '20%' }}
        />

        <div className="section-container relative z-20 text-center">
          <motion.div {...fadeUp(0)}>
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 12, delay: 0.3 }}
              className="inline-flex p-5 rounded-[2rem] bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-xl"
              style={{ color: page.color }}
            >
              {page.icon}
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: page.color }} />
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.3em]">{page.badge}</span>
          </motion.div>

          <h1 className="heading-xl text-text-primary mb-8">
            <TypewriterText text={page.title} /> <br />
            <span className="text-gradient-blue">
              <TypewriterText text={page.titleGold} delay={0.6} />
            </span>
          </h1>

          <motion.p {...fadeUp(1.2)} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {page.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Section 2: Stats Bar */}
      <section className="py-16 border-y border-border-subtle bg-bg-secondary/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {page.stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: page.color }}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Features Grid */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-5" style={{ backgroundColor: page.color }} />
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block" style={{ color: page.color }}>Core Features</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter">
              Everything You <span className="text-gradient-blue">Need</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}
                className="flex items-start gap-6 p-8 rounded-3xl border border-border-subtle backdrop-blur-sm group transition-all duration-500"
              >
                <div
                  className="p-4 rounded-2xl border border-border-subtle group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: `${page.color}15`, color: page.color }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-text-primary mb-2 tracking-tight">{feat.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visual Showcase */}
      <section className="py-24 bg-bg-secondary/30 border-y border-border-subtle relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()} className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: page.color }}>How It Works</span>
              <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter leading-tight">
                Simple. Powerful. <br />
                <span className="text-gradient-blue">Institutional.</span>
              </h2>
              <div className="space-y-6">
                {['Create your free EGM account in under 2 minutes', 'Complete verification with instant KYC processing', 'Fund your account using 20+ payment methods', 'Start using the platform with full feature access'].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border border-border-subtle group-hover:border-transparent transition-colors" style={{ backgroundColor: `${page.color}15`, color: page.color }}>
                      {i + 1}
                    </div>
                    <span className="text-sm font-bold text-text-secondary group-hover:text-text-primary transition-colors">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="w-full h-full rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-border-subtle p-16 flex flex-col items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ color: page.color }}
                  className="drop-shadow-[0_0_40px_currentColor]"
                >
                  {page.icon && <div className="scale-[4]">{page.icon}</div>}
                </motion.div>
                <div className="mt-16 text-center">
                  <div className="text-3xl font-black text-text-primary">{page.titleGold}</div>
                  <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em] mt-2">Powered by EGM</div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-dashed rounded-full opacity-10"
                style={{ borderColor: page.color }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-24">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-16 rounded-[4rem] border border-border-subtle backdrop-blur-2xl relative overflow-hidden"
            style={{ background: `radial-gradient(circle at center, ${page.color}08, transparent 70%)` }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-10 relative z-10">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join thousands of traders already using this feature to elevate their trading experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 50px ${page.color}66` }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-blue !py-5 !px-12 text-base font-black group w-full sm:w-auto"
              >
                OPEN ACCOUNT
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium btn-outline-blue !py-5 !px-12 text-base font-black w-full sm:w-auto"
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

