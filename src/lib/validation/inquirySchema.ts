import { z } from "zod";

export const inquiryIntentSchema = z.enum(["register_interest", "ask_question"]);

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.email().trim().toLowerCase(),
  phone: z.string().trim().min(7).max(20).optional().or(z.literal("")),
  intentType: inquiryIntentSchema,
  message: z.string().trim().min(10).max(2000),
  sourcePage: z.string().trim().min(1),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
