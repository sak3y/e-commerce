import Photo from "../../assets/images/palmier.png";
import { useEffect, useRef } from "react";

const LetterBox = () => {
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
    <section ref={ref} className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className="grid md:grid-cols-[1fr_1.1fr] items-stretch overflow-hidden"
          style={{ border: "1px solid var(--nb-border)" }}
        >
          {/* Image */}
          <div
            data-reveal
            className="relative overflow-hidden min-h-[320px] md:min-h-[520px]"
            style={{ opacity: 0, transform: "translateY(18px)" }}
          >
            <img
              src={Photo}
              loading="lazy"
              alt="Palmiers and pastries"
              className="w-full h-full object-cover object-center"
            />
            {/* subtle overlay, not dramatic */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(17,17,17,0.05) 0%, rgba(17,17,17,0.22) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="flex items-center bg-white px-8 sm:px-10 lg:px-12 py-12 md:py-14">
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
                  Take Home
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
                Treats to take home,
                <br />
                <span style={{ color: "var(--nb-gold)" }}>fresh daily</span>
              </h2>

              <p
                data-reveal
                className="nb-sans text-[15px] leading-[1.9] mb-4"
                style={{ opacity: 0, transform: "translateY(14px)", color: "var(--nb-text)" }}
              >
                From puff pastries to rusks and biscuits, Novelty Bakery is stocked with bakes to take
                home for tea time or to share with family.
              </p>

              <p
                data-reveal
                className="nb-sans text-[15px] leading-[1.9] mb-6"
                style={{ opacity: 0, transform: "translateY(14px)", color: "var(--nb-text)" }}
              >
                Trays of savoury snacks and everyday favourites are baked on High Street North and
                put straight onto the counter.
              </p>

              {/* simple brochure stats (no glow) */}
              <div
                data-reveal
                className="grid grid-cols-3 gap-4 pt-6"
                style={{
                  opacity: 0,
                  transform: "translateY(14px)",
                  borderTop: "1px solid var(--nb-border)",
                }}
              >
                {[
                  { number: "40+", label: "Years baking" },
                  { number: "Daily", label: "Fresh batches" },
                  { number: "Made", label: "On site" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="nb-serif text-2xl font-bold" style={{ color: "var(--nb-gold)" }}>
                      {stat.number}
                    </p>
                    <p
                      className="nb-sans text-[10px] tracking-[0.16em] uppercase mt-1"
                      style={{ color: "rgba(17,17,17,0.45)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LetterBox;