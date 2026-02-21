import Navbar from "../components/navbar";
import Footer from "../components/footer";
import shopFront from "../assets/images/shop-front.png";

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:wght@300;400;600;700&display=swap');
        *, *::before, *::after { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>

      <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-[#111111]">
          <Navbar />
        </header>

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-[#111111]">
            <div className="relative h-[46vh] min-h-[360px] max-h-[520px] overflow-hidden">
              <img src={shopFront} alt="Novelty Bakery shop front" className="w-full h-full object-cover object-center scale-[1.06]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #111111 0%, rgba(17,17,17,0.55) 55%, rgba(17,17,17,0.15) 100%)" }} />
            </div>

            <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block w-8 h-[2px]" style={{ background: "#C8960C" }} />
                    <p className="text-[10px] tracking-[0.34em] uppercase font-semibold" style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>
                      Our story · East Ham · Est. 1985
                    </p>
                  </div>

                  <h1
                    className="font-bold text-white leading-[0.9] tracking-[-0.02em] mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(3.0rem, 7vw, 5.2rem)" }}
                  >
                    A corner bakery
                    <br />
                    <span style={{ color: "#C8960C" }}>for real life</span>
                  </h1>

                  <p
                    className="max-w-[520px] leading-[1.8]"
                    style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)" }}
                  >
                    We’re here for everyday bread, warm pastries, last-minute cakes and the routines that make a neighbourhood feel like home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="border-b border-black/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 md:py-18 grid gap-10 md:grid-cols-12 items-start">
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm">
                  <img src={shopFront} alt="Novelty Bakery exterior" className="w-full h-[320px] md:h-[420px] object-cover" />
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-8 md:p-10">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>
                    What we do
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    Fresh, not fussy.
                  </h2>

                  <div className="h-[2px] w-12 mb-6" style={{ background: "rgba(200,150,12,0.65)" }} />

                  <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "rgba(0,0,0,0.72)", fontFamily: "'Lato', sans-serif" }}>
                    Since opening in 1985, Novelty Bakery has been baking on High Street North for the community — the kind of place you pop into
                    for a warm chicken pastry, fresh bread, or a quick treat for later.
                  </p>

                  <p className="text-[15px] leading-[1.9]" style={{ color: "rgba(0,0,0,0.72)", fontFamily: "'Lato', sans-serif" }}>
                    We keep it simple: familiar flavours, generous portions, and limited batches. When it’s gone, it’s gone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section style={{ background: "#fffaf0" }}>
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 md:py-18">
              <div className="text-center mb-10">
                <p className="text-[10px] tracking-[0.34em] uppercase font-semibold mb-3" style={{ color: "#C8960C", fontFamily: "'Lato', sans-serif" }}>
                  What matters here
                </p>
                <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Simple done properly
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Fresh daily", body: "Baked early so the essentials are ready when you need them." },
                  { title: "Neighbourhood first", body: "Built around East Ham routines — regulars, families, and school-run stops." },
                  { title: "Limited batches", body: "A counter that changes — because real baking sells out." },
                ].map((x) => (
                  <div key={x.title} className="rounded-2xl border border-black/10 bg-white shadow-sm p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#C8960C" }} />
                      <p className="text-[11px] tracking-[0.26em] uppercase font-semibold" style={{ fontFamily: "'Lato', sans-serif" }}>
                        {x.title}
                      </p>
                    </div>
                    <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(0,0,0,0.72)", fontFamily: "'Lato', sans-serif" }}>
                      {x.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* tiny optional red accent */}
              <div className="mx-auto mt-12 h-[2px] w-24" style={{ background: "rgba(155,28,28,0.45)" }} />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;