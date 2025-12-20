const Gmap = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full h-64 md:h-80 border border-pink-200">
          {/* Google Map Embed */}
          <iframe
            title="Novelty Bakery map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39711.87093226429!2d0.04390457153319982!3d51.53170778996537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64d72eceae3%3A0x7c3777e2c4d4d2bd!2sNovelty%20Bakery%20London!5e0!3m2!1sen!2suk!4v1766158550112!5m2!1sen!2suk"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Gmap;
