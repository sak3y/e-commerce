const EmailForm = () => {
  return (
    <div>
      <form className="space-y-4 text-[13px] md:text-[14px] text-neutral-800">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-[11px] uppercase tracking-[0.12em] text-neutral-700">
              First name
            </label>
            <input
              type="text"
              className="w-full border border-neutral-300 px-3 py-1.5 text-[13px] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <div>
            <label className="block mb-1 text-[11px] uppercase tracking-[0.12em] text-neutral-700">
              Last name
            </label>
            <input
              type="text"
              className="w-full border border-neutral-300 px-3 py-1.5 text-[13px] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-[11px] uppercase tracking-[0.12em] text-neutral-700">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-neutral-300 px-3 py-1.5 text-[13px] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="block mb-1 text-[11px] uppercase tracking-[0.12em] text-neutral-700">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full border border-neutral-300 px-3 py-1.5 text-[13px] resize-none focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          className="mt-1 w-full border border-[#D4AF37] bg-white text-neutral-900 py-2.5 text-[11px] tracking-[0.16em] uppercase hover:bg-[#FFF8E1] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
