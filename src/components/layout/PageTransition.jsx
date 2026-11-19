import { motion } from 'framer-motion';

/**
 * Wraps each page so AnimatePresence can fade + slide between routes.
 * Renders the page's <main> landmark (target of the "Skip to content" link).
 */
export default function PageTransition({ children, className = '' }) {
  return (
    <motion.main
      id="main"
      tabIndex={-1}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } }}
      className={`relative overflow-x-clip outline-none ${className}`}
    >
      {children}
    </motion.main>
  );
}
