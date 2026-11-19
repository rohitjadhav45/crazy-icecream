import { motion } from 'framer-motion';
import { highlights } from '../../data/products';
import SectionTitle from '../ui/SectionTitle.jsx';
import SmartImage from '../ui/SmartImage.jsx';

/**
 * Bento-style grid of special highlight products.
 * The first card is the hero of the grid and spans two rows on desktop.
 */
export default function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="section">
      <div className="container-x">
        <SectionTitle
          id="highlights-title"
          eyebrow="Special highlights"
          title="Treats worth"
          highlight="going crazy for"
          subtitle="Signature creations, timeless classics and new obsessions. These are the stars of the Crazy freezer."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {highlights.map((h, i) => {
            const featured = i === 0;
            return (
              <motion.article
                key={h.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex overflow-hidden rounded-[2rem] p-6 shadow-soft sm:p-8 ${
                  featured ? 'flex-col sm:col-span-2 lg:col-span-1 lg:row-span-2' : 'flex-col sm:flex-row sm:items-center lg:flex-col lg:items-stretch'
                }`}
                style={{ background: `linear-gradient(150deg, ${h.color}40 0%, ${h.color}14 60%, #ffffff 100%)` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-125"
                  style={{ background: h.color }}
                />
                <div className={`relative ${featured ? '' : 'sm:w-1/2 lg:w-auto'}`}>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-choco"
                    style={{ background: h.color }}
                  >
                    {h.tag}
                  </span>
                  <h3 className={`mt-4 font-semibold ${featured ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>{h.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-choco/70 sm:text-base">{h.description}</p>
                </div>
                <div
                  className={`relative mx-auto mt-6 w-full ${
                    featured ? 'aspect-square max-w-sm lg:mt-auto' : 'aspect-[4/3] max-w-[260px] sm:mt-0 sm:w-1/2 lg:mt-6 lg:w-full'
                  }`}
                >
                  <SmartImage
                    src={h.image}
                    alt={`${h.name} from Crazy Ice Cream`}
                    width={500}
                    height={500}
                    className="h-full w-full object-contain drop-shadow-[0_25px_25px_rgba(59,31,26,0.22)] transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-110"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
