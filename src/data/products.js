/**
 * ------------------------------------------------------------------
 *  Crazy Ice Cream – single source of truth for all site content.
 *  Components import from here; nothing is hardcoded in the UI.
 *  To change a product, number or line of copy, edit this file only.
 * ------------------------------------------------------------------
 */

const WP = 'https://crazyicecream.in/wp-content/uploads';

/** Shown whenever a remote image fails to load. */
export const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path d="M160 210 L200 330 L240 210 Z" fill="#FFC93C"/><circle cx="200" cy="175" r="55" fill="#FF4F8B"/><circle cx="180" cy="160" r="10" fill="#fff" opacity=".6"/><text x="200" y="370" text-anchor="middle" font-family="Fredoka, sans-serif" font-size="22" fill="#3B1F1A">Crazy Ice Cream</text></svg>`
  );

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */
export const brand = {
  name: 'Crazy Ice Cream',
  company: 'Crazy Icecream Company',
  tagline: 'Indulge in the Craziest Ice Cream Delights!',
  since: 'Sweetening lives since 1999',
  mascot: 'Crazy-Man',
  logo: `${WP}/2024/01/Logo-Crazy.png`,
  phone: '800 786 9028',
  phoneHref: 'tel:+918007869028',
  whatsappHref:
    'https://wa.me/918007869028?text=' +
    encodeURIComponent('Hi Crazy Ice Cream! I would like to know more about your products / dealership.'),
  email: 'Crazyicecreamcompany@gmail.com',
  address: {
    line1: 'Plot No. 16, Vasantdada Industrial Estate',
    line2: 'Madhavnagar Road, Sangli',
    line3: 'Maharashtra 416416',
  },
  mapEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Vasantdada Industrial Estate, Madhavnagar Road, Sangli, Maharashtra 416416') +
    '&output=embed',
  socials: {
    instagram: 'https://www.instagram.com/crazyicecreamofficial/',
    instagramHandle: '@crazyicecreamofficial',
    // TODO: replace with the official page URLs
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Flavoured Milk', to: '/flavoured-milk' },
  { label: 'Dairy Products', to: '/dairy-products' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact', to: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  Hero floating images                                               */
/* ------------------------------------------------------------------ */
export const heroImages = {
  main: `${WP}/2023/09/Icecream-Cover-1.png`,
  floatA: `${WP}/2023/10/Rajbhog.png`,
  floatB: `${WP}/2023/10/Chocolate-Crunch.png`,
  floatC: `${WP}/2023/10/Kesar-Pista.png`,
};

/* ------------------------------------------------------------------ */
/*  Most loved flavours (home carousel)                                */
/* ------------------------------------------------------------------ */
export const lovedFlavours = [
  {
    id: 'lf-shahibhog',
    name: 'Shahibhog',
    slug: 'shahibhog',
    image: `${WP}/2023/10/Shahibhog.png`,
    color: '#FFC93C',
    description: 'A royal blend of saffron cream, cashew and almond slivers. Rich, festive and fit for a feast.',
  },
  {
    id: 'lf-anjeer',
    name: 'Anjeer',
    slug: 'anjeer',
    image: `${WP}/2023/10/Anjeer.png`,
    color: '#B8D982',
    description: 'Velvety fig ice cream studded with chewy anjeer bits. Naturally sweet, deeply satisfying.',
  },
  {
    id: 'lf-chocolate-crunch',
    name: 'Chocolate Crunch',
    slug: 'chocolate-crunch',
    image: `${WP}/2023/10/Chocolate-Crunch.png`,
    color: '#6E4A41',
    description: 'Dark, glossy chocolate ice cream with a crackle of crunchy choco bits in every bite.',
  },
  {
    id: 'lf-butter-scotch',
    name: 'Butter Scotch',
    slug: 'butter-scotch',
    image: `${WP}/2023/10/Butter-Scotch.png`,
    color: '#FFC93C',
    description: 'Golden caramel cream with buttery praline crunch. The all-time crowd favourite.',
  },
  {
    id: 'lf-kesar-pista',
    name: 'Kesar Pista',
    slug: 'kesar-pista',
    image: `${WP}/2023/10/Kesar-Pista.png`,
    color: '#7FE0C5',
    description: 'Fragrant saffron and roasted pistachio, slow-churned the traditional Indian way.',
  },
  {
    id: 'lf-rajbhog',
    name: 'Rajbhog',
    slug: 'rajbhog',
    image: `${WP}/2023/10/Rajbhog.png`,
    color: '#FF4F8B',
    description: 'Creamy saffron base loaded with crunchy dry fruits and jewel-like candied fruit.',
  },
];

/* ------------------------------------------------------------------ */
/*  Category showcase (home)                                           */
/* ------------------------------------------------------------------ */
export const categoryShowcase = [
  {
    id: 'cat-icecreams',
    title: 'Ice Creams',
    subtitle: 'Cones, cups, tubs, kulfis and more',
    to: '/products',
    image: `${WP}/2023/09/Icecream-Cover-1.png`,
    gradient: 'from-strawberry-200 via-strawberry-100 to-cream',
    accent: '#FF4F8B',
  },
  {
    id: 'cat-milk',
    title: 'Flavoured Milk',
    subtitle: 'Chilled bottles of pure happiness',
    to: '/flavoured-milk',
    image: `${WP}/2023/09/Flavoured-Milk-cover-2.png`,
    gradient: 'from-mango-100 via-cream to-mint-100',
    accent: '#FFC93C',
  },
  {
    id: 'cat-dairy',
    title: 'Dairy Products',
    subtitle: 'Shrikhand, basundi and festive sweets',
    to: '/dairy-products',
    image: `${WP}/2023/09/Dairy-Products-Cover.png`,
    gradient: 'from-mint-100 via-cream to-pistachio-100',
    accent: '#7FE0C5',
  },
];

/* ------------------------------------------------------------------ */
/*  Product categories (Products page filter tabs)                     */
/* ------------------------------------------------------------------ */
export const productCategories = [
  { id: 'all', label: 'All' },
  { id: 'cones', label: 'Cones' },
  { id: 'cups', label: 'Cups' },
  { id: 'tubs', label: 'Tubs' },
  { id: 'packs', label: 'Packs' },
  { id: 'kulfi-drinks', label: 'Kulfi & Drinks' },
  { id: 'others', label: 'Others' },
];

/** Helper to build a product record. */
const p = (name, category, image, description) => ({
  id: `${category}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  category,
  image,
  description,
});

