import { describe, it, expect } from "vitest";
import {
  getTasksWithAssignees,
  getDashboardSummary,
  getUserWithTasks,
} from "../services/aggregationService.js";

describe("Aggregation Service", () => {
  describe("getTasksWithAssignees", () => {
    it("should enrich tasks with assignee data", async () => {
      const tasks = await getTasksWithAssignees();
      expect(tasks.length).toBeGreaterThan(0);
      tasks.forEach((task) => {
        expect(task).toHaveProperty("assignee");
        if (task.assignee) {
          expect(task.assignee).toHaveProperty("displayName");
          expect(task.assignee).toHaveProperty("email");
        }
      });
    });
  });

  describe("getDashboardSummary", () => {
    it("should return complete dashboard data", async () => {
      const summary = await getDashboardSummary();
      expect(summary.totalUsers).toBeGreaterThan(0);
      expect(summary.totalTasks).toBeGreaterThan(0);
      expect(summary.tasksByStatus).toHaveLength(3);
      expect(summary.tasksByPriority).toHaveLength(3);
      expect(summary.recentTasks.length).toBeGreaterThan(0);
    });

    it("should have correct status categories", async () => {
      const summary = await getDashboardSummary();
      const statuses = summary.tasksByStatus.map((s) => s.status);
      expect(statuses).toContain("todo");
      expect(statuses).toContain("in-progress");
      expect(statuses).toContain("done");
    });

    it("should have correct priority categories", async () => {
      const summary = await getDashboardSummary();
      const priorities = summary.tasksByPriority.map((p) => p.priority);
      expect(priorities).toContain("low");
      expect(priorities).toContain("medium");
      expect(priorities).toContain("high");
    });

    it("should include assignees in recent tasks", async () => {
      const summary = await getDashboardSummary();
      summary.recentTasks.forEach((task) => {
        expect(task).toHaveProperty("assignee");
      });
    });
  });

  describe("getUserWithTasks", () => {
    it("should return user with their tasks and stats", async () => {
      const result = await getUserWithTasks("user-1");
      expect(result).not.toBeNull();
      expect(result!.displayName).toBeTruthy();
      expect(result!.tasks).toBeInstanceOf(Array);
      expect(result!.taskStats).toHaveProperty("total");
      expect(result!.taskStats).toHaveProperty("completed");
      expect(result!.taskStats).toHaveProperty("inProgress");
      expect(result!.taskStats).toHaveProperty("todo");
    });

    it("should return null for unknown user", async () => {
      const result = await getUserWithTasks("unknown");
      expect(result).toBeNull();
    });

    it("should have consistent task stats", async () => {
      const result = await getUserWithTasks("user-1");
      expect(result).not.toBeNull();
      const { taskStats, tasks } = result!;
      expect(taskStats.total).toBe(tasks.length);
      expect(
        taskStats.completed + taskStats.inProgress + taskStats.todo
      ).toBe(taskStats.total);
    });
  });
});
