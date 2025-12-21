import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

import shopFront from "../assets/images/shop-front.png";
import fairyCakes from "../assets/images/fairy-cakes.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Banner />
        <Navbar />
      </header>

      <main>
        {/* Hero / intro */}
        <section className="relative border-b border-[#E8CFA4] bg-[#FFF0DA]">
          {/* Top pastry image band */}
          <div className="relative z-0 h-[260px] md:h-[360px] overflow-hidden">
            <img
              src={fairyCakes}
              alt="Fresh pastries on trays"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Floating card */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="-mt-14 md:-mt-20 bg-[#FFF7ED] border border-[#E2C89A] rounded-[36px] shadow-[0_22px_55px_rgba(0,0,0,0.28)] px-6 sm:px-10 md:px-14 py-10 md:py-12 text-center">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#B46A3C] mb-4">
                Novelty Bakery · East Ham
              </p>

              <h1 className="font-serif text-[32px] md:text-[44px] leading-snug text-[#8C1C13] mb-4">
                Puff pastry for
                <br />
                every kind of visit
              </h1>

              <p className="text-[15px] leading-relaxed text-[#4A3725] max-w-xl mx-auto mb-8">
                From chicken pastries on the go to cream slices for tea, Novelty Bakery keeps the
                counter full of East Ham favourites.
              </p>

              <Link to="/products">
                <button className="inline-flex items-center justify-center rounded-full px-11 py-3 text-[11px] tracking-[0.22em] uppercase bg-[#8C1C13] text-white hover:bg-[#C5162C] transition-colors">
                  View products
                </button>
              </Link>
            </div>
          </div>

          {/* Extra space under card */}
          <div className="h-16 md:h-20" />
        </section>

        {/* About section */}
        <section className="bg-[#FFF7ED] border-b border-[#E8CFA4]">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
              <div className="h-[360px] md:h-[520px] overflow-hidden rounded-sm border border-[#E2C89A]/70">
                <img
                  src={shopFront}
                  alt="Front of Novelty Bakery"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[360px] md:h-[520px] bg-[#F4E8D4] flex flex-col justify-center items-center px-8 py-12 text-center border border-[#E2C89A]">
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-2">
                  About the bakery
                </p>

                <h2 className="font-serif text-2xl md:text-3xl leading-snug tracking-[0.18em] uppercase text-[#2B1400]">
                  Baking for the
                  <br />
                  East Ham community
                </h2>

                <p className="mt-4 text-sm text-[#4A3725] max-w-md">
                  Novelty Bakery has been serving puff pastry, soft loaves and simple celebration
                  cakes to neighbours on High Street North for years. Pop in for everyday favourites
                  or to chat about a custom cake.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Gmap />
      <Footer />
    </div>
  );
};

export default Home;
