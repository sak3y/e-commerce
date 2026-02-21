import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("submitting");

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Couldn't subscribe at this time.");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't subscribe at this time.");
    }
  };

  return (
    <div className="text-center md:text-left" style={{ fontFamily: "'Lato', sans-serif" }}>
      <p className="mb-3 leading-relaxed text-white/80">Join our newsletter.</p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="inline-flex w-full max-w-xs overflow-hidden border border-white/15 bg-white"
      >
        <input
          type="email"
          placeholder="email address"
          className="flex-1 px-3 py-2 text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
        <button
          type="submit"
          className="px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#111111] transition-colors disabled:opacity-60"
          style={{ background: "#C8960C" }}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "..." : "Go"}
        </button>
      </form>

      {status !== "idle" && (
        <p
          className="mt-2 text-[11px]"
          style={{
            color:
              status === "success"
                ? "rgba(200,150,12,0.95)"
                : status === "error"
                  ? "#ef4444"
                  : "rgba(255,255,255,0.65)",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;
