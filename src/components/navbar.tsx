import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/menu", label: "Menu" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
    [],
  );

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  // lock background scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div
      className="w-full border-b"
      style={{
        borderColor: "var(--nb-border)",
        background: "var(--nb-white)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-[64px] flex items-center justify-between">
          {/* Left (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {links.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nb-nav-link ${isActive(l.to) ? "nb-nav-link-active" : ""}`}
              >
                {l.label}
                <span className="nb-nav-underline" />
              </Link>
            ))}
          </nav>

          {/* Brand */}
          <Link to="/" className="text-center select-none">
            <div className="nb-serif text-[19px] font-bold tracking-[0.18em] uppercase text-black">
              Novelty
            </div>
            <div
              className="nb-sans text-[9px] uppercase tracking-[0.34em]"
              style={{ color: "var(--nb-gold)" }}
            >
              Bakery
            </div>
          </Link>

          {/* Right (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {links.slice(2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nb-nav-link ${isActive(l.to) ? "nb-nav-link-active" : ""}`}
              >
                {l.label}
                <span className="nb-nav-underline" />
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden h-10 w-10 grid place-items-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-4">
              <span
                className="absolute left-0 top-0 h-[2px] w-full transition-all duration-200"
                style={{
                  background: "var(--nb-black)",
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 top-[7px] h-[2px] w-full transition-all duration-200"
                style={{
                  background: "var(--nb-black)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 bottom-0 h-[2px] w-full transition-all duration-200"
                style={{
                  background: "var(--nb-black)",
                  transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* overlay */}
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 w-full h-full"
            onClick={closeMenu}
            style={{ background: "rgba(0,0,0,0.35)" }}
          />

          {/* panel */}
          <div
            className="absolute left-0 right-0 top-0"
            style={{
              background: "var(--nb-white)",
              borderBottom: "1px solid var(--nb-border)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
              <div className="h-[64px] flex items-center justify-between">
                <div className="nb-serif text-[16px] font-bold tracking-[0.14em] uppercase text-black">
                  Menu
                </div>

                <button
                  type="button"
                  className="h-10 w-10 grid place-items-center"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <span className="text-2xl leading-none" style={{ color: "var(--nb-black)" }}>
                    ×
                  </span>
                </button>
              </div>

              <nav className="pb-5 pt-2">
                <ul className="grid gap-1">
                  {links.map((l) => {
                    const active = isActive(l.to);
                    return (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          onClick={closeMenu}
                          className="flex items-center justify-between rounded-xl px-3 py-3"
                          style={{
                            background: active ? "rgba(176,141,87,0.10)" : "transparent",
                          }}
                        >
                          <span
                            className="nb-sans text-[11px] uppercase tracking-[0.22em] font-semibold"
                            style={{
                              color: active ? "var(--nb-black)" : "rgba(17,17,17,0.72)",
                            }}
                          >
                            {l.label}
                          </span>
                          <span style={{ color: "var(--nb-gold)", fontSize: 12 }}>→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 h-px w-full" style={{ background: "var(--nb-border)" }} />

                <p
                  className="mt-4 nb-sans text-[12px] leading-relaxed"
                  style={{ color: "rgba(17,17,17,0.60)" }}
                >
                  Visit us on High Street North for fresh bakes daily.
                </p>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}