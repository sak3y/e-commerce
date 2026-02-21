import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/hero.png";
const GOLD = "#B08D57";
const BLACK = "#111111";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: BLACK }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Novelty Bakery"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,17,17,0.35) 0%, rgba(17,17,17,0.65) 55%, rgba(17,17,17,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Push content UP (not bottom) */}
          <div className="pt-16 sm:pt-20 md:pt-24 pb-14 md:pb-18">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="block w-8 h-[1px]"
                  style={{ background: "rgba(255,255,255,0.35)" }}
                />
                <p
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-semibold"
                  style={{ color: `rgba(255,255,255,0.72)`, fontFamily: "'Lato', sans-serif" }}
                >
                  East Ham • Est. 1985
                </p>
              </div>

              {/* Headline */}
              <h1
                className="font-bold leading-[0.95] text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                A neighbourhood bakery
                <br />
                <span style={{ color: GOLD }}>baked fresh daily</span>
              </h1>

              {/* Subtext */}
              <p
                className="mt-5 leading-[1.9]"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "rgba(255,255,255,0.76)",
                  fontSize: "clamp(0.98rem, 1.7vw, 1.08rem)",
                  maxWidth: 540,
                }}
              >
                Puff pastry, fresh bread, biscuits and savoury snacks — made in limited batches on
                High Street North.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/menu" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto h-11 px-6 rounded-xl text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      background: GOLD,
                      color: BLACK,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#C2A15F")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
                  >
                    View menu
                  </button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto h-11 px-6 rounded-xl text-[11px] uppercase tracking-[0.22em] font-semibold border transition-colors"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      borderColor: "rgba(255,255,255,0.28)",
                      color: "rgba(255,255,255,0.82)",
                      background: "rgba(17,17,17,0.10)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(17,17,17,0.10)")}
                  >
                    Contact & hours
                  </button>
                </Link>
              </div>

              {/* Small trust strip (brochure style, not loud) */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  { k: "Fresh", v: "Daily bakes" },
                  { k: "Local", v: "High Street North" },
                  { k: "Since", v: "1985" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-xl px-4 py-3"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(17,17,17,0.22)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-[0.26em] font-semibold"
                      style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.62)" }}
                    >
                      {x.k}
                    </p>
                    <p
                      className="mt-1 text-[13px] font-semibold"
                      style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.88)" }}
                    >
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* subtle bottom divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "rgba(255,255,255,0.10)" }}
        />
      </div>
    </section>
  );
}
