import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const faqItems = [
  {
    question: 'How do I open a trading account?',
    answer: 'Opening an account is simple. Click "Open Account," complete the registration form, verify your identity with KYC documents, fund your account, and start trading. The entire process typically takes less than 15 minutes.',
  },
  {
    question: 'What are the minimum deposit requirements?',
    answer: 'Our Standard account requires a minimum deposit of $100. Pro accounts start at $1,000 and Prime accounts require $10,000. We accept bank transfers, credit/debit cards, and various e-wallets.',
  },
  {
    question: 'What leverage do you offer?',
    answer: 'We offer flexible leverage up to 1:500 on forex pairs, depending on your account type and jurisdiction. Leverage for indices ranges up to 1:200, and crypto CFDs up to 1:20. All accounts include negative balance protection.',
  },
  {
    question: 'How fast are withdrawals processed?',
    answer: 'E-wallet withdrawals are processed within 1-2 hours during business hours. Bank transfers typically take 1-3 business days. We process all withdrawal requests on the same business day if submitted before 14:00 GMT.',
  },
  {
    question: 'What trading platforms do you support?',
    answer: 'We offer MetaTrader 5 (MT5) as our primary platform, available on Desktop (Windows, Mac), Web Trader (browser-based), and Mobile (iOS, Android). All platforms provide full functionality including advanced charting, algorithmic trading, and real-time data.',
  },
  {
    question: 'Is my money safe with EleiteGlobalMarket?',
    answer: 'Absolutely. Client funds are segregated in tier-1 bank accounts and are never used for company operations. We employ bank-grade SSL encryption, multi-factor authentication, and are fully licensed and regulated.',
  },
  {
    question: 'Do you offer Islamic (swap-free) accounts?',
    answer: 'Yes, we offer swap-free Islamic accounts compliant with Sharia principles. These accounts have no overnight interest charges and are available for all account types. Apply through your client portal or contact support.',
  },
  {
    question: 'Can I use Expert Advisors (EAs) and automated trading?',
    answer: 'Yes! We fully support Expert Advisors, custom indicators, and automated trading strategies on all MT5 accounts. Our servers are optimized for low-latency execution, making them ideal for algorithmic trading.',
  },
]

function FAQItem({ question, answer, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border-b border-white/[0.04] last:border-b-0 ${isOpen ? 'bg-white/[0.01]' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-6 text-left group transition-colors hover:bg-white/[0.02]"
      >
        <span className={`text-sm font-medium pr-8 transition-colors ${isOpen ? 'text-[#3B82F6]' : 'text-white group-hover:text-[#3B82F6]'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ${isOpen ? 'text-[#3B82F6]' : 'text-[#6B6B7B]'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="body-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="premium-section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#3B82F6]/[0.015] blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          badge="FAQ"
          title='Frequently Asked <span class="text-gradient-blue">Questions</span>'
          subtitle="Everything you need to know about trading with EleiteGlobalMarket."
        />

        <div className="max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden">
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              {...item}
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

