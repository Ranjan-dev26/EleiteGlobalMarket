import { motion } from 'framer-motion'
import { useCounter, useInView } from '../../hooks'

export default function AnimatedCounter({ 
  end, 
  suffix = '', 
  prefix = '', 
  label,
  duration = 2500,
  decimals = 0
}) {
  const [ref, isInView] = useInView({ threshold: 0.5, once: true })
  const count = useCounter(end * Math.pow(10, decimals), duration, 0, isInView)
  const displayValue = decimals > 0 ? (count / Math.pow(10, decimals)).toFixed(decimals) : count

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="heading-lg text-gradient-blue">
        {prefix}{displayValue}{suffix}
      </div>
      {label && <div className="body-sm mt-2 text-[#A0A0B0]">{label}</div>}
    </motion.div>
  )
}

