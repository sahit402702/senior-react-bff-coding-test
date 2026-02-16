const API_BASE = "/api";

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(error.error || `HTTP ${res.status}`);
  }
  if (res.status === 204) return undefined as T;
  return res.json();
}

export const api = {
  getDashboard: () => fetchJson<import("../types").DashboardSummary>("/dashboard"),
  getUsers: () => fetchJson<import("../types").User[]>("/users"),
  getUser: (id: string) => fetchJson<import("../types").UserWithTasks>(`/users/${id}`),
  getTasks: () => fetchJson<import("../types").Task[]>("/tasks"),
  getTask: (id: string) => fetchJson<import("../types").Task>(`/tasks/${id}`),
  createTask: (data: Record<string, string>) =>
    fetchJson<import("../types").Task>("/tasks", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateTask: (id: string, data: Record<string, string>) =>
    fetchJson<import("../types").Task>(`/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  deleteTask: (id: string) =>
    fetchJson<void>(`/tasks/${id}`, { method: "DELETE" }),
};
