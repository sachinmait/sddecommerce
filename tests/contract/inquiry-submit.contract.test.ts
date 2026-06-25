import { afterEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/inquiries/route";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("POST /api/inquiries contract", () => {
  it("returns 400 for invalid payload", async () => {
    const request = new Request("http://localhost/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName: "A" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const payload = await response.json();
    expect(payload.code).toBe("BAD_REQUEST");
    expect(Array.isArray(payload.fieldErrors)).toBe(true);
  });

  it("returns 201 for valid payload without Supabase", async () => {
    const request = new Request("http://localhost/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test Learner",
        email: "learner@example.com",
        intentType: "register_interest",
        message: "I want to join this cohort and need enrollment details.",
        sourcePage: "/",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(201);

    const payload = await response.json();
    expect(payload.status).toBe("received");
    expect(payload.inquiryId).toBeTypeOf("string");
  });
});
