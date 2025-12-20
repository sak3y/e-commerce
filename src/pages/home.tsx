import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import Banner from "../components/banner";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Banner />
        <Navbar />
      </header>

      <Main />
      <Gmap />
      <Footer />
    </div>
  );
};

const Main = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FFF7ED] border-b border-[#E8CFA4]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <p className="text-center text-[14px] md:text-[18px] tracking-[0.22em] uppercase text-[#B46A3C] mb-4">
            NOVELTY BAKERY · EAST HAM
          </p>
          <div className="h-px w-16 mx-auto mb-8 bg-[#D1A954]" />

          <div className="grid gap-4 md:grid-cols-3">
            {/* Left image */}
            <div className="h-[320px] md:h-[460px] overflow-hidden rounded-sm">
              <img
                src="src/assets/images/chickenPastry.png"
                alt="Fresh savoury pastries at Novelty Bakery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center text card */}
            <div className="h-[320px] md:h-[460px] bg-[#E8DCC4] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 border border-[#E2C89A]">
              <h1
                className="
      text-lg sm:text-xl md:text-2xl lg:text-3xl
      leading-snug tracking-[0.16em] uppercase text-[#2B1400]
      max-w-[14rem] sm:max-w-[18rem]
    "
              >
                FRESH PUFF PASTRY,
                <br />
                SOFT BREADS
                <br />& EVERYDAY BISCUITS
              </h1>

              <p className="mt-4 text-xs sm:text-sm text-[#4A3725] max-w-[18rem]">
                Baked on High Street North in East Ham, using recipes loved by the local community.
              </p>

              <button className="mt-6 px-6 sm:px-8 py-2 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase border border-[#D1A954] text-[#2B1400] bg-white/60 hover:bg-[#D1A954] hover:text-white transition-colors">
                View products
              </button>
            </div>

            {/* Right image */}
            <div className="h-[320px] md:h-[460px] overflow-hidden rounded-sm">
              <img
                src="src/assets/images/fairyCakes.png"
                alt="Customers enjoying cakes at Novelty Bakery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7ED] border-b border-[#E8CFA4]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
            {/* Shop image – taller */}
            <div className="h-[360px] md:h-[520px] overflow-hidden rounded-sm border border-[#E2C89A]/70">
              <img
                src="src/assets/images/shopFront.png"
                alt="Front of Novelty Bakery"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[360px] md:h-[520px] bg-[#F4E8D4] flex flex-col justify-center items-center px-6 py-10 md:px-10 md:py-16 text-center md:text-left border border-[#E2C89A]">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-2">
                About the bakery
              </p>
              <h2 className="text-2xl md:text-3xl leading-snug tracking-[0.14em] uppercase text-[#2B1400]">
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
  );
};

export default Home;
