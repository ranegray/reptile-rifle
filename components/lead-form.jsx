'use client';
import { useRef, useState, useEffect } from 'react';

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
    fd.set('ttf', String(Math.round((Date.now() - startedAt.current) / 1000)));

    // build payload
    const payload = Object.fromEntries(fd.entries());

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    alert(res.ok ? 'Thanks! We\'ll reach out.' : 'Something went wrong.');
    setSubmitting(false);
    if (res.ok) e.nativeEvent.target.reset();
  }
  return (
    <form className="grid gap-3 bg-zinc-100 p-4 rounded-md border" onSubmit={onSubmit}>
      <label className="grid gap-1">
        <span className="text-sm uppercase">Name</span>
        <input name="name" required className="rounded-md border px-3 py-2 bg-zinc-50"/>
      </label>
      <label className="grid gap-1">
        <span className="text-sm uppercase">Work email</span>
        <input name="work_email" type="email" required className="rounded-md border px-3 py-2 bg-zinc-50"/>
      </label>
      <label className="grid gap-1">
        <span className="text-sm uppercase">Company</span>
        <input name="company" required className="rounded-md border px-3 py-2 bg-zinc-50"/>
      </label>
      <label className="grid gap-1">
        <span className="text-sm uppercase">Target task</span>
        <select name="target_task" className="rounded-md border px-3 py-2 bg-zinc-50">
          <option>EV battery disassembly</option><option>Palletizing</option><option>Line feeding</option><option>Other</option>
        </select>
      </label>
      <label className="grid gap-1">
        <span className="text-sm uppercase">Message</span>
        {/* TODO add helpful placeholder text */}
        <textarea name="message" rows={4} className="rounded-md border px-3 py-2 bg-zinc-50"/>
      </label>

       <div aria-hidden="true"
           style={{position:'absolute',left:'-10000px',top:'auto',width:'1px',height:'1px',overflow:'hidden'}}>
        <label>Company fax (leave blank)
          <input name="company_fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <input type="hidden" name="ttf" value="0" />

      <div className="flex gap-2">
      <button disabled={submitting}
              className="rounded-md bg-zinc-300 text-black px-4 py-2">
        {submitting ? 'Sending…' : 'Send'}
      </button>
      <span className="text-sm text-zinc-600 self-center">We&apos;ll get back to you within 2 business days.</span>

    </div>
    </form>
  );
}
