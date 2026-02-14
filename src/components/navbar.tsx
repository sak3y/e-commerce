import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const leftLinks = links.slice(0, 2);
  const rightLinks = links.slice(2);

  const location = useLocation();
  const isLanding = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop <= 8);
      if (scrollTop < lastScrollTop) {
        setIsVisible(true);
      } else if (scrollTop > lastScrollTop && scrollTop > 50) {
        setIsVisible(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <header
      style={{
        fontFamily: "'Lato', sans-serif",
        background: "white",
        borderBottom: "1px solid rgba(184,145,42,0.2)",
        transition: "top 0.3s ease",
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 40,
        top: isVisible ? (isAtTop && isLanding ? "40px" : "0px") : "-300px",
      }}
    >
      {/* ── Desktop ── */}
      <div className="max-w-6xl mx-auto px-6 hidden md:flex items-center h-[68px]">

        {/* Left nav */}
        <nav className="flex items-center gap-8 flex-1 justify-end pr-10">
          {leftLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-200"
              style={{ color: "rgba(1,1,1,0.72)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8912A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(1,1,1,0.72)"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Centre wordmark */}
        <Link to="/" className="flex-shrink-0 px-8">
          <div className="text-center">
            <span
              className="block text-lg font-bold uppercase tracking-[0.22em] text-black"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "0.22em" }}
            >
              Novelty
            </span>
         
            <span
              className="block text-[9px] uppercase tracking-[0.3em] mt-0.5"
              style={{ color: "#B8912A", fontFamily: "'Lato', sans-serif" }}
            >
              Bakery
            </span>
          </div>
        </Link>

        {/* Right nav */}
        <nav className="flex items-center gap-8 flex-1 justify-start pl-10">
          {rightLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-200"
              style={{ color: "rgba(1,1,1,0.72)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8912A"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(1,1,1,0.72)"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-5">
        <div className="flex items-center justify-between h-10 sm:h-14">
          <Link to="/" className="flex items-center gap-2">
            <span
              className="text-xs sm:text-base font-bold uppercase tracking-[0.18em] text-black"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Novelty Bakery
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-1.5"
          >
            <span
              className="block h-px w-[20px] transition-all duration-300"
              style={{
                background: "#B8912A",
                transform: mobileMenuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-[20px] transition-all duration-300"
              style={{
                background: "#B8912A",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-[20px] transition-all duration-300"
              style={{
                background: "#B8912A",
                transform: mobileMenuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav
            className="pb-4"
            style={{ borderTop: "1px solid rgba(184,145,42,0.2)" }}
          >
            <ul>
              {links.map((item, i) => (
                <li key={item.to} style={{ borderBottom: i < links.length - 1 ? "1px solid rgba(1,1,1,0.06)" : "none" }}>
                  <Link
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-200"
                    style={{ color: "rgba(1,1,1,0.7)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8912A"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(1,1,1,0.7)"}
                  >
                    <span>{item.label}</span>
                    <span style={{ color: "#B8912A", fontSize: "10px" }}>→</span>
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