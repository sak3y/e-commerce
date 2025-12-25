import { Link } from "react-router-dom";
import heroImg from "../assets/images/biscuit-rusk.png"

const Hero = () => {
  return (
    <section className="relative  bg-[#FFF7ED]">
      {/* Background image */}
      <div className="relative z-0 h-[260px] md:h-[480px] overflow-hidden">
        <img
          src={heroImg}
          alt="Hero image"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Centered framed card */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Outer border */}
        <div className="md:-mt-38 -mt-20 border border-[#FFF7ED] px-[8px] py-[8px]">
          {/* Inner card */}
          <div className="w-full h-full bg-[#FFF7ED] px-8 sm:px-14 py-10 md:py-8 text-center">
            <p className="font-serif italic text-[18px] md:text-[22px] text-[#8C1C13] mb-3">
              Welcome to
            </p>

            <h1 className="text-[32px] font-bold md:text-[40px] tracking-[0.06em] uppercase text-[#8C1C13] mb-5">
              Novelty Bakery
            </h1>

            <p className="text-[15px] md:text-[17px] leading-relaxed text-[#4A3725] max-w-3xl mx-auto mb-9">
              Fresh puff pastries, breads, cakes, and everyday treats.
            </p>


            <Link to="/products">
              <button className="inline-flex items-center justify-center border px-12 py-3 text-[11px] tracking-[0.12em] font-semibold uppercase  border-[#C7A840] hover:bg-[#F8EFD9] transition-colors">
                View Menu
              </button>
            </Link>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Hero;