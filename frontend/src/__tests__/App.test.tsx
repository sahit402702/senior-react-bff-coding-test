import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import App from "../App";

describe("App Routing", () => {
  it("renders dashboard page at root", () => {
    renderWithProviders(<App />, {
      initialEntries: ["/"],
      mocks: [],
    });
    const dashboardElements = screen.getAllByText("Dashboard");
    expect(dashboardElements.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("renders sidebar navigation links", () => {
    renderWithProviders(<App />, {
      initialEntries: ["/"],
      mocks: [],
    });
    expect(screen.getByText("Task Manager")).toBeInTheDocument();
    const tasksLink = screen.getAllByText("Tasks")[0].closest("a");
    expect(tasksLink).toHaveAttribute("href", "/tasks");
  });

  it("renders Tasks title when navigating to /tasks", () => {
    renderWithProviders(<App />, {
      initialEntries: ["/tasks"],
      mocks: [],
    });
    // The header should show "Tasks"
    const headers = screen.getAllByText("Tasks");
    expect(headers.length).toBeGreaterThan(0);
  });

  it("renders Users title when navigating to /users", () => {
    renderWithProviders(<App />, {
      initialEntries: ["/users"],
      mocks: [],
    });
    const headers = screen.getAllByText("Users");
    expect(headers.length).toBeGreaterThan(0);
  });

  it("renders Task Detail title for task detail route", () => {
    renderWithProviders(<App />, {
      initialEntries: ["/tasks/task-1"],
      mocks: [],
    });
    expect(screen.getByText("Task Detail")).toBeInTheDocument();
  });

  it("renders User Detail title for user detail route", () => {
    renderWithProviders(<App />, {
      initialEntries: ["/users/user-1"],
      mocks: [],
    });
    expect(screen.getByText("User Detail")).toBeInTheDocument();
  });
});
