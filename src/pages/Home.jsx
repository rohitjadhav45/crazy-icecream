import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import Marquee from '../components/ui/Marquee.jsx';
import Hero from '../components/home/Hero.jsx';
import LovedFlavours from '../components/home/LovedFlavours.jsx';
import CategoryShowcase from '../components/home/CategoryShowcase.jsx';
import Story from '../components/home/Story.jsx';
import Stats from '../components/home/Stats.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import Highlights from '../components/home/Highlights.jsx';
import InstagramGrid from '../components/home/InstagramGrid.jsx';
import DealerCTA from '../components/home/DealerCTA.jsx';
import { marqueeFlavours } from '../data/products';

export default function Home() {
  return (
    <PageTransition>
      <Seo
        description="Crazy Ice Cream, Sangli: handcrafted ice creams, kulfis, flavoured milk and dairy delights made with pure milk and real dry fruits. Sweetening lives since 1999."
        path="/"
      />
      <Hero />
      <LovedFlavours />
      <CategoryShowcase />
      <Story />
      <Stats />
      <WhyChooseUs />
      {/* Two crossing marquee ribbons */}
      <div className="relative my-6 overflow-hidden py-10" aria-hidden="false">
        <Marquee items={marqueeFlavours} className="-rotate-2 scale-105 shadow-pink" />
        <Marquee items={marqueeFlavours} reverse tone="choco" className="-mt-3 rotate-1 scale-105" />
      </div>
      <Highlights />
      <InstagramGrid />
      <DealerCTA />
    </PageTransition>
  );
}
