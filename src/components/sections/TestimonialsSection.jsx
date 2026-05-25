import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Alexander Schmidt",
    role: "Quantitative Trader",
    content: "The execution speed on SucceedFX is unmatched. My EAs perform significantly better here than on any other platform.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    position: { top: "15%", left: "10%" },
    angle: -15,
  },
  {
    name: "Sarah Jenkins",
    role: "Institutional Fund Manager",
    content: "Cleanest interface I've used. The REST API for institutional flows is exactly what our team needed for automation.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    position: { top: "25%", left: "75%" },
    angle: 10,
  },
  {
    name: "Hiroshi Tanaka",
    role: "Forex Day Trader",
    content: "Zero slippage on major news events. Truly institutional grade liquidity even during peak volatility.",
    avatar: "https://i.pravatar.cc/150?u=hiro",
    position: { top: "60%", left: "5%" },
    angle: -5,
  },
  {
    name: "Marco Rossi",
    role: "Scalping Specialist",
    content: "Support team helped me set up my VPS in minutes. Low latency trading at its best for my high-frequency strategies.",
    avatar: "https://i.pravatar.cc/150?u=marco",
    position: { top: "70%", left: "80%" },
    angle: 15,
  },
  {
    name: "David O'Brien",
    role: "Commodities Trader",
    content: "Great spreads on Gold and Oil. Finally a broker that understands professional traders' needs.",
    avatar: "https://i.pravatar.cc/150?u=david",
    position: { top: "40%", left: "85%" },
    angle: -10,
  },
  {
    name: "Elena Petrova",
    role: "Hedge Fund Analyst",
    content: "Secure, fast, and reliable. The mobile terminal is surprisingly powerful for monitoring positions on the go.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    position: { top: "10%", left: "40%" },
    angle: 5,
  },
  {
    name: "Jean Dupont",
    role: "Retail Trader",
    content: "The depth of market features in the pro-grade terminal changed how I view liquidity. Exceptional tools.",
    avatar: "https://i.pravatar.cc/150?u=jean",
    position: { top: "80%", left: "30%" },
    angle: -12,
  },
  {
    name: "Sofia Rodriguez",
    role: "Crypto Trader",
    content: "The security features are top-notch. I feel completely safe trading high volumes here.",
    avatar: "https://i.pravatar.cc/150?u=sofia",
    position: { top: "50%", left: "15%" },
    angle: 8,
  },
  {
    name: "Liam Chen",
    role: "Algo Developer",
    content: "Documentation is superb. Integrating our proprietary bots was a breeze.",
    avatar: "https://i.pravatar.cc/150?u=liam",
    position: { top: "85%", left: "60%" },
    angle: -8,
  },
  {
    name: "Emma Wilson",
    role: "Portfolio Manager",
    content: "The reporting tools are essential for my daily audits. Highly recommended for professionals.",
    avatar: "https://i.pravatar.cc/150?u=emma",
    position: { top: "20%", left: "60%" },
    angle: 12,
  },
  {
    name: "Lucas Mueller",
    role: "Head of Treasury",
    content: "Institutional execution at its finest. The depth of liquidity is perfect for large block orders.",
    avatar: "https://i.pravatar.cc/150?u=lucas",
    position: { top: "5%", left: "85%" },
    angle: 20,
  },
  {
    name: "Anya Sokolova",
    role: "High Frequency Trader",
    content: "Low latency and high uptime. SucceedFX is the only broker I trust with my HFT algorithms.",
    avatar: "https://i.pravatar.cc/150?u=anya",
    position: { top: "80%", left: "5%" },
    angle: -25,
  },
  {
    name: "James Whitaker",
    role: "Wealth Manager",
    content: "The transparency in pricing and the range of instruments allow us to diversify client portfolios effectively.",
    avatar: "https://i.pravatar.cc/150?u=james",
    position: { top: "40%", left: "2%" },
    angle: 15,
  },
  {
    name: "Isabella Rossi",
    role: "Commodities Analyst",
    content: "Exceptional spreads on soft commodities and metals. A must-have for specialized traders.",
    avatar: "https://i.pravatar.cc/150?u=isabella",
    position: { top: "90%", left: "85%" },
    angle: -15,
  },
];

