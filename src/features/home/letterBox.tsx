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
      className="relative bg-white overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(200,150,12,0.2)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.1fr] items-stretch min-h-[520px]">

          {/* Image */}
          <div
            data-reveal
            className="relative overflow-hidden min-h-[340px]"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            <img
              src={Photo}
              loading="lazy"
              alt="Palmiers and pastries"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            {/* Red left edge — decorative, creative */}
            <div className="absolute top-0 bottom-0 left-0 w-[4px]" style={{ background: "#9B1C1C" }} />
            {/* Subtle dark gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.08), transparent)" }} />
          </div>

          {/* Content */}
          <div className="flex items-center bg-white px-10 sm:px-14 lg:px-16 py-16 md:py-20">
            <div className="max-w-lg">

              <div data-reveal className="flex items-center gap-3 mb-6"
                style={{ opacity: 0, transform: "translateY(18px)" }}>
                <span className="block w-6 h-[2px]" style={{ background: "#C8960C" }} />
                <p className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>Take Home</p>
              </div>

              <h2 data-reveal className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-8"
                style={{ opacity: 0, transform: "translateY(18px)" }}>
                Treats to
                <br />
                <span className="italic" style={{ color: "#C8960C" }}>Take Home</span>
              </h2>

              <p data-reveal className="text-[#111111]/60 leading-relaxed mb-5 text-[15px]"
                style={{ opacity: 0, transform: "translateY(18px)", fontFamily: "'Lato', sans-serif" }}>
                From puff pastries to rusks and biscuits, Novelty Bakery is stocked with bakes to take
                home for tea time or to share with family.
              </p>

              <p data-reveal className="text-[#111111]/60 leading-relaxed mb-5 text-[15px]"
                style={{ opacity: 0, transform: "translateY(18px)", fontFamily: "'Lato', sans-serif" }}>
                Trays of savoury snacks, simple cakes and everyday favourites are baked on High Street
                North and put straight onto the counter.
              </p>

              <p data-reveal className="text-[#111111]/60 leading-relaxed mb-10 text-[15px]"
                style={{ opacity: 0, transform: "translateY(18px)", fontFamily: "'Lato', sans-serif" }}>
                Pop in, choose a box or a bag of your favourites, and head home with something fresh.
              </p>

              {/* Stats — gold numbers, black label */}
              <div
                data-reveal
                className="grid grid-cols-3 gap-4 pt-8"
                style={{
                  opacity: 0,
                  transform: "translateY(18px)",
                  borderTop: "1px solid rgba(200,150,12,0.25)",
                }}
              >
                {[
                  { number: "40+", label: "Years baking" },
                  { number: "Daily", label: "Fresh batches" },
                  { number: "100%", label: "Made on site" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold" style={{ color: "#C8960C" }}>{stat.number}</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#111111]/45 mt-1"
                      style={{ fontFamily: "'Lato', sans-serif" }}>{stat.label}</p>
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