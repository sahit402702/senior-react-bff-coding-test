import type { User, Task } from "../types/index.js";

// In-memory mock data simulating backend REST API data sources
const users: User[] = [
  {
    id: "user-1",
    displayName: "Alice Johnson",
    email: "alice@contoso.com",
    department: "Engineering",
    jobTitle: "Senior Developer",
  },
  {
    id: "user-2",
    displayName: "Bob Smith",
    email: "bob@contoso.com",
    department: "Design",
    jobTitle: "UX Designer",
  },
  {
    id: "user-3",
    displayName: "Carol Williams",
    email: "carol@contoso.com",
    department: "Engineering",
    jobTitle: "Tech Lead",
  },
  {
    id: "user-4",
    displayName: "David Brown",
    email: "david@contoso.com",
    department: "Product",
    jobTitle: "Product Manager",
  },
];

const tasks: Task[] = [
  {
    id: "task-1",
    title: "Implement user authentication",
    description: "Set up OAuth2 authentication flow with Azure AD",
    status: "done",
    priority: "high",
    assigneeId: "user-1",
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-20T14:30:00Z",
  },
  {
    id: "task-2",
    title: "Design dashboard layout",
    description: "Create wireframes for the main dashboard view",
    status: "in-progress",
    priority: "medium",
    assigneeId: "user-2",
    createdAt: "2025-01-18T09:00:00Z",
    updatedAt: "2025-01-22T11:00:00Z",
  },
  {
    id: "task-3",
    title: "Set up CI/CD pipeline",
    description: "Configure GitHub Actions for automated testing and deployment",
    status: "todo",
    priority: "high",
    assigneeId: "user-3",
    createdAt: "2025-01-20T08:00:00Z",
    updatedAt: "2025-01-20T08:00:00Z",
  },
  {
    id: "task-4",
    title: "Write API documentation",
    description: "Document all REST endpoints and GraphQL schema",
    status: "in-progress",
    priority: "low",
    assigneeId: "user-4",
    createdAt: "2025-01-21T13:00:00Z",
    updatedAt: "2025-01-23T09:30:00Z",
  },
  {
    id: "task-5",
    title: "Add unit tests for BFF layer",
    description: "Write comprehensive tests for data aggregation logic",
    status: "todo",
    priority: "medium",
    assigneeId: "user-1",
    createdAt: "2025-01-22T10:00:00Z",
    updatedAt: "2025-01-22T10:00:00Z",
  },
];

// Simulate async API calls to backend services
export async function fetchUsers(): Promise<User[]> {
  return [...users];
}

export async function fetchUserById(id: string): Promise<User | undefined> {
  return users.find((u) => u.id === id);
}

export async function fetchTasks(): Promise<Task[]> {
  return [...tasks];
}

export async function fetchTaskById(id: string): Promise<Task | undefined> {
  return tasks.find((t) => t.id === id);
}

export async function fetchTasksByAssignee(
  assigneeId: string
): Promise<Task[]> {
  return tasks.filter((t) => t.assigneeId === assigneeId);
}

let nextTaskId = tasks.length + 1;

export async function createTask(
  input: Omit<Task, "id" | "createdAt" | "updatedAt">
): Promise<Task> {
  const now = new Date().toISOString();
  const task: Task = {
    ...input,
    id: `task-${nextTaskId++}`,
    createdAt: now,
    updatedAt: now,
  };
  tasks.push(task);
  return task;
}

export async function updateTask(
  id: string,
  input: Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>
): Promise<Task | undefined> {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return undefined;
  tasks[index] = {
    ...tasks[index],
    ...input,
    updatedAt: new Date().toISOString(),
  };
  return tasks[index];
}

export async function deleteTask(id: string): Promise<boolean> {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
