import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { menu } from "../data/menu";
import "../styles/products.css";

const Products = () => {
  return (
    <div
      className="min-h-screen text-neutral-900"
      style={{ fontFamily: "'Baloo 2', cursive" }}
    >
      <header>
        <Navbar />
      </header>

      <div className="menu-page">
        <div className="pt-28 pb-14 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Our Menu
            </h1>

            <div className="section-divider mt-4" />

            <p
              style={{
                color: "var(--warm-mid)",
                fontSize: "14px",
                maxWidth: "440px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A sample of what you'll usually find at the counter. <br />
              <em style={{ opacity: 0.7, fontSize: "12px" }}>
                Items vary by season & availability.
              </em>
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center">
            <div className="stamp mx-auto mb-3">Everyday bakes</div>
            <p style={{ color: "var(--warm-muted)", fontSize: "13px" }}>
              Made on High Street North. Worth the visit.
            </p>
          </div>
        </div>

        <main>
          <div>
            <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {menu.map((cat, idx) => (
                  <div
                    key={cat.title}
                    className={`category-card p-4 animate-in card-${idx + 1}`}
                    style={{
                      opacity: 0,
                      background: "#fff",
                      border: "1px solid rgba(184,137,42,0.18)",
                      borderTop: "1px solid #c9952a",
                    }}
                  >
                    <div className="category-header">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "var(--warm-dark)",
                            lineHeight: 1.2,
                          }}
                        >
                          {cat.title}
                        </h3>
                      </div>
                      {cat.intro && (
                        <p
                          style={{
                            fontSize: "12px",
                            color: "var(--warm-muted)",
                            lineHeight: 1.6,
                            marginTop: "6px",
                          }}
                        >
                          {cat.intro}
                        </p>
                      )}
                    </div>

                    {/* thin amber rule between header and items */}
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(184,137,42,0.15)",
                        margin: "8px 0 12px",
                      }}
                    />

                    <div>
                      {cat.items.map((item) => (
                        <div key={item.name} className="item-row">
                          <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
                            <span
                              style={{
                                display: "block",
                                fontWeight: 600,
                                fontSize: "14px",
                                color: "var(--warm-dark)",
                              }}
                            >
                              {item.name}
                            </span>
                            {item.description && (
                              <span
                                style={{
                                  display: "block",
                                  fontSize: "12px",
                                  color: "var(--warm-muted)",
                                  lineHeight: 1.5,
                                  marginTop: "2px",
                                }}
                              >
                                {item.description}
                              </span>
                            )}
                          </div>
                          {item.price ? (
                            <span className="price-badge">{item.price}</span>
                          ) : item.note ? (
                            <span className="note-tag">{item.note}</span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOOTER QUOTE ───────────────────────────────────────────── */}
          <div
            style={{
              background: "#fdf8f0",
              borderBottom: "1px solid rgba(184,137,42,0.2)",
            }}
          >
            <div className="max-w-6xl mx-auto px-4 py-12 text-center">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "var(--warm-muted)",
                  maxWidth: "440px",
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                "Everything baked in limited batches — once it's gone, it's gone."
              </p>
              <div className="section-divider mt-6" style={{ marginBottom: 0 }}></div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Products;
