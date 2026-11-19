import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartImage from './SmartImage.jsx';
import { WhatsAppIcon } from './SocialIcons.jsx';
import { brand } from '../../data/products';
import { setScrollLocked } from '../../hooks/useSmoothScroll';

/**
 * Accessible animated product dialog.
 * - Closes on Escape, backdrop click or the close button
 * - Locks page scroll while open
 * - Traps focus inside and restores it to the trigger on close
 *
 * @param {{ product: object | null, categoryLabel?: string, accent?: string, onClose: () => void }} props
 */
export default function ProductModal({ product, categoryLabel, accent = '#FF4F8B', onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const open = Boolean(product);

  useEffect(() => {
    if (!open) return undefined;
    lastFocused.current = document.activeElement;
    setScrollLocked(true);
    const t = setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      // Simple focus trap
      if (e.key === 'Tab' && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll('a[href], button:not([disabled])');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      setScrollLocked(false);
      lastFocused.current?.focus?.();
    };
  }, [open, onClose]);

  const waText = product
    ? `${brand.whatsappHref.split('?')[0]}?text=${encodeURIComponent(
        `Hi Crazy Ice Cream! I'd like to know more about ${product.name}.`
      )}`
    : '#';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close dialog"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-choco/60 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{ y: 80, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative z-10 grid max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-cream shadow-2xl sm:rounded-[2rem] md:grid-cols-2"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-choco shadow-soft transition hover:rotate-90 hover:bg-strawberry hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Visual */}
            <div
              className="relative flex aspect-square items-center justify-center overflow-hidden md:aspect-auto md:min-h-[460px]"
              style={{ background: `radial-gradient(circle at 50% 55%, ${accent}66, ${accent}14 60%, transparent 80%)` }}
            >
              <motion.div
                initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: 0.12, type: 'spring', stiffness: 180, damping: 16 }}
                className="h-full w-full p-8"
              >
                <SmartImage
                  src={product.image}
                  alt={product.name}
                  eager
                  className="h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(59,31,26,0.25)]"
                />
              </motion.div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-5 p-6 sm:p-10">
              {categoryLabel && <span className="eyebrow w-fit">{categoryLabel}</span>}
              <h2 id="product-modal-title" className="text-4xl font-semibold leading-tight sm:text-5xl">
                {product.name}
              </h2>
              <p className="text-base leading-relaxed text-choco/75 sm:text-lg">{product.description}</p>

              <ul className="grid gap-2 text-sm text-choco/75">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint-600" aria-hidden="true" /> Made with pure milk
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mango-600" aria-hidden="true" /> Real ingredients, no shortcuts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-strawberry" aria-hidden="true" /> Available at Crazy dealers near you
                </li>
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <a
                  href={waText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:brightness-95"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Enquire on WhatsApp
                </a>
                <a
                  href={brand.phoneHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-choco px-6 py-3 font-semibold text-cream transition hover:bg-choco-500"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" /> Call us
                </a>
              </div>
              <Link
                to="/contact?type=dealer"
                onClick={onClose}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-strawberry-700 underline-offset-4 hover:underline"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Find a dealer near you
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
