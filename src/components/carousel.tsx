import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Products } from "../data/products";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const node = scrollRef.current;
    if (!node) return;

    setCanScrollLeft(node.scrollLeft > 0);
    setCanScrollRight(node.scrollLeft < node.scrollWidth - node.clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    const node = scrollRef.current;
    if (node) {
      node.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        node.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;

    const cardWidth = node.querySelector("article")?.clientWidth || 0;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    node.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-t border-neutral-200 bg-white py-16 md:py-24 font-['Baloo_2',cursive]">
      <h2 className="text-center text-4xl mb-6">See What We Have</h2>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative group">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/95 shadow-lg border-2 border-[#D4AF37] flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "opacity-0 group-hover:opacity-100 hover:bg-[#FFF8E1] hover:scale-110"
                : "opacity-0 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            <span className="text-2xl text-neutral-700">‹</span>
          </button>

          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/95 shadow-lg border-2 border-[#D4AF37] flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "opacity-0 group-hover:opacity-100 hover:bg-[#FFF8E1] hover:scale-110"
                : "opacity-0 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            <span className="text-2xl text-neutral-700">›</span>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {Products.map((item, index) => (
              <article
                key={item.title}
                className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start flex flex-col rounded-xl border border-neutral-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group/card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Link to={item.to} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>

                <div className="p-5 flex items-start justify-between gap-4 flex-1">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold leading-snug text-neutral-900 group-hover/card:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-neutral-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <Link to={item.to}>
                    <button
                      className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D4AF37] text-lg text-neutral-700 bg-white hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                      aria-label={`View ${item.title}`}
                    >
                      →
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {Products.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-neutral-300 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Carousel;
