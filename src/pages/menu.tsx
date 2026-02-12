import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { menu } from "../data/menu";

const Products = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Baloo_2',cursive]">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="border-b mt-20 border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-sm tracking-[0.18em] uppercase text-neutral-800">
                Everyday bakes
              </h2>
              <p className="text-xs text-neutral-600">
                A sample of what you’ll usually find in the counter.
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 md:grid-cols-3">
              {menu.map((cat) => (
                <section key={cat.title}>
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-900 mb-2">
                    {cat.title}
                  </h3>
                  {cat.intro && (
                    <p className="mb-4 text-xs text-neutral-600 leading-relaxed">{cat.intro}</p>
                  )}

                  <ul className="divide-y divide-neutral-200">
                    {cat.items.map((item) => (
                      <li key={item.name} className="py-3">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-semibold text-sm text-neutral-900">
                            {item.name}
                          </span>
                          {(item.price || item.note) && (
                            <span className="text-[11px] uppercase tracking-[0.14em] text-neutral-500 whitespace-nowrap">
                              {item.price ?? item.note}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-[13px] text-neutral-700 leading-snug">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
