import { useState, useEffect } from "react";
import testimonials from "../data/testimonials.json";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  const totalSlides = Math.ceil(testimonials.length / 3);
  const currentSlide = Math.floor(currentIndex / 3);

  return (
    <section className="bg-gradient-to-b from-white to-neutral-50 py-16 md:py-24 font-['Baloo_2',cursive]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Our Customers Say
          </h2>

          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our loyal customers who keep coming back for
            more
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={currentIndex + index}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#D4AF37] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C4A037] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index * 3)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-10 h-3 bg-[#D4AF37]"
                  : "w-3 h-3 border-2 border-[#D4AF37] hover:bg-[#D4AF37]/30"
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
