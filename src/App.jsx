import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Loader from './components/layout/Loader.jsx';
import WhatsAppButton from './components/layout/WhatsAppButton.jsx';
import CustomCursor from './components/layout/CustomCursor.jsx';
import useSmoothScroll, { scrollToTop } from './hooks/useSmoothScroll';
import useScrollToTop from './hooks/useScrollToTop';

// Home is loaded eagerly (it's the landing page); other routes are code-split.
import Home from './pages/Home.jsx';
const About = lazy(() => import('./pages/About.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const FlavouredMilk = lazy(() => import('./pages/FlavouredMilk.jsx'));
const DairyProducts = lazy(() => import('./pages/DairyProducts.jsx'));
const Achievements = lazy(() => import('./pages/Achievements.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

/** Minimal fallback shown while a lazy route chunk downloads. */
function RouteFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-live="polite">
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-strawberry-200 border-t-strawberry" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useSmoothScroll(!prefersReducedMotion);
  useScrollToTop();

  // Show the loader once per visit.
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), prefersReducedMotion ? 400 : 2200);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-choco focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>

      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <CustomCursor />
      <Navbar />

      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <Suspense fallback={<RouteFallback />} key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/flavoured-milk" element={<FlavouredMilk />} />
            <Route path="/dairy-products" element={<DairyProducts />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}