/* ------------------------------------------------------------------ */
/*  All ice cream products                                             */
/* ------------------------------------------------------------------ */
export const products = [
  // Cones
  p('Smart Cones', 'cones', `${WP}/2024/01/Smart-Cones-1.png`,
    'Crisp, golden wafer cones swirled high with creamy ice cream and finished with a chocolate-dipped tip.'),
  p('Big Cones', 'cones', `${WP}/2024/01/Big-Cones.png`,
    'For the seriously hungry. An extra-tall cone packed to the brim, with toppings that crunch all the way down.'),
  p('Small Cones', 'cones', `${WP}/2024/01/Small-Cones.png`,
    'Little cones, big smiles. The perfect pocket-sized treat for kids and quick cravings.'),
  p('Twin Cones', 'cones', `${WP}/2025/09/Twin-Cones-Cover.png`,
    'Two flavours, one cone. A dreamy double swirl for anyone who simply cannot pick a favourite.'),

  // Cups
  p('Sundays Cup', 'cups', `${WP}/2023/12/Sunday-cups.png`,
    'Layers of ice cream, glossy sauce and crunchy toppings, a full sundae parlour experience in one cup.'),
  p('Jumbo Cups', 'cups', `${WP}/2024/01/Jumbo-Cups.png`,
    'Generous, share-if-you-want cups of thick, creamy goodness in all our classic flavours.'),
  p('Cups', 'cups', `${WP}/2023/12/Cups.png`,
    'Our everyday classics in a handy cup: smooth, creamy, and ready whenever the craving strikes.'),
  p('Fun Cups', 'cups', `${WP}/2024/01/Fun-Cups.png`,
    'Bright, playful cups made for little hands, with flavours as colourful as a birthday party.'),
  p('Premium Cups', 'cups', `${WP}/2025/09/Premium-Cups-Cover.png`,
    'Indulgent, slow-churned recipes with rich inclusions. Our finest flavours in a luxurious cup.'),
  p('Novelties', 'cups', `${WP}/2023/12/Novelties-1.png`,
    'Quirky shapes and surprise flavours that make dessert time the craziest part of the day.'),

  // Tubs
  p('Classic Tubs', 'tubs', `${WP}/2024/01/Classic-cups.png`,
    'Family-sized tubs of our timeless flavours: vanilla, butterscotch, chocolate and more, scooped to perfection.'),
  p('Smart Tubs', 'tubs', `${WP}/2024/01/Smart-Tubs.png`,
    'Just-right tubs for movie nights and midnight cravings, loaded with fruit, nuts and crunch.'),
  p('2 in 1 Tubs', 'tubs', `${WP}/2025/09/2-in-1-tubs-Cover.png`,
    'Two crowd-favourite flavours side by side in one tub. Double the joy, zero arguments.'),

  // Packs
  p('Offer Packs', 'packs', `${WP}/2023/12/Family-Pack.png`,
    'Value-packed family bricks made for sharing, so there is always a little extra for everyone.'),
  p('Party Packs', 'packs', `${WP}/2024/01/Party-Packs-1.png`,
    'Big-batch packs built for birthdays, weddings and every celebration that deserves a sweet finish.'),
  p('Paper Packs', 'packs', `${WP}/2024/01/Paper-Packs.png`,
    'Classic paper-wrapped bricks with that nostalgic, slice-and-serve charm.'),

  // Kulfi & Drinks
  p('Kulfi', 'kulfi-drinks', `${WP}/2024/01/Kulfis.png`,
    'Dense, slow-reduced milk kulfi with malai, saffron and pistachio, just like the matka kulfi of old.'),
  p('Lassi', 'kulfi-drinks', `${WP}/2025/09/Lassi-Cover.png`,
    'Thick, chilled lassi whisked from fresh curd: tangy, sweet and wonderfully refreshing.'),
  p('Sip-Ups', 'kulfi-drinks', `${WP}/2024/01/Sip-up.png`,
    'Frozen fun in a tube! Squeeze, sip and cool down with fruity, milky flavours.'),
  p('Flavoured Milks', 'kulfi-drinks', `${WP}/2024/01/Flavoured-milk.png`,
    'Chilled bottles of creamy milk in butterscotch, chocolate, badam and kesar pista.'),
  p('Dairy Products', 'kulfi-drinks', `${WP}/2024/01/Dairy-Products-1.png`,
    'Shrikhand, amrakhand and basundi: festive Maharashtrian sweets made from pure milk.'),

  // Others
  p('Cassata', 'others', `${WP}/2024/01/Cassata.png`,
    'Layered slices of ice cream, sponge cake and nuts, the retro restaurant dessert everyone remembers.'),
  p('Cake Pastry', 'others', `${WP}/2024/01/Cake-Pastery.png`,
    'Soft sponge meets frozen cream in a pastry-style treat that is part cake, part ice cream, all delight.'),
  p('Candys', 'others', `${WP}/2023/12/Candys.png`,
    'Ice candies on a stick, from tangy fruit pops to chocolate-coated bars that crack with every bite.'),
  p('Icecream Sandwich', 'others', `${WP}/2025/09/Icecream-Sandwich-Cover.png`,
    'A thick slab of ice cream pressed between two soft cookie wafers. Handheld happiness.'),
];

