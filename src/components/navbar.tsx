import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQs" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Brand + tiny tagline */}
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-sm md:text-base tracking-[0.28em] uppercase text-[#8C1C13]"
            >
              Novelty Bakery London
            </Link>
            <span className="hidden md:block text-[11px] text-gray-500 mt-1">
              Puff pastry & fresh bread on High Street North
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-0.5 border-b border-transparent hover:border-[#8C1C13] hover:text-[#8C1C13] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 -mr-1"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 mb-1.5 transition-colors"
              style={{ backgroundColor: "#8C1C13" }}
            />
            <span
              className="block w-6 h-0.5 mb-1.5 transition-colors"
              style={{ backgroundColor: "#8C1C13" }}
            />
            <span
              className="block w-6 h-0.5 transition-colors"
              style={{ backgroundColor: "#8C1C13" }}
            />
          </button>
        </div>

        {/* Thin accent line under nav, like stationery */}
        <div className="h-px bg-pink-100" />

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-3 text-sm">
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block py-1 text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
