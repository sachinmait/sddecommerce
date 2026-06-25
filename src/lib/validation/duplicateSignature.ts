import { createHash } from "node:crypto";

import type { InquiryInput } from "@/lib/validation/inquirySchema";

export function buildDuplicateSignature(input: InquiryInput): string {
  const normalized = [
    input.email.trim().toLowerCase(),
    input.intentType,
    input.message.trim().toLowerCase().replace(/\s+/g, " "),
  ].join("|");

  return createHash("sha256").update(normalized).digest("hex");
}
