const Gmap = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Gold top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(184,145,42,0.3)" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 md:pt-20 pb-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px]" style={{ background: "#B8912A" }} />
              <p
                className="text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "#B8912A", fontFamily: "'Lato', sans-serif" }}
              >
                Find Us
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Where to find us
            </h2>
          </div>

          {/* Address block */}
          <div className="text-right" style={{ fontFamily: "'Lato', sans-serif" }}>
            <p className="text-[13px] font-semibold" style={{ color: "#B8912A" }}>
              Novelty Bakery
            </p>
            <p className="text-[12px] mt-1" >
              High Street North, East Ham
            </p>
            <p className="text-[12px]" >
              London E6
            </p>
          </div>
        </div>

        {/* Map — bleeds to bottom edge */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "420px",
            border: "1px solid rgba(184,145,42,0.2)",
            borderBottom: "none",
          }}
        >
          <iframe
            title="Novelty Bakery map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39711.87093226429!2d0.04390457153319982!3d51.53170778996537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64d72eceae3%3A0x7c3777e2c4d4d2bd!2sNovelty%20Bakery%20London!5e0!3m2!1sen!2suk!4v1766158550112!5m2!1sen!2suk"
            className="w-full h-full"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Gmap;
