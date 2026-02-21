import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "East Ham",
    text: "The puff pastries here are absolutely divine. I stop by every morning on my way to work. The quality and freshness is unmatched in the area.",
    rating: 5,
  },
  {
    name: "Tariq Hussain",
    location: "Forest Gate",
    text: "Been coming here for over 20 years. The biscuits and rusks are exactly as I remember — fresh, crispy and you cannot stop at one.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    location: "Barking",
    text: "Ordered a celebration cake and it was beautiful. They really care about every single thing they bake. The whole family loved it.",
    rating: 5,
  },
  {
    name: "Marcus O'Brien",
    location: "Plaistow",
    text: "Nothing beats popping in on a Saturday morning. The bread is always fresh out of the oven and the pastries are extraordinary.",
    rating: 5,
  },
];

const Star = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#C8960C">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(0);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28 bg-white">
      {/* optional red accent */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[4px]"
        style={{ background: "rgba(155,28,28,0.85)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(200,150,12,0.25)" }}
      />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div
          className="mb-16 text-center"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(22px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-6 h-[2px]" style={{ background: "#C8960C" }} />
            <p
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}
            >
              What People Say
            </p>
            <span className="block w-6 h-[2px]" style={{ background: "#C8960C" }} />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Loved by the community
          </h2>

          <p
            className="mt-4 text-[15px] text-[#111111]/50 max-w-md mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Hear from our loyal customers who keep coming back for more
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative bg-white p-7"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.8s ease ${i * 0.11}s, transform 0.8s ease ${i * 0.11}s`,
                border: "1px solid rgba(17,17,17,0.09)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              {/* top gold bar */}
              <div
                className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "#C8960C" }}
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} />
                ))}
              </div>

              <p
                className="text-[#111111]/72 leading-relaxed mb-6 text-[15px] italic font-light"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                "{t.text}"
              </p>

              <div className="mb-4 h-px" style={{ background: "rgba(155,28,28,0.15)" }} />

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "#111111",
                    color: "#C8960C",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    className="text-[#111111] font-semibold text-[14px]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#111111]/40 text-[12px]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div
            className="relative p-7 bg-white"
            style={{
              border: "1px solid rgba(17,17,17,0.09)",
              borderLeft: "4px solid #C8960C",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                <Star key={j} />
              ))}
            </div>
            <p
              className="text-[#111111]/70 leading-relaxed mb-6 text-[15px] italic font-light"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              "{testimonials[active].text}"
            </p>
            <div className="mb-4 h-px" style={{ background: "rgba(155,28,28,0.15)" }} />
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center text-sm font-bold"
                style={{
                  background: "#111111",
                  color: "#C8960C",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                {testimonials[active].name[0]}
              </div>
              <div>
                <p
                  className="text-[#111111] font-semibold text-[14px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {testimonials[active].name}
                </p>
                <p
                  className="text-[#111111]/40 text-[12px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {testimonials[active].location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-none transition-all duration-300"
                style={{
                  width: active === i ? "24px" : "8px",
                  height: "3px",
                  background: active === i ? "#C8960C" : "rgba(17,17,17,0.18)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
