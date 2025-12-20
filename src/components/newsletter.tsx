import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = () => {
    setErrorMessage("");

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

  };

  return (
    <div className="text-center md:text-left">
      <p className="leading-relaxed mb-3">
        Sign up for new bakes, offers and updates from the bakery.
      </p>

      <form
        className="inline-flex w-full max-w-xs border border-pink-200"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="email"
          placeholder="email address"
          className="flex-1 px-3 py-2 text-[12px] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
        <button
          type="submit"
          className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] bg-black text-white hover:bg-neutral-800 transition-colors"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "..." : "Go!"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-[11px] text-red-600">{errorMessage}</p>
      )}
      {status === "success" && (
        <p className="mt-2 text-[11px] text-green-700">
          Thanks for subscribing!
        </p>
      )}
    </div>
  );
};

export default Newsletter;
