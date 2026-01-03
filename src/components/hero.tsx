import { Link } from "react-router-dom";
import heroImg from "../assets/images/bakery-aes.png";

const Hero = () => {
  return (
    <section className="relative bg-white [font-family:'Baloo_2',cursive]">
      {/* Background image with soft dark overlay */}
      <div className="relative z-0 h-[320px] md:h-[420px] overflow-hidden">
        <img
          src={heroImg}
          alt="Crisp rusk biscuits"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Centered card overlapping hero */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="md:-mt-28 -mt-20 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-neutral-200 px-6 sm:px-10 py-9 text-center rounded-sm">
          <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-neutral-600 mb-3">
            Fresh bakes in East Ham
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.06em] uppercase text-neutral-900 mb-4">
            Novelty Bakery
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-neutral-700 max-w-2xl mx-auto mb-7">
            Fresh puff pastries, breads, cakes and everyday treats baked on High Street North.
          </p>

          <Link to="/products">
            <button className="inline-flex items-center justify-center border border-[#D4AF37] px-10 py-2.5 text-[11px] md:text-xs tracking-[0.18em] font-semibold uppercase text-neutral-900 bg-white hover:bg-[#FFF8E1] transition-colors">
              View menu
            </button>
          </Link>
        </div>
      </div>

      <div className="h-10 md:h-14" />
    </section>
  );
};

export default Hero;
