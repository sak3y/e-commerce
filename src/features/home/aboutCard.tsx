import heroBg from "../../assets/images/biscuit-rusk.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const AboutCard = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
            const h = el as HTMLElement;
            h.style.transition = `opacity 0.9s ease ${i * 0.14}s, transform 0.9s ease ${i * 0.14}s`;
            h.style.opacity = "1";
            h.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 min-h-[600px] md:min-h-[660px]">
          {/* ── Image column ── */}
          <div
            data-reveal
            className="relative overflow-hidden min-h-[320px]"
            style={{ opacity: 0, transform: "translateY(28px)" }}
          >
            <img
              src={heroBg}
              loading="lazy"
              alt="Novelty Bakery baked goods"
              className="w-full h-full object-cover object-center min-h-full transition-transform duration-700 hover:scale-[1.04]"
            />
            {/* Light overlay to keep image readable */}
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />

            {/* Year badge — black bg, gold text, red top border */}
            <div
              className="absolute bottom-8 left-8 px-5 py-4 text-center"
              style={{
                background: "#111111",
              }}
            >
              <p
                className="text-[9px] tracking-[0.26em] uppercase mb-0.5"
                style={{ color: "rgba(200,150,12,0.65)", fontFamily: "'Lato', sans-serif" }}
              >
                Est.
              </p>
              <p className="text-3xl font-bold" style={{ color: "#C8960C" }}>
                1985
              </p>
            </div>
          </div>

          {/* ── Content column — black panel ── */}
          <div className="flex items-center px-10 sm:px-14 py-16 md:py-20">
            <div className="max-w-md w-full">
              {/* Eyebrow */}
              <div
                data-reveal
                className="flex items-center gap-3 mb-6"
                style={{ opacity: 0, transform: "translateY(18px)" }}
              >
                <span className="block w-6 h-[2px]" style={{ background: "#C8960C" }} />
                <p
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}
                >
                  About Us
                </p>
              </div>

              {/* Heading */}
              <h2
                data-reveal
                className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8"
                style={{ opacity: 0, transform: "translateY(18px)" }}
              >
                Baked with care,
                <br />
                <span className="italic" style={{ color: "#C8960C" }}>
                  served with pride
                </span>
              </h2>

              {/* Body */}
              <p
                data-reveal
                className="leading-relaxed mb-5 text-[15px] font-light"
                style={{
                  opacity: 0,
                  transform: "translateY(18px)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Novelty Bakery is a retail bakery on High Street North in East Ham, London, that
                prides itself on quality, from scratch baking done on the premises.
              </p>

              <p
                data-reveal
                className="leading-relaxed mb-10 text-[15px] text-black font-light"
                style={{
                  opacity: 0,
                  transform: "translateY(18px)",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                Serving the community since 1985, specialists in puff pastry and fresh bread — the
                counter is filled with pastries, savoury snacks, loaves and celebration cakes.
              </p>

              {/* CTA — gold bg, black text */}
              <div data-reveal style={{ opacity: 0, transform: "translateY(18px)" }}>
                <Link to="/about">
                  <button
                    className="group relative overflow-hidden text-xs font-bold uppercase tracking-[0.22em] px-8 py-3.5 transition-all duration-300"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      background: "#C8960C",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 6px 24px rgba(200,150,12,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <span className="relative z-10 text-white">More about us</span>
                    <span className="absolute inset-0 bg-black/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-500" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
