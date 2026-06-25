"use client";

import { FormEvent, useMemo, useState } from "react";

import { inquirySchema } from "@/lib/validation/inquirySchema";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  intentType: "register_interest" | "ask_question";
  message: string;
};

type ApiState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  intentType: "register_interest",
  message: "",
};

export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [apiState, setApiState] = useState<ApiState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const canSubmit = useMemo(() => apiState.status !== "submitting", [apiState.status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});

    const validated = inquirySchema.safeParse({
      ...form,
      sourcePage: "/",
    });

    if (!validated.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of validated.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        nextErrors[key] = issue.message;
      }
      setFieldErrors(nextErrors);
      setApiState({ status: "error", message: "Please correct the highlighted fields." });
      return;
    }

    setApiState({ status: "submitting" });

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        sourcePage: "/",
      }),
    });

    const payload = await response.json();

    if (response.ok) {
      setApiState({ status: "success", message: payload.message });
      setForm(initialForm);
      return;
    }

    if (response.status === 409) {
      setApiState({ status: "error", message: payload.message });
      return;
    }

    if (Array.isArray(payload.fieldErrors)) {
      const nextErrors: Record<string, string> = {};
      for (const entry of payload.fieldErrors) {
        if (entry.field && entry.issue) {
          nextErrors[entry.field] = entry.issue;
        }
      }
      setFieldErrors(nextErrors);
    }

    setApiState({ status: "error", message: payload.message || "Unable to submit inquiry." });
  }

  return (
    <section className="panel panel-accent" aria-labelledby="inquiry-title">
      <h2 id="inquiry-title">Register Interest</h2>
      <p>Share your details and the team will contact you with enrollment guidance.</p>
      <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input
            name="fullName"
            value={form.fullName}
            onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
            aria-invalid={Boolean(fieldErrors.fullName)}
            required
          />
          {fieldErrors.fullName ? <span className="error-text">{fieldErrors.fullName}</span> : null}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            aria-invalid={Boolean(fieldErrors.email)}
            required
          />
          {fieldErrors.email ? <span className="error-text">{fieldErrors.email}</span> : null}
        </label>

        <label>
          Phone (optional)
          <input
            name="phone"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldErrors.phone ? <span className="error-text">{fieldErrors.phone}</span> : null}
        </label>

        <label>
          Intent
          <select
            name="intentType"
            value={form.intentType}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                intentType: event.target.value as FormState["intentType"],
              }))
            }
          >
            <option value="register_interest">Register Interest</option>
            <option value="ask_question">Ask a Question</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            aria-invalid={Boolean(fieldErrors.message)}
            required
            rows={4}
          />
          {fieldErrors.message ? <span className="error-text">{fieldErrors.message}</span> : null}
        </label>

        <button type="submit" disabled={!canSubmit}>
          {apiState.status === "submitting" ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
      {apiState.message ? (
        <p role="status" className={apiState.status === "success" ? "success-text" : "error-text"}>
          {apiState.message}
        </p>
      ) : null}
    </section>
  );
}
