import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  // split links to go left / right of logo on desktop
  const leftLinks = links.slice(0, 2);
  const rightLinks = links.slice(2);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF3E0]/95 backdrop-blur border-b border-[#E8CFA4]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Single row: links left + logo + links right (desktop) */}
        <div className="hidden md:flex items-center justify-between py-3 md:py-4">
          {/* Left links */}
          <nav className="flex flex-1 justify-evenly text-[12px] tracking-[0.22em] uppercase text-[#7A5A40]">
            {leftLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-1 border-b border-transparent hover:border-[#D1A954] hover:text-[#8C1C13] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <div>
            <Link to="/" className="leading-none text-center">
              <span className="block text-lg md:text-xl text-[#8C1C13] tracking-[0.01em] uppercase">
                Novelty Bakery
              </span>
              <span className="block text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#B46A3C] mt-1">
                 East Ham
              </span>
            </Link>
          </div>

          {/* Right links */}
          <nav className="flex flex-1 justify-evenly text-[12px] tracking-[0.22em] uppercase text-[#7A5A40]">
            {rightLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-1 border-b border-transparent hover:border-[#D1A954] hover:text-[#8C1C13] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile: keep your old layout, just re-use links */}
        <div className="flex items-center justify-between py-3 md:py-4 md:hidden">
          <div className="flex-1" />
          <div className="flex flex-col items-center">
            <Link to="/" className="leading-none text-center">
              <span className="block text-xl text-[#8C1C13] font-serif tracking-[0.18em] uppercase">
                Novelty
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#B46A3C] mt-1">
                Bakery · East Ham
              </span>
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              className="p-1.5"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 mb-1.5 bg-[#8C1C13]" />
              <span className="block w-6 h-0.5 mb-1.5 bg-[#8C1C13]" />
              <span className="block w-6 h-0.5 bg-[#8C1C13]" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 text-sm text-center">
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block py-1 text-[#2B1400]"
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
    </header>
  );
};

export default Navbar;
