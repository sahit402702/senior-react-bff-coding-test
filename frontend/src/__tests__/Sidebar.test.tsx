import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { Sidebar } from "../components/Sidebar";

describe("Sidebar", () => {
  it("renders the app name", () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Tasks")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("has correct link targets", () => {
    renderWithProviders(<Sidebar />);
    const dashboardLink = screen.getByText("Dashboard").closest("a");
    const tasksLink = screen.getByText("Tasks").closest("a");
    const usersLink = screen.getByText("Users").closest("a");

    expect(dashboardLink).toHaveAttribute("href", "/");
    expect(tasksLink).toHaveAttribute("href", "/tasks");
    expect(usersLink).toHaveAttribute("href", "/users");
  });

  it("has a testid on the sidebar", () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
