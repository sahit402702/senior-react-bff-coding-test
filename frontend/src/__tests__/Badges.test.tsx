import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { StatusBadge, PriorityBadge } from "../components/Badges";

describe("StatusBadge", () => {
  it("renders 'To Do' for todo status", () => {
    renderWithProviders(<StatusBadge status="todo" />);
    expect(screen.getByText("To Do")).toBeInTheDocument();
  });

  it("renders 'In Progress' for in-progress status", () => {
    renderWithProviders(<StatusBadge status="in-progress" />);
    expect(screen.getByText("In Progress")).toBeInTheDocument();
  });

  it("renders 'Done' for done status", () => {
    renderWithProviders(<StatusBadge status="done" />);
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("renders fallback for unknown status", () => {
    renderWithProviders(<StatusBadge status="custom" />);
    expect(screen.getByText("custom")).toBeInTheDocument();
  });
});

describe("PriorityBadge", () => {
  it("renders high priority", () => {
    renderWithProviders(<PriorityBadge priority="high" />);
    expect(screen.getByText("high")).toBeInTheDocument();
  });

  it("renders medium priority", () => {
    renderWithProviders(<PriorityBadge priority="medium" />);
    expect(screen.getByText("medium")).toBeInTheDocument();
  });

  it("renders low priority", () => {
    renderWithProviders(<PriorityBadge priority="low" />);
    expect(screen.getByText("low")).toBeInTheDocument();
  });
});
