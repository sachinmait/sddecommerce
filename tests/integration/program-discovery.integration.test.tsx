import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Program discovery flow", () => {
  it("renders overview and curriculum details", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /fullstackx/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /target audience/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /curriculum outline/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /week\s*1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /week\s*6/i })).toBeInTheDocument();
  });
});
