import {
  fetchUsers,
  fetchUserById,
  fetchTasks,
  fetchTaskById,
  fetchTasksByAssignee,
  createTask,
  updateTask,
  deleteTask,
} from "../services/dataService.js";
import { getDashboardSummary } from "../services/aggregationService.js";
import type { Task } from "../types/index.js";

// Map GraphQL enum values (underscores) to data values (hyphens)
function mapStatus(status: string | undefined): Task["status"] | undefined {
  if (!status) return undefined;
  const map: Record<string, Task["status"]> = {
    todo: "todo",
    in_progress: "in-progress",
    done: "done",
  };
  return map[status];
}

function mapStatusToGql(status: string): string {
  return status === "in-progress" ? "in_progress" : status;
}

export const resolvers = {
  Query: {
    users: async () => fetchUsers(),
    user: async (_: unknown, { id }: { id: string }) => fetchUserById(id),
    tasks: async (
      _: unknown,
      {
        status,
        priority,
      }: { status?: string; priority?: string }
    ) => {
      let tasks = await fetchTasks();
      const mappedStatus = mapStatus(status);
      if (mappedStatus) {
        tasks = tasks.filter((t) => t.status === mappedStatus);
      }
      if (priority) {
        tasks = tasks.filter((t) => t.priority === priority);
      }
      return tasks;
    },
    task: async (_: unknown, { id }: { id: string }) => fetchTaskById(id),
    dashboard: async () => getDashboardSummary(),
  },

  Mutation: {
    createTask: async (
      _: unknown,
      { input }: { input: Record<string, string> }
    ) => {
      const mapped = {
        ...input,
        status: mapStatus(input.status) ?? "todo",
        priority: (input.priority as Task["priority"]) ?? "medium",
      };
      return createTask(mapped as Omit<Task, "id" | "createdAt" | "updatedAt">);
    },
    updateTask: async (
      _: unknown,
      { id, input }: { id: string; input: Record<string, string> }
    ) => {
      const mapped: Record<string, string | undefined> = { ...input };
      if (input.status) {
        mapped.status = mapStatus(input.status);
      }
      return updateTask(id, mapped);
    },
    deleteTask: async (_: unknown, { id }: { id: string }) => deleteTask(id),
  },

  Task: {
    assignee: async (task: Task) => fetchUserById(task.assigneeId),
    status: (task: Task) => mapStatusToGql(task.status),
  },

  User: {
    tasks: async (user: { id: string }) => fetchTasksByAssignee(user.id),
  },
};
