import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { brand, navLinks } from '../../data/products';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '../ui/SocialIcons.jsx';
import { setScrollLocked } from '../../hooks/useSmoothScroll';

const panel = {
  hidden: { x: '100%' },
  show: { x: 0, transition: { type: 'spring', stiffness: 220, damping: 30, staggerChildren: 0.06, delayChildren: 0.15 } },
  exit: { x: '100%', transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] } },
};
const item = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Full-screen slide-in navigation for mobile and tablet.
 */
export default function MobileMenu({ open, onClose }) {
  const firstLink = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    setScrollLocked(true);
    const t = setTimeout(() => firstLink.current?.focus(), 200);
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      setScrollLocked(false);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-gradient-to-br from-strawberry via-[#FF6A86] to-mango text-white xl:hidden"
          variants={panel}
          initial="hidden"
          animate="show"
          exit="exit"
          data-lenis-prevent
        >
          {/* Decorative blobs */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -left-16 bottom-10 h-60 w-60 rounded-full bg-mint/30 blur-3xl" />
          </div>

          {/* The navbar (z-100) stays on top, so its burger doubles as the close button. */}
          <nav aria-label="Mobile" className="relative flex-1 px-6 pt-28 sm:px-12">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li key={link.to} variants={item}>
                  <NavLink
                    ref={i === 0 ? firstLink : undefined}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex min-h-[52px] items-center justify-between rounded-2xl px-3 py-2 font-display text-4xl font-semibold transition sm:text-5xl ${
                        isActive ? 'bg-white/20' : 'hover:bg-white/10'
                      }`
                    }
                  >
                    {link.label}
                    <span className="text-sm font-sans font-medium opacity-60">0{i + 1}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div variants={item} className="relative space-y-4 px-6 pb-10 pt-8 sm:px-12">
            <a href={brand.phoneHref} className="flex min-h-[44px] items-center gap-3 text-lg font-medium">
              <Phone className="h-5 w-5" aria-hidden="true" /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex min-h-[44px] items-center gap-3 break-all text-base">
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" /> {brand.email}
            </a>
            <div className="flex gap-3 pt-2">
              {[
                { href: brand.socials.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: brand.socials.facebook, label: 'Facebook', Icon: FacebookIcon },
                { href: brand.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-strawberry"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
