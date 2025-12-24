import Newsletter from "./newsletter";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="border-t border-[#E8CFA4] bg-[#FFF7ED]">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 text-[13px] text-[#3A2616]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="leading-relaxed">
              Novelty Bakery is a local, East Ham high street bakery, that serves puff pastry, fresh
              bread, and biscuits.
            </p>
            <p className="leading-relaxed">Visit us in store to see what we offer.</p>

            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/noveltybakery_/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C1C13] hover:text-[#C5162C] transition-colors text-2xl"
              >
                <FaInstagram />
              </a>

              <Link
                to="/contact"
                aria-label="Email"
                className="text-[#8C1C13] hover:text-[#C5162C] transition-colors text-2xl"
              >
                <GoMail />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="tracking-[0.22em] uppercase text-xs text-[#8C1C13] mb-3">
              Opening times
            </p>
            <p className="leading-relaxed">
              Mon - Sat: 9am – 7pm
              <br />
              Sun: 11am – 5pm
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
                className="text-[#8C1C13] hover:opacity-80 underline decoration-[#E8CFA4]"
              >
                See map
              </a>
            </p>
          </div>

          <div className="text-center">
            <Newsletter />

            <div className="mt-4 flex justify-center gap-4 text-[10px] uppercase tracking-[0.18em]">
              <Link to="/about" className="hover:text-[#8C1C13]">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#8C1C13]">
                Contact
              </Link>
              <Link to="/faq" className="hover:text-[#8C1C13]">
                FAQs
              </Link>
              <Link to="/faq" className="hover:text-[#8C1C13]">
                Delivery
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8CFA4] pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.05em]">
          <Link to="/privacy" className="hover:text-[#8C1C13]">
            Privacy policy
          </Link>
          <p>© {new Date().getFullYear()} Novelty Bakery London</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
