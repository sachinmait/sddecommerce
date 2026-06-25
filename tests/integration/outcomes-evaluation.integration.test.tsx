import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Outcomes evaluation flow", () => {
  it("shows outcomes and commitment sections", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /learning outcomes/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /workload and capstone context/i })).toBeInTheDocument();
    expect(screen.getByText(/ai-first engineering mindset/i)).toBeInTheDocument();
  });
});
