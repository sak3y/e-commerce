import Newsletter from "./newsletter";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "rgba(0,0,0,0.10)",
        color: "white",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(1,1,1,0.75)" }}>
              Novelty Bakery is a local East Ham high street bakery serving puff pastry, fresh
              bread and biscuits.
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(1,1,1,0.75)" }}>
              Visit us in store to see what’s fresh today.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/noveltybakery_/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-2xl"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8960C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
              >
                <FaInstagram />
              </a>

              <Link
                to="/contact"
                aria-label="Email"
                className="transition-colors text-2xl"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8960C")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
              >
                <GoMail />
              </Link>
            </div>
          </div>

          {/* Times */}
          <div className="text-center">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
              style={{ color: "#C8960C" }}
            >
              Opening times
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(1,1,1,0.75)" }}>
              Mon – Sat: 9am – 7pm
              <br />
              Sun: 11am – 5pm
            </p>

            <div className="mx-auto my-5 h-px w-16" style={{ background: "rgba(200,150,12,0.35)" }} />

            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(1,1,1,0.75)" }}>
              393 High Street North
              <br />
              London E12 6PG
            </p>
            <p className="mt-3">
              <a
                href="https://www.google.com/maps/place/Novelty+Bakery+London/@51.5452412,0.0468248,17z/data=!4m6!3m5!1s0x47d8a64d72eceae3:0x7c3777e2c4d4d2bd!8m2!3d51.5453321!4d0.0492372!16s%2Fg%2F1tczv60b?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.18em] font-semibold underline underline-offset-4"
                style={{ color: "rgba(255,255,255,0.85)", textDecorationColor: "rgba(200,150,12,0.8)" }}
              >
                See map
              </a>
            </p>
          </div>

          {/* Newsletter + links */}
          <div className="text-center md:text-right">
            <Newsletter />

            <div className="mt-5 flex justify-center md:justify-end gap-5 text-[10px] uppercase tracking-[0.18em] font-semibold">
              <Link to="/about" style={{ color: "rgba(1,1,1,0.75)" }} className="hover:text-[#C8960C]">
                About
              </Link>
              <Link to="/contact" style={{ color: "rgba(1,1,1,0.75)" }} className="hover:text-[#C8960C]">
                Contact
              </Link>
              <Link to="/faq" style={{ color: "rgba(1,1,1,0.75)" }} className="hover:text-[#C8960C]">
                FAQs
              </Link>
              <Link to="/menu" style={{ color: "rgba(1,1,1,0.75)" }} className="hover:text-[#C8960C]">
                Menu
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px]">
          <div style={{ color: "rgba(1,1,1,0.6)" }}>
            © {new Date().getFullYear()} Novelty Bakery London. All rights reserved.
          </div>

          <Link to="/privacy" className="text-[11px] uppercase tracking-[0.18em] font-semibold hover:text-[#C8960C]" style={{ color: "rgba(1,1,1,0.75)" }}>
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* optional red accent line */}
      <div className="h-[2px] w-full" style={{ background: "rgba(155,28,28,0.25)" }} />
    </footer>
  );
};

export default Footer;