import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import HeroImg from "../assets/images/shop-front.png";
import { FaInstagram } from "react-icons/fa";
import EmailForm from "../features/contact/form";

const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:wght@300;400;600;700&display=swap');
        *, *::before, *::after { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>

      <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-[#111111]">
          <Navbar />
        </header>

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-[#111111]">
            <div className="relative h-[34vh] min-h-[260px] max-h-[360px] overflow-hidden">
              <img src={HeroImg} alt="Novelty Bakery" className="w-full h-full object-cover object-center scale-[1.06]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #111111 0%, rgba(17,17,17,0.55) 55%, rgba(17,17,17,0.15) 100%)" }} />
            </div>

            <div className="absolute inset-0 flex items-end pb-10 md:pb-12">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <p className="text-[10px] tracking-[0.34em] uppercase font-semibold mb-3" style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>
                  Contact
                </p>
                <h1 className="text-white font-bold leading-[0.95]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}>
                  Visit us or message us
                </h1>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="border-b border-black/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16 grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-7">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>
                    Details
                  </p>

                  <div className="space-y-5 text-[15px]" style={{ fontFamily: "'Lato', sans-serif", color: "rgba(0,0,0,0.72)" }}>
                    <div>
                      <p className="font-semibold text-black mb-1">Address</p>
                      <p>
                        Novelty Bakery<br />
                        393 High Street North<br />
                        London E12 6TP
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-black mb-1">Phone</p>
                      <a href="tel:02084713415" className="hover:underline" style={{ color: "#111111" }}>
                        020 8471 3415
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold text-black mb-1">Hours</p>
                      <p>
                        Mon–Sat: 9am–7pm<br />
                        Sunday: 11am–5pm
                      </p>
                    </div>

                    <a
                      href="https://www.instagram.com/noveltybakery_/"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                      style={{ color: "#111111" }}
                    >
                      <FaInstagram className="text-2xl" />
                      <span className="text-[11px] tracking-[0.24em] uppercase font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Instagram
                      </span>
                    </a>
                  </div>

                  <div className="mt-8 h-[2px] w-16" style={{ background: "rgba(200,150,12,0.55)" }} />
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-7 md:p-9">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>
                    Send a message
                  </p>
                  <EmailForm />
                </div>
              </div>
            </div>
          </section>

          <Gmap />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;