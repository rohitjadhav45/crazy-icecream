import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

import { lovedFlavours } from '../../data/products';
import SectionTitle from '../ui/SectionTitle.jsx';
import TiltCard from '../ui/TiltCard.jsx';
import SmartImage from '../ui/SmartImage.jsx';

/**
 * "Most Loved Flavours" – swipeable carousel of tilt-on-hover flavour cards.
 */
export default function LovedFlavours() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="loved-flavours" aria-labelledby="loved-title" className="section overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
          id="loved-title"
            eyebrow="Fan favourites"
            title="Most Loved"
            highlight="Flavours"
            subtitle="The scoops Sangli can't stop talking about. Swipe through the flavours that have won hearts for over two decades."
            align="left"
            className="text-center md:text-left [&_h2]:mx-auto md:[&_h2]:mx-0"
          />
          <div className="flex gap-3">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous flavour"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-choco/15 bg-white text-choco transition hover:border-strawberry hover:bg-strawberry hover:text-white disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next flavour"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-strawberry text-white shadow-pink transition hover:bg-strawberry-600 disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <Swiper
            className="loved-swiper"
            modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
            spaceBetween={20}
            slidesPerView={1.15}
            grabCursor
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            breakpoints={{
              480: { slidesPerView: 1.6, spaceBetween: 20 },
              768: { slidesPerView: 2.4, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
          >
            {lovedFlavours.map((f) => (
              <SwiperSlide key={f.id} className="!h-auto py-4">
                <TiltCard className="group overflow-hidden rounded-[2rem] bg-white shadow-soft">
                  <div
                    className="relative aspect-[4/5] overflow-hidden"
                    style={{ background: `linear-gradient(160deg, ${f.color}55 0%, ${f.color}18 55%, #ffffff 100%)` }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-[45%] h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                      style={{ background: `${f.color}66` }}
                    />
                    <SmartImage
                      src={f.image}
                      alt={`${f.name} ice cream`}
                      className="relative h-full w-full object-contain p-6 drop-shadow-[0_25px_25px_rgba(59,31,26,0.22)] transition-transform duration-700 group-hover:scale-110"
                      style={{ transform: 'translateZ(40px)' }}
                    />
                    <span className="glass absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full">
                      <Heart className="h-4 w-4 fill-strawberry text-strawberry" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">{f.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-choco/65">{f.description}</p>
                  </div>
                </TiltCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
