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
    const card = node.querySelector("article");
    if (card) setActiveIndex(Math.round(node.scrollLeft / (card.clientWidth + 24)));
  };

  useEffect(() => {
    checkScrollability();
    const node = scrollRef.current;
    if (node) {
      node.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => { node.removeEventListener("scroll", checkScrollability); window.removeEventListener("resize", checkScrollability); };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;
    const card = node.querySelector("article") as HTMLElement;
    node.scrollBy({ left: dir === "right" ? card.clientWidth + 24 : -(card.clientWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-28 overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div>
            {/* Red rule + gold eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-4 h-[2px]" style={{ background: "#9B1C1C" }} />
              <span className="block w-6 h-[2px]" style={{ background: "#C8960C" }} />
              <p className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>Fresh Daily</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight">
              What's on the Counter
            </h2>
          </div>

          {/* View all — black text, gold underline */}
          <Link to="/products">
            <button
              className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] pb-1 transition-all duration-300 hover:text-[#C8960C]"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#111111",
                borderBottom: "1px solid rgba(17,17,17,0.2)",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderBottomColor = "#C8960C"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(17,17,17,0.2)"}
            >
              View all products
              <span className="block w-4 h-px bg-current transition-all duration-300 group-hover:w-7" />
            </button>
          </Link>
        </div>
      </div>

      {/* Carousel track */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative">

          {/* Left arrow — black bg, gold icon, gold border */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-10 w-10 flex items-center justify-center border transition-all duration-250"
            style={{
              background: canScrollLeft ? "#111111" : "transparent",
              borderColor: canScrollLeft ? "#C8960C" : "transparent",
              color: "#C8960C",
              opacity: canScrollLeft ? 1 : 0,
              pointerEvents: canScrollLeft ? "auto" : "none",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C8960C"; (e.currentTarget as HTMLElement).style.color = "#111111"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#111111"; (e.currentTarget as HTMLElement).style.color = "#C8960C"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-10 w-10 flex items-center justify-center border transition-all duration-250"
            style={{
              background: canScrollRight ? "#111111" : "transparent",
              borderColor: canScrollRight ? "#C8960C" : "transparent",
              color: "#C8960C",
              opacity: canScrollRight ? 1 : 0,
              pointerEvents: canScrollRight ? "auto" : "none",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C8960C"; (e.currentTarget as HTMLElement).style.color = "#111111"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#111111"; (e.currentTarget as HTMLElement).style.color = "#C8960C"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
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
                className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start bg-white overflow-hidden group/card transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(22px)",
                  transition: `opacity 0.7s ease ${0.08 + index * 0.09}s, transform 0.7s ease ${0.08 + index * 0.09}s, box-shadow 0.3s ease, translate 0.3s ease`,
                  border: "1px solid rgba(17,17,17,0.1)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(0,0,0,0.13)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"}
              >
                {/* Image */}
                <Link to={item.to} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-[1.07]"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-350"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }}
                    />
                    {/* Red corner triangle — decorative accent */}
                    <div
                      className="absolute top-0 left-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      style={{
                        width: 0, height: 0,
                        borderTop: "32px solid #9B1C1C",
                        borderRight: "32px solid transparent",
                      }}
                    />
                  </div>
                </Link>

                {/* Card body */}
                <div className="p-6">
                  {/* Gold top rule on hover */}
                  <div
                    className="h-[2px] mb-4 transition-all duration-300"
                    style={{
                      background: "#C8960C",
                      width: "0%",
                    }}
                    ref={el => {
                      if (!el) return;
                      const parent = el.closest("article");
                      if (!parent) return;
                      parent.addEventListener("mouseenter", () => el.style.width = "40px");
                      parent.addEventListener("mouseleave", () => el.style.width = "0px");
                    }}
                  />
                  <Link to={item.to}>
                    <h3
                      className="text-xl font-bold text-[#111111] mb-2 leading-snug transition-colors duration-300 group-hover/card:text-[#C8960C]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-[#111111]/55 leading-relaxed mb-5"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {item.text}
                  </p>
                  <Link to={item.to}>
                    <button
                      className="group/btn flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-250"
                      style={{ fontFamily: "'Lato', sans-serif", color: "#C8960C" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#111111"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#C8960C"}
                    >
                      <span>Explore</span>
                      <span className="block w-4 h-px bg-current transition-all duration-300 group-hover/btn:w-7" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {Products.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const node = scrollRef.current;
                if (!node) return;
                (node.querySelectorAll("article")[i] as HTMLElement)?.scrollIntoView({ behavior: "smooth", inline: "start" });
              }}
              className="rounded-none transition-all duration-300"
              style={{
                width: activeIndex === i ? "24px" : "8px",
                height: "3px",
                background: activeIndex === i ? "#C8960C" : "rgba(17,17,17,0.18)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
};

export default Carousel;