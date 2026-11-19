import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import SmartImage from './SmartImage.jsx';

/**
 * Product tile used on the Products and Dairy pages.
 * Supports Framer Motion layout animations (filtering) via forwardRef.
 */
const ProductCard = forwardRef(function ProductCard(
  { product, categoryLabel, accent = '#FF4F8B', onView, index = 0 },
  ref
) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-soft backdrop-blur-md transition-shadow duration-500 hover:shadow-glow"
    >
      {/* Image area with colour glow */}
      <div className="relative aspect-square overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 50% 60%, ${accent}55, transparent 65%)` }}
        />
        <SmartImage
          src={product.image}
          alt={`${product.name} by Crazy Ice Cream`}
          className="relative h-full w-full object-contain p-6 drop-shadow-[0_18px_25px_rgba(59,31,26,0.18)] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
        />
        {categoryLabel && (
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-choco">
            {categoryLabel}
          </span>
        )}
      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col gap-3 p-5 pt-2 sm:p-6 sm:pt-2">
        <h3 className="text-2xl font-semibold text-choco">{product.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-choco/65">{product.description}</p>
        <button
          type="button"
          onClick={() => onView?.(product)}
          data-cursor="hover"
          className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-choco px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-strawberry"
          aria-label={`View details of ${product.name}`}
        >
          <Eye className="h-4 w-4" aria-hidden="true" />
          View Details
        </button>
      </div>
    </motion.article>
  );
});

export default ProductCard;
