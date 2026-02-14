import Navbar from "../components/navbar";
import Footer from "../components/footer";
import shopFront from "../assets/images/shop-front.png";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 [font-family:'Baloo_2',cursive]">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Hero section — warm cream tint */}
        <section
          className="border-b mt-10 border-neutral-200"
          style={{ backgroundColor: "#fdf8f0" }}
        >
          <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
            <p
              className="text-[11px] tracking-[0.18em] uppercase mb-3"
              style={{ color: "#b07d2e" }}
            >
              About Novelty Bakery
            </p>
            <h1 className="text-2xl md:text-3xl tracking-[0.08em] uppercase text-neutral-900">
              A corner bakery
              <br />
              with regulars, not customers
            </h1>
            {/* thin amber rule under heading */}
            <div
              className="mx-auto mt-4 mb-6"
              style={{
                width: "48px",
                height: "2px",
                backgroundColor: "#c9952a",
                borderRadius: "1px",
              }}
            />
            <p className="text-sm md:text-base leading-relaxed text-neutral-700 max-w-2xl mx-auto">
              Novelty Bakery sits on the corner of High Street North and is a family‑owned business.
              It is the sort of place you duck into when you want a warm chicken pastry or a soft
              piece of bread. Since opening in 1985, we have been open almost every single day. We
              always make sure our shelves are well stocked, so if you are free, why not pop by and
              treat yourself?
            </p>
          </div>
        </section>

        {/* Story + image */}
        <section className="border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-18 grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="h-[260px] md:h-[420px] overflow-hidden rounded-sm border border-neutral-200">
              <img
                src={shopFront}
                alt="Corner view of Novelty Bakery on High Street North"
                className="w-full h-full object-cover"
              />
            </div>

            {/* card with very faint warm tint */}
            <div
              className="border border-neutral-200 px-6 py-10 md:px-10 md:py-14 flex flex-col justify-center shadow-sm rounded-sm"
              style={{ backgroundColor: "#fffdf8" }}
            >
              <h2
                className="text-xs tracking-[0.18em] uppercase mb-3"
                style={{ color: "#b07d2e" }}
              >
                From morning loaves to late‑day treats
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700 mb-4">
                Mornings at Novelty are all about the everyday essentials: soft sandwich loaves,
                crusty rolls and trays of puff pastry fresh from the oven. Later in the day, the
                counter fills with simple celebration cakes, biscuits and pastries for last‑minute
                birthdays and tea‑time plans.
              </p>
              <p className="text-sm leading-relaxed text-neutral-700">
                The aim is to keep things unfussy – familiar flavours, generous slices and a warm
                hello when you step through the door.
              </p>
            </div>
          </div>
        </section>

        {/* Values — warm background with amber accents */}
        <section
          className="border-b border-neutral-200"
          style={{ backgroundColor: "#fdf8f0" }}
        >
          <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
            <p
              className="text-[11px] tracking-[0.18em] uppercase mb-4 text-center"
              style={{ color: "#b07d2e" }}
            >
              What matters here
            </p>

            <div className="grid gap-8 md:grid-cols-3 text-sm text-neutral-700">
              {[
                {
                  title: "Fresh, not fussy",
                  body: "Everyday pastry, bread and cakes you recognise, baked early so they are ready when you need them.",
                },
                {
                  title: "For the neighbourhood",
                  body: "Regulars, school‑run stops and families picking up a treat – Novelty is built around East Ham routines.",
                },
                {
                  title: "Cakes for moments",
                  body: "From cream slices to custom birthday cakes, the bakes are made to be shared at real‑life tables, not just on screens.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-white border border-neutral-200 px-5 py-6 rounded-sm shadow-sm"
                >
                  {/* small amber dot + title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-block rounded-full flex-shrink-0"
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#c9952a",
                      }}
                    />
                    <h3 className="text-xs tracking-[0.16em] uppercase text-neutral-900">
                      {title}
                    </h3>
                  </div>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;