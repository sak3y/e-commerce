import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../features/home/banner";
import { menu } from "../data/menu";

const Menu = () => {
  return (
    <div className="min-h-screen bg-white text-[var(--nb-black)]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:wght@300;400;600;700&display=swap');
        *, *::before, *::after { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>

      {/* Header stack */}
      <header className="sticky top-0 z-50 bg-white">
        <Navbar />
        <Banner />
      </header>

      <main>
        {/* Top intro */}
        <section className="border-b" style={{ borderColor: "var(--nb-border)" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 md:py-18">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px" style={{ background: "var(--nb-gold)" }} />
              <p
                className="nb-sans text-[10px] tracking-[0.28em] uppercase font-semibold"
                style={{ color: "var(--nb-gold)" }}
              >
                Menu
              </p>
            </div>

            <h1
              className="nb-serif font-bold leading-[0.95]"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.6rem)" }}
            >
              Everyday bakes,
              <br />
              <span style={{ color: "var(--nb-gold)" }}>limited batches</span>
            </h1>

            <p
              className="nb-sans mt-5 leading-[1.9]"
              style={{ color: "var(--nb-text)", maxWidth: 560 }}
            >
              A sample of what you’ll usually find at the counter. Items vary by season &
              availability.
            </p>

            <div className="mt-8 h-px w-24" style={{ background: "var(--nb-border)" }} />
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {menu.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white"
                  style={{
                    border: "1px solid var(--nb-border)",
                  }}
                >
                  <div className="p-7">
                    <p
                      className="nb-sans text-[10px] tracking-[0.28em] uppercase font-semibold mb-2"
                      style={{ color: "var(--nb-gold)" }}
                    >
                      Category
                    </p>

                    <h2 className="nb-serif text-2xl font-bold mb-2">{cat.title}</h2>

                    {cat.intro && (
                      <p
                        className="nb-sans text-[13px] leading-[1.75] mb-5"
                        style={{ color: "var(--nb-text)" }}
                      >
                        {cat.intro}
                      </p>
                    )}

                    <div className="h-px w-full mb-5" style={{ background: "var(--nb-border)" }} />

                    <div className="space-y-4">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="nb-sans font-semibold text-[14px] text-[var(--nb-black)]">
                              {item.name}
                            </p>
                            {item.description && (
                              <p
                                className="nb-sans text-[12px] leading-[1.6] mt-1"
                                style={{ color: "rgba(17,17,17,0.60)" }}
                              >
                                {item.description}
                              </p>
                            )}
                          </div>

                          {(item.price || item.note) && (
                            <span
                              className="nb-sans shrink-0 text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5"
                              style={{
                                border: "1px solid var(--nb-border)",
                                background: "rgba(176,141,87,0.10)",
                                color: "var(--nb-black)",
                              }}
                            >
                              {item.price ? item.price : item.note}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* subtle gold rule */}
                  <div className="h-[2px] w-full" style={{ background: "rgba(176,141,87,0.35)" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer quote */}
        <section style={{ background: "rgba(176,141,87,0.06)" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 text-center">
            <p
              className="nb-serif italic"
              style={{
                fontSize: "16px",
                color: "rgba(17,17,17,0.62)",
                maxWidth: 620,
                margin: "0 auto",
                lineHeight: 1.9,
              }}
            >
              “Everything baked in limited batches — once it’s gone, it’s gone.”
            </p>
            <div className="mx-auto mt-8 h-px w-24" style={{ background: "var(--nb-border)" }} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
