import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Search, X, IceCreamCone } from 'lucide-react';

import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import ProductCard from '../components/ui/ProductCard.jsx';
import ProductModal from '../components/ui/ProductModal.jsx';
import DealerCTA from '../components/home/DealerCTA.jsx';
import { products, productCategories } from '../data/products';

const accentByCategory = {
  cones: '#FFC93C',
  cups: '#FF4F8B',
  tubs: '#7FE0C5',
  packs: '#B8D982',
  'kulfi-drinks': '#FFC93C',
  others: '#FF8DB3',
};
const labelOf = (id) => productCategories.find((c) => c.id === id)?.label ?? id;

/**
 * Products page: animated filter tabs, live search and an animated grid.
 * The active category is kept in the URL (?category=cones) so it can be linked to.
 */
export default function Products() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('category');
  const active = productCategories.some((c) => c.id === requested) ? requested : 'all';
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const setActive = (id) => {
    const next = new URLSearchParams(params);
    if (id === 'all') next.delete('category');
    else next.set('category', id);
    setParams(next, { replace: true, preventScrollReset: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (active === 'all' || p.category === active) &&
        (!q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    );
  }, [active, query]);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        productCategories.map((c) => [c.id, c.id === 'all' ? products.length : products.filter((p) => p.category === c.id).length])
      ),
    []
  );

  const close = useCallback(() => setSelected(null), []);

  return (
    <PageTransition>
      <Seo
        title="Ice Cream Products"
        description="Explore the full Crazy Ice Cream range: cones, cups, tubs, family packs, kulfi, lassi, sip-ups, cassata, candies and ice cream sandwiches."
        path="/products"
      />
      <PageHero
        eyebrow="Our range"
        title="Every scoop,"
        highlight="every shape"
        subtitle="Cones that crunch, cups that comfort, tubs for sharing and kulfis that taste like home. Find your next favourite."
      />

      <section aria-label="Product catalogue" className="section pt-8">
        <div className="container-x">
          {/* Toolbar: tabs + search */}
          <div className="sticky top-20 z-30 -mx-5 px-5 py-3 sm:top-24 sm:mx-0 sm:px-0">
            <div className="glass flex flex-col gap-3 rounded-3xl p-3 shadow-soft lg:flex-row lg:items-center lg:justify-between">
              <LayoutGroup id="filters">
                <div
                  role="tablist"
                  aria-label="Filter by category"
                  className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1"
                >
                  {productCategories.map((c) => {
                    const isActive = active === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="product-grid"
                        onClick={() => setActive(c.id)}
                        className={`relative flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors ${
                          isActive ? 'text-white' : 'text-choco/75 hover:text-choco'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="filter-pill"
                            className="absolute inset-0 rounded-full bg-strawberry shadow-pink"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span className="relative">{c.label}</span>
                        <span
                          className={`relative rounded-full px-2 py-0.5 text-[0.7rem] ${
                            isActive ? 'bg-white/25' : 'bg-choco/5'
                          }`}
                        >
                          {counts[c.id]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </LayoutGroup>

              <div className="relative w-full lg:max-w-xs">
                <label htmlFor="product-search" className="sr-only">
                  Search products
                </label>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-choco/50" aria-hidden="true" />
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search cones, kulfi, cassata…"
                  className="h-12 w-full rounded-full border-2 border-transparent bg-white pl-12 pr-12 text-base text-choco outline-none transition placeholder:text-choco/40 focus:border-strawberry"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-choco/60 hover:bg-cream hover:text-choco"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-choco/60" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            {active !== 'all' && ` in ${labelOf(active)}`}
            {query && ` matching “${query}”`}
          </p>

          {/* Grid */}
          <motion.div
            id="product-grid"
            role="tabpanel"
            layout
            className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  categoryLabel={labelOf(product.category)}
                  accent={accentByCategory[product.category]}
                  onView={setSelected}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mx-auto mt-6 flex max-w-md flex-col items-center rounded-3xl bg-white/70 p-10 text-center shadow-soft"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-strawberry-100 text-strawberry">
                  <IceCreamCone className="h-8 w-8" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold">No scoops found</h2>
                <p className="mt-2 text-choco/70">
                  We couldn't find anything matching “{query}”. Try another flavour or browse all products.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setActive('all');
                  }}
                  className="mt-6 min-h-[44px] rounded-full bg-choco px-6 font-semibold text-cream transition hover:bg-strawberry"
                >
                  Show all products
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <DealerCTA />

      <ProductModal
        product={selected}
        categoryLabel={selected ? labelOf(selected.category) : ''}
        accent={selected ? accentByCategory[selected.category] : undefined}
        onClose={close}
      />
    </PageTransition>
  );
}
