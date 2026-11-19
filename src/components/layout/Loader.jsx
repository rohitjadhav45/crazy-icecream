import { motion } from 'framer-motion';

/**
 * Intro loading screen: a strawberry scoop drops into a waffle cone,
 * squishes on impact, then the whole overlay fades away.
 */
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-gradient-to-br from-cream via-strawberry-50 to-mango-100"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading Crazy Ice Cream…</span>

      <svg viewBox="0 0 200 260" className="h-48 w-40 sm:h-56 sm:w-48" aria-hidden="true">
        {/* Cone */}
        <defs>
          <linearGradient id="cone" x1="0" x2="1">
            <stop offset="0" stopColor="#E9A800" />
            <stop offset="1" stopColor="#FFC93C" />
          </linearGradient>
          <pattern id="waffle" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="16" height="16" fill="url(#cone)" />
            <path d="M0 0 V16 M0 0 H16" stroke="#B57F00" strokeWidth="2.5" opacity="0.55" />
          </pattern>
        </defs>
        <motion.path
          d="M50 130 L100 250 L150 130 Z"
          fill="url(#waffle)"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Scoop drops in, squishes, settles */}
        <motion.g
          initial={{ y: -220 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 13 }}
        >
          <motion.g
            style={{ originX: '100px', originY: '130px' }}
            initial={{ scaleY: 1, scaleX: 1 }}
            animate={{ scaleY: [1, 0.82, 1.05, 1], scaleX: [1, 1.14, 0.97, 1] }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <circle cx="100" cy="98" r="52" fill="#FF4F8B" />
            <path
              d="M48 120 q8 18 16 0 q8 22 18 0 q9 18 18 0 q9 24 18 0 q8 16 16 0 q6 12 14 0 L152 110 L48 110 Z"
              fill="#FF4F8B"
            />
            <circle cx="80" cy="78" r="11" fill="#fff" opacity="0.55" />
            <circle cx="122" cy="70" r="4" fill="#FFC93C" />
            <circle cx="108" cy="58" r="4" fill="#7FE0C5" />
            <circle cx="88" cy="112" r="4" fill="#B8D982" />
            <circle cx="128" cy="100" r="4" fill="#fff" />
          </motion.g>
        </motion.g>

        {/* Cherry on top */}
        <motion.g
          initial={{ y: -260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 14 }}
        >
          <path d="M100 46 q6 -18 20 -24" stroke="#3B1F1A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="50" r="10" fill="#C21F57" />
        </motion.g>
      </svg>

      <motion.p
        className="mt-6 font-display text-3xl font-semibold text-choco"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        Crazy <span className="text-gradient">Ice Cream</span>
      </motion.p>
      <motion.p
        className="mt-1 text-sm text-choco/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Scooping happiness…
      </motion.p>
    </motion.div>
  );
}