/* ------------------------------------------------------------------ */
/*  Flavoured milk                                                     */
/* ------------------------------------------------------------------ */
export const flavouredMilks = [
  {
    id: 'milk-butterscotch',
    name: 'Butterscotch',
    slug: 'butterscotch',
    category: 'flavoured-milk',
    image: `${WP}/2024/01/Butterscotch-3.png`,
    bg: '#FFE3A3',
    accent: '#E9A800',
    description: 'Caramel-kissed milk with a buttery, toffee-like finish. Dessert you can drink.',
  },
  {
    id: 'milk-chocolate',
    name: 'Chocolate',
    slug: 'chocolate',
    category: 'flavoured-milk',
    image: `${WP}/2024/01/Chocolate-4.png`,
    bg: '#E9CFC4',
    accent: '#6E4A41',
    description: 'Rich cocoa whisked into chilled full-cream milk. Smooth, chocolatey and dangerously moreish.',
  },
  {
    id: 'milk-badam',
    name: 'Badam',
    slug: 'badam',
    category: 'flavoured-milk',
    image: `${WP}/2024/01/Badam.png`,
    bg: '#FCEBC4',
    accent: '#C08A2B',
    description: 'Almond-rich milk with a hint of cardamom, the comforting classic from every Indian kitchen.',
  },
  {
    id: 'milk-kesar-pista',
    name: 'Kesar Pista',
    slug: 'kesar-pista',
    category: 'flavoured-milk',
    image: `${WP}/2024/01/Kesar-pista.png`,
    bg: '#DDEFC4',
    accent: '#86AE45',
    description: 'Saffron threads and crushed pistachio in creamy milk. Royal flavour in every sip.',
  },
];

