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
      <section className="bg-[#FCEFD9] border-b border-[#E8CFA4]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-18 grid gap-10 md:grid-cols-[1.4fr,1.1fr] md:items-center">
          {/* Left: text and button */}
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-3">
              Novelty Bakery · East Ham
            </p>
            <h1 className="text-3xl md:text-4xl leading-tight text-[#8C1C13] mb-4">
              Puff pastry for
              <br />
              every kind of visit
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-[#4A3725] max-w-md">
              From chicken pastries on the go to cream slices for tea, Novelty Bakery keeps the
              counter full of East Ham favourites.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-full px-9 py-2.5 text-[11px] tracking-[0.22em] uppercase bg-[#8C1C13] text-white hover:bg-[#C5162C] transition-colors">
              View today&apos;s bakes
            </button>
          </div>

          {/* Right: product card */}
          <div className="bg-[#FFF7ED] border border-[#E2C89A] rounded-3xl px-6 py-8 md:px-8 md:py-10 shadow-sm">
            <p className="text-[11px] tracking-[0.22em] uppercase text-center text-[#B46A3C] mb-4">
              Chicken pastries
            </p>

         
            <p className="text-center text-sm text-[#4A3725]">
              Flaky, golden and best eaten warm from the bag.
            </p>

            <div className="mt-5 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8C1C13]" />
              <span className="h-2 w-2 rounded-full bg-[#D1A954]" />
              <span className="h-2 w-2 rounded-full bg-[#E2C89A]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7ED] border-b border-[#E8CFA4]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="h-[360px] md:h-[520px] overflow-hidden rounded-sm border border-[#E2C89A]/70">
              <img
                src="src/assets/images/chickenPastry.png"
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
