import Navbar from "../components/navbar";
import Footer from "../components/footer";
import shopFront from "../assets/images/shop-front.png"

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Intro section */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-3">
              About Novelty Bakery
            </p>
            <h1 className="text-2xl md:text-3xl tracking-[0.14em] uppercase text-[#2B1400]">
              A Corner Bakery
              <br />
              With Regulars, Not Customers
            </h1>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-[#4A3725] max-w-2xl mx-auto">
              Novelty Bakery sits on the corner of High Street North, the place people duck into
              for a warm loaf on the way home or a box of cream slices for a family visit. The ovens
              start before sunrise so the shelves are stacked by the time East Ham wakes up.
            </p>
          </div>
        </section>

        {/* Story + image */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-18 grid gap-8 md:grid-cols-2 md:items-stretch">
            {/* Shop photo slot */}
            <div className="h-[260px] md:h-[420px] overflow-hidden rounded-sm border border-[#E2C89A]/70">
              <img
                src={shopFront}
                alt="Corner view of Novelty Bakery on High Street North"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text card */}
            <div className="bg-[#F4E8D4] border border-[#E2C89A] px-6 py-10 md:px-10 md:py-14 flex flex-col justify-center">
              <h2 className="text-sm tracking-[0.22em] uppercase text-[#B46A3C] mb-2">
                From morning loaves to late‑day treats
              </h2>
              <p className="text-sm leading-relaxed text-[#4A3725] mb-4">
                Mornings at Novelty are all about the everyday essentials: soft sandwich loaves,
                crusty rolls and trays of puff pastry fresh from the oven. Later in the day, the
                counter fills with simple celebration cakes, biscuits and pastries for last‑minute
                birthdays and tea‑time plans.
              </p>
              <p className="text-sm leading-relaxed text-[#4A3725]">
                The aim is to keep things unfussy – familiar flavours, generous slices and a warm
                hello when you step through the door.
              </p>
            </div>
          </div>
        </section>

        {/* Values / little list */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-4 text-center">
              What matters here
            </p>

            <div className="grid gap-8 md:grid-cols-3 text-sm text-[#4A3725]">
              <div>
                <h3 className="text-xs tracking-[0.18em] uppercase text-[#2B1400] mb-2">
                  Fresh, not fussy
                </h3>
                <p>
                  Everyday pastry, bread and cakes you recognise, baked early so they are ready
                  when you need them.
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.18em] uppercase text-[#2B1400] mb-2">
                  For the neighbourhood
                </h3>
                <p>
                  Regulars, school‑run stops and families picking up a treat – Novelty is built
                  around East Ham routines.
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.18em] uppercase text-[#2B1400] mb-2">
                  Cakes for moments
                </h3>
                <p>
                  From cream slices to custom birthday cakes, the bakes are made to be shared at
                  real‑life tables, not just on screens.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
