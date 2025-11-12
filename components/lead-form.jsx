'use client';

export default function LeadForm() {
  return (
    <form className="grid gap-3 bg-zinc-100 p-4 rounded-md border" onSubmit={(e)=>{ e.preventDefault(); alert('Not wired yet'); }}>
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
        <textarea name="message" rows={4} className="rounded-md border px-3 py-2 bg-zinc-50"/>
      </label>

      <div className="flex gap-2">
        <button className="rounded-md px-4 py-2 bg-zinc-300">Send</button>

        <span className="text-sm text-zinc-600 self-center">We&apos;ll get back to you within 2 business days.</span>
      </div>
    </form>
  );
}
