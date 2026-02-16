import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./testUtils";
import { TaskDetailPage } from "../pages/TaskDetailPage";
import { GET_TASK } from "../services/graphqlQueries";
import { Routes, Route } from "react-router-dom";

const mockTask = {
  task: {
    id: "task-1",
    title: "Implement user authentication",
    description: "Set up OAuth2 authentication flow with Azure AD",
    status: "done",
    priority: "high",
    assigneeId: "user-1",
    assignee: {
      id: "user-1",
      displayName: "Alice Johnson",
      email: "alice@contoso.com",
      department: "Engineering",
    },
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-20T14:30:00Z",
  },
};

function TaskDetailWrapper() {
  return (
    <Routes>
      <Route path="/tasks/:id" element={<TaskDetailPage />} />
    </Routes>
  );
}

describe("TaskDetailPage", () => {
  it("shows loading spinner initially", () => {
    renderWithProviders(<TaskDetailWrapper />, {
      initialEntries: ["/tasks/task-1"],
      mocks: [
        {
          request: { query: GET_TASK, variables: { id: "task-1" } },
          result: { data: mockTask },
        },
      ],
    });
    expect(screen.getByText("Loading task...")).toBeInTheDocument();
  });

  it("renders task details after loading", async () => {
    renderWithProviders(<TaskDetailWrapper />, {
      initialEntries: ["/tasks/task-1"],
      mocks: [
        {
          request: { query: GET_TASK, variables: { id: "task-1" } },
          result: { data: mockTask },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByTestId("task-detail-page")).toBeInTheDocument();
    });

    expect(
      screen.getByText("Implement user authentication")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Set up OAuth2 authentication flow with Azure AD")
    ).toBeInTheDocument();
  });

  it("shows assignee details", async () => {
    renderWithProviders(<TaskDetailWrapper />, {
      initialEntries: ["/tasks/task-1"],
      mocks: [
        {
          request: { query: GET_TASK, variables: { id: "task-1" } },
          result: { data: mockTask },
        },
      ],
    });

    await waitFor(() => {
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    });

    expect(screen.getByText("alice@contoso.com")).toBeInTheDocument();
    expect(screen.getByText("Engineering")).toBeInTheDocument();
  });

  it("has back link to tasks list", async () => {
    renderWithProviders(<TaskDetailWrapper />, {
      initialEntries: ["/tasks/task-1"],
      mocks: [
        {
          request: { query: GET_TASK, variables: { id: "task-1" } },
          result: { data: mockTask },
        },
      ],
    });

    await waitFor(() => {
      const backLink = screen.getByText("← Back to Tasks");
      expect(backLink).toHaveAttribute("href", "/tasks");
    });
  });
});
