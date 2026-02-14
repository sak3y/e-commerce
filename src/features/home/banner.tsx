import { Link } from "react-router-dom";

const items = [
  "handmade cakes and pastries",
  "fresh daily on High Street North",
  "limited batches",
  "puff pastry specialists",
  "baking since 1985",
];

export const Banner = () => {
  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{
        background: "#B8912A",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <div className="flex  animate-nb-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <Link
            to="/products"
            key={i}
            className="inline-flex items-center gap-5 px-6 text-[8px] sm:text-[10.5px] tracking-[0.26em] uppercase font-semibold transition-colors duration-200 hover:text-black"
            style={{ color: "#ffffff" }}
          >
            <span>{item}</span>
            {/* White diamond divider */}
            <span className="text-[6px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1 }}>◆</span>
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes nb-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-23.333%); }
        }
        .animate-nb-marquee {
          animation: nb-marquee 32s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-nb-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default Banner;