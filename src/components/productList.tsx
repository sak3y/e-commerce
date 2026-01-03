import { Link } from "react-router-dom";
import pastriesImg from "../assets/images/pastries.png";
import palmiersImg from "../assets/images/palmier.png";
import biscuitImg from "../assets/images/biscuit-rusk.png";

const CategoriesSection = () => {
  const items = [
    {
      title: "Pastries",
      image: pastriesImg,
      text: "Our pastry counter is always changing, so there is always something new to try.",
      to: "/products#pastries",
    },
    {
      title: "Palmiers",
      image: palmiersImg,
      text: "Palmiers and other little treats for sharing or saving for later.",
      to: "/products#delicacies",
    },
    {
      title: "Rusks",
      image: biscuitImg,
      text: "Crisp rusks and biscuits perfect with tea, coffee or for the biscuit tin.",
      to: "/products#biscuits",
    },
  ];

  return (
    <section className="border-t border-neutral-200 bg-white py-16 md:py-24 [font-family:'Baloo_2',cursive]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:gap-12 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col">
              <Link to={item.to}>
                <div className="aspect-[4/3] overflow-hidden border border-neutral-200 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-md text-neutral-700">
                    {item.text}
                  </p>
                </div>

                <Link to={item.to}>
                  <button
                    className="mt-1 inline-flex h-9 w-9 items-center justify-center bg-black text-white text-xl leading-none hover:bg-neutral-800 transition-colors"
                    aria-label={`View ${item.title}`}
                  >
                     →
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