/* ------------------------------------------------------------------ */
/*  Dairy products                                                     */
/* ------------------------------------------------------------------ */
export const dairyProducts = [
  {
    id: 'dairy-amrakhand',
    name: 'Amrakhand',
    slug: 'amrakhand',
    category: 'dairy',
    image: `${WP}/2024/01/Amrakhand-1.png`,
    accent: '#FFC93C',
    description: 'Silky hung curd blended with ripe Alphonso mango pulp. Summer in a spoon.',
  },
  {
    id: 'dairy-basundi',
    name: 'Basundi',
    slug: 'basundi',
    category: 'dairy',
    image: `${WP}/2024/01/Basundi-3.png`,
    accent: '#F7DCBC',
    description: 'Milk slow-simmered until thick and sweet, laced with cardamom, saffron and nuts.',
  },
  {
    id: 'dairy-shrikhand',
    name: 'Shrikhand',
    slug: 'shrikhand',
    category: 'dairy',
    image: `${WP}/2024/01/Shrikhand-2.png`,
    accent: '#FFE3A3',
    description: 'Creamy, tangy-sweet strained yogurt with saffron and elaichi. A festive Maharashtrian must.',
  },
  {
    id: 'dairy-gulkand-basundi',
    name: 'Gulkand Basundi',
    slug: 'gulkand-basundi',
    category: 'dairy',
    image: `${WP}/2025/09/Gulkand-Basundi.png`,
    accent: '#FF8DB3',
    description: 'Classic basundi swirled with fragrant rose-petal gulkand. Floral, cooling and utterly royal.',
  },
  {
    id: 'dairy-sitafal-basundi',
    name: 'Sitafal Basundi',
    slug: 'sitafal-basundi',
    category: 'dairy',
    image: `${WP}/2025/09/Sitafal-Basundi-1.png`,
    accent: '#B8D982',
    description: 'Thick basundi folded with creamy custard-apple pulp. A seasonal favourite, now all year round.',
  },
];

/* ------------------------------------------------------------------ */
/*  Special highlights (home)                                          */
/* ------------------------------------------------------------------ */
export const highlights = [
  {
    id: 'hl-rajbhog',
    name: 'Rajbhog',
    tag: 'Signature',
    image: `${WP}/2023/10/Rajbhog.png`,
    color: '#FFC93C',
    description: 'Creamy saffron ice cream loaded with crunchy dry fruits and candied tutti-frutti. A royal treat in every scoop.',
  },
  {
    id: 'hl-shahi-kulfi',
    name: 'Shahi Kulfi',
    tag: 'Traditional',
    image: `${WP}/2024/01/Kulfis.png`,
    color: '#B8D982',
    description: 'Dense, slow-reduced milk kulfi made the traditional way, with malai richness and a whisper of cardamom.',
  },
  {
    id: 'hl-cookies-cream',
    name: 'Cookies & Cream',
    tag: 'Bestseller',
    image: `${WP}/2024/01/Smart-Cones-1.png`,
    color: '#6E4A41',
    description: 'Smooth vanilla ice cream packed with crushed cookie pieces and wrapped in a snappy chocolate coating.',
  },
  {
    id: 'hl-cassata',
    name: 'Cassata',
    tag: 'Classic',
    image: `${WP}/2024/01/Cassata.png`,
    color: '#FF4F8B',
    description: 'Colourful layers of ice cream, soft sponge and nuts, the nostalgic slice that made every celebration special.',
  },
  {
    id: 'hl-almond-brownie',
    name: 'Almond Brownie Candy',
    tag: 'New',
    image: `${WP}/2023/12/Candys.png`,
    color: '#7FE0C5',
    description: 'Fudgy brownie ice cream on a stick, dipped in chocolate and showered with roasted almonds.',
  },
];

