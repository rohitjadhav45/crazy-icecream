import { motion } from 'framer-motion';
import { Home as HomeIcon, IceCreamCone } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import MagneticButton from '../components/ui/MagneticButton.jsx';

/** A melted scoop with drips that keep slowly sliding down. */
function MeltedScoop() {
  const drips = [
    { x: 70, h: 40, d: 0 },
    { x: 105, h: 70, d: 0.4 },
    { x: 140, h: 30, d: 0.8 },
    { x: 172, h: 55, d: 0.2 },
  ];
  return (
    <svg viewBox="0 0 240 230" className="h-56 w-56 sm:h-72 sm:w-72" aria-hidden="true">
      {/* Puddle */}
      <motion.ellipse
        cx="120"
        cy="205"
        rx="100"
        ry="18"
        fill="#FF4F8B"
        opacity="0.35"
        initial={{ scaleX: 0.4 }}
        animate={{ scaleX: [0.9, 1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ originX: '120px' }}
      />
      {/* Melting scoop body */}
      <motion.path
        d="M50 110 C50 55 190 55 190 110 L190 130 Q120 150 50 130 Z"
        fill="#FF4F8B"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Drips */}
      {drips.map((dr) => (
        <motion.rect
          key={dr.x}
          x={dr.x - 9}
          y={125}
          width="18"
          rx="9"
          fill="#FF4F8B"
          initial={{ height: 10 }}
          animate={{ height: [10, dr.h, dr.h + 8, 10] }}
          transition={{ duration: 4, delay: dr.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Upside-down cone */}
      <motion.path
        d="M85 92 L120 10 L155 92 Z"
        fill="#FFC93C"
        stroke="#E9A800"
        strokeWidth="3"
        initial={{ rotate: 0 }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ originX: '120px', originY: '92px' }}
      />
      {/* Sad face */}
      <circle cx="100" cy="112" r="5" fill="#3B1F1A" />
      <circle cx="140" cy="112" r="5" fill="#3B1F1A" />
      <path d="M106 130 Q120 120 134 130" stroke="#3B1F1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="85" r="8" fill="#fff" opacity="0.5" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page Not Found" description="Oops! This scoop has melted away. Head back to Crazy Ice Cream's home page." path="/404" />
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-strawberry-50 to-cream pb-16 pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-24 h-64 w-64 animate-blob rounded-full bg-mango/30 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 animate-blob rounded-full bg-mint/30 blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="container-x relative flex flex-col items-center text-center">
          <MeltedScoop />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-display text-7xl font-bold text-gradient sm:text-9xl"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-2 font-display text-3xl font-semibold sm:text-4xl"
          >
            Oops! This scoop melted away.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 max-w-md text-choco/70"
          >
            The page you're looking for got a little too warm. Let's get you back to the freezer before anything else
            drips.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton to="/" icon={HomeIcon}>
              Back to Home
            </MagneticButton>
            <MagneticButton to="/products" variant="secondary" icon={IceCreamCone}>
              Browse flavours
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
