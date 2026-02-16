import { describe, it, expect } from "vitest";
import {
  validateCreateTask,
  validateUpdateTask,
  formatValidationErrors,
} from "../validation/schemas.js";

describe("JSON Schema Validation", () => {
  describe("createTask validation", () => {
    it("should accept valid task input", () => {
      const valid = validateCreateTask({
        title: "Test task",
        description: "A description",
        status: "todo",
        priority: "medium",
        assigneeId: "user-1",
      });
      expect(valid).toBe(true);
    });

    it("should reject missing required fields", () => {
      const valid = validateCreateTask({} as never);
      expect(valid).toBe(false);
      const errors = formatValidationErrors(validateCreateTask.errors);
      expect(errors.length).toBeGreaterThan(0);
    });

    it("should reject invalid status", () => {
      const valid = validateCreateTask({
        title: "Test",
        description: "Desc",
        status: "invalid" as never,
        priority: "medium",
        assigneeId: "user-1",
      });
      expect(valid).toBe(false);
    });

    it("should reject invalid priority", () => {
      const valid = validateCreateTask({
        title: "Test",
        description: "Desc",
        status: "todo",
        priority: "critical" as never,
        assigneeId: "user-1",
      });
      expect(valid).toBe(false);
    });

    it("should reject empty title", () => {
      const valid = validateCreateTask({
        title: "",
        description: "Desc",
        status: "todo",
        priority: "medium",
        assigneeId: "user-1",
      });
      expect(valid).toBe(false);
    });

    it("should reject additional properties", () => {
      const valid = validateCreateTask({
        title: "Test",
        description: "Desc",
        status: "todo",
        priority: "medium",
        assigneeId: "user-1",
        extra: "field",
      } as never);
      expect(valid).toBe(false);
    });
  });

  describe("updateTask validation", () => {
    it("should accept partial updates", () => {
      const valid = validateUpdateTask({ status: "done" });
      expect(valid).toBe(true);
    });

    it("should accept empty object (no updates)", () => {
      const valid = validateUpdateTask({});
      expect(valid).toBe(true);
    });

    it("should reject invalid status in update", () => {
      const valid = validateUpdateTask({ status: "invalid" as never });
      expect(valid).toBe(false);
    });
  });
});
