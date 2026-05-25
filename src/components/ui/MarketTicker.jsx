import { motion } from 'framer-motion'

const tickerData = [
  { pair: 'EUR/USD', price: '1.0847', change: '+0.15%', up: true },
  { pair: 'GBP/USD', price: '1.2634', change: '+0.22%', up: true },
  { pair: 'USD/JPY', price: '149.85', change: '-0.08%', up: false },
  { pair: 'XAU/USD', price: '2,341.50', change: '+0.45%', up: true },
  { pair: 'BTC/USD', price: '67,234', change: '+1.23%', up: true },
  { pair: 'EUR/GBP', price: '0.8587', change: '-0.12%', up: false },
  { pair: 'AUD/USD', price: '0.6543', change: '+0.09%', up: true },
  { pair: 'USD/CHF', price: '0.8921', change: '-0.05%', up: false },
  { pair: 'NZD/USD', price: '0.5987', change: '+0.18%', up: true },
  { pair: 'USD/CAD', price: '1.3645', change: '-0.11%', up: false },
  { pair: 'ETH/USD', price: '3,456.78', change: '+2.15%', up: true },
  { pair: 'US30', price: '38,745', change: '+0.34%', up: true },
]

function TickerItem({ pair, price, change, up }) {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-2.5 mx-2">
      <span className="text-xs font-semibold text-white/80">{pair}</span>
      <span className="text-xs font-mono text-white">{price}</span>
      <span className={`text-xs font-mono font-semibold ${up ? 'text-emerald-400' : 'text-red-400'}`}>
        {change}
      </span>
      <div className={`w-0 h-0 ${up ? 'border-b-[5px] border-b-emerald-400 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent' : 'border-t-[5px] border-t-red-400 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent'}`} />
    </div>
  )
}

export default function MarketTicker() {
  return (
    <div className="w-full overflow-hidden bg-[#070710]/80 backdrop-blur-lg border-y border-white/[0.04] py-1">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...tickerData, ...tickerData].map((item, i) => (
            <TickerItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

