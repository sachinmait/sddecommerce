import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { InquiryForm } from "@/components/forms/InquiryForm";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Inquiry submission flow", () => {
  it("submits successfully with valid payload", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 201,
        json: async () => ({ message: "Inquiry received." }),
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
      expect(screen.getByText(/inquiry received/i)).toBeInTheDocument();
    });
  });

  it("shows validation feedback when required fields are invalid", async () => {
    render(<InquiryForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "A" } });
    fireEvent.change(screen.getByLabelText(/^email/i), { target: { value: "bad-email" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "short" } });

    fireEvent.click(screen.getByRole("button", { name: /submit inquiry/i }));

    await waitFor(() => {
      expect(screen.getByText(/please correct the highlighted fields/i)).toBeInTheDocument();
    });
  });
});
