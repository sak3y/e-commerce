import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Intro */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-3">
              Contact
            </p>
            <h1 className="text-2xl md:text-3xl tracking-[0.14em] uppercase text-[#2B1400]">
              Visit, call or drop a note
            </h1>
            <div className="h-px w-16 mx-auto mt-4 mb-6 bg-[#D1A954]" />
            <p className="mt-2 text-sm md:text-base leading-relaxed text-[#4A3725] max-w-2xl mx-auto">
              Whether you are ordering a celebration cake or popping in for everyday pastries,
              these are the best ways to reach Novelty Bakery.
            </p>
          </div>
        </section>

        {/* Details + form */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-18 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Contact details */}
            <div className="space-y-7 text-sm text-[#4A3725]">
              <div>
                <h2 className="text-xs tracking-[0.22em] uppercase text-[#2B1400] mb-2">
                  Bakery address
                </h2>
                <p>
                  Novelty Bakery
                  <br />
                  393 High Street North
                  <br />
                  London E12 6PG
                </p>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.22em] uppercase text-[#2B1400] mb-2">
                  Opening times
                </h2>
                <p>
                  Saturday: 10:00 – 17:00
                  <br />
                  Sunday: 09:00 – 16:30
                </p>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.22em] uppercase text-[#2B1400] mb-2">
                  Get in touch
                </h2>
                <p>
                  Phone: <span className="font-semibold">020 8471 3415</span>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:hello@noveltybakery.co.uk"
                    className="underline decoration-[#D1A954] underline-offset-2 hover:text-[#C5162C]"
                  >
                    hello@noveltybakery.co.uk
                  </a>
                </p>
                <p className="mt-2">
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/noveltybakery_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#D1A954] underline-offset-2 hover:text-[#C5162C]"
                  >
                    @noveltybakery_
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.22em] uppercase text-[#2B1400] mb-2">
                  Best time to call
                </h2>
                <p>
                  Mornings are usually busiest in the bakery. For cake enquiries, afternoons are
                  often the easiest time to talk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map reuse */}
        <Gmap />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
