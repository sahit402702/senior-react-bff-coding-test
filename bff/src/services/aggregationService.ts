import type {
  TaskWithAssignee,
  DashboardSummary,
} from "../types/index.js";
import {
  fetchUsers,
  fetchUserById,
  fetchTasks,
  fetchTasksByAssignee,
} from "./dataService.js";

/**
 * BFF aggregation: Enriches tasks with assignee details.
 * This demonstrates the BFF pattern of combining data from
 * multiple backend services into a frontend-optimized shape.
 */
export async function getTasksWithAssignees(): Promise<TaskWithAssignee[]> {
  const tasks = await fetchTasks();
  const enriched = await Promise.all(
    tasks.map(async (task) => {
      const assignee = await fetchUserById(task.assigneeId);
      return { ...task, assignee: assignee ?? null };
    })
  );
  return enriched;
}

/**
 * BFF aggregation: Builds a dashboard summary by combining
 * users, tasks, and computed statistics into a single response.
 * This reduces multiple round-trips from the frontend.
 */
export async function getDashboardSummary(): Promise<DashboardSummary> {
  const [users, tasks] = await Promise.all([fetchUsers(), fetchTasks()]);

  const tasksByStatus = ["todo", "in-progress", "done"].map((status) => ({
    status,
    count: tasks.filter((t) => t.status === status).length,
  }));

  const tasksByPriority = ["low", "medium", "high"].map((priority) => ({
    priority,
    count: tasks.filter((t) => t.priority === priority).length,
  }));

  const recentTasks = await Promise.all(
    tasks
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )
      .slice(0, 5)
      .map(async (task) => {
        const assignee = await fetchUserById(task.assigneeId);
        return { ...task, assignee: assignee ?? null };
      })
  );

  return {
    totalUsers: users.length,
    totalTasks: tasks.length,
    tasksByStatus,
    tasksByPriority,
    recentTasks,
  };
}

/**
 * BFF aggregation: Gets a user profile with their assigned tasks.
 */
export async function getUserWithTasks(userId: string) {
  const [user, tasks] = await Promise.all([
    fetchUserById(userId),
    fetchTasksByAssignee(userId),
  ]);

  if (!user) return null;

  return {
    ...user,
    tasks,
    taskStats: {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "done").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      todo: tasks.filter((t) => t.status === "todo").length,
    },
  };
}
