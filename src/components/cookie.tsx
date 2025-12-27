import React, { useState } from "react";

const STORAGE_KEY = "novelty-cookie-consent";

const Cookie: React.FC = () => {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return !stored;
  });

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setOpen(false);
    // enable analytics / non‑essential scripts here if you add them later
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setOpen(false);
    // keep only essential cookies/scripts active
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center">
      <div className="mx-auto max-w-6xl px-4 pb-4 w-full">
        <div className="border border-[#F3D39A] bg-[#FFFBF5] px-4 py-6 md:px-6 md:py-8 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-3 text-xs md:text-sm text-[#1B1B1B] md:flex-row md:items-center md:justify-between">
            <p className="leading-relaxed">
              Novelty Bakery uses cookies to keep the site running smoothly and to understand how
              visitors use it. You can accept or decline non‑essential cookies.
            </p>
            <div className="flex flex-shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={decline}
                className="px-3 py-1.5 border border-[#C5162C] text-[11px] uppercase tracking-[0.14em] text-[#C5162C] bg-transparent hover:bg-[#fcf0f1] transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={accept}
                className="px-4 py-1.5 border border-[#C5162C] text-[11px] uppercase tracking-[0.14em] bg-[#C5162C] text-white hover:brightness-110 transition-colors"
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
