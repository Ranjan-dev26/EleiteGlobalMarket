import { motion } from 'framer-motion'
import { useInView } from '../../hooks'

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DAA520]/10 border border-[#DAA520]/20 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520] animate-pulse" />
          <span className="text-xs font-semibold text-[#DAA520] uppercase tracking-wider">{badge}</span>
        </motion.div>
      )}
      
      <h2 className={`heading-lg mb-4 ${light ? 'text-white' : ''}`}>
        {typeof title === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: title }} />
        ) : title}
      </h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`body-lg max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

