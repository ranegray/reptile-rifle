import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";

// Mock Resend
const sendMock = vi.fn();
vi.mock("resend", () => {
  return {
    Resend: vi.fn().mockImplementation(() => ({
      emails: {
        send: sendMock,
      },
    })),
  };
});

describe("POST /api/lead", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "re_123";
    process.env.SALES_EMAIL = "sales@example.com";
  });

  it("should return 400 if validation fails (missing fields)", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      body: JSON.stringify({}),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe("Validation failed");
    expect(data.details.fieldErrors).toHaveProperty("name");
    expect(data.details.fieldErrors).toHaveProperty("company");
  });

  it("should return 400 if email is invalid", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        company: "Acme",
        work_email: "not-an-email",
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.details.fieldErrors.work_email).toBeDefined();
  });

  it("should return 200 but not send email if honeypot is filled", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      body: JSON.stringify({
        name: "Bot",
        company: "Spam Corp",
        work_email: "bot@spam.com",
        company_fax: "I am a bot", // Honeypot
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.ok).toBe(true);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("should return 200 but not send email if TTF is too fast", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      body: JSON.stringify({
        name: "Fast Bot",
        company: "Speedy",
        work_email: "fast@bot.com",
        ttf: 0.5, // Too fast
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("should return 200 and send email if request is valid", async () => {
    const req = new Request("http://localhost/api/lead", {
      method: "POST",
      body: JSON.stringify({
        name: "Valid User",
        company: "Good Corp",
        work_email: "user@good.com",
        message: "Hello",
        ttf: 10,
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.ok).toBe(true);

    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ["sales@example.com"],
        subject: "New Pilot Inquiry — Good Corp",
      })
    );
  });
});
