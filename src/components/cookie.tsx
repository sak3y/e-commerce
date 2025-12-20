// src/components/CookieBanner.tsx

const Cookie: React.FC = () => {
  const accept = () => {};

  const decline = () => {};

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-t-lg border border-pink-200 bg-[#FFFBF5] px-4 py-3 md:px-6 md:py-4 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs md:text-sm text-[#1B1B1B]">
            <p className="leading-relaxed">
              Novelty Bakery uses cookies to keep the site running smoothly and understand how
              visitors use it. You can accept or decline non‑essential cookies.
            </p>
            <div className="flex flex-shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={decline}
                className="px-3 py-1.5 rounded-full border border-[#C5162C] text-[11px] uppercase tracking-[0.18em] text-[#C5162C] bg-transparent hover:bg-pink-50 transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={accept}
                className="px-4 py-1.5 rounded-full border border-[#C5162C] text-[11px] uppercase tracking-[0.18em] bg-[#C5162C] text-white hover:brightness-110 transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
