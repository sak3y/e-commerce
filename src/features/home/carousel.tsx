import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../data/products";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const checkScrollability = () => {
    const node = scrollRef.current;
    if (!node) return;

    setCanScrollLeft(node.scrollLeft > 0);
    setCanScrollRight(node.scrollLeft < node.scrollWidth - node.clientWidth - 10);

    const card = node.querySelector("article") as HTMLElement | null;
    if (card) setActiveIndex(Math.round(node.scrollLeft / (card.clientWidth + 24)));
  };

  useEffect(() => {
    checkScrollability();
    const node = scrollRef.current;
    if (!node) return;

    node.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);
    return () => {
      node.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;
    const card = node.querySelector("article") as HTMLElement | null;
    if (!card) return;

    node.scrollBy({
      left: dir === "right" ? card.clientWidth + 24 : -(card.clientWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-10">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.85s ease, transform 0.85s ease",
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px" style={{ background: "var(--nb-gold)" }} />
              <p className="nb-sans text-[10px] tracking-[0.28em] uppercase font-semibold" style={{ color: "var(--nb-gold)" }}>
                Fresh Daily
              </p>
            </div>

            <h2 className="nb-serif text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--nb-black)" }}>
              What’s on the counter
            </h2>
          </div>

          <Link to="/menu">
            <button
              className="nb-sans text-[11px] uppercase tracking-[0.2em] font-semibold pb-1"
              style={{
                color: "var(--nb-black)",
                borderBottom: "1px solid var(--nb-border)",
              }}
            >
              View menu
            </button>
          </Link>
        </div>
      </div>

      {/* Track */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative">
          {/* Left */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 h-10 w-10 grid place-items-center border"
            style={{
              background: "white",
              borderColor: "var(--nb-border)",
              color: "var(--nb-black)",
              opacity: canScrollLeft ? 1 : 0,
              pointerEvents: canScrollLeft ? "auto" : "none",
            }}
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 h-10 w-10 grid place-items-center border"
            style={{
              background: "white",
              borderColor: "var(--nb-border)",
              color: "var(--nb-black)",
              opacity: canScrollRight ? 1 : 0,
              pointerEvents: canScrollRight ? "auto" : "none",
            }}
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {Products.map((item, index) => (
              <article
                key={item.title}
                className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start bg-white overflow-hidden"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.7s ease ${0.06 + index * 0.08}s, transform 0.7s ease ${0.06 + index * 0.08}s`,
                  border: "1px solid var(--nb-border)",
                }}
              >
                <Link to={item.to} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, rgba(17,17,17,0.05), rgba(17,17,17,0.10))" }}
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <div className="h-px w-10 mb-4" style={{ background: "var(--nb-gold)" }} />

                  <Link to={item.to}>
                    <h3 className="nb-serif text-xl font-bold mb-2 leading-snug" style={{ color: "var(--nb-black)" }}>
                      {item.title}
                    </h3>
                  </Link>

                  <p className="nb-sans text-sm leading-relaxed mb-4" style={{ color: "rgba(17,17,17,0.62)" }}>
                    {item.text}
                  </p>

                  <Link to={item.to}>
                    <span className="nb-sans text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "var(--nb-gold)" }}>
                      Explore →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-7 flex justify-center gap-2">
          {Products.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const node = scrollRef.current;
                if (!node) return;
                (node.querySelectorAll("article")[i] as HTMLElement | undefined)?.scrollIntoView({
                  behavior: "smooth",
                  inline: "start",
                });
              }}
              className="rounded-none transition-all duration-300"
              style={{
                width: activeIndex === i ? "22px" : "8px",
                height: "3px",
                background: activeIndex === i ? "var(--nb-gold)" : "rgba(17,17,17,0.16)",
              }}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
};

export default Carousel;