import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CommitmentContextSection } from "@/components/sections/CommitmentContextSection";
import { LearningOutcomesSection } from "@/components/sections/LearningOutcomesSection";

describe("Outcome sections", () => {
  it("renders learning outcomes", () => {
    render(<LearningOutcomesSection />);
    expect(screen.getByRole("heading", { name: /learning outcomes/i })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
  });

  it("renders commitment context", () => {
    render(<CommitmentContextSection />);
    expect(screen.getByRole("heading", { name: /workload and capstone context/i })).toBeInTheDocument();
  });
});
