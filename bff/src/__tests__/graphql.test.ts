import { describe, it, expect } from "vitest";
import request from "supertest";
import { createApp } from "../app.js";

describe("GraphQL API", () => {
  let app: Awaited<ReturnType<typeof createApp>>["app"];

  async function getApp() {
    if (!app) {
      const result = await createApp();
      app = result.app;
    }
    return app;
  }

  function gql(query: string, variables?: Record<string, unknown>) {
    return getApp().then((server) =>
      request(server)
        .post("/graphql")
        .send({ query, variables })
    );
  }

  describe("Query: users", () => {
    it("should return all users", async () => {
      const res = await gql(`
        query {
          users {
            id
            displayName
            email
            department
          }
        }
      `);
      expect(res.status).toBe(200);
      expect(res.body.data.users).toBeInstanceOf(Array);
      expect(res.body.data.users.length).toBeGreaterThan(0);
    });
  });

  describe("Query: user", () => {
    it("should return a user with tasks", async () => {
      const res = await gql(`
        query {
          user(id: "user-1") {
            id
            displayName
            tasks {
              id
              title
              status
            }
          }
        }
      `);
      expect(res.status).toBe(200);
      expect(res.body.data.user).toBeTruthy();
      expect(res.body.data.user.tasks).toBeInstanceOf(Array);
    });

    it("should return null for unknown user", async () => {
      const res = await gql(`
        query {
          user(id: "unknown") {
            id
          }
        }
      `);
      expect(res.status).toBe(200);
      expect(res.body.data.user).toBeNull();
    });
  });

  describe("Query: tasks", () => {
    it("should return all tasks with assignees", async () => {
      const res = await gql(`
        query {
          tasks {
            id
            title
            status
            priority
            assignee {
              displayName
            }
          }
        }
      `);
      expect(res.status).toBe(200);
      expect(res.body.data.tasks).toBeInstanceOf(Array);
      expect(res.body.data.tasks[0].assignee).toBeTruthy();
    });

    it("should filter tasks by status", async () => {
      const res = await gql(`
        query {
          tasks(status: todo) {
            id
            status
          }
        }
      `);
      expect(res.status).toBe(200);
      const tasks = res.body.data.tasks;
      tasks.forEach((t: { status: string }) => {
        expect(t.status).toBe("todo");
      });
    });
  });

  describe("Query: dashboard", () => {
    it("should return aggregated dashboard data", async () => {
      const res = await gql(`
        query {
          dashboard {
            totalUsers
            totalTasks
            tasksByStatus {
              status
              count
            }
            tasksByPriority {
              priority
              count
            }
            recentTasks {
              id
              title
              assignee {
                displayName
              }
            }
          }
        }
      `);
      expect(res.status).toBe(200);
      const dashboard = res.body.data.dashboard;
      expect(dashboard.totalUsers).toBeGreaterThan(0);
      expect(dashboard.totalTasks).toBeGreaterThan(0);
      expect(dashboard.tasksByStatus).toBeInstanceOf(Array);
      expect(dashboard.tasksByPriority).toBeInstanceOf(Array);
    });
  });

  describe("Mutation: createTask", () => {
    it("should create a new task", async () => {
      const res = await gql(`
        mutation {
          createTask(input: {
            title: "GraphQL Test Task"
            description: "Created via GraphQL"
            status: todo
            priority: high
            assigneeId: "user-2"
          }) {
            id
            title
            status
            assignee {
              displayName
            }
          }
        }
      `);
      expect(res.status).toBe(200);
      expect(res.body.data.createTask.title).toBe("GraphQL Test Task");
      expect(res.body.data.createTask.assignee).toBeTruthy();
    });
  });
});