/* Infinite marquee */
export const marqueeFlavours = [
  'Rajbhog', 'Kesar Pista', 'Butter Scotch', 'Chocolate Crunch', 'Anjeer', 'Shahibhog',
  'Cassata', 'Shahi Kulfi', 'Cookies & Cream', 'Mango', 'Strawberry', 'Vanilla', 'Gulkand',
];

/* ------------------------------------------------------------------ */
/*  Stats – placeholder numbers, edit freely                           */
/* ------------------------------------------------------------------ */
export const stats = [
  { id: 'products', value: 100, suffix: '+', label: 'Products' },
  { id: 'dealers', value: 500, suffix: '+', label: 'Dealers' },
  { id: 'distributors', value: 50, suffix: '+', label: 'Distributors' },
  { id: 'awards', value: 10, suffix: '+', label: 'Awards' },
];

/* Why choose us – `icon` is a lucide-react icon name resolved in the component */
export const whyChooseUs = [
  {
    id: 'milk',
    icon: 'Milk',
    title: 'Pure Milk',
    text: 'Fresh, full-cream milk from trusted local dairies is the heart of every scoop we make.',
    color: '#7FE0C5',
  },
  {
    id: 'nuts',
    icon: 'Nut',
    title: 'Real Dry Fruits',
    text: 'Generous handfuls of real cashews, almonds, pistachios and figs. Never flavour shortcuts.',
    color: '#FFC93C',
  },
  {
    id: 'factory',
    icon: 'ShieldCheck',
    title: 'Hygienic Factory',
    text: 'A modern, spotless facility in Sangli with strict quality checks at every step.',
    color: '#B8D982',
  },
  {
    id: 'since',
    icon: 'Heart',
    title: 'Loved Since 1999',
    text: 'Over two decades of smiles across Maharashtra and beyond, one happy family at a time.',
    color: '#FF4F8B',
  },
];

/* Our Story (home) */
export const story = {
  image: `${WP}/2023/09/Icecream-Cover-1.png`,
  heading: 'A scoop of Sangli, served since 1999',
  paragraphs: [
    'It began with a simple, slightly crazy dream: to make ice cream that tastes like a celebration. In 1999, in the heart of Sangli, we churned our first batch with pure milk, real dry fruits and a whole lot of love.',
    'Two decades later, the recipe for happiness has not changed. We still pick the finest ingredients, still slow-churn our classics, and still taste every new flavour before it reaches you.',
    'Today our hygienic, modern factory on Madhavnagar Road serves hundreds of dealers, and every cone, cup and kulfi carries the same promise: real taste, no compromises.',
  ],
  points: ['Pure milk & real dry fruits', 'Hygienic factory in Sangli', 'Family recipes since 1999'],
};

/* Instagram grid – edit captions / images freely */
export const instagramPosts = [
  { id: 'ig1', image: `${WP}/2023/10/Rajbhog.png`, caption: 'Royal Rajbhog Sundays 👑', likes: '2.4k', bg: '#FFF1C7' },
  { id: 'ig2', image: `${WP}/2024/01/Smart-Cones-1.png`, caption: 'Cone-fessions of a cone lover 🍦', likes: '1.9k', bg: '#FFDCE8' },
  { id: 'ig3', image: `${WP}/2023/10/Kesar-Pista.png`, caption: 'Kesar Pista, pure royalty 💛', likes: '3.1k', bg: '#DDF7EF' },
  { id: 'ig4', image: `${WP}/2024/01/Kulfis.png`, caption: 'Kulfi nights are the best nights 🌙', likes: '2.7k', bg: '#EDF6DE' },
  { id: 'ig5', image: `${WP}/2024/01/Party-Packs-1.png`, caption: 'Party mode: ON 🎉', likes: '1.6k', bg: '#FCEBD6' },
  { id: 'ig6', image: `${WP}/2023/10/Chocolate-Crunch.png`, caption: 'Crunch time 🍫', likes: '2.2k', bg: '#E9CFC4' },
];

