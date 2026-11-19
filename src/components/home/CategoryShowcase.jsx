import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categoryShowcase } from '../../data/products';
import SectionTitle from '../ui/SectionTitle.jsx';
import SmartImage from '../ui/SmartImage.jsx';

/**
 * Three big animated category cards linking to their pages.
 */
export default function CategoryShowcase() {
  return (
    <section aria-labelledby="categories-title" className="section pt-0">
      <div className="container-x">
        <SectionTitle
          id="categories-title"
          eyebrow="Explore the range"
          title="Something for"
          highlight="every craving"
          subtitle="Frozen favourites, chilled milk and festive dairy sweets, all made with the same pure milk and the same crazy love."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {categoryShowcase.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={c.to}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br ${c.gradient} p-6 shadow-soft transition-shadow duration-500 hover:shadow-glow sm:p-8`}
                data-cursor="hover"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-2xl transition-transform duration-700 group-hover:scale-150"
                  style={{ background: c.accent }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-choco/70 sm:text-base">{c.subtitle}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-choco text-cream transition-all duration-500 group-hover:rotate-45 group-hover:bg-strawberry">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="relative mt-6 aspect-[4/3] w-full">
                  <SmartImage
                    src={c.image}
                    alt={`${c.title} by Crazy Ice Cream`}
                    width={600}
                    height={450}
                    className="h-full w-full object-contain drop-shadow-[0_25px_30px_rgba(59,31,26,0.22)] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-110"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
