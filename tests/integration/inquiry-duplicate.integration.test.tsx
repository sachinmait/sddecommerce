import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { InquiryForm } from "@/components/forms/InquiryForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Inquiry duplicate handling", () => {
  it("shows duplicate feedback when API responds with 409", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 409,
        json: async () => ({ message: "A similar inquiry was submitted recently." }),
      }),
    );

    render(<InquiryForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Test Learner" } });
    fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I am interested in joining this cohort." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));

    await waitFor(() => {
      expect(screen.getByText(/similar inquiry was submitted recently/i)).toBeInTheDocument();
    });
  });
});
