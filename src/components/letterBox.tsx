import treatsBg from "../assets/images/bakery-aes.png";

const TreatsIntro = () => {
  return (
    <section className="relative py-12 md:py-16 [font-family:'Baloo_2',cursive]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={treatsBg}
          alt="Bakery treats background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-[0.04em] text-neutral-900 mb-6">
          Treats to Take Home
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-neutral-800 mb-4">
          From puff pastries to rusks and biscuits, Novelty Bakery is stocked with bakes to take home for tea time or to share with family.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-neutral-800 mb-4">
          Trays of savoury snacks, simple cakes and everyday favourites are baked on High Street North and put straight onto the counter.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-neutral-800">
          Pop in, choose a box or a bag of your favourites, and head home with something fresh from the bakery.
        </p>
      </div>
    </section>
  );
};

export default TreatsIntro;
