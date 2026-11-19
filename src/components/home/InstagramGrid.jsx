import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { brand, instagramPosts } from '../../data/products';
import SectionTitle from '../ui/SectionTitle.jsx';
import SmartImage from '../ui/SmartImage.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';
import { InstagramIcon } from '../ui/SocialIcons.jsx';

/**
 * Instagram-style post grid that links to the official profile.
 */
export default function InstagramGrid() {
  return (
    <section aria-labelledby="insta-title" className="section">
      <div className="container-x">
        <SectionTitle
          id="insta-title"
          eyebrow={brand.socials.instagramHandle}
          title="Follow the"
          highlight="#CrazyScoop"
          subtitle="New flavours, behind-the-scenes swirls and your happiest ice cream moments. Join the crazy family on Instagram."
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post, i) => (
            <motion.li
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <a
                href={brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram post: ${post.caption}`}
                className="group block overflow-hidden rounded-3xl border border-choco/5 bg-white shadow-soft transition-shadow duration-500 hover:shadow-glow"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="rounded-full bg-gradient-to-tr from-mango via-strawberry to-[#8B5CF6] p-[2px]">
                    <span className="block rounded-full bg-white p-[2px]">
                      <SmartImage src={brand.logo} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-contain" />
                    </span>
                  </span>
                  <span className="text-sm font-semibold">crazyicecreamofficial</span>
                  <span className="ml-auto text-lg leading-none text-choco/40" aria-hidden="true">
                    •••
                  </span>
                </div>

                {/* Post image */}
                <div className="relative aspect-square overflow-hidden" style={{ background: post.bg }}>
                  <SmartImage
                    src={post.image}
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-choco/0 transition-colors duration-500 group-hover:bg-choco/40">
                    <InstagramIcon className="h-12 w-12 scale-50 text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Post footer */}
                <div className="px-4 pb-4 pt-3">
                  <div className="flex items-center gap-4 text-choco" aria-hidden="true">
                    <Heart className="h-6 w-6 transition-colors group-hover:fill-strawberry group-hover:text-strawberry" />
                    <MessageCircle className="h-6 w-6" />
                    <Send className="h-6 w-6" />
                    <Bookmark className="ml-auto h-6 w-6" />
                  </div>
                  <p className="mt-2 text-sm font-semibold">{post.likes} likes</p>
                  <p className="mt-1 text-sm text-choco/75">
                    <span className="font-semibold text-choco">crazyicecreamofficial</span> {post.caption}
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <MagneticButton href={brand.socials.instagram} target="_blank" rel="noopener noreferrer" icon={InstagramIcon}>
            Follow {brand.socials.instagramHandle}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
