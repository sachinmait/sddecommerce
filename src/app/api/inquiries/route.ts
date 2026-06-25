import { badRequest, duplicate, internalError, ok } from "@/lib/data/apiResponses";
import { getSupabaseServerClient } from "@/lib/data/supabaseServer";
import { buildDuplicateSignature } from "@/lib/validation/duplicateSignature";
import { inquirySchema } from "@/lib/validation/inquirySchema";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return badRequest("Request body must be valid JSON");
  }

  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors = parsed.error.issues.map((issue) => ({
      field: issue.path.join("."),
      issue: issue.message,
    }));

    return badRequest("Validation failed", fieldErrors);
  }

  const input = {
    ...parsed.data,
    phone: parsed.data.phone || undefined,
  };

  const duplicateSignature = buildDuplicateSignature(input);
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return ok(
      {
        inquiryId: crypto.randomUUID(),
        status: "received",
        submittedAt: new Date().toISOString(),
        message: "Inquiry received. Coordinators will contact you soon.",
      },
      { status: 201 },
    );
  }

  try {
    const windowMinutes = Number(process.env.INQUIRY_DUPLICATE_WINDOW_MINUTES ?? "15");
    const since = new Date(Date.now() - windowMinutes * 60_000).toISOString();

    const duplicateCheck = await supabase
      .from("inquiries")
      .select("id")
      .eq("duplicate_signature", duplicateSignature)
      .gte("submitted_at", since)
      .limit(1);

    if (duplicateCheck.error) {
      throw duplicateCheck.error;
    }

    if (duplicateCheck.data && duplicateCheck.data.length > 0) {
      return duplicate("A similar inquiry was submitted recently. We will follow up shortly.");
    }

    const insertResult = await supabase
      .from("inquiries")
      .insert({
        full_name: input.fullName,
        email: input.email,
        phone: input.phone ?? null,
        intent_type: input.intentType,
        message: input.message,
        source_page: input.sourcePage,
        duplicate_signature: duplicateSignature,
        status: "received",
      })
      .select("id, submitted_at")
      .single();

    if (insertResult.error) {
      throw insertResult.error;
    }

    return ok(
      {
        inquiryId: insertResult.data.id,
        status: "received",
        submittedAt: insertResult.data.submitted_at,
        message: "Inquiry received. Coordinators will contact you soon.",
      },
      { status: 201 },
    );
  } catch {
    return internalError();
  }
}
