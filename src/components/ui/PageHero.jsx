import { motion } from 'framer-motion';
import DripDivider from './DripDivider.jsx';

/**
 * Colourful header used at the top of every inner page.
 * Animated blobs + title reveal + drip bottom edge.
 */
export default function PageHero({ eyebrow, title, highlight, subtitle, tone = 'pink', children }) {
  const tones = {
    pink: 'from-strawberry-100 via-cream to-mango-100',
    mango: 'from-mango-100 via-cream to-strawberry-100',
    mint: 'from-mint-100 via-cream to-pistachio-100',
    choco: 'from-[#F2DED6] via-cream to-mango-100',
  };

  return (
    <header className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} pt-32 sm:pt-40`}>
      {/* Decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 animate-blob rounded-full bg-strawberry/25 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 animate-blob rounded-full bg-mango/30 blur-3xl [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-blob rounded-full bg-mint/30 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container-x relative pb-16 text-center sm:pb-20">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-choco/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>

      <DripDivider color="#FFF6EC" flip className="-mb-px" />
    </header>
  );
}
