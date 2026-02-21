import Photo from "../../assets/images/biscuit-rusk.png";
import { useEffect, useRef } from "react";

const RevLetterBox = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current?.querySelectorAll("[data-reveal]").forEach((el, i) => {
            const h = el as HTMLElement;
            h.style.transition = `opacity 0.85s ease ${i * 0.11}s, transform 0.85s ease ${i * 0.11}s`;
            h.style.opacity = "1";
            h.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className="grid md:grid-cols-[1.1fr_1fr] items-stretch overflow-hidden"
          style={{ border: "1px solid var(--nb-border)" }}
        >
          {/* Text */}
          <div className="flex items-center px-8 sm:px-10 lg:px-12 py-12 md:py-14 order-2 md:order-1">
            <div className="max-w-lg">
              <div
                data-reveal
                className="flex items-center gap-3 mb-5"
                style={{ opacity: 0, transform: "translateY(14px)" }}
              >
                <span className="block w-7 h-px" style={{ background: "var(--nb-gold)" }} />
                <p
                  className="nb-sans text-[10px] tracking-[0.28em] uppercase font-semibold"
                  style={{ color: "var(--nb-gold)" }}
                >
                  Baked Fresh
                </p>
              </div>

              <h2
                data-reveal
                className="nb-serif font-bold leading-[1.02] mb-6"
                style={{
                  opacity: 0,
                  transform: "translateY(14px)",
                  color: "var(--nb-black)",
                  fontSize: "clamp(2.1rem, 3.4vw, 3.1rem)",
                }}
              >
                Biscuits & rusks,
                <br />
                <span style={{ color: "var(--nb-gold)" }}>ready to snack</span>
              </h2>

              <p
                data-reveal
                className="nb-sans text-[15px] leading-[1.9] mb-4"
                style={{ opacity: 0, transform: "translateY(14px)", color: "var(--nb-text)" }}
              >
                Biscuits and rusks baked for dipping, snacking and sharing — from tea time to late night
                treats.
              </p>

              <p
                data-reveal
                className="nb-sans text-[15px] leading-[1.9] mb-6"
                style={{ opacity: 0, transform: "translateY(14px)", color: "var(--nb-text)" }}
              >
                Fresh trays are baked on High Street North and brought straight to the counter so you
                can pick up a packet on your way home.
              </p>

              {/* Calm tags (no hover colour flip) */}
              <div
                data-reveal
                className="flex flex-wrap gap-2"
                style={{ opacity: 0, transform: "translateY(14px)" }}
              >
                {["Freshly baked", "Take home", "Perfect for dipping", "Family favourites"].map((tag) => (
                  <span
                    key={tag}
                    className="nb-sans text-[10px] tracking-[0.14em] uppercase px-3 py-1.5"
                    style={{
                      border: "1px solid var(--nb-border)",
                      color: "rgba(17,17,17,0.62)",
                      background: "rgba(176,141,87,0.08)", // uses your gold vibe subtly
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            data-reveal
            className="relative overflow-hidden min-h-[320px] md:min-h-[520px] order-1 md:order-2"
            style={{ opacity: 0, transform: "translateY(18px)" }}
          >
            <img
              src={Photo}
              loading="lazy"
              alt="Biscuit rusks and baked treats"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(17,17,17,0.05) 0%, rgba(17,17,17,0.22) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevLetterBox;