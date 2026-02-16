import { describe, it, expect } from "vitest";
import request from "supertest";
import { createApp } from "../app.js";

describe("REST API", () => {
  let app: Awaited<ReturnType<typeof createApp>>["app"];

  // Create fresh app for each test
  async function getApp() {
    if (!app) {
      const result = await createApp();
      app = result.app;
    }
    return app;
  }

  describe("GET /api/users", () => {
    it("should return a list of users", async () => {
      const server = await getApp();
      const res = await request(server).get("/api/users");
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("displayName");
      expect(res.body[0]).toHaveProperty("email");
      expect(res.body[0]).toHaveProperty("department");
    });
  });

  describe("GET /api/users/:id", () => {
    it("should return user with tasks", async () => {
      const server = await getApp();
      const res = await request(server).get("/api/users/user-1");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("displayName");
      expect(res.body).toHaveProperty("tasks");
      expect(res.body).toHaveProperty("taskStats");
      expect(res.body.tasks).toBeInstanceOf(Array);
    });

    it("should return 404 for unknown user", async () => {
      const server = await getApp();
      const res = await request(server).get("/api/users/unknown");
      expect(res.status).toBe(404);
    });
  });

  describe("GET /api/tasks", () => {
    it("should return tasks with assignees", async () => {
      const server = await getApp();
      const res = await request(server).get("/api/tasks");
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body[0]).toHaveProperty("assignee");
      expect(res.body[0].assignee).toHaveProperty("displayName");
    });
  });

  describe("POST /api/tasks", () => {
    it("should create a new task with valid data", async () => {
      const server = await getApp();
      const newTask = {
        title: "Test task",
        description: "Test description",
        status: "todo",
        priority: "medium",
        assigneeId: "user-1",
      };
      const res = await request(server).post("/api/tasks").send(newTask);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body.title).toBe("Test task");
    });

    it("should reject invalid task data", async () => {
      const server = await getApp();
      const res = await request(server)
        .post("/api/tasks")
        .send({ title: "" });
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty("errors");
    });

    it("should reject task with invalid status", async () => {
      const server = await getApp();
      const res = await request(server).post("/api/tasks").send({
        title: "Test",
        description: "Test",
        status: "invalid",
        priority: "medium",
        assigneeId: "user-1",
      });
      expect(res.status).toBe(400);
    });
  });

  describe("PATCH /api/tasks/:id", () => {
    it("should update an existing task", async () => {
      const server = await getApp();
      const res = await request(server)
        .patch("/api/tasks/task-1")
        .send({ status: "in-progress" });
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("in-progress");
    });

    it("should return 404 for unknown task", async () => {
      const server = await getApp();
      const res = await request(server)
        .patch("/api/tasks/unknown")
        .send({ status: "done" });
      expect(res.status).toBe(404);
    });
  });

  describe("DELETE /api/tasks/:id", () => {
    it("should return 404 for unknown task", async () => {
      const server = await getApp();
      const res = await request(server).delete("/api/tasks/unknown");
      expect(res.status).toBe(404);
    });
  });

  describe("GET /api/dashboard", () => {
    it("should return aggregated dashboard summary", async () => {
      const server = await getApp();
      const res = await request(server).get("/api/dashboard");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("totalUsers");
      expect(res.body).toHaveProperty("totalTasks");
      expect(res.body).toHaveProperty("tasksByStatus");
      expect(res.body).toHaveProperty("tasksByPriority");
      expect(res.body).toHaveProperty("recentTasks");
      expect(res.body.tasksByStatus).toBeInstanceOf(Array);
      expect(res.body.tasksByPriority).toBeInstanceOf(Array);
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const server = await getApp();
      const res = await request(server).get("/health");
      expect(res.status).toBe(200);
      expect(res.body.status).toBe("ok");
    });
  });
});