/* ------------------------------------------------------------------ */
/*  About page                                                         */
/*  NOTE: 1999 and "Today" are confirmed; the in-between years are     */
/*  illustrative placeholders. Swap in the real dates before launch.   */
/* ------------------------------------------------------------------ */
export const timeline = [
  {
    year: '1999',
    title: 'The first scoop',
    text: 'Crazy Icecream Company is born in Sangli with a small batch freezer, a handful of classic flavours and a very big dream.',
  },
  {
    year: '2005',
    title: 'Kulfi & cones join the family',
    text: 'Traditional kulfis and crunchy cones join the line-up, and the neighbourhood favourite starts travelling across the district.',
  },
  {
    year: '2012',
    title: 'A new factory',
    text: 'We move into our modern, hygienic facility at Vasantdada Industrial Estate, multiplying capacity without changing a single recipe.',
  },
  {
    year: '2018',
    title: 'Beyond ice cream',
    text: 'Flavoured milk, shrikhand, amrakhand and basundi bring the Crazy touch to everyday dairy delights.',
  },
  {
    year: '2023',
    title: 'Crazy-Man takes flight',
    text: 'Our superhero mascot Crazy-Man arrives on the scene, and a refreshed brand reaches hundreds of dealers across the region.',
  },
  {
    year: 'Today',
    title: 'Still crazy after all these years',
    text: 'Twin cones, premium cups, 2-in-1 tubs and new basundi flavours: we are still inventing, still tasting, still sweetening lives.',
  },
];

export const missionVision = [
  {
    id: 'mission',
    title: 'Our Mission',
    icon: 'Target',
    text: 'To craft delicious, honest frozen desserts and dairy treats from pure milk and real ingredients, at prices every family can enjoy.',
    color: '#FF4F8B',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    icon: 'Eye',
    text: 'To be the most-loved ice cream brand of Maharashtra and beyond, the first name people think of whenever there is something to celebrate.',
    color: '#FFC93C',
  },
  {
    id: 'values',
    title: 'Our Values',
    icon: 'Sparkles',
    text: 'Quality without shortcuts, hygiene without compromise, and a little bit of craziness in everything we create.',
    color: '#7FE0C5',
  },
];

export const qualityPoints = [
  { id: 'q1', title: 'Pasteurised pure milk', text: 'Every batch starts with tested, pasteurised full-cream milk.' },
  { id: 'q2', title: 'Temperature-controlled', text: 'A deep-freeze cold chain from factory floor to your nearest dealer.' },
  { id: 'q3', title: 'Tasted before it ships', text: 'Every batch is checked for taste, texture and consistency before it leaves the plant.' },
  { id: 'q4', title: 'Clean, modern plant', text: 'Stainless steel processing and strict hygiene protocols, every single day.' },
];

/* ------------------------------------------------------------------ */
/*  Achievements page                                                  */
/*  NOTE: Placeholder milestones. Replace with the company's actual    */
/*  awards, certificates and recognitions before going live.           */
/* ------------------------------------------------------------------ */
export const achievements = [
  {
    id: 'a1',
    year: '1999',
    title: 'Founded in Sangli',
    text: 'Started with a single freezer and a family recipe book, and grew into a household name.',
    icon: 'Flag',
    color: '#FF4F8B',
  },
  {
    id: 'a2',
    year: '25+ yrs',
    title: 'Quarter-century of trust',
    text: 'More than twenty-five years of serving smiles across Maharashtra and neighbouring states.',
    icon: 'Award',
    color: '#FFC93C',
  },
  {
    id: 'a3',
    year: '500+',
    title: 'Dealer network milestone',
    text: 'A growing family of dealers and distributors who bring Crazy Ice Cream closer to you.',
    icon: 'Store',
    color: '#7FE0C5',
  },
  {
    id: 'a4',
    year: '100+',
    title: 'Products & counting',
    text: 'From classic cups to premium tubs and basundi, a range that keeps getting crazier.',
    icon: 'IceCreamCone',
    color: '#B8D982',
  },
  {
    id: 'a5',
    year: 'Quality',
    title: 'Hygiene-first production',
    text: 'Every batch is made in our clean, modern Sangli facility under strict hygiene routines.',
    icon: 'BadgeCheck',
    color: '#FF4F8B',
  },
  {
    id: 'a6',
    year: 'Crazy-Man',
    title: 'A mascot kids adore',
    text: 'Our superhero Crazy-Man has become the favourite face at birthday parties and summer fairs.',
    icon: 'Trophy',
    color: '#FFC93C',
  },
];

/* Contact form enquiry types */
export const enquiryTypes = ['General enquiry', 'Become a dealer', 'Become a distributor', 'Bulk / party order', 'Feedback'];
