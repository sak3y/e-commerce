import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

import shopFront from "../assets/images/shop-front.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Banner />
        <Navbar />
      </header>

      <main>
        {/* Hero / intro */}
        <section className="relative border-b border-[#E8CFA4] bg-[#FFF7ED]">
          {/* Background image band */}
          <div className="relative z-0 h-[260px] md:h-[420px] overflow-hidden">
            <img
              src={shopFront}
              alt="Fresh pastries on trays"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Centered framed card */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
            {/* Outer ring */}
            <div className="md:-mt-28 -mt-20 border border-[#FFF7ED] px-[8px] py-[8px]">
              {/* Inner card */}
              <div className="w-full h-full bg-[#FFF7ED] px-8 sm:px-14 py-10 md:py-14 text-center">
                {/* Small intro line */}
                <p className="font-serif italic text-[18px] md:text-[22px] text-[#B46A3C] mb-3">
                  Welcome to
                </p>

                {/* Bakery name – red, slightly spaced */}
                <h1 className="text-[32px] md:text-[40px]  tracking-[0.01em] uppercase text-[#8C1C13] mb-5">
                  Novelty Bakery
                </h1>

                {/* One clean tagline */}
                <p className="text-[15px] md:text-[17px] leading-relaxed text-[#4A3725] max-w-3xl mx-auto mb-9">
                  Fresh baked pastries, savoury snacks, breads, cakes, and everyday treats from our
                  East Ham bakery.
                </p>

                {/* Gold‑accent button */}
                <Link to="/products">
                  <button className="inline-flex items-center justify-center border border-[#C7A840] px-12 py-3 text-[11px] tracking-[0.2em] uppercase text-[#8C1C13] bg-[#FFF7ED] hover:bg-[#F8EFD9] transition-colors">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Space under card */}
          <div className="h-16 md:h-20" />
        </section>
      </main>

      <Gmap />
      <Footer />
    </div>
  );
};

export default Home;
