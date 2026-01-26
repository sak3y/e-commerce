import { Link } from "react-router-dom";
import heroImg from "../assets/images/brown-bakery-bg.png";

const Hero = () => {
  return (
    <section className="relative bg-white font-['Baloo_2',cursive] overflow-hidden">
      <div className="relative z-0 h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
        <div className="absolute inset-0 transform scale-110 transition-transform duration-[8000ms] ease-out">
          <img
            src={heroImg}
            alt="Crisp rusk biscuits"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        {/* Animated Golden Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent animate-shimmer" />
      </div>

      {/* Content Card */}
      <div className="flex flex-col relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`-mt-16 md:-mt-20 bg-white shadow-2xl border-2 border-[#D4AF37]/20 px-6 sm:px-8 lg:px-10 py-7 md:py-8 text-center rounded-lg transition-all duration-1000 transform`}
        >

          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-4 font-semibold">
            Freshly baked in East Ham
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase text-neutral-900 mb-4 relative inline-block">
            Novelty Bakery
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-neutral-600 max-w-xl mx-auto mb-6 font-light">
            Fresh puff pastries, breads, cakes and everyday treats baked daily on High Street North.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Link to="/products" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto overflow-hidden border-2 border-[#D4AF37] px-8 py-3 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-all duration-300 hover:text-white hover:shadow-lg hover:-translate-y-0.5">
                <span className="relative z-10">View menu</span>
                <span className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </Link>

            <Link to="/about" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto border-2 border-neutral-300 px-8 py-3 text-sm font-bold uppercase tracking-wider text-neutral-700 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-md">
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-20" />

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
