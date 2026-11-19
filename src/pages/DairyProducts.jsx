import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import ProductCard from '../components/ui/ProductCard.jsx';
import ProductModal from '../components/ui/ProductModal.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import DealerCTA from '../components/home/DealerCTA.jsx';
import { dairyProducts } from '../data/products';

/**
 * Dairy Products: shrikhand, amrakhand and basundi range.
 */
export default function DairyProducts() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <PageTransition>
      <Seo
        title="Dairy Products"
        description="Traditional Maharashtrian dairy sweets from Crazy Ice Cream: Amrakhand, Shrikhand, Basundi, Gulkand Basundi and Sitafal Basundi."
        path="/dairy-products"
      />
      <PageHero
        tone="mint"
        eyebrow="Festive favourites"
        title="Dairy delights,"
        highlight="the desi way"
        subtitle="Shrikhand for Gudi Padwa, basundi for Diwali, amrakhand for mango season, and every Sunday in between."
      />

      <section aria-labelledby="dairy-title" className="section pt-8">
        <div className="container-x">
          <SectionTitle
            id="dairy-title"
            title="Slow-made from"
            highlight="pure milk"
            subtitle="Hung curd whipped silky smooth and milk simmered for hours, exactly the way it has always been done in Maharashtrian kitchens."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dairyProducts.map((d, i) => (
              <ProductCard
                key={d.id}
                product={d}
                index={i}
                categoryLabel="Dairy"
                accent={d.accent}
                onView={setSelected}
              />
            ))}
            {/* Festive promo tile fills the last grid cell */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-choco to-choco-500 p-8 text-cream shadow-soft"
            >
              <Sparkles className="h-10 w-10 text-mango" aria-hidden="true" />
              <h3 className="mt-5 text-3xl font-semibold">Planning a celebration?</h3>
              <p className="mt-3 text-cream/75">
                Bulk shrikhand and basundi for weddings, festivals and pujas. Fresh, hygienic and on time.
              </p>
              <Link
                to="/contact?type=bulk"
                className="mt-6 inline-flex min-h-[48px] w-fit items-center rounded-full bg-mango px-6 font-semibold text-choco transition hover:bg-white"
              >
                Place a bulk order
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee
        items={['Shrikhand', 'Amrakhand', 'Basundi', 'Gulkand Basundi', 'Sitafal Basundi']}
        tone="mango"
        fast
      />

      <DealerCTA />
      <ProductModal product={selected} categoryLabel="Dairy Products" accent={selected?.accent} onClose={close} />
    </PageTransition>
  );
}