function TestimonialCard({ t, index, scrollYProgress }) {
  const startX = index % 2 === 0 ? -500 : 500;
  const startY = (index * 100) % 600 - 300;

  const x = useTransform(scrollYProgress, [0.6, 0.9], [startX, 0]);
  const y = useTransform(scrollYProgress, [0.6, 0.9], [startY, 0]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.6, 0.9], [0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0.6, 0.9], [t.angle * 2, t.angle]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: t.position.top,
        left: t.position.left,
        x,
        y,
        opacity,
        scale,
        rotate,
        willChange: "transform, opacity",
      }}
      className="group w-[300px] pointer-events-auto"
    >
      <div className="rounded-2xl border border-white/10 bg-bg-card/60 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-primary-blue/50 hover:bg-bg-card/80">
        <p className="text-sm italic leading-relaxed text-text-secondary group-hover:text-text-primary transition-colors">
          &quot;{t.content}&quot;
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary-blue/20 bg-white/5">
            <img 
              src={t.avatar} 
              alt={t.name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary">{t.name}</h4>
            <p className="text-[10px] text-text-muted tracking-tight">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileTestimonials({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);

  return (
    <motion.div
      style={{ opacity, y, willChange: "transform, opacity" }}
      className="flex flex-col gap-4 w-full max-w-md pointer-events-auto"
    >
      {TESTIMONIALS.slice(0, 3).map((t) => (
        <div key={t.name} className="rounded-2xl border border-white/10 bg-bg-card/90 p-5 shadow-lg backdrop-blur-sm">
          <p className="text-xs italic leading-relaxed text-text-secondary">&quot;{t.content}&quot;</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative w-8 h-8 overflow-hidden rounded-full border border-primary-blue/20 bg-white/5">
              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-primary">{t.name}</h4>
              <p className="text-[10px] text-text-muted">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Central Symbol Transformations
  const logoScale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.8, 1.2, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const logoBlur = useTransform(scrollYProgress, [0, 0.2], ["10px", "0px"]);

  // Heading Transformations
  const headingY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // Stats Transformations
  const statsOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const statsScale = useTransform(scrollYProgress, [0.4, 0.5], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]) }}
            className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/10 blur-[150px]"
          />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-20 section-container">
          {/* Phase 1: Central Symbol */}
          <motion.div
            style={{
              scale: logoScale,
              opacity: logoOpacity,
              filter: `blur(${logoBlur})`,
            }}
            className="relative mb-8"
          >
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary-blue/20 blur-3xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                 <span className="text-6xl sm:text-8xl font-black text-gradient-blue tracking-tighter">EGM</span>
              </div>
            </div>
          </motion.div>

          {/* Phase 2: Main Heading */}
          <motion.div
            style={{
              y: headingY,
              opacity: headingOpacity,
            }}
            className="text-center"
          >
            <h2 className="max-w-4xl text-4xl font-black tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Trusted by <br />
              <span className="text-primary-blue italic">Worldwide Traders</span>
            </h2>

            {/* Phase 2.5: Supporting Stats */}
            <motion.div
              style={{
                opacity: statsOpacity,
                scale: statsScale,
              }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-black text-text-primary sm:text-4xl">130k+</div>
                <div className="text-sm font-bold text-text-muted tracking-wide">Active Traders</div>
              </div>
              <div className="h-12 w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-3xl font-black text-text-primary sm:text-4xl">190+</div>
                <div className="text-sm font-bold text-text-muted tracking-wide">Countries</div>
              </div>
              <div className="h-12 w-px bg-white/10 hidden sm:block" />
              <div>
                <div className="text-3xl font-black text-text-primary sm:text-4xl">$50B+</div>
                <div className="text-sm font-bold text-text-muted tracking-wide">Monthly Volume</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Phase 3: Testimonial Cloud (Desktop Only) */}
        <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
          {TESTIMONIALS.map((t, index) => (
            <TestimonialCard key={t.name} t={t} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Mobile Testimonials */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 lg:hidden px-4 pointer-events-none">
          <MobileTestimonials scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

