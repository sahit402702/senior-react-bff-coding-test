import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { DashboardPage } from "../pages/DashboardPage";
import { GET_DASHBOARD } from "../services/graphqlQueries";

const mockDashboard = {
  dashboard: {
    totalUsers: 4,
    totalTasks: 5,
    tasksByStatus: [
      { status: "todo", count: 2 },
      { status: "in-progress", count: 2 },
      { status: "done", count: 1 },
    ],
    tasksByPriority: [
      { priority: "low", count: 1 },
      { priority: "medium", count: 2 },
      { priority: "high", count: 2 },
    ],
    recentTasks: [
      {
        id: "task-1",
        title: "Implement auth",
        status: "done",
        priority: "high",
        assignee: { displayName: "Alice Johnson" },
        updatedAt: "2025-01-20T14:30:00Z",
      },
      {
        id: "task-2",
        title: "Design dashboard",
        status: "in-progress",
        priority: "medium",
        assignee: { displayName: "Bob Smith" },
        updatedAt: "2025-01-22T11:00:00Z",
      },
    ],
  },
};

describe("DashboardPage", () => {
  it("shows loading spinner initially", () => {
    renderWithProviders(<DashboardPage />, {
      mocks: [
        {
          request: { query: GET_DASHBOARD },
          result: { data: mockDashboard },
        },
      ],
    });
    expect(screen.getByText("Loading dashboard...")).toBeInTheDocument();
  });

  it("renders dashboard data after loading", async () => {
    renderWithProviders(<DashboardPage />, {
      mocks: [
        {
          request: { query: GET_DASHBOARD },
          result: { data: mockDashboard },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByTestId("dashboard-page")).toBeInTheDocument();
    });

    expect(screen.getByTestId("total-users")).toHaveTextContent("4");
    expect(screen.getByTestId("total-tasks")).toHaveTextContent("5");
  });

  it("renders recent tasks", async () => {
    renderWithProviders(<DashboardPage />, {
      mocks: [
        {
          request: { query: GET_DASHBOARD },
          result: { data: mockDashboard },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByText("Implement auth")).toBeInTheDocument();
    });

    expect(screen.getByText("Design dashboard")).toBeInTheDocument();
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
  });

  it("shows error message on failure", async () => {
    renderWithProviders(<DashboardPage />, {
      mocks: [
        {
          request: { query: GET_DASHBOARD },
          error: new Error("Network error"),
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByText(/Error loading dashboard/)).toBeInTheDocument();
    });
  });
});
