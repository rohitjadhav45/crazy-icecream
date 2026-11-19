import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from './useSmoothScroll';

/**
 * Scrolls to the top whenever the route path changes.
 * Runs after the exit animation has finished (AnimatePresence onExitComplete
 * also calls scrollToTop), so this is a safety net for direct navigations.
 */
export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [pathname]);
}
