/**
 * Melting "drip" divider placed between sections.
 * `color` is the fill of the section the drips come FROM.
 * Use `flip` to point the drips upward (e.g. on the top edge of a dark band).
 */
export default function DripDivider({ color = '#FFF6EC', flip = false, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[90px] lg:h-[110px]"
        fill={color}
      >
        <path d="M0,0 H1440 V38 C1405,38 1398,62 1382,82 C1368,100 1342,100 1336,78 C1330,56 1318,42 1290,42 C1258,42 1252,58 1236,58 C1218,58 1214,40 1180,40 C1150,40 1146,72 1132,98 C1120,120 1092,118 1088,92 C1084,66 1080,44 1046,44 C1012,44 1006,56 986,56 C966,56 960,38 924,38 C892,38 886,60 872,74 C858,88 836,86 832,66 C828,46 816,40 790,40 C760,40 754,62 740,86 C728,106 700,108 694,84 C688,58 684,42 650,42 C618,42 612,52 594,52 C576,52 568,36 534,36 C502,36 498,64 486,88 C476,110 448,110 442,86 C436,62 430,44 398,44 C366,44 360,58 342,58 C324,58 318,40 284,40 C254,40 248,70 236,92 C224,114 196,112 192,88 C188,64 182,42 150,42 C118,42 112,60 94,60 C76,60 70,38 40,38 C20,38 10,38 0,38 Z" />
      </svg>
    </div>
  );
}
