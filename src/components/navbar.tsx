import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Check if we're at the very top (within banner height)
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
      className={`fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-md font-['Baloo_2',cursive] border-b border-neutral-200 transition-all duration-300 ease-in-out ${
        isVisible ? (isAtTop ? 'top-[40px]' : 'top-0') : '-top-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="hidden md:flex items-center h-20">
          <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.12em] text-neutral-800 flex-1 justify-end pr-8">
            {leftLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-0.5 border-b-2 border-transparent hover:border-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
     
          <Link to="/" className="flex-shrink-0 px-4 mx-4">
            <span className="block text-2xl font-bold scale-y-110 text-neutral-900 uppercase">
              Novelty Bakery
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.02em] text-neutral-800 flex-1 justify-start pl-8">
            {rightLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="pb-0.5 border-b-2 border-transparent hover:border-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between h-16 md:hidden text-neutral-900">
          <Link to="/" className="text-xl font-bold scale-y-110 uppercase">
            Novelty Bakery
          </Link>
          <button
            className={`p-1.5 transition-all duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[18px] h-0.5 bg-neutral-900 transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[6px] rotate-45 w-[18px]" : ""}`}
            />
            <span
              className={`block w-[18px] h-0.5 my-1 bg-neutral-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-[18px] h-0.5 bg-neutral-900 transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[6px] -rotate-45 w-[18px]" : ""}`}
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-2 text-sm uppercase tracking-[0.12em] text-neutral-900 border-t border-neutral-200">
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.to} className="overflow-hidden border-neutral-200 hover:bg-neutral-50">
                  <Link
                    to={item.to}
                    className="block py-3"
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