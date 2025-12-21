import Newsletter from "./newsletter";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="border-t border-pink-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 text-[13px] text-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <p className="leading-relaxed">
              Novelty Bakery is a much‑loved East Ham high street bakery, serving puff pastry, fresh
              bread and biscuits for the local community.
            </p>
            <p className="leading-relaxed">Pick up your everyday favourites today.</p>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/noveltybakery_/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5162C] hover:text-[#8C1C13] transition-colors text-2xl"
              >
                <FaInstagram />
              </a>

              <Link
                to="/contact"
                aria-label="Email"
                className="text-[#C5162C] hover:text-[#8C1C13] transition-colors text-2xl"
              >
                <GoMail />
              </Link>
            </div>
          </div>


          <div className="text-center">
            <p className="tracking-[0.22em] uppercase text-xs text-[#C5162C] mb-3">Opening times</p>
            <p className="leading-relaxed">
              Sat 10am – 5pm
              <br />
              Sun 9am – 4:30pm
            </p>
            <p className="mt-4 leading-relaxed">
              393 High Street North
              <br />
              London E12 6PG
            </p>
            <p className="mt-3">
              <a
                href="https://www.google.com/maps/place/Novelty+Bakery+London/@51.5452412,0.0468248,17z/data=!4m6!3m5!1s0x47d8a64d72eceae3:0x7c3777e2c4d4d2bd!8m2!3d51.5453321!4d0.0492372!16s%2Fg%2F1tczv60b?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5162C] hover:opacity-80 underline decoration-pink-300"
              >
                See map
              </a>
            </p>
          </div>

          <div className="text-center">
            <Newsletter />

            <div className="mt-4 flex justify-center gap-6 text-[10px] uppercase tracking-[0.22em]">
              <Link to="/about" className="hover:text-[#C5162C]">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#C5162C]">
                Contact
              </Link>
              <Link to="/faq" className="hover:text-[#C5162C]">
                FAQs
              </Link>
              <Link to="/faq" className="hover:text-[#C5162C]">
                Collection
              </Link>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-pink-200 pt-4 mt-2 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-gray-600">
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-[#C5162C]">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center">© {new Date().getFullYear()} Novelty Bakery London</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
