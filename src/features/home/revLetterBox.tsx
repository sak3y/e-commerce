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
            h.style.transition = `opacity 0.88s ease ${i * 0.13}s, transform 0.88s ease ${i * 0.13}s`;
            h.style.opacity = "1";
            h.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{

        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
     

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr_1fr] items-stretch min-h-[520px]">

          {/* Text — left on desktop */}
          <div className="flex items-center px-10 sm:px-14 lg:px-16 py-16 md:py-20 order-2 md:order-1">
            <div className="max-w-lg">

              <div data-reveal className="flex items-center gap-3 mb-6"
                style={{ opacity: 0, transform: "translateY(18px)" }}>
                <span className="block w-6 h-[2px]" style={{ background: "#C8960C" }} />
                <p className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>Baked Fresh</p>
              </div>

              <h2 data-reveal className="text-4xl md:text-5xl font-bold leading-tight mb-8"
                style={{ opacity: 0, transform: "translateY(18px)" }}>
                Biscuits
                <br />
                <span className="italic" style={{ color: "#C8960C" }}>to Snack On</span>
              </h2>

              <p data-reveal className="leading-relaxed mb-5 text-[15px] font-light"
                style={{ opacity: 0, transform: "translateY(18px)", fontFamily: "'Lato', sans-serif" }}>
                Biscuits and rusks baked for dipping, snacking and sharing — from tea time to
                late night treats.
              </p>

              <p data-reveal className="leading-relaxed mb-5 text-[15px] font-light"
                style={{ opacity: 0, transform: "translateY(18px)", fontFamily: "'Lato', sans-serif" }}>
                Fresh trays are baked on High Street North and brought straight to the counter so you
                can pick up a packet on your way home.
              </p>

              <p data-reveal className="leading-relaxed mb-10 text-[15px] font-light"
                style={{ opacity: 0, transform: "translateY(18px)", fontFamily: "'Lato', sans-serif" }}>
                Pop in, choose a bag of biscuits or rusks, and head home with something that tastes
                like it has just come out of the oven.
              </p>

              {/* Tag chips — gold border/text, red fill on hover */}
              <div data-reveal className="flex flex-wrap gap-3"
                style={{ opacity: 0, transform: "translateY(18px)" }}>
                {["Freshly baked", "Ready to take home", "Perfect for dipping", "Family favourites"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.14em] uppercase border px-3 py-1.5 cursor-default transition-all duration-300"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: "#C8960C",
                      borderColor: "rgba(200,150,12,0.3)",
                      background: "transparent",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#9B1C1C";
                      el.style.borderColor = "#9B1C1C";
                      el.style.color = "#ffffff";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "transparent";
                      el.style.borderColor = "rgba(200,150,12,0.3)";
                      el.style.color = "#C8960C";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Image — right on desktop */}
          <div
            data-reveal
            className="relative overflow-hidden min-h-[340px] order-1 md:order-2"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <img
              src={Photo}
              loading="lazy"
              alt="Biscuit rusks and baked treats"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            {/* Overlay to blend with black panel */}
            <div className="absolute inset-0" style={{ background: "rgba(17,17,17,0.22)" }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevLetterBox;