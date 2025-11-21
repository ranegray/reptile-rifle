import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body?.name || '');
    const email = String(body?.work_email || '');
    const company = String(body?.company || '');
    const message = String(body?.message || '');
    const ttf = Number(body?.ttf ?? 0);                  // seconds on form
    const honeypot = String(body?.company_fax || '');    // must be empty

    // --- spam gates ---
    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 }); // honeypot filled → likely bot
    }
    if (!Number.isNaN(ttf) && ttf < 2) {
      return NextResponse.json({ ok: true }, { status: 200 }); // too fast → likely bot
    }

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // --- deliver email (Resend) ---
    if (process.env.RESEND_API_KEY && process.env.SALES_EMAIL) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `GOLEM <rane@${process.env.MAIL_DOMAIN || 'example.com'}>`,
        to: [process.env.SALES_EMAIL],
        subject: `New Pilot Inquiry — ${company}`,
        // TODO cleanup and style this email
        html: `
          <h3>New Pilot Inquiry</h3>
          <p><b>${escapeHtml(name)}</b> (${escapeHtml(email)}) — ${escapeHtml(company)}</p>
          <p><b>Message:</b><br/>${escapeHtml(message)}</p>
          <hr/>
          <p><small>TTF: ${ttf || 0}s · IP: ${ip}</small></p>
        `
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
}
