import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { TasksPage } from "../pages/TasksPage";
import { GET_TASKS } from "../services/graphqlQueries";

const mockTasks = {
  tasks: [
    {
      id: "task-1",
      title: "Implement auth",
      description: "Set up OAuth2",
      status: "done",
      priority: "high",
      assignee: { id: "user-1", displayName: "Alice Johnson" },
      updatedAt: "2025-01-20T14:30:00Z",
    },
    {
      id: "task-2",
      title: "Design dashboard",
      description: "Create wireframes",
      status: "in_progress",
      priority: "medium",
      assignee: { id: "user-2", displayName: "Bob Smith" },
      updatedAt: "2025-01-22T11:00:00Z",
    },
  ],
};

describe("TasksPage", () => {
  it("shows loading spinner initially", () => {
    renderWithProviders(<TasksPage />, {
      mocks: [
        {
          request: { query: GET_TASKS, variables: {} },
          result: { data: mockTasks },
        },
      ],
    });
    expect(screen.getByText("Loading tasks...")).toBeInTheDocument();
  });

  it("renders task list after loading", async () => {
    renderWithProviders(<TasksPage />, {
      mocks: [
        {
          request: { query: GET_TASKS, variables: {} },
          result: { data: mockTasks },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByTestId("tasks-page")).toBeInTheDocument();
    });

    expect(screen.getByText("Implement auth")).toBeInTheDocument();
    expect(screen.getByText("Design dashboard")).toBeInTheDocument();
  });

  it("displays task count in header", async () => {
    renderWithProviders(<TasksPage />, {
      mocks: [
        {
          request: { query: GET_TASKS, variables: {} },
          result: { data: mockTasks },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByText("All Tasks (2)")).toBeInTheDocument();
    });
  });

  it("renders assignee names", async () => {
    renderWithProviders(<TasksPage />, {
      mocks: [
        {
          request: { query: GET_TASKS, variables: {} },
          result: { data: mockTasks },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    });

    expect(screen.getByText("Bob Smith")).toBeInTheDocument();
  });

  it("renders task links for deep linking", async () => {
    renderWithProviders(<TasksPage />, {
      mocks: [
        {
          request: { query: GET_TASKS, variables: {} },
          result: { data: mockTasks },
        },
      ],
    });

    await waitFor(() => {
      const link = screen.getByText("Implement auth").closest("a");
      expect(link).toHaveAttribute("href", "/tasks/task-1");
    });
  });
});
