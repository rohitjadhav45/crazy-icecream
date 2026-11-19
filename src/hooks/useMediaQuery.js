import { useEffect, useState } from 'react';

/**
 * Reactively evaluates a CSS media query.
 * @param {string} query - e.g. '(min-width: 1024px)'
 */
export default function useMediaQuery(query) {
  const getMatch = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/**
 * True only on devices with a precise pointer that can hover (mouse / trackpad).
 * Used to enable desktop-only effects: tilt, magnetic buttons, custom cursor.
 */
export function useFinePointer() {
  return useMediaQuery('(hover: hover) and (pointer: fine)');
}
