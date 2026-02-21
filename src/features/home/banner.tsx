import { Link } from "react-router-dom";

const items = ["Fresh puff pastry", "Baked daily", "East Ham · Est. 1985", "Limited batches"];

export const Banner = () => {
  return (
    <div
      style={{ background: "var(--nb-black)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-5 h-9 flex items-center overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-nb-marquee-soft">
          {[...items, ...items].map((t, i) => (
            <Link
              key={i}
              to="/menu"
              className="text-[9px] uppercase tracking-[0.28em] font-semibold"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'Lato', sans-serif" }}
            >
              <span style={{ color: "var(--nb-gold)" }}>•</span> {t}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nb-marquee-soft { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .animate-nb-marquee-soft { animation: nb-marquee-soft 26s linear infinite; }
      `}</style>
    </div>
  );
};

export default Banner;
