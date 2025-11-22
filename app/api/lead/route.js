import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  work_email: z.email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  message: z.string().optional().default(""),
  ttf: z.coerce.number().optional().default(0),
  company_fax: z.string().optional().default(""), // honeypot
});

export async function POST(req) {
  try {
    const body = await req.json();

    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: z.flattenError(result.error) },
        { status: 400 }
      );
    }

    const {
      name,
      work_email: email,
      company,
      message,
      ttf,
      company_fax: honeypot,
    } = result.data;

    // --- spam gates ---
    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 }); // honeypot filled → likely bot
    }
    if (ttf < 2) {
      return NextResponse.json({ ok: true }, { status: 200 }); // too fast → likely bot
    }

    // TODO create/update contact in Resend
    // const resend = new Resend('re_xxxxxxxxx');

    // const { data, error } = await resend.contacts.create({
    //   email: 'steve.wozniak@gmail.com',
    //   firstName: 'Steve',
    //   lastName: 'Wozniak',
    //   unsubscribed: false,
    //   audienceId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
    // });

    // --- deliver email (Resend) ---
    if (process.env.RESEND_API_KEY && process.env.SALES_EMAIL) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `GOLEM <rane@${process.env.MAIL_DOMAIN || "example.com"}>`,
        to: [process.env.SALES_EMAIL],
        subject: `New Pilot Inquiry — ${company}`,
        // TODO: refactor to use a proper templating system
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f9fafb;padding:24px;">
            <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;">
              <h2 style="margin:0 0 12px;font-size:20px;color:#111827;">New Pilot Inquiry</h2>
              <p style="margin:0 0 20px;color:#4b5563;">${escapeHtml(
                name
              )} from ${escapeHtml(company)} submitted the pilot form.</p>
              <table style="width:100%;border-collapse:collapse;font-size:14px;color:#111827;">
                <tbody>
                  ${formatRow("Name", name)}
                  ${formatRow("Email", email)}
                  ${formatRow("Company", company)}
                </tbody>
              </table>
              <div style="margin-top:20px;">
                <p style="margin:0 0 8px;font-weight:600;color:#111827;">Message</p>
                <div style="padding:12px;border:1px solid #e5e7eb;border-radius:8px;color:#374151;line-height:1.5;">
                  ${formatMessage(message)}
                </div>
              </div>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s) {
  return s.replace(
    /[&<>"]/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m])
  );
}

function formatRow(label, value) {
  return `
    <tr>
      <td style="padding:6px 0;width:90px;color:#6b7280;font-weight:600;">${escapeHtml(
        label
      )}</td>
      <td style="padding:6px 0;color:#111827;">${escapeHtml(
        String(value || "—")
      )}</td>
    </tr>
  `;
}

function formatMessage(value) {
  const safe = escapeHtml(
    String(value || "No message provided").trim() || "No message provided"
  );
  return safe.replace(/\n/g, "<br/>");
}
