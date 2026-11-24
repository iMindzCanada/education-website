import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PricingPage } from "./PricingPage";

describe("PricingPage", () => {
  it("shows the single Introductory plan price", () => {
    render(<PricingPage />);
    expect(screen.getByText("$9.99")).toBeInTheDocument();
    expect(screen.getByText("Introductory Plan")).toBeInTheDocument();
  });

  it("offers the free trial as a secondary option", () => {
    render(<PricingPage />);
    expect(
      screen.getByText(/Start with a 7-day Free Trial/i),
    ).toBeInTheDocument();
  });
});
