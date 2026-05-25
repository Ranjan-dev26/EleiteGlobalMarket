import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  HelpCircle, Users, ArrowRight, CheckCircle, Headphones,
  Globe, Shield
} from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import GlassCard from '../../components/cards/GlassCard'
import FAQSection from '../../components/sections/FAQSection'
import PageHero3D from '../../components/three/PageHero3D'

const contactMethods = [
  {
    icon: <Headphones size={24} />,
    title: '24/7 Support Desk',
    description: 'Our support team is available around the clock to assist you.',
    action: 'Start Live Chat',
    color: '#3B82F6',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Support',
    description: 'Send us a detailed request and we\'ll respond within 2 hours.',
    action: 'support@EleiteGlobalMarket.com',
    color: '#EF4444',
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone Assistance',
    description: 'Speak directly with our trading support specialists.',
    action: '+1 (234) 567-890',
    color: '#3B82F6',
  },
  {
    icon: <Globe size={24} />,
    title: 'Live Routing',
    description: 'Real-time order routing support for institutional clients.',
    action: 'Request Access',
    color: '#EF4444',
  },
]

const quickLinks = [
  {
    icon: <MessageSquare size={20} />,
    title: 'Contact Form',
    description: 'Send a structured request — we respond during business hours.',
    link: '#contact-form',
  },
  {
    icon: <HelpCircle size={20} />,
    title: 'FAQ',
    description: 'Guides, status, and policy references for existing workflows.',
    link: '#faq',
  },
  {
    icon: <Users size={20} />,
    title: 'Partners',
    description: 'Introducing brokers and institutional introductions.',
    link: '/about',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070C] via-[#07070C]/80 to-[#07070C] z-10" />
          <PageHero3D mode="wireframe" color="#3B82F6" />
        </div>
        
        <div className="section-container relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_10px_#3B82F6]" />
              <span className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.3em]">Support Desk</span>
            </motion.div>
            <h1 className="heading-xl text-text-primary mb-8 tracking-tighter">
              Get In <br />
              <span className="text-gradient-blue">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Our team of specialists is here to assist you 24/5 with any inquiries or technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-4">
            {quickLinks.map((link, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-6">
                <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] inline-block mb-3">
                  {link.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{link.title}</h3>
                <p className="text-xs text-[#6B6B7B]">{link.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section className="premium-section" id="contact-form">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="heading-sm text-white mb-6">Support Channels</h3>
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover p-5 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl shrink-0" style={{ background: `${method.color}12`, color: method.color }}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-xs text-[#6B6B7B] mb-2">{method.description}</p>
                      <span className="text-xs text-[#3B82F6] font-medium">{method.action}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-5 rounded-xl mt-6"
              >
                <h4 className="text-sm font-semibold text-white mb-4">Office Hours</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#A0A0B0]">
                    <Clock size={14} className="text-[#3B82F6]" />
                    <span>Trading Support: 24/5</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#A0A0B0]">
                    <MapPin size={14} className="text-[#3B82F6]" />
                    <span>London • New York • Singapore</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#A0A0B0]">
                    <Shield size={14} className="text-[#3B82F6]" />
                    <span>Regulated & Licensed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="heading-sm text-white mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="body-sm">We'll get back to you within 2 business hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-[#A0A0B0] mb-1.5 block font-medium">First Name</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#6B6B7B] focus:outline-none focus:border-[#3B82F6]/40 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#A0A0B0] mb-1.5 block font-medium">Last Name</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#6B6B7B] focus:outline-none focus:border-[#3B82F6]/40 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-[#A0A0B0] mb-1.5 block font-medium">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#6B6B7B] focus:outline-none focus:border-[#3B82F6]/40 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#A0A0B0] mb-1.5 block font-medium">Phone (Optional)</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#6B6B7B] focus:outline-none focus:border-[#3B82F6]/40 transition-colors"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-[#A0A0B0] mb-1.5 block font-medium">Subject</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#3B82F6]/40 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0A0A0F]">Select a subject</option>
                        <option value="account" className="bg-[#0A0A0F]">Account Inquiry</option>
                        <option value="trading" className="bg-[#0A0A0F]">Trading Support</option>
                        <option value="deposit" className="bg-[#0A0A0F]">Deposits & Withdrawals</option>
                        <option value="partnership" className="bg-[#0A0A0F]">Partnership</option>
                        <option value="technical" className="bg-[#0A0A0F]">Technical Support</option>
                        <option value="other" className="bg-[#0A0A0F]">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-[#A0A0B0] mb-1.5 block font-medium">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#6B6B7B] focus:outline-none focus:border-[#3B82F6]/40 transition-colors resize-none"
                        placeholder="Describe your inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-premium btn-blue py-4 group"
                    >
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>
    </motion.div>
  )
}

