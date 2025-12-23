import heroBg from "../assets/images/biscuit-rusk.png";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <section className="relative border-b border-[#E8CFA4] bg-[#FFF7ED]">
      <div className="relative z-0 h-[360px] md:h-[690px] overflow-hidden">
        <img
          src={heroBg}
          alt="Fresh cream pastries"
          className="w-full h-full object-cover object-center"
        />

        {/* Centered framed card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full sm:w-auto">
            {/* Outer ring */}
            <div className="bg-transparent border border-[#E8CFA4] px-[8px] py-[8px]">
              {/* Inner card */}
              <div className="bg-[#FFF7ED] border border-[#F3D39A] px-6 sm:px-10 py-8 md:py-9 text-center">
                <h2 className="text-[20px] md:text-[22px] tracking-[0.22em] uppercase text-[#2B1400] mb-3">
                  About Us
                </h2>

                <div className="w-14 h-[2px] bg-[#C7A840] mx-auto mb-6" />

                <p className="text-xs md:text-[14px] leading-relaxed text-[#4A3725] mb-3">
                  Novelty Bakery is a retail bakery on High Street North in East Ham, London,
                  that prides itself on quality, from‑scratch baking done on the premises.
                </p>

                <p className="text-xs md:text-[14px] leading-relaxed text-[#4A3725] max-w-xl mx-auto mb-7">
                  Serving the community with quality baked goods since 1985, and specialists in puff pastry and fresh bread, each day the counter is filled with pastries, savoury snacks, loaves, cream slices and simple celebration cakes, with trays of fresh favourites ready to take home or share.

                </p>

                <Link to="/about">
                  <button className="inline-flex items-center justify-center border border-[#C7A840] px-8 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[#2B1400] bg-transparent hover:bg-[#F8EFD9] transition-colors">
                    More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Space below card */}
      <div className="h-12 md:h-16" />
    </section>
  );
};

export default AboutCard;
