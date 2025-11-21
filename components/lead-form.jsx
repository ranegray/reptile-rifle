"use client";
import { useRef, useState, useEffect } from "react";
import { toast } from "sonner";

export default function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    // add time-to-form
    fd.set("ttf", String(Math.round((Date.now() - startedAt.current) / 1000)));

    // build payload
    const payload = Object.fromEntries(fd.entries());

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    res.ok ? toast.success("Thanks! We'll reach out.") : toast.error("Something went wrong.");
    setSubmitting(false);
    if (res.ok) e.nativeEvent.target.reset();
  }
  return (
    <form
      className="grid gap-4 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm"
      onSubmit={onSubmit}
    >
      <label className="grid gap-1.5">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Name</span>
        <input
          name="name"
          required
          className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Work email</span>
        <input
          name="work_email"
          type="email"
          required
          className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Company</span>
        <input
          name="company"
          required
          className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Target task</span>
        <div className="relative">
          <select
            name="target_task"
            className="w-full rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
          >
            <option>EV battery disassembly</option>
            <option>Palletizing</option>
            <option>Line feeding</option>
            <option>Other</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Describe your use case, deployment timeline, and any constraints."
          className="rounded-lg border border-zinc-200 px-3 py-2 bg-zinc-50 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
        />
      </label>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Company fax (leave blank)
          <input name="company_fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <input type="hidden" name="ttf" value="0" />

      <div className="flex gap-3 mt-2">
        <button
          disabled={submitting}
          className="rounded-lg bg-primary text-primary-foreground px-6 py-2.5 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Send Message"}
        </button>
        <span className="text-xs text-zinc-500 self-center">
          We&apos;ll get back to you within 2 business days.
        </span>
      </div>
    </form>
  );
}
