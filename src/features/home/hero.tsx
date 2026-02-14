import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.png";
import { useEffect, useRef } from "react";

// Hero renders ONLY the hero section. AboutCard is separate in home.tsx.

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el, i) => {
      const h = el as HTMLElement;
      h.style.opacity = "0";
      h.style.transform = "translateY(28px)";
      h.style.transition = `opacity 0.9s ease ${i * 0.13}s, transform 0.9s ease ${i * 0.13}s`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          h.style.opacity = "1";
          h.style.transform = "translateY(0)";
        })
      );
    });

    const onScroll = () => {
      const img = sectionRef.current?.querySelector(".nb-hero-img") as HTMLElement;
      if (img) img.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: "#111111" }}>

      {/* Full-bleed image with parallax */}
      <div className="relative h-[90vh] min-h-[580px] max-h-[860px] overflow-hidden">
        <img
          src={heroImg}
          alt="Freshly baked goods at Novelty Bakery"
          className="nb-hero-img w-full h-full object-cover object-center scale-[1.1] will-change-transform"
        />
        {/* Dark gradient — pure black, no brown */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #111111 0%, rgba(17,17,17,0.5) 40%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.2) 60%, transparent 100%)" }} />

      </div>

      {/* Content — anchored bottom left over image */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-22 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div data-reveal className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[2px]" style={{ background: "#B8912A" }} />
              <p className="text-[10px] tracking-[0.34em] uppercase font-semibold"
                style={{ color: "#B8912A", fontFamily: "'Lato', sans-serif" }}>
                High Street North, East Ham · Est. 1985
              </p>
            </div>

            {/* Main heading — very large, high contrast white */}
            <h1
              data-reveal
              className="font-bold text-white leading-[0.87] tracking-[-0.025em] mb-7"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(4.2rem, 11vw, 9rem)",
                textShadow: "0 2px 50px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.4)",
              }}
            >
              Novelty
              <br />
              <span style={{
                color: "#B8912A",
                textShadow: "0 4px 30px rgba(184,145,42,0.5)",
              }}>
                Bakery
              </span>
            </h1>

            {/* Subtext */}
            <p
              data-reveal
              className="mb-10 max-w-[420px] leading-[1.75] font-light"
              style={{
                color: "rgba(255,255,255,0.78)",
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
              }}
            >
              Puff pastries, fresh bread, cakes and everyday treats — baked on the premises every single day.
            </p>

            {/* CTAs */}
            <div data-reveal className="flex flex-wrap gap-4 items-center">

              {/* Primary: gold bg, black text */}
              <Link to="/menu">
                <button
                  className="group relative overflow-hidden text-xs font-bold uppercase tracking-[0.24em] px-9 py-4 transition-all duration-300"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    background: "#B8912A",
                    color: "#111111",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(184,145,42,0.5)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span className="relative z-10">View Menu</span>
                  <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-500" />
                </button>
              </Link>

              {/* Secondary: text link */}
              <Link to="/about">
                <button
                  className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-300"
                  style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.72)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8912A"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.72)"}
                >
                  <span>Our Story</span>
                  <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
        <p className="text-[9px] tracking-[0.3em] uppercase rotate-90 mb-1"
          style={{ color: "rgba(255,255,255,0.22)", fontFamily: "'Lato', sans-serif" }}>Scroll</p>
        <div className="w-px h-14 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="absolute top-0 left-0 right-0 h-1/2 animate-nb-scrolldrop" style={{ background: "#B8912A" }} />
        </div>
      </div>

      <style>{`
        @keyframes nb-scrolldrop {
          0%   { transform: translateY(-100%); opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(260%); opacity: 0; }
        }
        .animate-nb-scrolldrop { animation: nb-scrolldrop 2.2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;