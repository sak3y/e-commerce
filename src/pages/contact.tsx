import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import Hero from "../assets/images/br-bakery-bg.png";
import { FaInstagram } from "react-icons/fa";
import EmailForm from "../components/form";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 [font-family:'Baloo_2',cursive]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Hero strip */}
        <section className="border-b border-neutral-200">
          <div className="h-[200px] md:h-[260px] overflow-hidden">
            <img
              src={Hero}
              alt="Novelty Bakery cupcakes"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>

        {/* Contact content */}
        <section className="border-b border-neutral-200">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-12 grid gap-10 md:grid-cols-2">
            {/* Details */}
            <div>
              <h1 className="text-2xl md:text-[26px] font-bold tracking-[0.08em] uppercase text-neutral-900 mb-3">
                Contact us
              </h1>
              <div className="w-20 h-px bg-[#D4AF37] mb-6" />

              <div className="space-y-4 text-[13px] md:text-[14px] text-neutral-700">
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Address</p>
                  <p>
                    Novelty Bakery
                    <br />
                    393 High Street North
                    <br />
                    London E12 6TP
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Phone</p>
                  <a
                    href="tel:02084713415"
                    className="hover:text-[#D4AF37]"
                  >
                    020 8471 3415
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Hours</p>
                  <p>
                    Mon–Sat: 9am–7pm
                    <br />
                    Sunday: 11am–5pm
                  </p>
                </div>

                <a
                  href="https://www.instagram.com/noveltybakery_/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-neutral-900 hover:text-[#D4AF37] transition-colors text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Email form */}
            <EmailForm />
          </div>
        </section>

        <Gmap />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
