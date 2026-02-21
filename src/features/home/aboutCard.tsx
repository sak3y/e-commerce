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
            h.style.transition = `opacity 0.9s ease ${i * 0.12}s, transform 0.9s ease ${i * 0.12}s`;
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
    <section ref={ref} className="relative mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className="grid md:grid-cols-2 overflow-hidden"
          style={{
            border: "1px solid var(--nb-border)",
            background: "var(--nb-white)",
          }}
        >
          {/* Image */}
          <div
            data-reveal
            className="relative min-h-[280px] md:min-h-[520px] overflow-hidden"
            style={{ opacity: 0, transform: "translateY(18px)" }}
          >
            <img
              src={heroBg}
              loading="lazy"
              alt="Novelty Bakery baked goods"
              className="w-full h-full object-cover object-center"
            />

            {/* subtle dark overlay for readability (not flashy) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(17,17,17,0.05) 0%, rgba(17,17,17,0.28) 100%)",
              }}
            />

            {/* Est. badge (simple, clean) */}
            <div
              className="absolute bottom-6 left-6 px-4 py-3 text-left"
              style={{
                background: "rgba(17,17,17,0.78)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p
                className="nb-sans text-[9px] uppercase tracking-[0.26em] font-semibold"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                Est.
              </p>
              <p className="nb-serif text-2xl font-bold" style={{ color: "var(--nb-gold)" }}>
                1985
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className="relative flex items-center"
            style={{
              background: "var(--nb-black)",
              color: "white",
            }}
          >
            <div className="w-full px-8 sm:px-10 md:px-12 py-12 md:py-14">
              {/* eyebrow */}
              <div
                data-reveal
                className="flex items-center gap-3 mb-5"
                style={{ opacity: 0, transform: "translateY(14px)" }}
              >
                <span className="block w-7 h-px" style={{ background: "rgba(255,255,255,0.25)" }} />
                <p
                  className="nb-sans text-[10px] uppercase tracking-[0.28em] font-semibold"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  About
                </p>
              </div>

              <h2
                data-reveal
                className="nb-serif font-bold leading-[0.98] mb-5"
                style={{
                  opacity: 0,
                  transform: "translateY(14px)",
                  fontSize: "clamp(2.1rem, 3.6vw, 3.1rem)",
                }}
              >
                Fresh, not fussy.
                <br />
                <span style={{ color: "var(--nb-gold)" }}>Just done properly.</span>
              </h2>

              <p
                data-reveal
                className="nb-sans text-[15px] leading-[1.9] mb-4"
                style={{ opacity: 0, transform: "translateY(14px)", color: "rgba(255,255,255,0.74)" }}
              >
                Novelty Bakery is a local bakery on High Street North in East Ham — baking on the premises with
                limited batches throughout the day.
              </p>

              <p
                data-reveal
                className="nb-sans text-[15px] leading-[1.9] mb-8"
                style={{ opacity: 0, transform: "translateY(14px)", color: "rgba(255,255,255,0.74)" }}
              >
                Known for puff pastry, fresh bread, biscuits and savoury snacks — plus celebration cakes when you
                need them.
              </p>

              <div data-reveal style={{ opacity: 0, transform: "translateY(14px)" }}>
                <Link to="/about">
                  {/* Uses your global button style if you added nb-btn-primary */}
                  <button className="nb-btn-primary nb-sans">
                    More about us
                  </button>
                </Link>
              </div>

              {/* subtle divider */}
              <div className="mt-10 h-px w-16" style={{ background: "rgba(255,255,255,0.12)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;