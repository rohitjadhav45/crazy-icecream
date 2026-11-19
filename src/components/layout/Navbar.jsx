import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { brand, navLinks } from '../../data/products';
import useScrollDirection from '../../hooks/useScrollDirection';
import MobileMenu from './MobileMenu.jsx';
import SmartImage from '../ui/SmartImage.jsx';

/** Three-line burger that morphs into an X. */
function Hamburger({ open }) {
  const line = 'absolute left-1/2 h-[2.5px] w-6 -translate-x-1/2 rounded-full bg-current';
  return (
    <span className="relative block h-6 w-6" aria-hidden="true">
      <motion.span className={line} animate={open ? { top: 11, rotate: 45 } : { top: 5, rotate: 0 }} />
      <motion.span className={line} style={{ top: 11 }} animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} />
      <motion.span className={line} animate={open ? { top: 11, rotate: -45 } : { top: 17, rotate: 0 }} />
    </span>
  );
}

/**
 * Sticky glass navbar.
 * - Shrinks after the page is scrolled
 * - Hides when scrolling down, re-appears when scrolling up
 * - Active link marked by an animated pill (shared layoutId)
 */
export default function Navbar() {
  const { direction, scrollY, scrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const hidden = direction === 'down' && scrollY > 160 && !menuOpen;
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close the menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5"
        initial={{ y: -100 }}
        animate={{ y: hidden ? '-120%' : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? 'border-white/70 bg-white/75 py-2 pl-3 pr-2 shadow-soft backdrop-blur-xl'
              : 'border-white/40 bg-white/35 py-3 pl-4 pr-3 backdrop-blur-md'
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center gap-2 rounded-full" aria-label={`${brand.name} – home`}>
            <SmartImage
              src={brand.logo}
              alt={`${brand.name} logo`}
              eager
              width={160}
              height={64}
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-12 sm:h-14'}`}
            />
          </Link>

          {/* Desktop links */}
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `relative block rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-choco hover:text-strawberry-700'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-strawberry shadow-pink"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative">{link.label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={brand.phoneHref}
              className="hidden min-h-[44px] items-center gap-2 rounded-full bg-choco px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-strawberry sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{brand.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-strawberry text-white shadow-pink transition hover:bg-strawberry-600 xl:hidden"
            >
              <Hamburger open={menuOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
