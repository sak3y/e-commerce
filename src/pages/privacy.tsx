const Privacy = () => {
  return (
    <main className="bg-[#FFF7ED] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 text-sm text-[#1B1B1B]">
        <h1 className="text-2xl md:text-3xl tracking-[0.08em] uppercase text-[#2B1400] mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4">
          This privacy policy explains how Novelty Bakery London collects and uses personal
          information when you visit this website or contact the bakery.
        </p>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          1. Who we are
        </h2>
        <p>
          Novelty Bakery is a local bakery based at 393 High Street North, London E12 6PG. You can
          contact the bakery by phone or by email at{" "}
          <span className="font-semibold"></span> 
        </p>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          2. Information collected
        </h2>
        <p>
          This website is primarily informational. The bakery may collect:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Contact details you choose to send, such as your name, email address and phone number,
            when you email the bakery or submit an enquiry form.
          </li>
          <li>
            Basic technical information, such as IP address and browser type, through standard web
            server logs and any analytics tools used on the site.
          </li>
        </ul>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          3. How your information is used
        </h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>To respond to your enquiries about products, orders or custom cakes.</li>
          <li>To manage bookings or orders that you request.</li>
          <li>
            To understand how the website is used and improve the information and services offered.
          </li>
        </ul>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          4. Sharing of information
        </h2>
        <p>
          Novelty Bakery does not sell your personal information. Data may be shared with service
          providers such as email or website hosting providers only as needed to operate the
          website and respond to enquiries.
        </p>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          5. Data retention
        </h2>
        <p>
          Personal information from enquiries is kept only for as long as necessary to deal with
          your request and to comply with legal obligations, after which it is deleted or securely
          archived.
        </p>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          6. Your rights
        </h2>
        <p>
          Under UK data protection law, you may have rights to access, correct or delete your
          personal data, or to object to certain uses. To exercise these rights, contact the bakery
          using the details above.
        </p>

        <h2 className="mt-6 mb-2 text-base font-semibold text-[#2B1400]">
          7. Cookies and analytics
        </h2>
        <p>
          If website analytics or cookies are enabled in future, this policy will be updated to
          explain what is used and how you can manage your preferences.
        </p>

        <p className="mt-8 text-xs text-gray-600">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
};

export default Privacy;
