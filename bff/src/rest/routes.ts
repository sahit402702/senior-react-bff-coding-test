import { Router } from "express";
import {
  fetchUsers,
  fetchUserById,
  fetchTasks,
  fetchTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../services/dataService.js";
import {
  getTasksWithAssignees,
  getDashboardSummary,
  getUserWithTasks,
} from "../services/aggregationService.js";
import {
  validateCreateTask,
  validateUpdateTask,
  formatValidationErrors,
} from "../validation/schemas.js";

const router = Router();

// ── Users ──────────────────────────────────────────────

router.get("/users", async (_req, res) => {
  const users = await fetchUsers();
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const user = await getUserWithTasks(req.params.id);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json(user);
});

// ── Tasks ──────────────────────────────────────────────

router.get("/tasks", async (_req, res) => {
  const tasks = await getTasksWithAssignees();
  res.json(tasks);
});

router.get("/tasks/:id", async (req, res) => {
  const task = await fetchTaskById(req.params.id);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  res.json(task);
});

router.post("/tasks", async (req, res) => {
  const valid = validateCreateTask(req.body);
  if (!valid) {
    res
      .status(400)
      .json({ errors: formatValidationErrors(validateCreateTask.errors) });
    return;
  }
  const task = await createTask(req.body);
  res.status(201).json(task);
});

router.patch("/tasks/:id", async (req, res) => {
  const valid = validateUpdateTask(req.body);
  if (!valid) {
    res
      .status(400)
      .json({ errors: formatValidationErrors(validateUpdateTask.errors) });
    return;
  }
  const task = await updateTask(req.params.id, req.body);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  res.json(task);
});

router.delete("/tasks/:id", async (req, res) => {
  const deleted = await deleteTask(req.params.id);
  if (!deleted) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  res.status(204).send();
});

// ── Dashboard (BFF aggregation) ────────────────────────

router.get("/dashboard", async (_req, res) => {
  const summary = await getDashboardSummary();
  res.json(summary);
});

export default router;
