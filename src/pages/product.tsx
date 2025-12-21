import Navbar from "../components/navbar";
import Footer from "../components/footer";

type Product = {
  name: string;
  description?: string;
  price?: string;
  note?: string;
};

const categories: { title: string; intro?: string; items: Product[] }[] = [
  {
    title: "Puff pastry favourites",
    intro: "Crisp layers, soft centres – baked fresh each morning.",
    items: [
      { name: "Chicken pastry", description: "Flaky puff with spiced chicken filling.", price: "£2.50" },
      { name: "Veg puff", description: "Seasoned vegetable filling in golden pastry.", price: "£2.30" },
      { name: "Sausage roll", description: "Classic savoury roll, best warm.", price: "£2.20" },
    ],
  },
  {
    title: "Everyday breads",
    intro: "Loaves and rolls for breakfast, lunch and tea.",
    items: [
      { name: "Soft white loaf", description: "Sandwich loaf, sliced on request.", price: "from £2.40" },
      { name: "Brown loaf", description: "Light wholemeal loaf.", price: "from £2.60" },
      { name: "Bread rolls", description: "White or brown, baked daily.", price: "£0.50 each" },
    ],
  },
  {
    title: "Cakes & slices",
    intro: "Simple celebration cakes and counter treats.",
    items: [
      { name: "Cream slice", description: "Layers of pastry with whipped cream.", price: "£2.80" },
      { name: "Jam sponge", description: "Soft sponge with jam and icing.", price: "£2.50" },
      { name: "Celebration cakes", description: "Made to order for birthdays and family events.", note: "Price on enquiry" },
    ],
  },
  {
    title: "Biscuits & small bakes",
    intro: "For tea breaks, school runs and after‑dinner treats.",
    items: [
      { name: "Chocolate biscuit", price: "£1.20" },
      { name: "Coconut biscuit", price: "£1.20" },
      { name: "Assorted selection box", note: "Ask in store for today’s mix" },
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Intro */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#B46A3C] mb-3">
              Products
            </p>
            <h1 className="text-2xl md:text-3xl tracking-[0.14em] uppercase text-[#2B1400]">
              Everyday bakes & celebration cakes
            </h1>
            <div className="h-px w-16 mx-auto mt-4 mb-6 bg-[#D1A954]" />
            <p className="mt-2 text-sm md:text-base leading-relaxed text-[#4A3725] max-w-2xl mx-auto">
              This menu gives a flavour of what you’ll usually find in the counter. For custom cakes
              or specific requests, please contact the bakery directly.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-[#E8CFA4]">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-[#F4E8D4] border border-[#E2C89A] px-6 py-8 md:px-8 md:py-9"
              >
                <h2 className="text-xs tracking-[0.22em] uppercase text-[#2B1400] mb-2">
                  {cat.title}
                </h2>
                {cat.intro && (
                  <p className="mb-4 text-sm text-[#7A5A40]">{cat.intro}</p>
                )}

                <ul className="space-y-3 text-sm text-[#4A3725]">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex justify-between gap-3">
                        <span className="font-semibold">{item.name}</span>
                        {(item.price || item.note) && (
                          <span className="text-[#7A5A40] text-xs uppercase tracking-[0.16em]">
                            {item.price ?? item.note}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-[13px] text-[#5A4330]">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
