import { motion } from 'framer-motion';
import { brand } from '../../data/products';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';

/**
 * Floating WhatsApp chat button, visible on every page.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={brand.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Crazy Ice Cream on WhatsApp"
      data-cursor="hover"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.6, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_-10px_rgba(37,211,102,0.7)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-choco px-4 py-2 text-sm font-medium text-cream opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </motion.a>
  );
}
