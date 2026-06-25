import { describe, expect, it } from "vitest";
import { z } from "zod";

import { GET } from "@/app/api/program/route";

const responseSchema = z.object({
  program: z.object({
    title: z.string().min(1),
    durationWeeks: z.number().int().positive(),
    handsOnRatioPercent: z.number().int().min(0).max(100),
    philosophy: z.string().min(1),
    overview: z.string().min(1),
  }),
  curriculum: z.array(
    z.object({
      weekNumber: z.number().int().min(1),
      moduleTitles: z.array(z.string().min(1)).min(1),
      summary: z.string().min(1),
    }),
  ),
  outcomes: z.array(z.string().min(1)).min(1),
  tools: z.array(
    z.object({
      toolName: z.string().min(1),
      category: z.enum(["ai_coding", "collaboration", "database", "deployment", "workflow"]),
    }),
  ),
  contacts: z.array(
    z.object({
      name: z.string().min(1),
      roleTitle: z.string().min(1),
      phone: z.string().min(1),
      email: z.email(),
    }),
  ),
});

describe("GET /api/program contract", () => {
  it("returns payload matching contract schema", async () => {
    const response = await GET();
    expect(response.status).toBe(200);

    const payload = await response.json();
    expect(() => responseSchema.parse(payload)).not.toThrow();
  });
});
